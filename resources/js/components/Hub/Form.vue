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
						@getMarkedData="getMarkedData"
						marker-mode="reset"
						:lat="-6.2184634"
						:long="106.8171466"
					></map-picker>
				</div>

				<!-- Form -->
				<div class="widget has-shadow">
					<div class="widget-body">
						<form class="form-horizontal">
							<div class="form-group row d-flex align-items-center mb-5">
								<label class="col-lg-2 form-control-label">Name</label>
								<div class="col-lg-4">
									<input type="text" class="form-control" v-model="name">
								</div>
							</div>
							<div class="form-group row d-flex align-items-center mb-5">
								<label class="col-lg-2 form-control-label">Type</label>
								<div class="col-lg-4">
									<select class="selectpicker" ref="select" v-model="type">
										<option :value="type.value" v-for="type in listHubType">{{type.label}}</option>
									</select>
								</div>
							</div>

							<div class="form-group row d-flex align-items-center mb-5">
								<label class="col-lg-2 form-control-label">Address</label>
								<div class="col-lg-5">
									<textarea v-model="address" id class="form-control" rows="5"></textarea>
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
	import MapPicker from "../_Widget/MapsPicker";
	export default {
		data() {
			return {
				name: "",
				lat: "",
				long: "",
				type: "",
				address: "",
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
			Submit() {
				let self = this;

				swal.fire({
					// show error popup
					title: "Saved",
					text: "Your data saved",
					type: "success",
					confirmButtonColor: "#3085d6",
					confirmButtonText: "OK"
				}).then(function() {
					setTimeout(function() {
						self.$router.push("/internal/hub");
					}, 500);
				});
			}
		},
		mounted() {
			let self = this;
			$(this.$refs.select).selectpicker();
		},
		updated() {
			$(this.$refs.select).selectpicker("refresh");
		}
	};
</script>
