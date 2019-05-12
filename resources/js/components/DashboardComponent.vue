<template>
	<div class="container-fluid">
		<!-- Begin Page Header-->
		<div class="row">
			<div class="page-header">
				<div class="d-flex align-items-center">
					<h2 class="page-header-title">Dashboard</h2>
					<div>
						<div class="page-header-tools"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- End Page Header -->
		<div class="row flex-row">
			<div class="col-xl-3 col-md-6 col-sm-6">
				<div class="widget widget-12 has-shadow">
					<div class="widget-body">
						<div class="media">
							<div class="align-self-center ml-5 mr-5">
								<i class="ion-ios-contact"></i>
							</div>

							<div class="media-body align-self-center">
								<div class="title">Total Users</div>
								<div class="number" style="font-size:11pt">
									<span v-if="total_data.users.loading">Calculating...</span>
									<span v-if="!total_data.users.loading">{{ total_data.users.data }}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-3 col-md-6 col-sm-6">
				<div class="widget widget-12 has-shadow">
					<div class="widget-body">
						<div class="media">
							<div class="align-self-center ml-5 mr-5">
								<i class="ion-ios-contact"></i>
							</div>

							<div class="media-body align-self-center">
								<div class="title">Total Customers</div>
								<div class="number" style="font-size:11pt">
									<span v-if="total_data.customers.loading">Calculating...</span>
									<span v-if="!total_data.customers.loading">{{ total_data.customers.data }}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-3 col-md-6 col-sm-6">
				<div class="widget widget-12 has-shadow">
					<div class="widget-body">
						<div class="media">
							<div class="align-self-center ml-5 mr-5">
								<i class="ion-ios-list"></i>
							</div>

							<div class="media-body align-self-center">
								<div class="title text-facebook">Total Booking</div>
								<div class="number" style="font-size:11pt">
									<span v-if="total_data.bookings.loading">Calculating...</span>
									<span v-if="!total_data.bookings.loading">{{ total_data.bookings.data }}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-3 col-md-6 col-sm-6">
				<div class="widget widget-12 has-shadow">
					<div class="widget-body">
						<div class="media">
							<div class="align-self-center ml-5 mr-5">
								<i class="ion-ios-contact"></i>
							</div>

							<div class="media-body align-self-center">
								<div class="title text-facebook">Total Couriers</div>
								<div class="number" style="font-size:11pt">
									<span v-if="total_data.couriers.loading">Calculating...</span>
									<span v-if="!total_data.couriers.loading">{{ total_data.couriers.data }}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            <div class="col-xl-12">
                <!-- Vertical Bar 02 -->
                <div class="widget has-shadow">
                    <div class="widget-header bordered no-actions d-flex align-items-center">
                        <h4>Booking Statistics</h4>
                    </div>
                    <div class="widget-body">
                        <vue-apex-charts width="100%" height="300" type="bar" :options="chartOptions" :series="series"></vue-apex-charts>
                        <!--<GChart-->
                                <!--style="height: 300px; width:100%"-->
                                <!--type="ColumnChart"-->
                                <!--:data="chartData"-->
                                <!--:options="chartOptions"-->
                        <!--/>-->

                    </div>
                </div>
                <!-- End Vertical Bar 02 -->
            </div>
			<br>
			<div class="col-xl-6">
				<div class="widget widget-07 has-shadow">
					<!-- Begin Widget Header -->
					<div class="widget-header bordered d-flex align-items-center">
						<h2>New Feeder Courier</h2>
					</div>
					<!-- End Widget Header -->
					<!-- Begin Widget Body -->
					<div class="table-responsive table-scroll">
						<table class="table table-hover mb-0">
							<thead>
								<tr>
									<th width="50%">Name</th>
									<th width="30%">Phone</th>
									<th width="20%">Status</th>
								</tr>
							</thead>
							<tbody>
								<tr v-if="recentFeeder.data.length == 0">
									<td class="warning text-center" colspan="3">No New Feeder</td>
								</tr>
								<template v-for="d in recentFeeder.data">
									<tr>
										<td>
											<router-link tag="a" :to="'/internal/feeder-courier/'+d.id">{{ d.user.name }}</router-link>
										</td>
										<td>{{ d.user.phone }}</td>
										<td>
											<small
												v-if="d.active == 0"
												class="badge-text text-dark warning badge-text-small"
											>Pending</small>
											<small v-if="d.active == 1" class="badge-text success badge-text-small">Active</small>
											<small v-if="d.active == 2" class="badge-text danger badge-text-small">Suspended</small>
										</td>
									</tr>
								</template>
								<tr>
									<td colspan="3" class="primary">
										<router-link
											tag="button"
											class="btn btn-block btn-primary"
											:to="'/internal/feeder-courier'"
										>More</router-link>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="col-xl-6">
				<div class="widget widget-07 has-shadow">
					<!-- Begin Widget Header -->
					<div class="widget-header bordered d-flex align-items-center">
						<h2>New Courier</h2>
					</div>
					<!-- End Widget Header -->
					<!-- Begin Widget Body -->
					<div class="table-responsive table-scroll">
						<table class="table table-hover mb-0">
							<thead>
								<tr>
									<th width="50%">Name</th>
									<th width="30%">Phone</th>
									<th width="20%">Status</th>
								</tr>
							</thead>
							<tbody>
								<tr v-if="recentCourier.data.length == 0">
									<td class="warning text-center" colspan="3">No New Courier</td>
								</tr>
								<template v-for="d in recentCourier.data">
									<tr>
										<td>
											<router-link tag="a" :to="'/internal/courier/'+d.id">{{ d.user.name }}</router-link>
										</td>
										<td>{{ d.user.phone }}</td>
										<td>
											<small
												v-if="d.active == 0"
												class="badge-text text-dark warning badge-text-small"
											>Pending</small>
											<small v-if="d.is_active == 1" class="badge-text success badge-text-small">Active</small>
											<small v-if="d.is_active == 2" class="badge-text danger badge-text-small">Suspended</small>
										</td>
									</tr>
								</template>
								<tr>
									<td colspan="3" class="primary">
										<router-link tag="button" class="btn btn-block btn-primary" :to="'/internal/courier'">More</router-link>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<div class="clearfix"></div>
	</div>
</template>

<script>
    // import { GChart } from 'vue-google-charts'
    import VueApexCharts from 'vue-apexcharts'

	export default {
        components: {
            VueApexCharts
        },
		data() {
			return {
                chartOptions: {
                    chart: {
                        id: 'vuechart-example',
                    },
                    xaxis: {
                        categories: ['January','February','March','April','May','June','July','August','September','October','November','December']
                    },
                    colors: ["#2ecc71", "#3498db"]
                },
                series: [
                    {
                        name: 'Complete',
                        data: [0,0,0,0,0,0,0,0,0,0,0,0]
                    },
                    {
                        name: 'Progress',
                        data: [0,0,0,0,0,0,0,0,0,0,0,0]
                    }],
                // chartData: [
                //     ['Year', {label: 'Completed', type: 'number'}, 'Progress'],
                // ],
                // chartOptions: {
                //     chart: {
                //         title: 'Company Performance',
                //         subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                //     },
                //     colors: ['#2ecc71', '#3498db']
                // },

				total_data: {
					users: {
						data: 0,
						loading: true
					},
					bookings: {
						data: 0,
						loading: true
					},
					customers: {
						data: 0,
						loading: true
					},
					couriers: {
						data: 0,
						loading: true
					}
				},

				recentFeeder: {
					data: [],
					loading: true
				},
				recentCourier: {
					data: [],
					loading: true
				}
			};
		},

        watch:
        {
        },

		methods: {

			async getRecentFeederRegistered()
            {
				db
					.collection("feeder")
					.where("active", "==", 0)
					.limit(10)
					.onSnapshot(async documentSnapshots => {
						if (documentSnapshots.empty) {
							this.recentFeeder.data = [];
							this.recentFeeder.loading = false;

							return;
						}

						documentSnapshots.forEach(async doc => {
							let data = doc.data();
							data.id = doc.id;
							if (
								data.user_id != "" &&
								typeof data.user_id !== "undefined"
							) {
								await db
									.collection("user")
									.doc(data.user_id)
									.get()
									.then(doc1 => {
										if (doc1.exists) {
											data.user = doc1.data();
										}
									});
							}

							this.recentFeeder.data.push(data);
						});

						this.recentFeeder.loading = false;
					});
			},

			async getRecentCourierRegistered()
            {
				db
					.collection("courier")
					.where("active", "==", 0)
					.limit(10)
					.onSnapshot(async documentSnapshots => {
						if (documentSnapshots.empty) {
							this.recentCourier.data = [];
							this.recentCourier.loading = false;

							return;
						}

						documentSnapshots.forEach(async doc => {
							let data = doc.data();
							data.id = doc.id;
							if (
								data.user_id != "" &&
								typeof data.user_id !== "undefined"
							) {
								await db
									.collection("user")
									.doc(data.user_id)
									.get()
									.then(doc1 => {
										if (doc1.exists) {
											data.user = doc1.data();
										}
									});
							}

							this.recentCourier.data.push(data);
						});

						this.recentCourier.loading = false;
					});
			},

			async initCounter()
            {
				this.total_data.users.loading = true;

				 db
					.collection("user")
					.get()
					.then(snap => {
						this.total_data.users.data = snap.size;
                        this.total_data.users.loading = false;
                    });


				this.total_data.bookings.loading = true;

				 db
					.collection("booking")
					.get()
					.then(snap => {
						this.total_data.bookings.data = snap.size;
                        this.total_data.bookings.loading = false;
                    });


				this.total_data.customers.loading = true;

				 db
					.collection("user").where('current_role','==','customer')
					.get()
					.then(snap => {
						this.total_data.customers.data = snap.size;
                        this.total_data.customers.loading = false;
                    });


				this.total_data.couriers.loading = true;

				 db
					.collection("courier")
					.get()
					.then(snap => {
						this.total_data.couriers.data += snap.size;
					});

				 db
					.collection("feeder")
					.get()
					.then(snap => {
						this.total_data.couriers.data += snap.size;
                        this.total_data.couriers.loading = false;
                    });

			},

            async getBookingStatistics(year)
            {
                let self = this;
                let dataComplete = self.series[0].data;
                let dataProgress = self.series[1].data;

                year = year || moment().format("YYYY");

                db
                    .collection("booking_monthly_statistic")
                    .where("year", "==", parseInt(year))
                    .onSnapshot(async documentSnapshots => {
                        
                        dataComplete = [0,0,0,0,0,0,0,0,0,0,0,0];
                        dataProgress = [0,0,0,0,0,0,0,0,0,0,0,0];

                        documentSnapshots.forEach(function(change)
                        {
                            let data = change.data();

                            dataComplete[data.month_index - 1] = data.total_success;
                            dataProgress[data.month_index - 1] = data.total_process;
                        });

                        self.series[0].data = dataComplete;
                        self.series[1].data = dataProgress;
                    });
            }
		},


		async mounted()
        {
			this.initCounter();
			this.getRecentFeederRegistered();
			this.getRecentCourierRegistered();
			let token = null;
			this.getBookingStatistics();
			// alert(moment(moment().format("YYYY")+"-05").startOf('month'))

			// console.log(await func.getUserToken());
		}
	};
</script>
