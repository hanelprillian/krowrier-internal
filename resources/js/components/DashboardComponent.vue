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
		<!-- Begin Row -->
		<div class="card">
			<div class="card-header">Main Statistics</div>
			<div class="card-body">
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
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
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
				}
			};
		},

		methods: {
			async initCounter() {
				this.total_data.users.loading = true;

				await db
					.collection("user")
					.get()
					.then(snap => {
						this.total_data.users.data = snap.size;
					});

				this.total_data.users.loading = false;

				this.total_data.bookings.loading = true;

				await db
					.collection("booking")
					.get()
					.then(snap => {
						this.total_data.bookings.data = snap.size;
					});

				this.total_data.bookings.loading = false;

				this.total_data.customers.loading = true;

				await db
					.collection("customer")
					.get()
					.then(snap => {
						this.total_data.customers.data = snap.size;
					});

				this.total_data.customers.loading = false;

				this.total_data.couriers.loading = true;

				await db
					.collection("courier")
					.get()
					.then(snap => {
						this.total_data.couriers.data += snap.size;
					});

				await db
					.collection("feeder")
					.get()
					.then(snap => {
						this.total_data.couriers.data += snap.size;
					});

				this.total_data.couriers.loading = false;
			}
		},
		async mounted() {
			this.initCounter();
			let token = null;

			// console.log(await func.getUserToken());
		}
	};
</script>
