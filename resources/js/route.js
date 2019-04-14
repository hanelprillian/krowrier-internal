Vue.use(VueRouter);
const rootInternal = "/internal";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: rootInternal + "/auth/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: rootInternal + "/",
            redirect: rootInternal + "/home"
        },
        {
            path: rootInternal + "/home",
            name: "internal->home",
            component: DashboardComponent,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/service-package",
            name: "internal->service_package",
            component: require("./components/ServicePackage/Index").default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/service-package/new",
            name: "internal->service_package->new",
            component: require("./components/ServicePackage/Form").default,
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/service-package/:id",
            name: "internal->service_package->form",
            component: require("./components/ServicePackage/Form").default,
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/company",
            name: "internal->company",
            component: require("./components/Company/Index").default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/company/new",
            name: "internal->company->new",
            component: require("./components/Company/Form").default,
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/company/:id",
            name: "internal->company->form",
            component: require("./components/Company/Form").default,
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/hub",
            name: "internal->hub",
            component: require("./components/Hub/Index").default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/hub/new",
            name: "internal->hub->new",
            component: require("./components/Hub/Form").default,
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/hub/:id",
            name: "internal->hub->form",
            component: require("./components/Hub/Form").default,
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/drop-point",
            name: "internal->drop_point",
            component: require("./components/DropPoint/Index").default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/drop-point/new",
            name: "internal->drop_point->new",
            component: require("./components/DropPoint/Form").default,
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/drop-point/:id",
            name: "internal->drop_point->form",
            component: require("./components/DropPoint/Form").default,
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/customer",
            name: "internal->customer",
            component: require("./components/Customer/Index").default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/customer/new",
            name: "internal->customer->new",
            component: require("./components/Customer/Form").default,
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/customer/:id",
            name: "internal->customer->edit",
            component: require("./components/Customer/Form").default,
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/courier",
            name: "internal->courier",
            component: require("./components/Courier/Index").default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/courier/new",
            name: "internal->courier->new",
            component: require("./components/Courier/Form").default,
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/courier/:id",
            name: "internal->courier->edit",
            component: require("./components/Courier/Form").default,
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/feeder-courier",
            name: "internal->feeder_courier",
            component: require("./components/FeederCourier/Index").default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/feeder-courier/new",
            name: "internal->feeder_courier->new",
            component: require("./components/FeederCourier/Form").default,
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/feeder-courier/:id",
            name: "internal->feeder_courier->edit",
            component: require("./components/FeederCourier/Form").default,
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },

        // booking
        {
            path: rootInternal + "/booking",
            name: "internal->booking",
            component: require("./components/Booking/Index").default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/booking/new",
            name: "internal->booking->new",
            component: require("./components/Booking/Form").default,
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/booking/:id",
            name: "internal->booking->edit",
            component: require("./components/Booking/Form").default,
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/user",
            name: "internal->user",
            component: require("./components/User/Index").default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/user/new",
            name: "internal->user->new",
            component: require("./components/User/Form").default,
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/user/:id",
            name: "internal->user->edit",
            component: require("./components/User/Form").default,
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        }
    ],
    linkActiveClass: "active"
});

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start();
    }

    const requiresAuth = to.matched.some((r) => r.meta.requiresAuth);
    const currentUser = firebase.auth().currentUser;

    if (requiresAuth && !currentUser) next(rootInternal + "/auth/login");
    else next();
});
router.afterEach((to, from) => {
    NProgress.done();
});

export default router;
