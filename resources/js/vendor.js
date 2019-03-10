/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
require("./plugin/nicescroll.min");
require("./plugin/chart.min");
window.moment = require("moment");
require("./plugin/fullcalendar.min");
require("./plugin/daterangepicker");
require("./plugin");
require("./plugin/bootstrap-select.min");
window.Vue = require("vue");

window.NProgress = require("nprogress/nprogress");
window.swal = require("sweetalert2");
window.func = require("./lib/func");
window.VueRouter = require("vue-router").default;
window.VueGoogleMaps = require("vue2-google-maps");

window.firebase = require("firebase");
window.FireStoreParser = require("firestore-parser");
window.axios = require("axios");
