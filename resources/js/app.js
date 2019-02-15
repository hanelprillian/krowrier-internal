
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');
window.VueRouter = require('vue-router').default;
window.NProgress = require('nprogress/nprogress');

//components
window.Dashboard = require('./components/DashboardComponent').default;
window.App = require('./components/App').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.use(VueRouter);
const rootIntenral = '/internal';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: rootIntenral+'/',
            name: 'internal->home',
            component: Dashboard
        },
        {
            path: rootIntenral+'/example',
            name: 'internal->example',
            component: require('./components/ExampleComponent').default,
        },
    ],
});
router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start()
    }
    next()
})

router.afterEach((to, from) => {
    NProgress.done()
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: {App},
    router,
});
