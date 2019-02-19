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
		<div class="row flex-row">
			<!-- Begin Facebook -->
			<div class="col-xl-4 col-md-6 col-sm-6">
				<div class="widget widget-12 has-shadow">
					<div class="widget-body">
						<div class="media">
							<div class="align-self-center ml-5 mr-5">
								<i class="ion-ios-list"></i>
							</div>

							<div class="media-body align-self-center">
								<div class="title text-facebook">Total Booking</div>
								<div class="number">10,865</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End Facebook -->
		</div>
		<!-- End Row -->
		<div class="row flex-row">
			<div class="col-xl-12">
				<!-- Begin Widget 07 -->
				<div class="widget widget-07 has-shadow">
					<!-- Begin Widget Header -->
					<div class="widget-header bordered d-flex align-items-center">
						<h2>Product Overview</h2>
						<div class="widget-options">
							<div class="btn-group" role="group">
								<button type="button" class="btn btn-primary ripple">Week</button>
								<button type="button" class="btn btn-primary ripple">Month</button>
							</div>
						</div>
					</div>
					<!-- End Widget Header -->
					<!-- Begin Widget Body -->
					<div class="widget-body">
						<div class="table-responsive table-scroll padding-right-10" style="max-height:520px;">
							<table class="table table-hover mb-0">
								<thead>
									<tr>
										<th>
											<div class="styled-checkbox mt-2">
												<input type="checkbox" name="check-all" id="check-all">
												<label for="check-all"></label>
											</div>
										</th>
										<th>Order ID</th>
										<th>Customer Name</th>
										<th>Country</th>
										<th>Ship Date</th>
										<th>
											<span style="width:100px;">Status</span>
										</th>
										<th>Order Total</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td style="width:5%;">
											<div class="styled-checkbox mt-2">
												<input type="checkbox" name="cb10" id="cb10">
												<label for="cb10"></label>
											</div>
										</td>
										<td>
											<span class="text-primary">021-09-US</span>
										</td>
										<td>Jeffrey Arnold</td>
										<td>US</td>
										<td>07/21/2017</td>
										<td>
											<span style="width:100px;">
												<span class="badge-text badge-text-small info">Paid</span>
											</span>
										</td>
										<td>$199.95</td>
										<td class="td-actions">
											<a href="#">
												<i class="la la-edit edit"></i>
											</a>
											<a href="#">
												<i class="la la-close delete"></i>
											</a>
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
							<span class="display-items">Showing 1-30 / 150 Results</span>
						</div>
						<div class="p-2">
							<nav aria-label="...">
								<ul class="pagination justify-content-end">
									<li class="page-item disabled">
										<span class="page-link">
											<i class="ion-chevron-left"></i>
										</span>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">1</a>
									</li>
									<li class="page-item active">
										<span class="page-link">
											2
											<span class="sr-only">(current)</span>
										</span>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">3</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">
											<i class="ion-chevron-right"></i>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<!-- End Widget Footer -->
				</div>
				<!-- End Widget 07 -->
			</div>
		</div>
		<div class="row flex-row">
			<div class="col-xl-7 col-md-6">
				<!-- Begin Widget 10 -->
				<div class="widget widget-10 has-shadow">
					<!-- Begin Widget Header -->
					<div class="widget-header bordered d-flex align-items-center">
						<h2>Support Tickets</h2>
						<div class="widget-options">
							<div class="dropdown">
								<button
									type="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
									class="dropdown-toggle"
								>
									<i class="la la-ellipsis-h"></i>
								</button>
								<div class="dropdown-menu">
									<a href="#" class="dropdown-item">
										<i class="la la-bell-slash"></i>Disable Alerts
									</a>
									<a href="#" class="dropdown-item">
										<i class="la la-edit"></i>Edit Widget
									</a>
									<a href="#" class="dropdown-item faq">
										<i class="la la-question-circle"></i>FAQ
									</a>
								</div>
							</div>
						</div>
					</div>
					<!-- End Widget Header -->
					<!-- Begin Widget Body -->
					<div class="widget-body no-padding">
						<ul class="ticket list-group w-100">
							<!-- 01 -->
							<li class="list-group-item">
								<div class="media">
									<div class="media-left align-self-center pr-4">
										<img src="assets/img/avatar/avatar-02.jpg" class="user-img rounded-circle" alt="...">
									</div>
									<div class="media-body align-self-center">
										<div class="username">
											<h4>Brandon Smith</h4>
										</div>
										<div class="msg">
											<p>Hello, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mauris sapien sem, ornare id mauris vitae, ultricies volutpat ...</p>
										</div>
										<div class="status">
											<span class="open mr-2">Open</span>(1 hour ago)
										</div>
									</div>
								</div>
							</li>
							<!-- End 01 -->
						</ul>
					</div>
					<!-- End Widget Body -->
				</div>
				<!-- End Widget 10 -->
			</div>
			<div class="col-xl-5">
				<!-- Begin Widget 11 -->
				<div class="widget widget-11 has-shadow">
					<!-- Begin Widget Header -->
					<div class="widget-header bordered d-flex align-items-center">
						<h2>Activity Log</h2>
						<div class="widget-options">
							<div class="dropdown">
								<button
									type="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
									class="dropdown-toggle"
								>
									<i class="la la-ellipsis-h"></i>
								</button>
								<div class="dropdown-menu">
									<a href="#" class="dropdown-item">
										<i class="la la-history"></i>History
									</a>
									<a href="#" class="dropdown-item">
										<i class="la la-bell-slash"></i>Disable Alerts
									</a>
									<a href="#" class="dropdown-item">
										<i class="la la-edit"></i>Edit Widget
									</a>
									<a href="#" class="dropdown-item faq">
										<i class="la la-question-circle"></i>FAQ
									</a>
								</div>
							</div>
						</div>
					</div>
					<!-- End Widget Header -->
					<!-- Begin Widget Body -->
					<div class="widget-body p-0 widget-scroll" style="max-height:450px;">
						<!-- Begin 01 -->
						<div class="timeline violet">
							<div class="timeline-content d-flex align-items-center">
								<div class="user-image">
									<img class="rounded-circle" src="assets/img/avatar/avatar-06.jpg" alt="...">
								</div>
								<div class="d-flex flex-column mr-auto">
									<div class="title">
										<span class="username">Beverly Oliver</span>
										Send you a friend request
									</div>
									<div class="time">4 min ago</div>
								</div>
							</div>
						</div>
						<!-- End 01 -->
					</div>
					<!-- End Widget Body -->
				</div>
				<!-- End Widget 11 -->
			</div>
		</div>
		<!-- End Row -->
	</div>
</template>

<script>
	export default {
		mounted() {}
	};
</script>
