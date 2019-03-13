<template>
	<div class="container-fluid">
		<!-- Begin Page Header-->
		<div class="row">
			<div class="page-header">
				<div class="d-flex align-items-center">
					<h2 class="page-header-title">{{mode == 'add' ? 'New' : 'Detail'}} Courier</h2>
					<div>
						<div class="page-header-tools">
							<div class="form-group">
								<div class="btn-group mr-1 mb-2">
									<button type="button" class="btn btn-sm btn-success">Active</button>
									<a
										class="btn btn-success btn-sm dropdown-toggle d-flex align-items-center"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<i class="la la-angle-down mr-0"></i>
									</a>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Suspend</a>
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
					<button @click="Submit" class="btn btn-outline-primary float-right">Save</button>
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
						<span class="badge-text badge-text-small info bg-gradient-05 float-right">Personal</span>
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
										<label class="form-control-label">Identity Type</label>
										<select name class="selectpicker form-control" v-model="data.user.identity_type">
											<option value="KTP">KTP</option>
											<option value="SIM">SIM</option>
											<option value="PASSPORT">Passport</option>
										</select>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group align-items-center mb-5">
										<label class="form-control-label">Identity Number</label>
										<input
											type="text"
											class="form-control"
											value
											v-model="data.user.identity_number"
											placeholder="Identity Number"
										>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group align-items-center mb-5">
										<label class="form-control-label">Phone</label>
										<input
											type="number"
											class="form-control"
											value
											v-model="data.user.phone"
											placeholder="Phone"
										>
									</div>
									<div class="form-group align-items-center mb-5">
										<label class="form-control-label">Birth</label>
										<datepicker v-model="data.user.birth" format="dd/MM/yyyy" input-class="form-control"></datepicker>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group align-items-center mb-5">
										<label class="form-control-label">Gender</label>
										<select name class="selectpicker form-control" v-model="data.user.gender">
											<option value="M">Male</option>
											<option value="F">Female</option>
										</select>
									</div>
									<div class="form-group align-items-center mb-5">
										<label class="form-control-label">Address</label>
										<textarea
											name
											id
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
		<!-- End Row -->
	</div>
</template>

<script>
	import { required } from "vuelidate/lib/validators";
	import Datepicker from "vuejs-datepicker";

	export default {
		data() {
			return {
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
				const ref = await db.collection("courier").doc(id);

				ref.get().then(async doc => {
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
								.get()
								.then(async doc1 => {
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
										this.data.user.phone = data.phone || "";
									}
								});
						}

						console.log(this.data.user);
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
							self.$router.push("/internal/courier");
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
		async mounted() {
			let self = this;

			$(".selectpicker").selectpicker();

			if (self.mode == "edit" && self.$route.params.id)
				await self.FetchData(self.$route.params.id);
		},
		updated() {
			$(".selectpicker").selectpicker("refresh");
		}
	};
</script>
