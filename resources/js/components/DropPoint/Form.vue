<template>
	<div class="container-fluid">
		<!-- Begin Page Header-->
		<div class="row">
			<div class="page-header">
				<div class="d-flex align-items-center">
					<h2 class="page-header-title">{{ mode == 'add' ? 'New' : 'Detail'}} Drop Point</h2>
					<div>
						<div class="page-header-tools">
							<div class="form-group">
								<div class="btn-group mr-1 mb-2">
									<a
										class="btn btn-sm dropdown-toggle d-flex align-items-center"
										:class="{'btn-dark' : data.active == 0, 'btn-success' : data.active == 1, 'btn-danger' : data.active == 2}"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<button type="button" v-if="data.active == 0" class="btn btn-sm btn-dark">Inactive</button>
										<button type="button" v-if="data.active == 1" class="btn btn-sm btn-success">Active</button>
										<button type="button" v-if="data.active == 2" class="btn btn-sm btn-danger">Suspended</button>
									</a>
									<div class="dropdown-menu">
										<a
											class="dropdown-item"
											@click.prevent="SetStatus(1, 'Activate')"
											v-if="data.active != 1"
											href="#"
										>Active</a>
										<a
											class="dropdown-item"
											@click.prevent="SetStatus(2, 'Suspend')"
											v-if="data.active != 2"
											href="#"
										>Suspend</a>
										<a
											class="dropdown-item"
											@click.prevent="SetStatus(0, 'Set Inactive')"
											v-if="data.active != 0"
											href="#"
										>Inactive</a>
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
				<br>
				<div>
					<button @click="$router.push('/internal/drop-point')" class="btn btn-outline-secondary">Back</button>
					<button
						@click="allowEdit = true"
						v-if="!allowEdit"
						class="btn btn-outline-primary float-right"
					>Edit</button>
					&nbsp; &nbsp;
					<button
						@click="Submit"
						v-if="allowEdit"
						class="btn btn-outline-success float-right"
					>Save</button>
					<button
						@click="FetchData($route.params.id), allowEdit = false"
						v-if="allowEdit"
						class="btn btn-outline-primary float-right"
					>Cancel</button>
				</div>
			</div>
		</div>
		<!-- End Page Header -->
		<ul class="nav nav-tabs" id="example-one" role="tablist">
			<li class="nav-item">
				<a
					class="nav-link active"
					id="base-tab-1"
					data-toggle="tab"
					href="#tab-1"
					role="tab"
					aria-controls="tab-1"
					aria-selected="true"
				>General</a>
			</li>
			<li class="nav-item">
				<a
					:class="{'disabled': !data.latitude || !data.longitude }"
					class="nav-link"
					id="base-tab-2"
					:data-toggle="data.latitude  && data.longitude ? 'tab' : ''"
					href="#tab-2"
					role="tab"
					aria-controls="tab-2"
					aria-selected="false"
				>Current Location</a>
			</li>
		</ul>
		<div class="clearfix"></div>
		<br>
		<div class="tab-content pt-3">
			<div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="base-tab-1">
				<div class="row flex-row">
					<div class="col-xl-12">
						<!-- Form -->
						<div class="widget has-shadow">
							<div class="widget-header">
								<span>Drop Point Information</span>
							</div>
							<div class="widget-body">
								<form class="form-horizontal">
									<div class="row">
										<div class="col-md-6">
                                            <div class="form-group align-items-center mb-5">
                                                <label class="form-control-label">ID</label>
                                                <p class="form-control-static">{{ data.droppoint_id ? data.droppoint_id : '-' }}</p>
                                            </div>
                                            <div class="form-group align-items-center mb-5">
                                                <label class="form-control-label">Name</label>
                                                <p class="form-control-static">{{ data.name ? data.name : '-' }}</p>
                                            </div>
										</div>
										<div class="col-md-6">
                                            <div class="form-group align-items-center mb-5">
                                                <label class="form-control-label">Owner</label>
                                                <p class="form-control-static">{{ data.owner_name ? data.owner_name : '-' }}</p>
                                            </div>
											<div class="form-group align-items-center mb-5">
												<label class="form-control-label">Address</label>
												<p class="form-control-static">{{ data.address ? data.address : '-' }}</p>
											</div>
										</div>
									</div>
									<hr>
									<br>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group align-items-center mb-5">
												<label class="form-control-label">Email</label>
												<p class="form-control-static">{{ data.user ? data.user.email : '-'}}</p>
											</div>
											<div class="form-group align-items-center mb-5">
												<label class="form-control-label">Username</label>
                                                <p v-if="!allowEdit" class="form-control-static">{{ data.user ? data.user.name : '-'}}</p>
                                                <input
                                                        v-if="allowEdit"
                                                        type="text"
                                                        class="form-control"
                                                        value
                                                        v-model="data.user.name"
                                                        placeholder="Phone"
                                                >
											</div>
										</div>
										<div class="col-md-6">
                                            <div class="form-group align-items-center mb-5">
                                                <label class="form-control-label">Phone</label>
                                                <p v-if="!allowEdit" class="form-control-static">{{ data.phone}}</p>
                                                <input
                                                        v-if="allowEdit"
                                                        type="text"
                                                        class="form-control"
                                                        value
                                                        v-model="data.phone"
                                                        placeholder="Phone"
                                                >
                                            </div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<!-- End Form -->
						<!-- Form -->
						<div class="widget has-shadow">
							<div class="widget-header">
								<span>File</span>
							</div>
							<div class="widget-body">
								<form class="form-horizontal">
									<div class="row">
										<div class="col-md-3">
											<div class="form-group align-items-center mb-5">
												<label class="form-control-label">KTP</label>
												<p class="form-control-static">
													<small v-if="data.ktp_file == '' || data.ktp_file == ''">Not Available</small>

													<a @click.prevent class="pop" v-if="data.ktp_file != ''">
														<img width="200px" class="img-thumbnail" :src="data.ktp_file" alt>
													</a>
												</p>
											</div>
										</div>
										<div class="col-md-3">
											<div class="form-group align-items-center mb-5">
												<label class="form-control-label">Photo</label>
												<p class="form-control-static">
													<small v-if="data.photo_file == '' || data.photo_file == null">Not Available</small>
													<a @click.prevent class="pop" v-if="data.photo_file != ''">
														<img width="200px" class="img-thumbnail" :src="data.photo_file" alt>
													</a>
												</p>
											</div>
										</div>
										<div class="col-md-3">
											<div class="form-group align-items-center mb-5">
												<label class="form-control-label">Drop Point Photo</label>
												<p class="form-control-static">
													<small v-if="data.droppoint_photo_file == '' || data.droppoint_photo_file == ''">Not Available</small>

													<a @click.prevent class="pop" v-if="data.droppoint_photo_file != ''">
														<img width="200px" class="img-thumbnail" :src="data.droppoint_photo_file" alt>
													</a>
												</p>
											</div>
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
			<div
				class="tab-pane fade"
				v-if="data.latitude  && data.longitude "
				id="tab-2"
				role="tabpanel"
				aria-labelledby="base-tab-2"
			>
				<div class="row flex-row">
					<div class="col-xl-12">
						<!-- Begin Widget 07 -->
						<div class="widget widget-07 has-shadow">
							<!-- Begin Widget Header -->
							<div class="widget-header bordered d-flex align-items-center row">
								<div class="col-md-12">
									<h2>Current Location</h2>
									{{ data.current_location }}
								</div>
							</div>
						</div>
						<!-- End Widget 07 -->
						<div class="widget has-shadow">
							<map-show
								v-if="mapLoaded && data.latitude  && data.longitude "
								marker-mode="reset"
								:marked="true"
								:lat="data.latitude"
								:long="data.longitude"
							></map-show>
							<div v-else>Current Location Not Found</div>
							<br>
							Long:
							{{ data.latitude }},
							Lat:
							{{ data.longitude }},
						</div>
					</div>
				</div>
			</div>
		</div>

		<div
			class="modal fade"
			id="imagemodal"
			tabindex="-1"
			role="dialog"
			aria-labelledby="myModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body">
						<button type="button" class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span>
							<span class="sr-only">Close</span>
						</button>
						<img src class="imagepreview" style="width: 100%;">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import { required } from "vuelidate/lib/validators";
    import Datepicker from "vuejs-datepicker";
    import MapShow from "../_Widget/MapsShow";
    import FormUtill from "../../form-utill"

	export default {
		data() {
			return {
				dataSchedule: [],
				vehicleType: [],
				allowEdit: false,
				dataLoaded: false,
				mapLoaded: false,
				dataUserLoaded: false,
				data: {
					user: {
						user_id: "",
						email: "",
						name: "",
						gender: "",
						phone: "",
						birth: "",
						address: ""
					}
				},
				pagingSchedule: {
					total_data: 0,
					data_per_page: 10,
					end: false,
					loading: false
				},

				refSchedule: {
					data: null,
					dataNext: null
				}
			};
		},
		props: ["mode"],
		// validations: {
		// 	identity_type: {
		// 		required
		// 	},
		// 	identity_number: {
		// 		required
		// 	},
		// 	gender: {
		// 		required
		// 	},
		// 	phone: {
		// 		required
		// 	},
		// 	address: {
		// 		required
		// 	}
		// },
		components: {
			Datepicker,
			MapShow
		},
		watch: {
			"data.user.birth"() {
				this.data.user.birth = moment(this.data.user.birth).format(
					"YYYY-MM-DD"
				);
			}
			// "data.latitude"() {
			// 	this.dataLoaded = false;
			// 	this.dataLoaded = true;
			// 	alert(this.data.latitude);
			// }
		},
		methods: {
			async FetchData(id) {
				swal.fire({
					title: "Loading...",
					text: "Please waiting",
					allowOutsideClick: false,
					allowEscapeKey: false,
					onOpen: () => {
						swal.showLoading();
					}
				});

				const ref = await db.collection("drop_point").doc(id);

				ref.onSnapshot(async doc => {
					if (doc.exists) {
						let data = await doc.data();
						data.ktp_file = data.ktp_file || "";
						data.photo_file = data.photo_file || "";
						this.data = Object.assign(data, {
							user: {
								user_id: "",
								email: "",
								name: "",
								gender: "",
								phone: "",
								birth: "",
								birth_formatted: "",
								address: ""
							}
						});

						this.dataLoaded = true;
						this.data.user.user_id = data.user_id;
						this.data.latitude = data.latitude;
						this.data.longitude = data.longitude;
						this.mapLoaded = true;

						if (
							data.user_id != "" &&
							typeof data.user_id !== "undefined"
						) {
							await db
								.collection("user")
								.doc(data.user_id)
								.onSnapshot(async doc1 => {
									if (doc1.exists) {
										let data = await doc1.data();
										this.data.user.email = data.email || "";
										this.data.user.name = data.name || "";
										this.data.user.gender = data.gender || "";
										this.data.user.address = data.address || "";
										this.data.user.birth = data.birth || "";
										this.data.user.birth_formatted =
											moment(data.birth).format(
												"DD MMMM YYYY"
											) || "";
										this.data.user.phone = data.phone || "";
									}
								});
						}

						await swal.close();
					} else {
						this.$router.push("/internal/drop-point");
					}
				});
			},

			Submit() {
				let self = this;

				// this.$v.$touch();

				// if (this.$v.$invalid) {
				// 	return;
				// }

				let data = db.collection("user");
				let data_drop_point = db.collection("drop_point");

				let formData = {
					phone: this.data.user.phone,
					birth: this.data.user.birth,
					gender: this.data.user.gender,
					address: this.data.user.address,
					status: 1
				};

				let formDataDropPoint = {
					vehicle_police_number: this.data.vehicle_police_number,
					vehicle_name: this.data.vehicle_name,
					vehicle_type_id: this.data.vehicle_type_id
				};

				let method = "add";

				if (self.mode == "edit" && self.$route.params.id) {
					data = db.collection("user").doc(this.data.user.user_id);
					data_drop_point = db
						.collection("drop_point")
						.doc(self.$route.params.id);
					method = "update";
					formData = Object.assign(formData, {
						updated_at: moment().valueOf()
					});
					formDataDropPoint = Object.assign(formDataDropPoint, {
						updated_at: moment().valueOf()
					});
				} else {
					formData = Object.assign(formData, {
						created_at: moment().valueOf(),
						updated_at: moment().valueOf()
					});
					formDataDropPoint = Object.assign(formDataDropPoint, {
						created_at: moment().valueOf(),
						updated_at: moment().valueOf()
					});
				}

				swal.fire({
					title: "Saving...",
					text: "Please waiting",
					allowOutsideClick: false,
					allowEscapeKey: false,
					onOpen: () => {
						swal.showLoading();
					}
				});

				data[method](formData)
					.then(function(docRef) {
						data_drop_point[method](formDataDropPoint)
							.then(function(docRef) {
								swal.fire({
									// show error popup
									title: "Saved",
									text: "Your data saved",
									type: "success",
									confirmButtonColor: "#3085d6",
									confirmButtonText: "OK"
								}).then(function() {
									// self.$router.push("/internal/courier");
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
					})
					.catch(function(error) {
						swal.fire({
							title: "Error",
							text: "Your data not saved",
							type: "erorr"
						});
						console.error("Error adding document: ", error);
					});
			},

			async SetStatus(status, text) {
				let self = this;

				let data = await db
					.collection("drop_point")
					.doc(self.$route.params.id);

				let formData = {
					active: status
				};

				swal.fire({
					title: text + " DropPoint ?",
					type: "question",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "Yes"
				}).then(async result => {
					if (result.value) {
						let method = "update";

						formData = Object.assign(formData, {
							updated_at: moment().unix()
						});

						swal.fire({
							title: "Changing Status...",
							text: "Please waiting",
							allowOutsideClick: false,
							allowEscapeKey: false,
							onOpen: () => {
								swal.showLoading();
							}
						});

						await data[method](formData)
							.then(function(docRef) {
								swal.fire({
									// show error popup
									title: "Completed",
									text: "Your data saved",
									type: "success",
									confirmButtonColor: "#3085d6",
									confirmButtonText: "OK"
								}).then(function() {
									// self.$router.push("/internal/courier");
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
				});
			}
		},
		async mounted() {
			let self = this;

			$(".pop").on("click", function() {
				$(".imagepreview").attr(
					"src",
					$(this)
						.find("img")
						.attr("src")
				);
				$("#imagemodal").modal("show");
			});

			if (this.allowEdit) {
				$(".formSelect").selectpicker();
			} else {
				$(".formSelect").selectpicker("destroy");
			}

			if (self.mode == "edit" && self.$route.params.id)
				await self.FetchData(self.$route.params.id);
		},
		updated() {
			if (this.allowEdit) {
				$(".formSelect").selectpicker("refresh");
			} else {
				$(".formSelect").selectpicker("destroy");
			}
		}
	};
</script>
