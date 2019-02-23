<template>
	<div class="container-fluid">
		<!-- Begin Page Header-->
		<div class="row">
			<div class="page-header">
				<div class="d-flex align-items-center">
					<h2 class="page-header-title">{{mode == 'add' ? 'New' : 'Edit'}} Service Package</h2>
					<div>
						<div class="page-header-tools"></div>
					</div>
				</div>
				<br>
				<div>
					<button
						@click="$router.push('/internal/service-package')"
						class="btn btn-outline-secondary"
					>Back</button>
				</div>
			</div>
		</div>
		<!-- End Page Header -->
		<div class="row flex-row">
			<div class="col-xl-12">
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
								<label class="col-lg-2 form-control-label"></label>
								<div class="col-lg-4">
									<button class="btn btn-primary" @click.prevent="Submit()">Save</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<!-- End Form -->
			</div>
		</div>
		<!-- End Row -->
	</div>
</template>

<script>
	import { required } from "vuelidate/lib/validators";

	export default {
		data() {
			return {
				dataLoaded: false,
				name: ""
			};
		},
		validations: {
			name: {
				required
			}
		},
		props: ["mode"],
		methods: {
			async FetchData(id) {
				const ref = await db.collection("service_package").doc(id);
				ref.get().then(doc => {
					if (doc.exists) {
						this.name = doc.data().name;
						this.dataLoaded = true;
					} else {
						this.$router.push("/internal/service-package");
					}
				});
			},

			Submit() {
				let self = this;

				this.$v.$touch();

				if (this.$v.$invalid) {
					return;
				}

				let data = db.collection("service_package");

				let formData = {
					name: this.name
				};

				let method = "add";

				if (self.mode == "edit" && self.$route.params.id) {
					data = db
						.collection("service_package")
						.doc(self.$route.params.id);
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
							self.$router.push("/internal/service-package");
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
		mounted() {
			let self = this;
			if (self.mode == "edit" && self.$route.params.id)
				self.FetchData(self.$route.params.id);
		}
	};
</script>
