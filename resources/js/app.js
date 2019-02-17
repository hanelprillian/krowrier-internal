/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require("vue");
window.VueRouter = require("vue-router").default;
window.NProgress = require("nprogress/nprogress");
window.swal = require("sweetalert2");

//firebase
window.firebase = require("firebase");

var config = {
    apiKey: "AIzaSyAq1vd-KfTT7IF7FH7PTozE2Tru3Pk8Bvw",
    authDomain: "krowrier.firebaseapp.com",
    databaseURL: "https://krowrier.firebaseio.com",
    projectId: "krowrier",
    storageBucket: "krowrier.appspot.com",
    messagingSenderId: "698990288301"
};

firebase.initializeApp(config);

window.db = firebase.firestore();

//components
window.Dashboard = require("./components/DashboardComponent").default;
window.App = require("./components/App").default;

const router = require("./route").default;

const app = new Vue({
    el: "#app",
    components: { App },
    router
});
