
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');
window.VueRouter = require('vue-router').default;
window.NProgress = require('nprogress/nprogress');
window.swal = require('sweetalert2');

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
const rootInternal = '/internal';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: rootInternal+'/',
            name: 'internal->home',
            component: Dashboard
        },
        {
            path: rootInternal+'/service-package',
            name: 'internal->service_package',
            component: require('./components/ServicePackage/Index').default,
        },
        {
            path: rootInternal+'/service-package/new',
            name: 'internal->service_package->new',
            component: require('./components/ServicePackage/Form').default,
            props: { mode: 'add' }
        },
        {
            path: rootInternal+'/service-package/:id',
            name: 'internal->service_package->form',
            component: require('./components/ServicePackage/Form').default,
            props: { mode: 'edit' }
        },
        {
            path: rootInternal+'/hub',
            name: 'internal->hub',
            component: require('./components/Hub/Index').default,
        },
        {
            path: rootInternal+'/hub/new',
            name: 'internal->hub->new',
            component: require('./components/Hub/Form').default,
            props: { mode: 'add' }
        },
        {
            path: rootInternal+'/hub/:id',
            name: 'internal->hub->form',
            component: require('./components/Hub/Form').default,
            props: { mode: 'edit' }
        },
        {
            path: rootInternal+'/customer',
            name: 'internal->customer',
            component: require('./components/Customer/Index').default
        },
        {
            path: rootInternal+'/customer/new',
            name: 'internal->customer->new',
            component: require('./components/Customer/Form').default,
            props: { mode: 'add' }
        },
        {
            path: rootInternal+'/customer/:id',
            name: 'internal->customer->edit',
            component: require('./components/Customer/Form').default,
            props: { mode: 'edit' }
        },
        {
            path: rootInternal+'/courier',
            name: 'internal->courier',
            component: require('./components/Courier/Index').default
        },
        {
            path: rootInternal+'/courier/new',
            name: 'internal->courier->new',
            component: require('./components/Courier/Form').default,
            props: { mode: 'add' }
        },
        {
            path: rootInternal+'/courier/:id',
            name: 'internal->courier->edit',
            component: require('./components/Courier/Form').default,
            props: { mode: 'edit' }
        },
        {
            path: rootInternal+'/feeder-courier',
            name: 'internal->feeder_courier',
            component: require('./components/FeederCourier/Index').default
        },
        {
            path: rootInternal+'/feeder-courier/new',
            name: 'internal->feeder_courier->new',
            component: require('./components/FeederCourier/Form').default,
            props: { mode: 'add' }
        },
        {
            path: rootInternal+'/feeder-courier/:id',
            name: 'internal->feeder_courier->edit',
            component: require('./components/FeederCourier/Form').default,
            props: { mode: 'edit' }
        },
        {
            path: rootInternal+'/user',
            name: 'internal->user',
            component: require('./components/User/Index').default
        },
        {
            path: rootInternal+'/user/new',
            name: 'internal->user->new',
            component: require('./components/User/Form').default,
            props: { mode: 'add' }
        },
        {
            path: rootInternal+'/user/:id',
            name: 'internal->user->edit',
            component: require('./components/User/Form').default,
            props: { mode: 'edit' }
        },
    ],
    linkActiveClass: "active",
});
router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start()
    }
    next()
});
router.afterEach((to, from) => {
    NProgress.done()
});

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
