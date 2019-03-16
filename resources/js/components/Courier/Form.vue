<template>
	<div class="container-fluid">
		<!-- Begin Page Header-->
		<div class="row">
			<div class="page-header">
				<div class="d-flex align-items-center">
					<h2 class="page-header-title">{{ mode == 'add' ? 'New' : 'Detail'}} Courier</h2>
					<div>
						<div class="page-header-tools">
							<div class="form-group">
								<div class="btn-group mr-1 mb-2">
									<a
										class="btn btn-sm dropdown-toggle d-flex align-items-center"
										:class="{'btn-dark' : data.is_active == 0, 'btn-success' : data.is_active == 1, 'btn-danger' : data.is_active == 2}"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<button type="button" v-if="data.is_active == 0" class="btn btn-sm btn-dark">Inactive</button>
										<button type="button" v-if="data.is_active == 1" class="btn btn-sm btn-success">Active</button>
										<button type="button" v-if="data.is_active == 2" class="btn btn-sm btn-danger">Suspended</button>
									</a>
									<div class="dropdown-menu">
										<a
											class="dropdown-item"
											@click.prevent="SetStatus(1, 'Activate')"
											v-if="data.is_active != 1"
											href="#"
										>Active</a>
										<a
											class="dropdown-item"
											@click.prevent="SetStatus(2, 'Suspend')"
											v-if="data.is_active != 2"
											href="#"
										>Suspend</a>
										<a
											class="dropdown-item"
											@click.prevent="SetStatus(0, 'Set Inactive')"
											v-if="data.is_active != 0"
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
					<button @click="$router.push('/internal/courier')" class="btn btn-outline-secondary">Back</button>
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
		<div class="row flex-row">
			<div class="col-xl-12">
				<!-- Form -->
				<div class="widget has-shadow">
					<div class="widget-header">
						<span>Courier Information</span>
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
											type="number"
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
				<!-- Form -->
				<div class="widget has-shadow">
					<div class="widget-header">
						<span>Courier File</span>
					</div>
					<div class="widget-body">
						<form class="form-horizontal">
							<div class="row">
								<div class="col-md-3">
									<div class="form-group align-items-center mb-5">
										<label class="form-control-label">KTP</label>
										<p class="form-control-static">
											<a @click.prevent class="pop">
												<img
													v-if="data.ktp_file != ''"
													width="200px"
													class="img-thumbnail"
													:src="data.ktp_file"
													alt
												>
											</a>
										</p>
									</div>
								</div>
								<div class="col-md-3">
									<div class="form-group align-items-center mb-5">
										<label class="form-control-label">Photo</label>
										<a @click.prevent class="pop">
											<img
												v-if="data.photo_file != ''"
												width="200px"
												class="img-thumbnail"
												:src="data.photo_file"
												alt
											>
										</a>
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

	export default {
		data() {
			return {
				allowEdit: false,
				dataLoaded: false,
				dataUserLoaded: false,
				data: {
					user: {
						user_id: "",
						email: "",
						name: "",
						identity_type: "",
						identity_number: "",
						gender: "",
						phone: "",
						birth: "",
						address: ""
					}
				},
				listIdentityType: [
					{
						label: "KTP",
						value: "KTP"
					}
				]
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
			Datepicker
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

				const ref = await db.collection("courier").doc(id);

				ref.onSnapshot(async doc => {
					if (doc.exists) {
						let data = await doc.data();

						this.data = Object.assign(data, {
							user: {
								user_id: "",
								email: "",
								name: "",
								identity_type: "",
								identity_number: "",
								gender: "",
								phone: "",
								birth: "",
								birth_formatted: "",
								address: ""
							}
						});

						this.dataLoaded = true;
						this.data.user.user_id = data.user_id;

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
										this.data.user.identity_type =
											data.identity_type || "";
										this.data.user.identity_number =
											data.identity_number || "";
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
						this.$router.push("/internal/courier");
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
					identity_type: this.data.user.identity_type,
					identity_number: this.data.user.identity_number,
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
						updated_at: moment().valueOf()
					});
				} else {
					formData = Object.assign(formData, {
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
			},

			SetStatus(status, text) {
				let self = this;

				let data = db.collection("courier").doc(self.$route.params.id);

				let formData = {
					is_active: status
				};

				swal.fire({
					title: text + " Courier ?",
					type: "question",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "Yes"
				}).then(result => {
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

						data[method](formData)
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
