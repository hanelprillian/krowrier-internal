/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.func = require("./lib/func");
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
window.VueGoogleMaps = require("vue2-google-maps");
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyBZyzX8NH7rJ_-GUSsgNlrW-FtvFY546us",
        libraries: "places,drawing"
    }
});

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
