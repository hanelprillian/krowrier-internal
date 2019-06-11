<template>
	<div class="container-fluid">
		<!-- Begin Page Header-->
		<div class="row">
			<div class="page-header">
				<div class="d-flex align-items-center">
					<h2 class="page-header-title">{{mode == 'add' ? 'New' : 'Edit'}} Hub</h2>
					<div>
						<div class="page-header-tools"></div>
					</div>
				</div>
				<br>
				<div>
					<button @click="$router.push('/internal/hub')" class="btn btn-outline-secondary">Back</button>
				</div>
			</div>
		</div>
		<!-- End Page Header -->
		<div class="row flex-row">
			<div class="col-xl-12">
				<div class="widget has-shadow">
					<map-picker
						v-if="dataLoaded || mode != 'edit'"
						@getMarkedData="getMarkedData"
						marker-mode="reset"
						:marked="mode == 'edit' && $route.params.id ? true : false"
						:address="mode == 'edit' && $route.params.id ? address : ''"
						:lat="mode == 'edit' && $route.params.id ? lat : -6.2184634"
						:long="mode == 'edit' && $route.params.id ? long : 106.8171466"
					></map-picker>
					<div v-if="$v.lat.$dirty && $v.long.$dirty" class="invalid-msg widget-body">
						<div v-if="!$v.lat.required || !$v.long.required">Please pick location</div>
					</div>
				</div>
				<!-- Form -->
				<div class="widget has-shadow">
					<div class="widget-body">
						<form class="form-horizontal">
							<div class="form-group row d-flex align-items-center mb-5">
								<label class="col-lg-2 form-control-label">Name</label>
								<div class="col-lg-4">
									<input
										type="text"
										class="form-control"
										:class="{'invalid-field': $v.name.$error}"
										v-model.trim="$v.name.$model"
									>
									<div v-if="$v.name.$dirty" class="invalid-msg">
										<div v-if="!$v.name.required">Name is required</div>
									</div>
								</div>
							</div>
							<div class="form-group row d-flex align-items-center mb-5">
								<label class="col-lg-2 form-control-label">Type</label>
								<div class="col-lg-4">
									<select class="selectpicker" ref="select" v-model.trim="$v.type.$model">
										<option :value="type.value" v-for="type in listHubType">{{type.label}}</option>
									</select>
									<div v-if="$v.type.$dirty" class="invalid-msg">
										<div v-if="!$v.type.required">Name is required</div>
									</div>
								</div>
							</div>

							<div class="form-group row d-flex align-items-center mb-5">
								<label class="col-lg-2 form-control-label">Address</label>
								<div class="col-lg-5">
									<textarea
										v-model.trim="$v.address.$model"
										:class="{'invalid-field': $v.address.$error}"
										class="form-control"
										rows="5"
									></textarea>
									<div v-if="$v.address.$dirty" class="invalid-msg">
										<div v-if="!$v.address.required">Name is required</div>
									</div>
								</div>
							</div>
							<div class="form-group row d-flex align-items-center mb-5">
								<label class="col-lg-2 form-control-label"></label>
								<div class="col-lg-4">
									<button class="btn btn-primary" @click.prevent="Submit()">Save</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import MapPicker from "../_Widget/MapsPicker";
	import { required } from "vuelidate/lib/validators";

	export default {
		data() {
			return {
				dataLoaded: false,
				name: "",
				lat: "",
				long: "",
				type: "",
				address: "",
				created_at: "",
				listHubType: [
					{
						label: "Train Station",
						value: "TRAIN_STATION"
					},
					{
						label: "Bus Station",
						value: "BUS_STATION"
					}
				]
			};
		},

		validations: {
			name: {
				required
			},
			lat: {
				required
			},
			long: {
				required
			},
			type: {
				required
			},
			address: {
				required
			}
		},

		components: {
			MapPicker
		},

		props: ["mode"],

		methods: {
			getMarkedData(data) {
				this.lat = data.position.lat;
				this.long = data.position.lng;
				this.address = data.infoText.formatted_address;
				this.name = data.infoText.name ? data.infoText.name : null;
			},

			async FetchData(id) {
				const ref = await db.collection("hub").doc(id);
				ref.get().then(doc => {
					if (doc.exists) {
						this.name = doc.data().name;
						this.address = doc.data().address;
						this.type = doc.data().type;
						this.lat = parseFloat(doc.data().lat);
						this.long = parseFloat(doc.data().long);
						this.created_at = doc.data().created_at;
						this.dataLoaded = true;
					} else {
						this.$router.push("/internal/hub");
					}
				});
			},

			Submit() {
				let self = this;

				this.$v.$touch();

				if (this.$v.$invalid) {
					return;
				}

				let data = db.collection("hub");

				let formData = {
					name: this.name,
					lat: parseFloat(this.lat),
					long: parseFloat(this.long),
					address: this.address,
					type: this.type,
					status: 1
				};

				let method = "add";

				if (self.mode == "edit" && self.$route.params.id) {
					data = db.collection("hub").doc(self.$route.params.id);
					method = "update";
					formData = Object.assign(formData, {
						updated_at: moment().valueOf()
					});
				} else {
					formData = Object.assign(formData, {
						created_at: moment().valueOf(),
						updated_at: moment().valueOf()
					});
				}

				data[method](formData)
					.then(function(docRef) {
						swal.fire({
							// show error popup
							title: "Saved",
							text: "Your data saved",
							type: "success",
							confirmButtonColor: "#3085d6",
							confirmButtonText: "OK"
						}).then(function() {
							self.$router.push("/internal/hub");
						});
					})
					.catch(function(error) {
						swal.fire({
							title: "Error",
							text: "Your data not saved saved",
							type: "erorr"
						});
						console.error("Error adding document: ", error);
					});
			}
		},

		beforeRouteEnter(to, from, next) {
			next(vm => {
				if (vm.mode == "edit" && vm.$route.params.id)
					vm.FetchData(vm.$route.params.id);
			});
		},
		async created() {
			let self = this;
		},

		async mounted() {
			$(this.$refs.select).selectpicker();
		},
		updated() {
			$(this.$refs.select).selectpicker("refresh");
		}
	};
</script>
