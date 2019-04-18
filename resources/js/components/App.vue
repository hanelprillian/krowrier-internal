<template>
	<div class>
		<div v-if="IsLogged">
			<!-- Begin Preloader -->
			<!-- End Preloader -->
			<div class="page">
				<!-- Begin Header -->
				<header class="header">
					<nav class="navbar fixed-top">
						<!-- Begin Topbar -->
						<div class="navbar-holder d-flex align-items-center align-middle justify-content-between">
							<!-- Begin Logo -->
							<div class="navbar-header">
								<a href class="navbar-brand">
									<div class="brand-image brand-big">
										<img src="/images/logo.png" alt="logo" class="logo-big">
									</div>
									<div class="brand-image brand-small">
										<img src="/images/logo-small.png" alt="logo" class="logo-small">
									</div>
								</a>
								<!-- Toggle Button -->
								<a id="toggle-btn" href="#" class="menu-btn active">
									<span></span>
									<span></span>
									<span></span>
								</a>
								<!-- End Toggle -->
                                &nbsp;
                                {{time}}
							</div>
							<!-- End Logo -->
							<!-- Begin Navbar Menu -->
							<ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center pull-right">
								<!-- Begin Notifications -->
								<li class="nav-item dropdown">
									<a
										id="notifications"
										rel="nofollow"
										data-target="#"
										href="#"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
										class="nav-link"
									>
										<i class="la la-bell animated infinite swing"></i>
										<span class="badge-pulse"></span>
									</a>
									<ul aria-labelledby="notifications" class="dropdown-menu notification">
										<li>
											<div class="notifications-header">
												<div class="title">Notifications (4)</div>
												<div class="notifications-overlay"></div>
												<img src="assets/img/notifications/01.jpg" alt="..." class="img-fluid">
											</div>
										</li>
										<li>
											<a href="#">
												<div class="message-icon">
													<i class="la la-user"></i>
												</div>
												<div class="message-body">
													<div class="message-body-heading">New user registered</div>
													<span class="date">2 hours ago</span>
												</div>
											</a>
										</li>
										<li>
											<a href="#">
												<div class="message-icon">
													<i class="la la-calendar-check-o"></i>
												</div>
												<div class="message-body">
													<div class="message-body-heading">New event added</div>
													<span class="date">7 hours ago</span>
												</div>
											</a>
										</li>
										<li>
											<a href="#">
												<div class="message-icon">
													<i class="la la-history"></i>
												</div>
												<div class="message-body">
													<div class="message-body-heading">Server rebooted</div>
													<span class="date">7 hours ago</span>
												</div>
											</a>
										</li>
										<li>
											<a href="#">
												<div class="message-icon">
													<i class="la la-twitter"></i>
												</div>
												<div class="message-body">
													<div class="message-body-heading">You have 3 new followers</div>
													<span class="date">10 hours ago</span>
												</div>
											</a>
										</li>
										<li>
											<a
												rel="nofollow"
												href="#"
												class="dropdown-item all-notifications text-center"
											>View All Notifications</a>
										</li>
									</ul>
								</li>
								<!-- End Notifications -->
								<!-- User -->
								<li class="nav-item dropdown">
									<a
										id="user"
										rel="nofollow"
										data-target="#"
										href="#"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
										class="nav-link"
									>
										<img src="/images/user-no.png" alt="..." class="avatar rounded-circle">
									</a>
									<ul aria-labelledby="user" class="user-size dropdown-menu">
										<li class="welcome">
											<a href="#" class="edit-profil">
												<i class="la la-gear"></i>
											</a>
											<img src="/images/user-no.png" alt="..." class="rounded-circle">
                                            &nbsp;
                                            <!--<span class="text-center">{{userLogged}}</span>-->
                                        </li>
										<li>
											<a href="pages-profile.html" class="dropdown-item">Profile</a>
										</li>
										<li>
											<a href="app-mail.html" class="dropdown-item">Messages</a>
										</li>
										<li>
											<a href="#" class="dropdown-item no-padding-bottom">Settings</a>
										</li>
										<li class="separator"></li>
										<!-- <li>
										<a href="pages-faq.html" class="dropdown-item no-padding-top">Faq</a>
										</li>-->
										<li>
											<a rel="nofollow" @click="logout()" class="dropdown-item logout text-center">
												<i class="ti-power-off"></i>
											</a>
										</li>
									</ul>
								</li>
								<!-- End User -->
							</ul>
							<!-- End Navbar Menu -->
						</div>
						<!-- End Topbar -->
					</nav>
				</header>
				<!-- End Header -->
				<!-- Begin Page Content -->
				<div class="page-content d-flex align-items-stretch">
					<div class="default-sidebar">
						<!-- Begin Side Navbar -->
						<nav class="side-navbar box-scroll sidebar-scroll">
							<!-- Begin Main Navigation -->
							<ul class="list-unstyled">
								<router-link tag="li" :to="{ path: '/internal/home' }">
									<a>
										<i class="la la-columns"></i>Dashboard
									</a>
								</router-link>

								<li>
									<a href="#dropdown-master-data" aria-expanded="false">
										<i class="la la-list-alt"></i>Master Data
									</a>
									<ul id="dropdown-master-data" class=" list-unstyled pt-0">
										<router-link tag="li" :to="{ path: '/internal/service-package' }">
											<a>Service Package</a>
										</router-link>

										<router-link tag="li" :to="{ path: '/internal/Hub' }">
											<a>Hub</a>
										</router-link>

										<router-link tag="li" :to="{ path: '/internal/company' }">
											<a>Company</a>
										</router-link>
									</ul>
								</li>
								<li>
									<a href="#dropdown-transaction-data" aria-expanded="false">
										<i class="la la-newspaper-o"></i>Booking & Transaction
									</a>
									<ul id="dropdown-transaction-data" class="list-unstyled pt-0">
										<router-link tag="li" :to="{ path: '/internal/booking' }">
											<a>Booking</a>
										</router-link>
										<!--<li>-->
											<!--<a href="#">Booking Progress</a>-->
										<!--</li>-->
										<router-link tag="li" :to="{ path: '/internal/customer' }">
											<a>Customer</a>
										</router-link>
										<router-link tag="li" :to="{ path: '/internal/feeder-courier' }">
											<a>Feeder Courier</a>
										</router-link>
										<router-link tag="li" :to="{ path: '/internal/courier' }">
											<a>Courier</a>
										</router-link>
										<router-link tag="li" :to="{ path: '/internal/drop-point' }">
											<a>Drop Point</a>
										</router-link>
									</ul>
								</li>
								<router-link tag="li" :to="{ path: '/internal/user' }">
									<a>
										<i class="la la-users"></i>Users
									</a>
								</router-link>
							</ul>
							<!--<span class="heading">Transaction & Booking</span>-->
							<!-- End Main Navigation -->
						</nav>
						<!-- End Side Navbar -->
					</div>
					<!-- End Left Sidebar -->
					<div class="content-inner">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>

						<!-- Begin Page Footer-->
						<footer class="main-footer fixed-footer">
							<div class="row">
								<div
									class="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center"
								>
									<p class="text-gradient-02">Krowrier</p>
								</div>
							</div>
						</footer>
						<!-- End Page Footer -->
						<a href="#" class="go-top">
							<i class="la la-arrow-up"></i>
						</a>
						<!-- Offcanvas Sidebar -->
						<div class="off-sidebar from-right">
							<div class="off-sidebar-container">
								<header class="off-sidebar-header">
									<ul class="button-nav nav nav-tabs mt-3 mb-3 ml-3" role="tablist" id="weather-tab">
										<li>
											<a
												class="active"
												data-toggle="tab"
												href="#messenger"
												role="tab"
												id="messenger-tab"
											>Messages</a>
										</li>
										<li>
											<a data-toggle="tab" href="#today" role="tab" id="today-tab">Today</a>
										</li>
									</ul>
									<a href="#off-canvas" class="off-sidebar-close"></a>
								</header>
								<div class="off-sidebar-content offcanvas-scroll auto-scroll">
									<div class="tab-content">
										<!-- Begin Messenger -->
										<div
											role="tabpanel"
											class="tab-pane show active fade"
											id="messenger"
											aria-labelledby="messenger-tab"
										>
											<!-- Begin Chat Message -->
											<span class="date">Today</span>
											<div class="messenger-message messenger-message-sender">
												<img
													class="messenger-image messenger-image-default"
													src="assets/img/avatar/avatar-02.jpg"
													alt="..."
												>
												<div class="messenger-message-wrapper">
													<div class="messenger-message-content">
														<p>
															<span class="mb-2">Brandon wrote</span>
															Hi David, what's up?
														</p>
													</div>
													<div class="messenger-details">
														<span class="messenger-message-localization font-size-small">2 minutes ago</span>
													</div>
												</div>
											</div>
											<div class="messenger-message messenger-message-recipient">
												<div class="messenger-message-wrapper">
													<div class="messenger-message-content">
														<p>Hi Brandon, fine and you?</p>
														<p>I'm working on the next update of Elisyam</p>
													</div>
													<div class="messenger-details">
														<span class="messenger-message-localisation font-size-small">3 minutes ago</span>
													</div>
												</div>
											</div>
											<div class="messenger-message messenger-message-sender">
												<img
													class="messenger-image messenger-image-default"
													src="assets/img/avatar/avatar-02.jpg"
													alt="..."
												>
												<div class="messenger-message-wrapper">
													<div class="messenger-message-content">
														<p>
															<span class="mb-2">Brandon wrote</span>
															I can't wait to see
														</p>
													</div>
													<div class="messenger-details">
														<span class="messenger-message-localization font-size-small">5 minutes ago</span>
													</div>
												</div>
											</div>
											<div class="messenger-message messenger-message-recipient">
												<div class="messenger-message-wrapper">
													<div class="messenger-message-content">
														<p>I'm almost done</p>
													</div>
													<div class="messenger-details">
														<span class="messenger-message-localisation font-size-small">10 minutes ago</span>
													</div>
												</div>
											</div>
											<span class="date">Yesterday</span>
											<div class="messenger-message messenger-message-sender">
												<img
													class="messenger-image messenger-image-default"
													src="assets/img/avatar/avatar-05.jpg"
													alt="..."
												>
												<div class="messenger-message-wrapper">
													<div class="messenger-message-content">
														<p>I updated the server tonight</p>
													</div>
												</div>
											</div>
											<div class="messenger-message messenger-message-recipient">
												<div class="messenger-message-wrapper">
													<div class="messenger-message-content">
														<p>Didn't you have any problems?</p>
													</div>
												</div>
											</div>
											<div class="messenger-message messenger-message-sender">
												<img
													class="messenger-image messenger-image-default"
													src="assets/img/avatar/avatar-05.jpg"
													alt="..."
												>
												<div class="messenger-message-wrapper">
													<div class="messenger-message-content">
														<p>No!</p>
													</div>
												</div>
											</div>
											<div class="messenger-message messenger-message-recipient">
												<div class="messenger-message-wrapper">
													<div class="messenger-message-content">
														<p>Great!</p>
														<p>See you later!</p>
													</div>
												</div>
											</div>
											<!-- End Chat Message -->
											<!-- Begin Message Form -->
											<div class="enter-message">
												<div class="enter-message-form">
													<input type="text" placeholder="Enter your message...">
												</div>
												<div class="enter-message-button">
													<a href="#" class="send">
														<i class="ion-paper-airplane"></i>
													</a>
												</div>
											</div>
											<!-- End Message Form -->
										</div>
										<!-- End Messenger -->
										<!-- Begin Today -->
										<div role="tabpanel" class="tab-pane fade" id="today" aria-labelledby="today-tab">
											<!-- Begin Today Stats -->
											<div class="sidebar-heading pt-0">Today</div>
											<div class="today-stats mt-3 mb-3">
												<div class="row">
													<div class="col-4 text-center">
														<i class="la la-users"></i>
														<div class="counter">264</div>
														<div class="heading">Clients</div>
													</div>
													<div class="col-4 text-center">
														<i class="la la-cart-arrow-down"></i>
														<div class="counter">360</div>
														<div class="heading">Sales</div>
													</div>
													<div class="col-4 text-center">
														<i class="la la-money"></i>
														<div class="counter">$ 4,565</div>
														<div class="heading">Earnings</div>
													</div>
												</div>
											</div>
											<!-- End Today Stats -->
											<!-- Begin Friends -->
											<div class="sidebar-heading">Friends</div>
											<div class="quick-friends mt-3 mb-3">
												<ul class="list-group w-100">
													<li class="list-group-item">
														<div class="media">
															<div class="media-left align-self-center mr-3">
																<img
																	src="assets/img/avatar/avatar-02.jpg"
																	alt="..."
																	class="img-fluid rounded-circle"
																	style="width: 35px;"
																>
															</div>
															<div class="media-body align-self-center">
																<a href="javascript:void(0);">Brandon Smith</a>
															</div>
														</div>
													</li>
													<li class="list-group-item">
														<div class="media">
															<div class="media-left align-self-center mr-3">
																<img
																	src="assets/img/avatar/avatar-03.jpg"
																	alt="..."
																	class="img-fluid rounded-circle"
																	style="width: 35px;"
																>
															</div>
															<div class="media-body align-self-center">
																<a href="javascript:void(0);">Louis Henry</a>
															</div>
														</div>
													</li>
													<li class="list-group-item">
														<div class="media">
															<div class="media-left align-self-center mr-3">
																<img
																	src="assets/img/avatar/avatar-04.jpg"
																	alt="..."
																	class="img-fluid rounded-circle"
																	style="width: 35px;"
																>
															</div>
															<div class="media-body align-self-center">
																<a href="javascript:void(0);">Nathan Hunter</a>
															</div>
														</div>
													</li>
													<li class="list-group-item">
														<div class="media">
															<div class="media-left align-self-center mr-3">
																<img
																	src="assets/img/avatar/avatar-05.jpg"
																	alt="..."
																	class="img-fluid rounded-circle"
																	style="width: 35px;"
																>
															</div>
															<div class="media-body align-self-center">
																<a href="javascript:void(0);">Megan Duncan</a>
															</div>
														</div>
													</li>
													<li class="list-group-item">
														<div class="media">
															<div class="media-left align-self-center mr-3">
																<img
																	src="assets/img/avatar/avatar-06.jpg"
																	alt="..."
																	class="img-fluid rounded-circle"
																	style="width: 35px;"
																>
															</div>
															<div class="media-body align-self-center">
																<a href="javascript:void(0);">Beverly Oliver</a>
															</div>
														</div>
													</li>
												</ul>
											</div>
											<!-- End Friends -->
											<!-- Begin Settings -->
											<div class="sidebar-heading">Settings</div>
											<div class="quick-settings mt-3 mb-3">
												<ul class="list-group w-100">
													<li class="list-group-item">
														<div class="media">
															<div class="media-body align-self-center">
																<p class="text-dark">Notifications Email</p>
															</div>
															<div class="media-right align-self-center">
																<label>
																	<input class="toggle-checkbox" type="checkbox" checked>
																	<span>
																		<span></span>
																	</span>
																</label>
															</div>
														</div>
													</li>
													<li class="list-group-item">
														<div class="media">
															<div class="media-body align-self-center">
																<p class="text-dark">Notifications Sound</p>
															</div>
															<div class="media-right align-self-center">
																<label>
																	<input class="toggle-checkbox" type="checkbox">
																	<span>
																		<span></span>
																	</span>
																</label>
															</div>
														</div>
													</li>
													<li class="list-group-item">
														<div class="media">
															<div class="media-body align-self-center">
																<p class="text-dark">Chat Message Sound</p>
															</div>
															<div class="media-right align-self-center">
																<label>
																	<input class="toggle-checkbox" type="checkbox" checked>
																	<span>
																		<span></span>
																	</span>
																</label>
															</div>
														</div>
													</li>
												</ul>
											</div>
											<!-- End Settings -->
										</div>
										<!-- End Today -->
									</div>
								</div>
								<!-- End Offcanvas Container -->
							</div>
							<!-- End Offsidebar Container -->
						</div>
						<!-- End Offcanvas Sidebar -->
					</div>
					<!-- End Content -->
				</div>
				<!-- End Page Content -->
			</div>
			<!-- Begin Success Modal -->
			<div id="delay-modal" class="modal fade">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-body text-center">
							<div class="sa-icon sa-success animate" style="display: block;">
								<span class="sa-line sa-tip animateSuccessTip"></span>
								<span class="sa-line sa-long animateSuccessLong"></span>
								<div class="sa-placeholder"></div>
								<div class="sa-fix"></div>
							</div>
							<div class="section-title mt-5 mb-5">
								<h2 class="text-dark">Meeting successfully created</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End Success Modal -->
			<!-- Begin Modal -->
			<div id="modal-view-event" class="modal modal-top fade calendar-modal">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title event-title"></h4>
							<button type="button" class="close" data-dismiss="modal">
								<span aria-hidden="true">×</span>
								<span class="sr-only">close</span>
							</button>
						</div>
						<div class="modal-body">
							<div class="media">
								<div class="media-left align-self-center mr-3">
									<div class="event-icon"></div>
								</div>
								<div class="media-body align-self-center mt-3 mb-3">
									<div class="event-body"></div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
			<!-- End Modal -->
		</div>

		<div v-else>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
                userLogged: JSON.parse(localStorage.getItem('userLoginData')),
                time: '',
				IsLogged: IsLogged,
				transitionName: "slide-left"
			};
		},

		methods: {
			logout() {
				firebase
					.auth()
					.signOut()
					.then(() =>
                    {
                        window.IsLogged = false;
                        self.IsLogged = false;
                        self.userLogged = [];
                        localStorage.removeItem('userLoginData');
                        window.location = "/internal/auth/login";
					});
			},

            startTime()
            {
                var today = moment();
                this.time = today;
                var t = setTimeout(this.startTime, 500);
            },
		},

		mounted()
        {
            this.startTime();
			// ------------------------------------------------------- //
			// Sidebar Functionality
			// ------------------------------------------------------ //
			$("#toggle-btn").on("click", function(e) {
				e.preventDefault();
				$(this).toggleClass("active");

				$(".side-navbar").toggleClass("shrinked");
				$(".content-inner").toggleClass("active");

				if ($(window).outerWidth() > 1183) {
					if ($("#toggle-btn").hasClass("active")) {
						$(".navbar-header .brand-small").hide();
						$(".navbar-header .brand-big").show();
					} else {
						$(".navbar-header .brand-small").show();
						$(".navbar-header .brand-big").hide();
					}
				}

				if ($(window).outerWidth() < 1183) {
					$(".navbar-header .brand-small").show();
				}
			});
			// Close dropdown after click
			$(function() {
				$(".side-navbar li a").click(function(event) {
					$(".collapse").collapse("hide");
				});
			});
		}
	};
</script>

