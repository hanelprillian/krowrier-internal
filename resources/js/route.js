Vue.use(VueRouter);
const rootInternal = "/internal";

function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `./components/${view}.vue`)
}

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: rootInternal + "/auth/login",
            name: "login",
            component: loadView("Login")
        },
        {
            path: rootInternal + "/",
            redirect: rootInternal + "/home"
        },
        {
            path: rootInternal + "/home",
            name: "internal->home",
            component: loadView("DashboardComponent"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/service-package",
            name: "internal->service_package",
            component: loadView("ServicePackage/Index"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/service-package/new",
            name: "internal->service_package->new",
            component: loadView("ServicePackage/Form"),
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/service-package/:id",
            name: "internal->service_package->form",
            component: loadView("ServicePackage/Form"),
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/company",
            name: "internal->company",
            component: loadView("Company/Index"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/company/new",
            name: "internal->company->new",
            component: loadView("Company/Form"),
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/company/:id",
            name: "internal->company->form",
            component: loadView("Company/Form"),
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/hub",
            name: "internal->hub",
            component: loadView("Hub/Index"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/hub/new",
            name: "internal->hub->new",
            component: loadView("Hub/Form"),
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/hub/:id",
            name: "internal->hub->form",
            component: loadView("Hub/Form"),
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/drop-point",
            name: "internal->drop_point",
            component: loadView("DropPoint/Index"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/drop-point/new",
            name: "internal->drop_point->new",
            component: loadView("DropPoint/Form"),
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/drop-point/:id",
            name: "internal->drop_point->form",
            component: loadView("DropPoint/Form"),
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/customer",
            name: "internal->customer",
            component: loadView("Customer/Index"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/customer/new",
            name: "internal->customer->new",
            component: loadView("Customer/Form"),
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/customer/:id",
            name: "internal->customer->edit",
            component: loadView("Customer/Form"),
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/courier",
            name: "internal->courier",
            component: loadView("Courier/Index"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/courier/new",
            name: "internal->courier->new",
            component: loadView("Courier/Form"),
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/courier/:id",
            name: "internal->courier->edit",
            component: loadView("Courier/Form"),
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/feeder-courier",
            name: "internal->feeder_courier",
            component: loadView("FeederCourier/Index"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/feeder-courier/new",
            name: "internal->feeder_courier->new",
            component: loadView("FeederCourier/Form"),
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/feeder-courier/:id",
            name: "internal->feeder_courier->edit",
            component: loadView("FeederCourier/Form"),
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },

        // booking
        {
            path: rootInternal + "/booking",
            name: "internal->booking",
            component: loadView("Booking/Index"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/booking/new",
            name: "internal->booking->new",
            component: loadView("Booking/Form"),
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/booking/:id",
            name: "internal->booking->edit",
            component: loadView("Booking/Form"),
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/user",
            name: "internal->user",
            component: loadView("User/Index"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/user/new",
            name: "internal->user->new",
            component: loadView("User/Form"),
            props: { mode: "add" },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: rootInternal + "/user/:id",
            name: "internal->user->edit",
            component: loadView("User/Form"),
            props: { mode: "edit" },
            meta: {
                requiresAuth: true
            }
        },

        // support room
        {
            path: rootInternal + "/support-room",
            name: "internal->support_room",
            component: loadView("SupportRoom/Index"),
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
    window.scroll(0,0);
});

export default router;
