<template>
    <div style="height: 100%;">
        <div v-if="IsLogged" style="height: 100%;">
            <!-- Begin Preloader -->
            <!-- End Preloader -->
            <div class="page" :class="{'chat':$route.name == 'internal->support_room'}" style="height: 100%;">
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
                                <li class="nav-item dropdown margin-right-10" style="position: relative">
                                    <button
                                            data-target="#"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            class="btn btn-success btn-sm">
                                        Support Room
                                    </button>
                                    <span class="badge-pulse" v-if="chatData.has_unread_chat" style="position: absolute; top:0; right: -5px"></span>
                                    <div aria-labelledby="user" class="chat-size dropdown-menu">
                                        <div class="chat-popup">
                                            <div class="sidepanel">
                                                <div class="header-chat">
                                                    <h5 class="text-uppercase">
                                                        <strong>
                                                            Support Room
                                                            <!--<span>{{chatData.total_unread}}</span>-->
                                                        </strong>
                                                    </h5>
                                                    <div class="search-contact">
                                                        <input class="form-control no-border" type="search" placeholder="Search..." aria-label="Search..."  v-model="chatData.searchList.keyword">
                                                    </div>
                                                </div>
                                                <div class="contacts">
                                                    <div class="text-center padding-top-10 text-grey-dark" v-if="filterChat.length == 0">
                                                        Chat Empty :(
                                                    </div>
                                                    <ul>
                                                        <li class="contact" v-for="list in filterChat" :class="{'active':chatData.openedChat.opponent_user_id == list.opponent_user_id}" @click.prevent="selectChat(list.chat_id,list.user_id, list.role_id, list.opponent_user_id, list.opponent_user.name, list.opponent_user.photo, list.booking_data.id, list.booking_data.code_booking, list.opponent_user.current_role)">
                                                            <div class="wrap">
                                                                <!--<div class="image-col">-->
                                                                <!--<div class="image-contact">-->
                                                                <!--<img :src="list.opponent_user && list.opponent_user.photo != '' ? list.opponent_user.photo : 'https://firebasestorage.googleapis.com/v0/b/pasarudang-6129d.appspot.com/o/_webs%2Fuser-img.png?alt=media&token=cb7062cb-1aab-428c-b5d2-8f84fee01cc3'" alt="" />-->
                                                                <!--</div>-->
                                                                <!--</div>-->
                                                                <div class="message-cont-col">
                                                                    <p class="name">{{list.opponent_user.name}} &nbsp; <small v-if="list.total_unread > 0" class="badge-text badge-text-small success">{{list.total_unread}}</small></p>
                                                                    <p class="role">{{list.opponent_user.current_role}}</p>
                                                                    <p class="preview">Booking ID: {{list.booking_data.code_booking}}</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="content">
                                                <!--<div class="contact-profile">-->
                                                <!--<div class="row align-items-center">-->
                                                <!--<div class="col-md-8">-->
                                                <!--<h4 class="name">Hans Cocolonel <span class="type">Customer</span></h4>-->
                                                <!--<div class="form-group no-margin">-->
                                                <!--<label for=""><strong><small>Booking ID</small></strong></label>-->
                                                <!--<p class="form-control-static ">-->
                                                <!--<router-link to="/internal/booking/BK20198787" class="no-padding">-->
                                                <!--BK20198787-->
                                                <!--</router-link>-->
                                                <!--</p>-->
                                                <!--</div>-->
                                                <!--</div>-->
                                                <!--</div>-->
                                                <!--</div>-->

                                                <div class="contact-profile">
                                                    <div class="row align-items-center">
                                                        <div class="col-md-8">
                                                            <template v-if="chatData.openedChat.opponent_user_id != ''">
                                                                <h4 class="name">{{chatData.openedChat.form.name}}
                                                                    <span class="type">{{chatData.openedChat.form.current_role}}</span>
                                                                </h4>
                                                                <div class="row">
                                                                    <div class="col-md-4">
                                                                        <div class="form-group no-margin">
                                                                            <label for=""><strong><small>Booking Code</small></strong></label>
                                                                            <p class="form-control-static ">
                                                                                <router-link target="_blank" :to="'/internal/booking/'+chatData.openedChat.form.booking_id" class="no-padding">
                                                                                    {{chatData.openedChat.form.booking_code}}
                                                                                </router-link>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!--<h5 class="status">Online</h5>-->
                                                            </template>
                                                        </div>
                                                        <div class="col-md-4 d-flex justify-content-end align-items-center">
                                                            <div class="setting">
                                                                <!--<i class="fas fa-cog"></i>-->
                                                                <i class="fas fa-chevron-down" onclick="closeForm()"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <template v-if="chatData.openedChat.opponent_user_id != ''">
                                                    <div class="messages" id="listMessagesChat">
                                                        <ul>
                                                            <li v-for="(detail, index) in chatData.openedChat.detail" :class="{'user': chatData.openedChat.logged_user_id == detail.from, 'seller' : chatData.openedChat.logged_user_id != detail.from}" :id="'chat-'+chatData.openedChat.form.chat_id+'-index-'+index">
                                                                <div :class="{'sent': chatData.openedChat.logged_user_id == detail.from, 'replies' : chatData.openedChat.logged_user_id != detail.from}">
                                                                    <span v-if="detail.type == 'text'" v-html="detail.message"></span>
                                                                    <div v-if="detail.type == 'file'">
                                                                        <img :src="detail.message" class="img-thumbnail" alt="">
                                                                    </div>
                                                                </div>
                                                                <div class="time">
                                                                    {{detail.created_at_formatted}}
                                                                    <!--<i class="fas fa-check-double"></i>-->
                                                                </div>
                                                            </li>
                                                            <!--<li class="seller">-->
                                                            <!--<div class="replies">Ready untuk 30 liter, baca deskripsi dlu ya mas</div>-->
                                                            <!--<div class="time">-->
                                                            <!--12:40 PM-->
                                                            <!--</div>-->
                                                            <!--</li>-->
                                                        </ul>
                                                    </div>
                                                    <div class="message-input" style="position: absolute;left:0;right:0;bottom:0">
                                                        <form @submit.prevent="sendChat()">
                                                            <div class="input-group input-message">
                                                                <!--<div class="input-group-prepend">-->
                                                                <!--<span class="input-group-text" id="basic-addon1"><i class="fa fa-paperclip attachment"></i></span>-->
                                                                <!--</div>-->
                                                                <input class="form-control" type="text" placeholder="Sent a message" v-model="chatData.openedChat.form.messages" aria-label="Sent a message">
                                                                <div class="input-group-append success" @click.prevent="sendChat()">
                                                                    <span class="input-group-text" id="basic-addon1"><i class="ion-android-send"></i></span>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <!-- Begin Notifications -->
                                <!--<li class="nav-item dropdown">-->
                                <!--<a-->
                                <!--id="notifications"-->
                                <!--rel="nofollow"-->
                                <!--data-target="#"-->
                                <!--href="#"-->
                                <!--data-toggle="dropdown"-->
                                <!--aria-haspopup="true"-->
                                <!--aria-expanded="false"-->
                                <!--class="nav-link"-->
                                <!--&gt;-->
                                <!--<i class="la la-bell animated infinite swing"></i>-->
                                <!--<span class="badge-pulse"></span>-->
                                <!--</a>-->
                                <!--<ul aria-labelledby="notifications" class="dropdown-menu notification">-->
                                <!--<li>-->
                                <!--<div class="notifications-header">-->
                                <!--<div class="title">Notifications (4)</div>-->
                                <!--<div class="notifications-overlay"></div>-->
                                <!--<img src="assets/img/notifications/01.jpg" alt="..." class="img-fluid">-->
                                <!--</div>-->
                                <!--</li>-->
                                <!--<li>-->
                                <!--<a href="#">-->
                                <!--<div class="message-icon">-->
                                <!--<i class="la la-user"></i>-->
                                <!--</div>-->
                                <!--<div class="message-body">-->
                                <!--<div class="message-body-heading">New user registered</div>-->
                                <!--<span class="date">2 hours ago</span>-->
                                <!--</div>-->
                                <!--</a>-->
                                <!--</li>-->
                                <!--<li>-->
                                <!--<a href="#">-->
                                <!--<div class="message-icon">-->
                                <!--<i class="la la-calendar-check-o"></i>-->
                                <!--</div>-->
                                <!--<div class="message-body">-->
                                <!--<div class="message-body-heading">New event added</div>-->
                                <!--<span class="date">7 hours ago</span>-->
                                <!--</div>-->
                                <!--</a>-->
                                <!--</li>-->
                                <!--<li>-->
                                <!--<a href="#">-->
                                <!--<div class="message-icon">-->
                                <!--<i class="la la-history"></i>-->
                                <!--</div>-->
                                <!--<div class="message-body">-->
                                <!--<div class="message-body-heading">Server rebooted</div>-->
                                <!--<span class="date">7 hours ago</span>-->
                                <!--</div>-->
                                <!--</a>-->
                                <!--</li>-->
                                <!--<li>-->
                                <!--<a href="#">-->
                                <!--<div class="message-icon">-->
                                <!--<i class="la la-twitter"></i>-->
                                <!--</div>-->
                                <!--<div class="message-body">-->
                                <!--<div class="message-body-heading">You have 3 new followers</div>-->
                                <!--<span class="date">10 hours ago</span>-->
                                <!--</div>-->
                                <!--</a>-->
                                <!--</li>-->
                                <!--<li>-->
                                <!--<a-->
                                <!--rel="nofollow"-->
                                <!--href="#"-->
                                <!--class="dropdown-item all-notifications text-center"-->
                                <!--&gt;View All Notifications</a>-->
                                <!--</li>-->
                                <!--</ul>-->
                                <!--</li>-->
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
                <div class="page-content d-flex align-items-stretch" style="height: 100%">
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
    import WebUtill from "../webUtill"
    export default {
        data() {
            return {
                userLogged: JSON.parse(localStorage.getItem('userLoginData')),
                time: '',
                IsLogged: IsLogged,
                transitionName: "slide-left",

                chatData : {
                    searchList: {
                        keyword: ''
                    },
                    list: [],
                    total_unread: 0,
                    has_unread_chat: false,
                    openedChat: {
                        logged_user_id: '',
                        opponent_user_id: '',
                        form: {
                            booking_id: '',
                            role_id: '',
                            chat_id: '',
                            chat_type: '',
                            created_at: '',
                            role: '',
                            unix_time: '',
                            updated_at: '',
                            user_id: '',
                        },
                        detail: []
                    },
                }
            };
        },

        computed: {
            filterChat ()
            {
                let self = this;

                return this.chatData.list.filter(function (list)
                {
                    if(
                        (
                            list.opponent_user.name && list.opponent_user.name.toLowerCase().includes(self.chatData.searchList.keyword.toLowerCase())
                        ) ||
                        (
                            list.booking_data.code_booking && list.booking_data.code_booking.toLowerCase().includes(self.chatData.searchList.keyword.toLowerCase())
                        )
                    )
                    {
                        return true;
                    }
                })
            }
        },

        watch:
        {

        },

        methods: {
            async selectChat(chat_id, user_id, role_id, opponent_user_id, name, photo, booking_id, booking_code, current_role)
            {
                let self = this;
                booking_id = booking_id || '';
                booking_code = booking_code || '';
                current_role = current_role || '';

                if(role_id != '')
                {
                    if(chat_id != '')
                    {
                        let msg_last_index = 0;

                        let newMessage = [];

                        db.collection("message")
                            .where("chat_id",'==',chat_id)
                            .orderBy('_timestamp_created_at','asc')
                            .onSnapshot(async function(querySnapshot)
                            {
                                let totalMessage = querySnapshot.size;
                                let index = 0;
                                let last_index = 0;

                                await querySnapshot.docChanges().forEach(async function(change)
                                {
                                    if (change.type === "added")
                                    {
                                        let data = change.doc.data();
                                        data.id = change.doc.id;
                                        data.created_at_formatted = '';
                                        data.index = index;

                                        if(data.created_at)
                                        {
                                            let date = new Date(data.created_at);
                                            let day = date.getDay();
                                            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                                            let dayName = days[date.getDay()];
                                            let dates = date.getUTCDate();
                                            let month = date.getMonth();
                                            let year = date.getFullYear();

                                            let month_name = function(month)
                                            {
                                                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
                                                return mlist[month];
                                            };

                                            let hours = date.getHours();
                                            let minutes = "0" + date.getMinutes();
                                            let seconds = "0" + date.getSeconds();
                                            let formattedTime = dayName + ', ' + dates + ' ' + month_name(month) + ' ' + year + ', ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

                                            data.created_at_formatted = formattedTime;
                                        }

                                        newMessage.push(data);

                                        if(index == totalMessage - 1)
                                        {
                                            msg_last_index = index;
                                        }

                                        index++;
                                    }

                                    if (change.type === "modified")
                                    {
                                        let data = change.doc.data();
                                        data.id = change.doc.id;
                                        data.created_at_formatted = '';

                                        if(data.created_at)
                                        {
                                            let date = new Date(data.created_at);
                                            let day = date.getDay();
                                            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                                            let dayName = days[date.getDay()];
                                            let dates = date.getUTCDate();
                                            let month = date.getMonth();
                                            let year = date.getFullYear();

                                            let month_name = function(month)
                                            {
                                                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
                                                return mlist[month];
                                            };

                                            let hours = date.getHours();
                                            let minutes = "0" + date.getMinutes();
                                            let seconds = "0" + date.getSeconds();
                                            let formattedTime = dayName + ', ' + dates + ' ' + month_name(month) + ' ' + year + ', ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

                                            data.created_at_formatted = formattedTime;

                                            self.chatData.openedChat.detail[_.findIndex(self.chatData.openedChat.detail, ['id', data.id])].created_at_formatted = data.created_at_formatted;
                                        }
                                    }
                                });

                                var chatContainer = document.querySelector('#listMessagesChat');
                                chatContainer.scrollTop = chatContainer.scrollHeight;

                                console.log(chatContainer.scrollTop)
                            });

                        self.chatData.openedChat.detail = newMessage;

                        console.log('opened_chat', self.chatData.openedChat);
                    }

                    self.chatData.openedChat.logged_user_id = self.userLogged.id;
                    self.chatData.openedChat.opponent_user_id = opponent_user_id;
                    self.chatData.openedChat.form.chat_id = chat_id;
                    self.chatData.openedChat.form.user_id = user_id;
                    self.chatData.openedChat.form.role_id = role_id;
                    self.chatData.openedChat.form.name = name;
                    self.chatData.openedChat.form.user_photo = photo;
                    // self.chatData.openedChat.form.messages = message;
                    self.chatData.openedChat.form.booking_id = booking_id;
                    self.chatData.openedChat.form.booking_code = booking_code;
                    self.chatData.openedChat.form.current_role = current_role;
                }
            },

            async initChat(role_id, booking_id, message, autosend)
            {
                let self = this;
                booking_id = booking_id || '';
                message = message || '';
                autosend = autosend || false;

                await db.collection("chat")
                    .where("user_id",'==',self.userLogged.id)
                    .where("role_id",'==',role_id).limit(1)
                    .get().then(async function(querySnapshot)
                    {
                        if(querySnapshot.size == 0)
                        {
                            await db.collection("chat")
                                .where("user_id",'==',role_id)
                                .where("role_id",'==',self.userLogged.id)
                                .limit(1)
                                .get().then(async function(querySnapshot2)
                                {
                                    if(querySnapshot2.size == 0)
                                    {
                                        if (
                                            role_id != "" &&
                                            typeof role_id !== "undefined"
                                        ) {
                                            await db.collection(func.collectionName("user")).doc(role_id)
                                                .get()
                                                .then(async function (userDoc)
                                                {
                                                    if (userDoc.exists) {
                                                        let userData = userDoc.data();
                                                        userData.id = userDoc.id;
                                                        let opponent_user = userData;
                                                        let opponent_user_id = userData.id;

                                                        await self.selectChat('', self.userLogged.id, role_id, opponent_user_id, (opponent_user && opponent_user.username ? opponent_user.username : ''), (opponent_user && opponent_user.photo ? opponent_user.photo : ''), message, booking_id);

                                                        if(autosend)
                                                        {
                                                            self.sendChat();
                                                        }
                                                    }
                                                })
                                                .catch(function (error) {
                                                });
                                        }

                                        return;
                                    }

                                    querySnapshot2.forEach(async function(doc2)
                                    {
                                        let data = doc2.data();
                                        data.id = doc2.id;

                                        ///opponent
                                        if (
                                            data.user_id != "" &&
                                            typeof data.user_id !== "undefined"
                                        )
                                        {
                                            await db.collection(func.collectionName("user")).doc(data.user_id)
                                                .get()
                                                .then(async function(userDoc)
                                                {
                                                    if (userDoc.exists)
                                                    {
                                                        let userData = userDoc.data();
                                                        userData.id = userDoc.id;
                                                        data.opponent_user = userData;
                                                        data.opponent_user_id = userData.id;

                                                        await self.selectChat(doc2.id, data.user_id, data.role_id, user_id, (data.opponent_user && data.opponent_user.username? data.opponent_user.username : ''), (data.opponent_user && data.opponent_user.photo? data.opponent_user.photo : ''), message, booking_id);

                                                        if(autosend)
                                                        {
                                                            self.sendChat();
                                                        }
                                                    }
                                                })
                                                .catch(function(error) {
                                                });
                                        }
                                    });
                                });
                            return;
                        }

                        querySnapshot.forEach(async function(doc)
                        {
                            let data = doc.data();
                            data.id = doc.id;

                            ///opponent
                            if (
                                data.role_id != "" &&
                                typeof data.role_id !== "undefined"
                            )
                            {
                                await db.collection(func.collectionName("user")).doc(data.role_id)
                                    .get()
                                    .then(async function(userDoc)
                                    {
                                        if (userDoc.exists)
                                        {
                                            let userData = userDoc.data();
                                            userData.id = userDoc.id;
                                            data.opponent_user = userData;
                                            data.opponent_user_id = userData.id;

                                            await self.selectChat(doc.id, data.user_id, data.role_id, role_id, (data.opponent_user && data.opponent_user.username? data.opponent_user.username : ''), (data.opponent_user && data.opponent_user.photo? data.opponent_user.photo : ''), message, booking_id);

                                            if(autosend)
                                            {
                                                self.sendChat();
                                            }
                                        }
                                    })
                                    .catch(function(error) {
                                    });
                            }
                        });
                    });

                self.openChatForm();
            },

            async getChatList()
            {
                let self = this;

                self.chatData.list = [];

                let chatRef = db.collection("chat");

                chatRef
                    .where("role_id",'==',self.userLogged.id)
                    .orderBy('unix_time','desc')
                    .onSnapshot(function(querySnapshot)
                    {
                        self.chatData.total_unread = 0;

                        querySnapshot.docChanges().forEach(async function(change)
                        {
                            if (change.type === "added")
                            {
                                let data = change.doc.data();
                                data.id = change.doc.id;
                                data.chat_id = change.doc.id;
                                data.logged_user_id = self.userLogged.id;

                                data.last_message = data.last_message ? (data.last_message.length > 13 ? data.last_message.substring(0,13)+'...' : data.last_message) : '';

                                data.total_unread = 0;

                                //get unread
                                let refMsgUnread = db.collection("message")
                                    .where("chat_id",'==',data.id)
                                    .where('read','==',0);

                                refMsgUnread.where('from', '<', data.logged_user_id)
                                    .onSnapshot(function(querySnapshotMsg)
                                    {
                                        data.total_unread = querySnapshotMsg.size;
                                        // self.chatData.total_unread = data.total_unread;

                                        refMsgUnread.where('from', '>', data.logged_user_id)
                                            .onSnapshot(function(querySnapshotMsg1)
                                            {
                                                if(querySnapshotMsg1.size > 0)
                                                    data.total_unread =+ querySnapshotMsg1.size;

                                                if(querySnapshotMsg.size > 0 || querySnapshotMsg1.size > 0)
                                                    self.chatData.has_unread_chat = true;
                                                else
                                                    self.chatData.has_unread_chat = false;
                                            });
                                    });

                                if (
                                    data.user_id != "" &&
                                    typeof data.user_id !== "undefined"
                                )
                                {
                                    await db.collection("user").doc(data.user_id)
                                        .get()
                                        .then(function(userDoc)
                                        {
                                            if (userDoc.exists)
                                            {
                                                let userData = userDoc.data();
                                                userData.id = userDoc.id;
                                                data.opponent_user = userData;
                                                data.opponent_user_id = userData.id;
                                            }
                                        })
                                        .catch(function(error) {
                                        });
                                }

                                if (
                                    data.booking_id != "" &&
                                    typeof data.booking_id !== "undefined"
                                )
                                {
                                    await db.collection("booking").doc(data.booking_id)
                                        .get()
                                        .then(function(userDoc)
                                        {
                                            if (userDoc.exists)
                                            {
                                                let bookingData = userDoc.data();
                                                bookingData.id = userDoc.id;
                                                data.booking_data = bookingData;
                                            }
                                        })
                                        .catch(function(error) {
                                        });
                                }

                                self.chatData.list.push(data);

                                self.modifyChatList(data.id, {
                                    unix_time: data.updated_at,
                                    last_message: data.last_message
                                });

                                console.log('chat_added', data)
                            }
                            if (change.type === "modified")
                            {
                                let data = change.doc.data();
                                data.id = change.doc.id;

                                data.last_message = data.last_message ? (data.last_message.length > 13 ? data.last_message.substring(0,13)+'...' : data.last_message) : '';

                                self.modifyChatList(data.id, {
                                    unix_time: data.updated_at,
                                    last_message: data.last_message
                                });

                                console.log('chat_modified', data)
                            }
                        });
                    });

                chatRef
                    .where("user_id",'==',self.userLogged.id)
                    .orderBy('unix_time','desc')
                    .onSnapshot(function(querySnapshot)
                    {
                        querySnapshot.docChanges().forEach(async function(change)
                        {
                            if (change.type === "added")
                            {
                                let data = change.doc.data();
                                data.id = change.doc.id;
                                data.chat_id = change.doc.id;
                                data.logged_user_id = self.userLogged.id;

                                data.last_message = data.last_message ? (data.last_message.length > 13 ? data.last_message.substring(0,13)+'...' : data.last_message) : '';

                                //get unread
                                // db.collection("message")
                                //     .where("chat_id",'==',data.id)
                                //     .where('read','==',0)
                                //     .where('from', '<', data.logged_user_id)
                                //     .onSnapshot(function(querySnapshot)
                                //     {
                                //         data.total_unread = querySnapshot.size;
                                //
                                //         if(querySnapshot.size > 0)
                                //             self.chatData.has_unread_chat = true;
                                //         else
                                //             self.chatData.has_unread_chat = false;
                                //
                                //         // self.chatData.total_unread = data.total_unread;
                                //
                                //         db.collection("message")
                                //             .where("chat_id",'==',data.id)
                                //             .where('read','==',0)
                                //             .where('from', '>', data.logged_user_id)
                                //             .onSnapshot(function(querySnapshot1)
                                //             {
                                //                 data.total_unread = querySnapshot1.size;
                                //
                                //                 if(querySnapshot1.size > 0)
                                //                     self.chatData.has_unread_chat = true;
                                //                 else
                                //                     self.chatData.has_unread_chat = false;
                                //             });
                                //     });

                                if (
                                    data.role_id != "" &&
                                    typeof data.role_id !== "undefined"
                                )
                                {
                                    await db.collection("user").doc(data.role_id)
                                        .get()
                                        .then(function(userDoc)
                                        {
                                            if (userDoc.exists)
                                            {
                                                let userData = userDoc.data();
                                                userData.id = userDoc.id;
                                                data.opponent_user = userData;
                                                data.opponent_user_id = userData.id;
                                            }
                                        })
                                        .catch(function(error) {
                                        });
                                }

                                if (
                                    data.booking_id != "" &&
                                    typeof data.booking_id !== "undefined"
                                )
                                {
                                    await db.collection("booking").doc(data.booking_id)
                                        .get()
                                        .then(function(userDoc)
                                        {
                                            if (userDoc.exists)
                                            {
                                                let bookingData = userDoc.data();
                                                bookingData.id = userDoc.id;
                                                data.booking_data = bookingData;
                                            }
                                        })
                                        .catch(function(error) {
                                        });
                                }

                                self.chatData.list.push(data);

                                self.modifyChatList(data.id, {
                                    unix_time: data.updated_at,
                                    last_message: data.last_message
                                });

                                console.log('chat_added', data)
                            }

                            if (change.type === "modified")
                            {
                                let data = change.doc.data();
                                data.id = change.doc.id;

                                data.last_message = data.last_message ? (data.last_message.length > 13 ? data.last_message.substring(0,13)+'...' : data.last_message) : '';

                                self.modifyChatList(data.id, {
                                    unix_time: data.updated_at,
                                    last_message: data.last_message
                                });

                                console.log('chat_modified', data)
                            }
                        });
                    });

                // self.chatData.list = await _.uniqBy(self.chatData.list, 'logged_user_id');
                self.chatData.list = _.uniqBy(self.chatData.list, 'logged_user_id');

                console.log('chat list', self.chatData.list);
            },

            modifyChatList(chat_id, data)
            {
                let self = this;
                let getChatList = _.find(self.chatData.list, ['chat_id', chat_id]);

                if(getChatList)
                {
                    getChatList.unix_time = data.unix_time ? data.unix_time : 0;
                    getChatList.last_message = data.last_message;
                }

                self.reArrangeChat();
            },

            reArrangeChat()
            {
                let self = this;
                self.chatData.list = _.orderBy( self.chatData.list, ['unix_time'], ['desc']);
            },

            async sendChat()
            {
                let self = this;
                let openedChat = self.chatData.openedChat;

                if(self.chatData.openedChat.form.messages.length > 0)
                {
                    let getMessage = self.chatData.openedChat.form.messages;

                    if(openedChat.form.chat_id != '')
                    {
                        let refChat = db.collection("chat").doc(openedChat.form.chat_id);

                        let refMessages = db.collection("message");

                        refMessages.add({
                            chat_id: self.chatData.openedChat.form.chat_id,
                            _timestamp_created_at: firebase.firestore.FieldValue.serverTimestamp(),
                            created_at: '',
                            from: self.chatData.openedChat.form.role_id,
                            message: getMessage,
                            read: 0,
                            type: 'text',
                            _timestamp_updated_at: firebase.firestore.FieldValue.serverTimestamp(),
                        }).then(async function (response)
                        {
                            if(response.id != '' || response.id != null)
                            {

                                let message_id = response.id;
                                //add new unix time
                                refMessages.doc(response.id).get().then(async function (response_2)
                                {
                                    let convertDate = response_2.data()._timestamp_created_at.toDate();

                                    refChat.update({
                                        unix_time: moment(convertDate).valueOf(),
                                        updated_at: moment(convertDate).format("YYYY-MM-DD HH:mm:ss"),
                                    }).then(async function (response)
                                    {
                                    });

                                    refMessages.doc(response.id).update({
                                        id: message_id,
                                        created_at: moment(convertDate).format("YYYY-MM-DD HH:mm:ss"),
                                        updated_at: moment(convertDate).format("YYYY-MM-DD HH:mm:ss"),
                                        unix_time: moment(convertDate).valueOf(),
                                    }).then(async function () {});
                                });
                            }
                        }).catch(function(error)
                        {
                            console.log(error)
                        });
                    }
                    else
                    {
                        let refChat = db.collection("chat");

                        refChat.add({
                            created_at: new Date().getTime(),
                            user_id: self.chatData.openedChat.form.user_id,
                            role_id: self.chatData.openedChat.form.role_id,
                            updated_at: new Date().getTime(),
                            messages: [
                                {
                                    user_id: self.chatData.openedChat.form.user_id,
                                    role_id: self.chatData.openedChat.form.role_id,
                                    messages: self.chatData.openedChat.form.messages,
                                    booking_id: self.chatData.openedChat.form.booking_id,
                                    image_url: '',
                                    created_at: new Date().getTime(),
                                }
                            ]
                        }).then(async function (response)
                        {
                            if(response.id != '' || response.id != null)
                            {
                                let chat_id = response.id;

                                await refChat.doc(response.id).update({
                                    chat_id: chat_id
                                }).then(async function () {}).catch(function(error) {});
                            }
                        }).catch(function(error) {
                            console.log(error)
                        });
                    }

                    self.chatData.openedChat.form.messages = '';
                }
            },

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

        beforeMount()
        {
            this.getChatList();
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
            $('.dropdown-menu').click(function(e) {
                e.stopPropagation();
            });
        }
    };
</script>

