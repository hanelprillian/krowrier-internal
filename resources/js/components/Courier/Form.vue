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
										:class="{'btn-dark' : data.active == 0, 'btn-success' : data.active == 1, 'btn-danger' : data.active == 2}"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<button type="button" v-if="data.active == 0" class="btn btn-sm btn-dark">Pending</button>
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
											@click.prevent="SetStatus(0, 'Set to Pending')"
											v-if="data.active != 0"
											href="#"
										>Set to Pending</a>
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
						class="nav-link"
						id="base-tab-2"
						data-toggle="tab"
						href="#tab-2"
						role="tab"
						@click.prevent="loadTask()"
						aria-controls="tab-2"
						aria-selected="false"
				>Tasks</a>
			</li>
			<li class="nav-item">
				<a
					:class="{'disabled': !data.current_latitude || !data.current_longitude }"
					class="nav-link"
					id="base-tab-3"
					:data-toggle="data.current_latitude  && data.current_longitude ? 'tab' : ''"
					href="#tab-3"
					role="tab"
					aria-controls="tab-3"
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
									</div>
								</form>
							</div>
						</div>
						<!-- End Form -->
					</div>
				</div>
			</div>
			<div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="base-tab-2">
				<div class="row flex-row">
					<div class="col-xl-12">
						<!-- Begin Widget 07 -->
						<div class="widget widget-07 has-shadow">
							<!-- Begin Widget Header -->
							<div class="widget-header bordered d-flex align-items-center">
								<h2>List Task</h2>
							</div>
							<!-- End Widget Header -->
							<!-- Begin Widget Body -->
							<div class="widget-body">
								<div class="table-responsive table-scroll padding-right-10" style="max-height:520px;">
									<table class="table table-hover mb-0">
										<thead>
										<tr>
											<th width="12%">Date</th>
											<th width="8%">Status</th>
											<th width="15%">Task</th>
											<th width="25%">Booking</th>
											<th width="15%">Distance</th>
										</tr>
										</thead>
										<tbody>
										<tr v-for="result in dataTask">
											<td>{{ result.create_date }}</td>
											<td>
												<span v-if="result.task_status == 1" class="badge badge-success">Completed</span>
												<span v-if="result.task_status == 0" class="badge badge-primary">Progress</span>
											</td>
											<td>
												<span v-if="result.type && result.type == 0">Pickup</span>
												<span v-if="result.type && result.type == 1">Delivery</span>
											</td>
											<td>
												<small>
													Code: {{result.booking_code}}
												</small>
												<br>
												<small>
													<strong>
														{{result.type && result.type == 0 ? 'Pickup Address' : 'Destination Address'}}
													</strong>
												</small>
												<br>
												<span>
                                                {{result.type && result.type == 0 ? result.pickup_address : result.destination_address}}
                                            </span>
											</td>
											<td>{{$parent.formatMoney(result.distance, 2)}} Km</td>
										</tr>
										<tr v-if="dataTask.length == 0">
											<td colspan="5" class="bg-warning">
												Data Empty
											</td>
										</tr>
										<tr v-if="!pagingTask.end">
											<td colspan="5">
												<button class="btn btn-block" @click.prevent="loadMoreTask()">Load more</button>
											</td>
										</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- End Widget Body -->
							<!-- Begin Widget Footer -->
							<div class="widget-footer d-flex align-items-center">
								<div class="mr-auto p-2">
									<span class="display-items">Showing 1-{{dataTask.length}} Results</span>
								</div>
							</div>
							<!-- End Widget Footer -->
						</div>
						<!-- End Widget 07 -->
					</div>
				</div>
			</div>
			<div
				class="tab-pane fade"
				id="tab-3"
				role="tabpanel"
				v-if="data.current_latitude  && data.current_longitude "
				aria-labelledby="base-tab-3"
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
								v-if="mapLoaded && data.current_latitude  && data.current_longitude "
								marker-mode="reset"
								:marked="true"
								:lat="data.current_latitude"
								:long="data.current_longitude"
							></map-show>
							<div v-else>Current Location Not Found</div>
							<br>
							Long:
							{{ data.current_latitude }},
							Lat:
							{{ data.current_longitude }},
						</div>
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
    import FormUtill from "../../form-utill"

	export default {
		data() {
			return {
                dataTask: [],
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
                pagingTask: {
                    total_data: 0,
                    data_per_page: 10,
                    end: false,
                    loading: false
                },

                refTask: {
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
		},
		methods: {
            loadTask() {
                let self = this;

                self.dataTask = [];

                this.refTask.data = db
                    .collection("courier_task")
                    .where("courier_id", "==", self.$route.params.id);
                this.refTask.data.orderBy("create_unix_time", "desc");

                const firstPage = this.refTask.data.limit(
                    this.pagingTask.data_per_page
                );
                this.handledataTask(firstPage);
            },

            loadMoreTask() {
                let self = this;

                if (self.pagingTask.end) {
                    return;
                }

                this.pagingTask.loading = true;
                this.handledataTask(this.refTask.dataNext).then(
                    documentSnapshots => {
                        self.pagingTask.loading = false;

                        if (documentSnapshots.empty) self.pagingTask.end = true;
                    }
                );
            },

            handledataTask(ref) {
                return new Promise((resolve, reject) => {
                    swal.fire({
                        title: "Loading Task...",
                        text: "Please waiting",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        onOpen: () => {
                            swal.showLoading();
                        }
                    });

                    ref.get().then(documentSnapshots => {
                        if (documentSnapshots.empty) {
                            this.pagingTask.end = true;
                            resolve(documentSnapshots);

                            swal.close();
                        }

                        documentSnapshots.forEach(async doc => {
                            let data = doc.data();
                            data.id = doc.id;
                            this.dataTask.push(data);
                        });

                        const lastVisible =
                            documentSnapshots.docs[documentSnapshots.size - 1];

                        if (!lastVisible) return;


                        this.refTask.dataNext = this.refTask.data
                            .startAfter(lastVisible)
                            .limit(this.pagingTask.data_per_page);

                        resolve(documentSnapshots);

                        swal.close();
                    });
                });
            },

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

			async SetStatus(status, text) {
				let self = this;

				let data = await db
					.collection("courier")
					.doc(self.$route.params.id);

				let formData = {
					active: status
				};

				swal.fire({
					title: text + " Courier ?",
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
