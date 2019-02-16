
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

Vue.directive('selectpicker', {
    twoWay: true,
    params: ['select-key','option-value','option-label','populate-options-key','api-selected','api-selected-label','api-selected-value','api','api-url','api-options-value','api-options-text', 'api-custom-content', 'api-custom-content-type', 'api-custom-content-subtext-1', 'api-custom-content-subtext-2'],
    paramWatchers: {
        apiUrl: function (val, oldVal)
        {
            if(this.params.api == 'true')
            {
                this.load("",true);
            }
        }
    },
    load:function (val, api)
    {
        let self = this;
        let ret = $(this.el).selectpicker({
            style: ' btn-sm'
        });

        if(self.params.populateOptionsKey)
        {
            // 1. first, after load data, send event with key
            // broadcast.$emit('selectepicker:populateOptions:key', dtd_pricing);
            //
            // 2. in html like this
            // populate-options-key="data-dtd"
            // option-label="rates"
            // option-value="id"

            broadcast.$on('selectepicker:populateOptions:' + self.params.populateOptionsKey,  (data) =>
            {
                ret.html('');
                ret.append('<option value="">(please select)</option>').selectpicker('refresh');

                if(Array.isArray(data))
                {
                    _.forEach(data, function (v, k)
                    {
                        if(v[self.params.optionValue] == val)
                            ret.append('<option value="'+v[self.params.optionValue]+'" selected>'+v[self.params.optionLabel]+'</option>').selectpicker('refresh');
                        else
                            ret.append('<option value="'+v[self.params.optionValue]+'">'+v[self.params.optionLabel]+'</option>').selectpicker('refresh');
                    });
                }
                else
                {
                    if(data[self.params.optionValue] == val)
                        ret.append('<option value="'+data[self.params.optionValue]+'" selected>'+data[self.params.optionLabel]+'</option>').selectpicker('refresh');
                    else
                        ret.append('<option value="'+data[self.params.optionValue]+'">'+data[self.params.optionLabel]+'</option>').selectpicker('refresh');
                }
            });
        }

        // broadcast.$on('selectepicker:selected:' + self.params.selectKey,  (data, valueCol, labelCol) =>
        // {
        //     ret.html('');
        //     ret.append('<option value="'+data[valueCol]+'" selected>'+data[labelCol]+'</option>').selectpicker('refresh');
        // });

        if(api)
        {
            // #EXAMPLE USING
            // api="true"
            // api-url="url('admin/debtor/api?action=get_all_debtor&select=code,name')"
            // api-options-value="code"
            // api-options-text="name"
            //:api-url-param="formData.module"
            // data-live-search="true"
            let url = self.params.apiUrl;

            let options = {
                ajax: {
                    url: url,
                    type    : 'GET',
                    dataType: 'json',
                    data    : {
                        q: '@{{{q}}}'
                    }
                },
                locale        : {
                    emptyTitle: 'Select and Begin Typing'
                },
                requestDelay:300,
                cache:true,
                // log           : 3,
                preprocessData: function (data)
                {
                    let i, l = data.length, array = [];
                    if (l) {
                        for (i = 0; i < l; i++)
                        {
                            let r = data[i];
                            let content = null;

                            array.push($.extend(true, r, {
                                value: r[self.params.apiOptionsValue],
                                text : r[self.params.apiOptionsText],
                                data : {
                                    content: content
                                }
                            }))
                        }
                    }

                    return array;
                },
                preserveSelectedPosition:'after',
                preserveSelected:true
            };
            ret.ajaxSelectPicker(options);
        }

        if(self.params.apiSelected)
        {
            ret.html('<option value="'+self.params.apiSelectedValue+'" selected>'+self.params.apiSelectedLabel+'</option>').selectpicker('refresh');
        }

        if(val != null)
        {
            ret.selectpicker('val', val);
        }

        return ret;
    },
    bind: function()
    {
        this.load();
    },
    update: function(nv, ov)
    {
        let api = false;

        if(this.params.api == 'true')
        {
            api = true;
        }

        return this.load(nv, api);
    }
});
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
