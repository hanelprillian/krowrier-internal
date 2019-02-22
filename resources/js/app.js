/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require("vue");
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyBZyzX8NH7rJ_-GUSsgNlrW-FtvFY546us",
        libraries: "places,drawing" // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)

        //// If you want to set the version, you can do so:
        // v: '3.26',
    }

    //// If you intend to programmatically custom event listener code
    //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
    //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
    //// you might need to turn this on.
    // autobindAllEvents: false,

    //// If you want to manually install components, e.g.
    //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    //// Vue.component('GmapMarker', GmapMarker)
    //// then disable the following:
    // installComponents: true,
});

window.VueRouter = require("vue-router").default;
window.NProgress = require("nprogress/nprogress");
window.swal = require("sweetalert2");
window.func = require("./lib/func");

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
window.DashboardComponent = require("./components/DashboardComponent").default;
window.LoginComponent = require("./components/Login").default;
window.App = require("./components/App").default;

const router = require("./route").default;

let app = "";

firebase.auth().onAuthStateChanged(() => {
    window.IsLogged = firebase.auth().currentUser ? true : false;

    if (!app) {
        app = new Vue({
            el: "#app",
            components: { App },
            router
        });
    }
});
