/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require("./bootstrap");

window.func = require("./lib/func");
window.swal = require("sweetalert2");

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

//firebase

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
