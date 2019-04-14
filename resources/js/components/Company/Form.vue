<template>
	<div class="container-fluid">
		<!-- Begin Page Header-->
		<div class="row">
			<div class="page-header">
				<div class="d-flex align-items-center">
					<h2 class="page-header-title">{{ mode == 'add' ? 'New' : 'Detail'}} Company</h2>
					<div>
						<div class="page-header-tools">

							<div class="clearfix"></div>
						</div>
					</div>
				</div>
				<br>
				<div>
					<button @click="$router.push('/internal/company')" class="btn btn-outline-secondary">Back</button>
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
								<span>Company Information</span>
							</div>
							<div class="widget-body">
								<form class="form-horizontal">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group align-items-center mb-5">
                                                <label class="form-control-label">Company Name</label>
                                                <p class="form-control-static">{{ data.company_name ? data.company_name : '-' }}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group align-items-center mb-5">
                                                <label class="form-control-label">Company Code</label>
                                                <p class="form-control-static">{{ data.company_code ? data.company_code : '-' }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group align-items-center mb-5">
                                                <label class="form-control-label">Company Address</label>
                                                <p class="form-control-static">{{ data.company_address ? data.company_address : '-' }}</p>
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
								<span>Company's User Information</span>
							</div>
							<div class="widget-body">
								<form class="form-horizontal">
									<div class="row">
										<div class="col-md-6">
											<div class="form-group align-items-center mb-5">
												<label class="form-control-label">Email</label>
												<p class="form-control-static">{{ data.user ? data.user.email : '-' }}</p>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group align-items-center mb-5">
												<label class="form-control-label">User</label>
												<p class="form-control-static">{{ data.user ? data.user.name : '-' }}</p>
											</div>
										</div>
									</div>
									<hr>
									<br>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group align-items-center mb-5">
												<label class="form-control-label">Phone</label>
												<p v-if="!allowEdit" class="form-control-static">{{ data.user.phone }}</p>
												<input
														v-if="allowEdit"
														type="text"
														class="form-control"
														value
														v-model="data.user.phone"
														placeholder="Phone"
												>
											</div>
											<div class="form-group align-items-center mb-5">
												<label class="form-control-label">Birth</label>
												<p v-if="!allowEdit" class="form-control-static">{{ data.user.birth_formatted }}</p>

												<datepicker
														v-if="allowEdit"
														v-model="data.user.birth"
														format="dd/MM/yyyy"
														input-class="form-control"
												></datepicker>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group align-items-center mb-5">
												<label class="form-control-label">Gender</label>
												<p
														v-if="!allowEdit"
														class="form-control-static"
												>{{ data.user.gender == 'M' ? 'Male' : 'Female' }}</p>

												<select v-show="allowEdit" class="selectGender form-control" v-model="data.user.gender">
													<option value="M">Male</option>
													<option value="F">Female</option>
												</select>
											</div>
											<div class="form-group align-items-center mb-5">
												<label class="form-control-label">Address</label>
												<p v-if="!allowEdit" class="form-control-static">{{ data.user.address }}</p>
												<textarea
														v-if="allowEdit"
														class="form-control"
														placeholder="Address"
														rows="5"
														v-model="data.user.address"
												></textarea>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<!-- End Form -->
					</div>
				</div>
			</div>
		</div>
		<!-- End Row -->
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

	export default {
		data() {
			return {
				dataSchedule: [],
				allowEdit: false,
				dataLoaded: false,
				dataUserLoaded: false,
				mapLoaded: false,
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

				const ref = await db.collection("company").doc(id);

				ref.onSnapshot(async doc => {
					if (doc.exists) {
						let data = await doc.data();

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
						this.data.user.user_id = data.user_id;
						this.data.current_latitude = data.current_latitude;
						this.data.current_longitude = data.current_longitude;
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

						swal.close();
					} else {
						this.$router.push("/internal/company");
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

				let formData = {
					phone: this.data.user.phone,
					birth: this.data.user.birth,
					gender: this.data.user.gender,
					address: this.data.user.address,
					status: 1
				};

				let method = "add";

				if (self.mode == "edit" && self.$route.params.id) {
					data = db.collection("user").doc(this.data.user.user_id);
					method = "update";
					formData = Object.assign(formData, {
						updated_at: moment().unix()
					});
				} else {
					formData = Object.assign(formData, {
						created_at: moment().unix(),
						updated_at: moment().unix()
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
						swal.fire({
							// show error popup
							title: "Saved",
							text: "Your data saved",
							type: "success",
							confirmButtonColor: "#3085d6",
							confirmButtonText: "OK"
						}).then(function() {
							// self.$router.push("/internal/company");
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
			},

			async SetStatus(status, text) {
				let self = this;

				let data = await db
					.collection("company")
					.doc(self.$route.params.id);

				let formData = {
					active: status
				};

				swal.fire({
					title: text + " Company ?",
					type: "question",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "Yes"
				}).then(async result => {
					if (result.value) {
						let method = "update";

						formData = Object.assign(formData, {
							updated_at: moment().valueOf()
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
									// self.$router.push("/internal/company");
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
				$(".selectGender").selectpicker();
			} else {
				$(".selectGender").selectpicker("destroy");
			}

			if (self.mode == "edit" && self.$route.params.id)
				await self.FetchData(self.$route.params.id);
		},
		updated() {
			if (this.allowEdit) {
				$(".selectGender").selectpicker("refresh");
			} else {
				$(".selectGender").selectpicker("destroy");
			}
		}
	};
</script>
