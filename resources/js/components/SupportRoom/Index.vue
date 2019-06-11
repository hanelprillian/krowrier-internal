<template>
	<div class="container-fluid" style="height: 100%">

		<div class=" height-100-percent">
            <div class="row m-0">
                <div class="col-xl-12 p-0">
                    <!-- Begin Widget -->
                    <div class="row m-0 widget no-bg">
                        <!-- Begin Friends Sidebar -->
                        <div class="col-xl-2 col-lg-3 col-md-12 p-0" id="sidebar">
                            <!-- Begin Friendslist -->
                            <div class="sidebar-content w-100 h-100">
                                <div class="input-group no-padding" id="search-group">
                                    <input type="text" class="form-control border-0" placeholder="Search friends ..." id="search-name">
                                </div>
                                <!-- Begin List Group -->
                                <div id="list-group">
                                    <ul class="friend-list list-group w-100 friends-scroll auto-scroll">
                                        <li class="heading">Chats</li>
                                        <li class="list-group-item">
                                            <a class="d-block" data-toggle="tab" href="#msg-1">
                                                <div class="media">
                                                    <div class="media-left align-self-center">
                                                        <img src="assets/img/avatar/avatar-02.jpg" class="user-img rounded-circle" alt="...">
                                                    </div>
                                                    <div class="media-body align-self-center">
                                                        <h4>Brandon Smith</h4>
                                                        <p>Are you serious ?</p>
                                                    </div>
                                                    <div class="media-right align-self-center">
                                                        <span class="date-send">14:21</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="list-group-item">
                                            <a class="d-block" data-toggle="tab" href="#msg-5">
                                                <div class="media">
                                                    <div class="media-left align-self-center">
                                                        <img src="assets/img/avatar/avatar-06.jpg" class="user-img rounded-circle" alt="...">
                                                    </div>
                                                    <div class="media-body align-self-center">
                                                        <h4>Beverly Oliver</h4>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="heading">Contacts</li>
                                        <li class="list-group-item contacts">
                                            <a href="pages-profile.html">
                                                <div class="media">
                                                    <div class="media-left align-self-center">
                                                        <img src="assets/img/avatar/avatar-07.jpg" class="user-img rounded-circle" alt="...">
                                                    </div>
                                                    <div class="media-body align-self-center">
                                                        <h4>Lisa Garett</h4>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- End List Group -->
                            </div>
                            <!-- End Friendslist -->
                        </div>
                        <!-- End Friends Sidebar -->
                        <!-- Begin Messages -->
                        <div class="col-xl-10 col-lg-9 col-md-12 d-flex no-padding">
                            <!-- Begin Card -->
                            <div class="card w-100 no-bg">
                                <!-- Begin Tab -->
                                <div class="tab-content">
                                    <!-- Begin Tab 1 (Show) -->
                                    <div class="tab-pane fade show active messages-scroll auto-scroll" style="flex: 1 1" id="msg-1">
                                        <div class="card-header">
                                            <div class="d-flex flex-xl-row flex-lg-row flex-md-row flex-column align-items-center">
                                                <div class="col-xl-6 d-flex justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center">
                                                    <div class="discussion-name">Brandon Smith</div>
                                                </div>
                                                <div class="col-xl-6 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body d-flex flex-column no-padding" style="overflow-y: scroll">
                                            <div class="container-fluid">
                                                <div class="row m-0">
                                                    <div class="message-card">
                                                        <div class="card-body sender-background">
                                                            <span>Hi, Brandon</span>
                                                        </div>
                                                        <span class="sender-time"><small>14:00</small></span>
                                                    </div>
                                                </div>
                                                <div class="row m-0 justify-content-end">
                                                    <div class="message-card">
                                                        <div class="card-body receiver-background">
                                                            <span>Hello, David</span>
                                                        </div>
                                                        <span class="receiver-time"><small>14:02</small></span>
                                                    </div>
                                                    
                                                </div>
                                                <div class="row m-0 justify-content-end">
                                                    <div class="message-card">
                                                        <div class="card-body receiver-background">
                                                            <span>What's up?</span>
                                                        </div>
                                                        <span class="receiver-time"><small>14:03</small></span>
                                                    </div>
                                                    
                                                </div>
                                                <div class="row m-0">
                                                    <div class="message-card">
                                                        <div class="card-body sender-background">
                                                            <span>I need to talk to you to simulate content</span>
                                                        </div>
                                                        <span class="sender-time"><small>14:10</small></span>
                                                    </div>
                                                </div>
                                                <div class="row m-0">
                                                    <div class="message-card">
                                                        <div class="card-body sender-background">
                                                            <span>Because we do not really exist, did you know?</span>
                                                        </div>
                                                        <span class="sender-time"><small>14:12</small></span>
                                                    </div>
                                                </div>
                                                <div class="row m-0 justify-content-end">
                                                    <div class="message-card">
                                                        <div class="card-body receiver-background">
                                                            <span>What?</span>
                                                        </div>
                                                        <span class="receiver-time"><small>14:15</small></span>
                                                    </div>
                                                    
                                                </div>
                                                <div class="row m-0 justify-content-end">
                                                    <div class="message-card">
                                                        <div class="card-body receiver-background">
                                                            <span>It's a joke?</span>
                                                        </div>
                                                        <span class="receiver-time"><small>14:15</small></span>
                                                    </div>
                                                    
                                                </div>
                                                <div class="row m-0 justify-content-end">
                                                    <div class="message-card">
                                                        <div class="card-body receiver-background">
                                                            <span>How do explain this to my wife?</span>
                                                        </div>
                                                        <span class="receiver-time"><small>14:20</small></span>
                                                    </div>
                                                    
                                                </div>
                                                <div class="row m-0">
                                                    <div class="message-card">
                                                        <div class="card-body sender-background">
                                                            <span>Uh!? ...</span>
                                                        </div>
                                                        <span class="sender-time"><small>14:21</small></span>
                                                    </div>
                                                </div>
                                                <div class="row m-0">
                                                    <div class="message-card">
                                                        <div class="card-body sender-background">
                                                            <span>Are you serious?</span>
                                                        </div>
                                                        <span class="sender-time"><small>14:21</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Tab 1 -->
                                    <!-- Begin Tab 5 -->
                                    <div class="tab-pane fade messages-scroll auto-scroll" style="flex: 1 1" id="msg-5">
                                        <div class="card-header">
                                            <div class="d-flex flex-xl-row flex-lg-row flex-md-row flex-column align-items-center">
                                                <div class="col-xl-6 d-flex justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center">
                                                    <div class="discussion-name">Beverly Oliver</div>
                                                </div>
                                                <div class="col-xl-6 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item mr-3">
                                                            <a href="javascript:void(0)">
                                                                <i class="la la-star-o la-2x"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item mr-3">
                                                            <a href="javascript:void(0)">
                                                                <i class="la la-phone la-2x"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="javascript:void(0)">
                                                                <i class="la la-play-circle la-2x"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body d-flex flex-column no-padding">
                                            <div class="container-fluid">
                                                <div class="container-fluid">
                                                    <div class="no-messages">
                                                        <i class="la la-comments"></i>
                                                        <div class="text">No Messages</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Tab 5 -->
                                </div>
                                <!-- End Tab -->
                                <!-- Begin Input Group -->
                                <div class="input-group">
                                                <span class="input-group-btn">
                                                    <button class="btn" type="button">
                                                        <i class="la la-paperclip la-2x text-primary"></i>
                                                    </button>
                                                </span>
                                    <input type="text" class="form-control no-ppading-right no-padding-left" placeholder="Type your message ...">
                                    <span class="input-group-btn">
                                                    <button class="btn" type="button">
                                                        <i class="la la-paper-plane la-2x text-primary"></i>
                                                    </button>
                                                </span>
                                </div>
                                <!-- End Input Group -->
                            </div>
                            <!-- End Card -->
                        </div>
                        <!-- End Messages -->
                    </div>
                    <!-- End Widget -->
                </div>
                <!-- End Col -->
            </div>
        </div>
		<!-- End Row -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: [],

				search: {
					keyword: ""
				},

				paging: {
					total_data: 0,
					data_per_page: 10,
					end: false,
					loading: false
				},
				ref: {
					data: null,
					dataNext: null
				}
			};
		},

		methods: {
		},
		async mounted() {
		}
	};
</script>
