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
                        aria-controls="tab-2"
                        @click.prevent="loadProgress()"
                        aria-selected="false"
                >Progress</a>
            </li>
        </ul>
        <div class="clearfix"></div>
        <br>
        <div class="tab-content pt-3">
            <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="base-tab-1">
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
            </div>

            <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="base-tab-2">
                <ul class="list-group w-100">
                    <li class="list-group-item" v-for="(progress, index) in dataProgress.data">
                        <div class="other-message">
                            <div class="media">
                                <table class="table">
                                    <tbody>
                                    <tr>
                                        <td width="10%">
                                            <strong style="font-size: 15pt">#{{progress.seq}}</strong>
                                        </td>
                                        <td width="90%">
                                            <div class="media-body align-self-center">
                                                <div class="other-message-sender margin-bottom-5">
                                                    <strong class="text-blue" style="font-size: 12pt">{{progress.status_name_formatted}}</strong>
                                                    <br>
                                                    <small>{{progress.datetime_formatted}}</small>
                                                </div>
                                                <div class="other-message-time padding-top-10">
                                                    <!--data feeder-->
                                                    <div class="row" v-if="progress.status_name === 'Feeder'">
                                                        <div class="col-md-3">
                                                            <label for=""><small><strong>ID</strong></small></label>
                                                            <p class="form-control-static">
                                                                {{progress.feeder && progress.feeder.feeder_id ? progress.feeder.feeder_id : '-'}}
                                                            </p>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label for=""><small><strong>Name</strong></small></label>
                                                            <p class="form-control-static">
                                                                {{progress.feeder && progress.feeder.fullname ? progress.feeder.fullname : '-'}}
                                                            </p>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label for=""><small><strong>Phone</strong></small></label>
                                                            <p class="form-control-static">
                                                                {{progress.feeder && progress.feeder.phone ? progress.feeder.phone : '-'}}
                                                            </p>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label for=""><small><strong>Vehicle</strong></small></label>
                                                            <p class="form-control-static">
                                                                <span v-if="progress.feeder">
                                                                    {{progress.feeder.vehicle_name}} <small>({{progress.feeder.vehicle_police_number}})</small>
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="row" v-if="progress.status_name === 'Courier'">
                                                        <div class="col-md-3">
                                                            <label for=""><small><strong>ID</strong></small></label>
                                                            <p class="form-control-static">
                                                                {{progress.courier && progress.courier.courier_id ? progress.courier.courier_id : '-'}}
                                                            </p>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label for=""><small><strong>Name</strong></small></label>
                                                            <p class="form-control-static">
                                                                {{progress.courier && progress.courier.fullname ? progress.courier.fullname : '-'}}
                                                            </p>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label for=""><small><strong>Phone</strong></small></label>
                                                            <p class="form-control-static">
                                                                {{progress.courier && progress.courier.phone ? progress.courier.phone : '-'}}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="row" v-if="progress.status_name === 'Drop Point'">
                                                        <div class="col-md-3">
                                                            <label for=""><small><strong>ID</strong></small></label>
                                                            <p class="form-control-static">
                                                                {{progress.drop_point && progress.drop_point.droppoint_id ? progress.drop_point.droppoint_id : '-'}}
                                                            </p>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label for=""><small><strong>Name</strong></small></label>
                                                            <p class="form-control-static">
                                                                {{progress.drop_point && progress.drop_point.name ? progress.drop_point.name : '-'}}
                                                                <br>
                                                                <small>
                                                                    Owner:
                                                                    <strong>
                                                                        {{progress.drop_point && progress.drop_point.owner_name ? progress.drop_point.owner_name : '-'}}
                                                                    </strong>
                                                                </small>
                                                            </p>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label for=""><small><strong>Phone</strong></small></label>
                                                            <p class="form-control-static">
                                                                {{progress.drop_point && progress.drop_point.phone ? progress.drop_point.phone : '-'}}
                                                            </p>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <label for=""><small><strong>Address</strong></small></label>
                                                            <p class="form-control-static">
                                                                {{progress.drop_point && progress.drop_point.address ? progress.drop_point.address : '-'}}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
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
					booking_id: "",
					created_at: ""
				},

                dataProgress: {
                    data: []
                }
			};
		},
		props: ["mode"],
		methods: {
			async FetchData(id) {
				const ref = await db.collection("booking").doc(id);

                await ref.get().then(async doc => {
					if (doc.exists) {
						let data = await doc.data();
						data.booking_id = doc.id;

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

					} else {
						this.$router.push("/internal/booking");
					}
				});
			},

            async loadProgress()
            {
                let self = this;

                self.dataProgress.data = [];

                swal.fire({
                    title: "Loading Progress...",
                    text: "Please waiting",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    onOpen: () => {
                        swal.showLoading();
                    }
                });

                let _dataProgress = [];

                await db.collection("booking_progress").where("booking_id","==", self.data.booking_id)
                    .orderBy("unix_time","desc")
                    .get().then(function (snapshot)
                {
                    if(snapshot.size > 0)
                    {
                        let index = snapshot.size;

                        snapshot.forEach(async function (doc)
                        {
                            let data = doc.data();
                            data.id = doc.id;
                            data.seq = index;
                            data.feeder = {};
                            data.courier = {};
                            data.drop_point = {};
                            data.status_name_formatted = func.toTitleCase(data.status_name);
                            data.datetime_formatted = moment(data.datetime).format(
                                "DD MMMM YYYY, HH mm"
                            );

                            if (
                                data.status_name === 'Feeder' && data.role_firebase_id != "" &&
                                typeof data.role_firebase_id !== "undefined"
                            ) {
                                db
                                    .collection("feeder")
                                    .doc(data.role_firebase_id)
                                    .get()
                                    .then(async doc1 =>
                                    {
                                        data.feeder = doc1.data();
                                    });
                            }

                            if (
                                data.status_name === 'Courier' && data.role_firebase_id != "" &&
                                typeof data.role_firebase_id !== "undefined"
                            ) {
                                db
                                    .collection("courier")
                                    .doc(data.role_firebase_id)
                                    .get()
                                    .then(async doc1 =>
                                    {
                                        data.courier = doc1.data();
                                    });
                            }

                            if (
                                data.status_name === 'Drop Point' && data.role_firebase_id != "" &&
                                typeof data.role_firebase_id !== "undefined"
                            ) {
                                db
                                    .collection("drop_point")
                                    .doc(data.role_firebase_id)
                                    .get()
                                    .then(async doc1 =>
                                    {
                                        data.drop_point = doc1.data();
                                    });
                            }

                            _dataProgress.push(data);

                            index--;
                        });
                    }

                    self.dataProgress.data = _dataProgress;

                    console.log(self.dataProgress.data)

                    swal.close();
                }).catch(error => {
                    console.log(error)
                    swal.close();
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
