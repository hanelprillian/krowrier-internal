<template>
	<div class="container-fluid">
		<!-- Begin Page Header-->
		<div class="row">
			<div class="page-header">
				<div class="d-flex align-items-center">
					<h2 class="page-header-title">{{mode == 'add' ? 'New' : 'Detail'}} Booking</h2>
					<div>
						<div class="page-header-tools">
							<small v-if="data.status == 0" class="badge-text info badge-text-small">Progress</small>
							<small v-if="data.status == 1" class="badge-text success badge-text-small">Complete</small>
						</div>
					</div>
				</div>
				<br>
				<div>
					<button @click="$router.push('/internal/booking')" class="btn btn-outline-secondary">Back</button>
					<!--<button @click="Submit()" class="btn btn-outline-primary float-right">Save</button>-->
				</div>
			</div>
		</div>
		<!-- End Page Header -->
		<div class="row flex-row">
			<div class="col-xl-12">
				<div class="widget widget-default">
					<div class="widget-body">
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<label class="form-control-label">Booking Number</label>
									<p class="form-control-static">{{ dataLoaded ? data.code_booking : 'Loading...' }}</p>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label class="form-control-label">Date</label>
									<p class="form-control-static">
										<span>{{ data.created_at }}</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="widget widget-default">
					<div class="widget-body">
						<div class="row">
							<div class="col-md-5">
								<div class="form-group">
									<label>
										<span>Customer</span>
									</label>
									<div class="form-control-static">
										<div class="row">
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Name</label>
													<p class="form-control-static">{{ data.user ? data.user.name : "" }}</p>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Phone</label>
													<p class="form-control-static">{{ data.user ? data.user.phone : ""}}</p>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Pickup Address</label>
													<p class="form-control-static">{{ data.pickup_address }}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-1">
								<i class="fas fa-arrow-right" style="margin-top:50%;font-size: 13pt"></i>
							</div>
							<div class="col-md-5">
								<div class="form-group">
									<label>
										<span>Receiver</span>
									</label>
									<div class="form-control-static">
										<div class="row">
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Name</label>
													<p class="form-control-static">{{ data.consignee_name }}</p>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Destination Address</label>
													<p class="form-control-static">{{ data.destination_address }}</p>
												</div>
											</div>
											<!-- <div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Phone</label>
													<p class="form-control-static">082380011133</p>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Destination Address</label>
													<p class="form-control-static">Jln moch yamin sh</p>
												</div>
											</div>-->
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="widget widget-default">
					<div class="widget-header">Courier Information</div>
					<div class="widget-body">
						<div class="row">
							<div class="col-md-4">
								<div class="form-group">
									<label>
										<span>
											Feeder
											&nbsp;
											<small
												class="badge-text badge-text-small success bg-gradient-02"
											>Pickup</small>
										</span>
									</label>
									<div class="form-control-static">
										<div class="row">
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Name</label>
													<p
														class="form-control-static"
													>{{ data.feeder_origin_user ? data.feeder_origin_user.name : "-"}}</p>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Phone</label>
													<p
														class="form-control-static"
													>{{ data.feeder_origin_user ? data.feeder_origin_user.phone : "-" }}</p>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Vehicle</label>
													<p
														class="form-control-static"
													>{{ data.feeder_origin_user ? data.feeder_origin.vehicle_name : "-"}}</p>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Vehicle License Number</label>
													<p
														class="form-control-static"
													>{{ data.feeder_origin_user ? data.feeder_origin.vehicle_licence_number : "-"}}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="form-group">
									<label>
										<span>Courier</span>
									</label>
									<div class="form-control-static">
										<div class="row">
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Name</label>
													<p class="form-control-static">{{ data.courier_user ? data.courier_user.name : "-" }}</p>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Phone</label>
													<p class="form-control-static">{{ data.courier_user ? data.courier_user.phone : "-" }}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="form-group">
									<label>
										<span>
											Feeder
											&nbsp;
											<small
												class="badge-text badge-text-small success bg-gradient-03"
											>Delivery</small>
										</span>
									</label>
									<div class="form-control-static">
										<div class="row">
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Name</label>
													<p
														class="form-control-static"
													>{{ data.feeder_destination_user ? data.feeder_destination_user.name : "-" }}</p>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Phone</label>
													<p
														class="form-control-static"
													>{{ data.feeder_destination_user ? data.feeder_destination_user.phone : "-"}}</p>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Vehicle</label>
													<p
														class="form-control-static"
													>{{ data.feeder_destination ? data.feeder_destination.vehicle_name : "-" }}</p>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="form-control-label">Vehicle License Number</label>
													<p
														class="form-control-static"
													>{{ data.feeder_destination ? data.feeder_destination.vehicle_licence_number : "-" }}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="widget">
					<div class="widget-body">
						<div class="form-group">
							<label>
								<span>Booking Item</span>
							</label>
							<br>
							<br>
							<div class="form-control-static">
								<div class="row">
									<div class="col-md-4">
										<div class="form-group">
											<label class="form-control-label">Service Package</label>
											<div
												class="form-control-static"
											>{{ data.service_package ? data.service_package.name : "-" }}</div>
										</div>
									</div>
								</div>
							</div>
							<hr>
							<div class="text-grey-dark" v-if="data.items_loading">Loading Items....</div>
							<div class="alert alert-warning" v-if="!data.goods_name || data.goods_name == ''">No Item</div>
							<div v-if="data.goods_name">
								<div class="col-md-12">
									<div class="form-group">
										<span style="font-size: 12pt">
											Booking Item
											<strong>#1</strong>
										</span>
									</div>
									<br>
									<div>
										<div class="form-group">
											<label class="form-control-label">Item</label>
											<div class="form-control-static">
												{{ data.goods_name }}
												<br>
												<br>
												<small>
													<strong>Weight:</strong>
													{{ data.goods_weight }} Kg &nbsp;
													<strong>Qty:</strong>
													{{ data.goods_quantity }} &nbsp;
												</small>
											</div>
										</div>
									</div>
								</div>
								<div class="clearfix"></div>
								<hr>
							</div>
						</div>
					</div>
				</div>
				<div class="widget">
					<table class="table table-compact">
						<tbody>
							<!-- <tr>
								<th>
									<div class="text-right">Charges
										<br>
										<small>1 Kg</small>
									</div>
								</th>
								<td>
									<div class="text-left">9000</div>
								</td>
							</tr>
							<tr>
								<th>
									<div class="text-right">Other Charges</div>
								</th>
								<td>
									<div class="text-left">0.00</div>
								</td>
							</tr>-->
							<tr>
								<th width="80%">
									<h4 class="text-right">Total Charges</h4>
								</th>
								<td width="20%">
									<h4>
										<strong>Rp. {{ currency(data.total_charges) }}</strong>
									</h4>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<!-- End Row -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dataLoaded: false,
				dataUserLoaded: false,
				data: {
					status: "",
					consignee_name: "",
					destination_address: "",
					destination_feeder_id: "",
					origin_drop_point_id: "",
					origin_feeder_id: "",
					pickup_address: "",
					destination_drop_point_id: "",
					code_booking: "",
					created_at: ""
				}
			};
		},
		props: ["mode"],
		methods: {
			async FetchData(id) {
				const ref = await db.collection("booking").doc(id);
				const refItem =  db
					.collection("booking_item")
					.where("booking_id", "==", id);

                await ref.get().then(async doc => {
					if (doc.exists) {
						let data = await doc.data();
						data.created_at = moment(data.created_at).format(
							"DD MMMM YYYY, HH mm"
						);

						this.data = Object.assign(data, {
							service_package: null,
							user: null,
							feeder_origin: null,
							feeder_origin_user: null,
							courier: null,
							courier_user: null,
							feeder_destination: null,
							feeder_destination_user: null,
						});

						this.dataLoaded = true;

						if (
							data.service_package_id != "" &&
							typeof data.service_package_id !== "undefined"
						) {
							 db
								.collection("service_package")
								.doc(data.service_package_id)
								.get()
								.then(async doc1 => {
									if (doc1.exists) {
										this.data.service_package = await doc1.data();
									}
								});
						}

						if (
							data.user_id != "" &&
							typeof data.user_id !== "undefined"
						) {
							 db
								.collection("user")
								.doc(data.user_id)
								.get()
								.then(async doc1 => {
									if (doc1.exists) {
										this.data.user = await doc1.data();
									}
								});
						}

						if (
							data.courier_id != "" &&
							typeof data.courier_id !== "undefined"
						) {
							 db
								.collection("courier")
								.doc(data.courier_id)
								.get()
								.then(async doc1 => {
									if (
										doc1.exists &&
										doc1.data().user_id != "" &&
										typeof doc1.data().user_id !== "undefined"
									) {
										await db
											.collection("user")
											.doc(doc1.data().user_id)
											.get()
											.then(async doc2 => {
												if (doc2.exists) {
													this.data.courier_user = await doc2.data();
												}
											});

										this.data.courier = await doc1.data();
									}
								});
						}

						if (
							data.origin_feeder_id != "" &&
							typeof data.origin_feeder_id !== "undefined"
						) {
							 db
								.collection("feeder")
								.doc(data.origin_feeder_id)
								.get()
								.then(async doc1 => {
									if (
										doc1.exists &&
										doc1.data().user_id != "" &&
										typeof doc1.data().user_id !== "undefined"
									) {
										await db
											.collection("user")
											.doc(doc1.data().user_id)
											.get()
											.then(async doc2 => {
												if (doc2.exists) {
													this.data.feeder_origin_user = await doc2.data();
												}
											});

										this.data.feeder_origin = await doc1.data();
									}
								});
						}

						if (
							data.destination_feeder_id != "" &&
							typeof data.destination_feeder_id !== "undefined"
						) {
							 db
								.collection("feeder")
								.doc(data.destination_feeder_id)
								.get()
								.then(async doc1 => {
									if (
										doc1.exists &&
										doc1.data().user_id != "" &&
										typeof doc1.data().user_id !== "undefined"
									) {
										await db
											.collection("user")
											.doc(doc1.data().user_id)
											.get()
											.then(async doc2 => {
												if (doc2.exists) {
													this.data.feeder_destination_user = await doc2.data();
												}
											});

										this.data.feeder_destination = await doc1.data();
									}
								});
						}
					} else {
						this.$router.push("/internal/booking");
					}
				});
			},

            currency(val)
            {
                let ret = 0;

                if(val)
                    ret = func.currency_number(val);

                return ret;
            }
		},
		async mounted() {
			let self = this;

			if (self.mode == "edit" && self.$route.params.id)
				await self.FetchData(self.$route.params.id);
		}
	};
</script>
