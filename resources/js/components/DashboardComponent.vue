<template>
    <div class="container-fluid">
        <!-- Begin Page Header-->
        <div class="row">
            <div class="page-header">
                <div class="d-flex align-items-center">
                    <h2 class="page-header-title">
                        Dashboard |
                        <small v-if="filter_dashboard.method == 'current_year' || filter_dashboard.method == 'by_year'">{{filter_dashboard._selected_year_formatted}}</small>
                        <small v-if="filter_dashboard.method == 'by_month'">{{filter_dashboard._selected_month_format}} </small>
                        <small v-if="filter_dashboard.method == 'date_range'">{{filter_dashboard._from_date_format}} <small>to</small> {{filter_dashboard._to_date_format}}</small>
                    </h2>
                    <div>
                        <div class="page-header-tools">
                            <button data-toggle="collapse" class="btn btn-gradient-03 btn-sm" data-target="#filterSection">
                                &nbsp; <i class="ion-ios-list-outline"></i> Filter &nbsp;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Page Header -->
        <div class="row">
            <div class="col-xl-12">
                <!--collapsed collapse-->
                <div class="collapse collapsed" id="filterSection">
                    <div class="widget has-shadow">
                        <div class="widget-header bordered no-actions">
                            <h4>Filter</h4>
                        </div>
                        <div class="widget-body">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <div class="form-group">
                                        <small>
                                            <label for=""><strong>Filter Method</strong></label>
                                        </small>
                                        <select name="" v-model="filter_dashboard.method" id="" class="form-control formSelect btn-sm no-margin">
                                            <option value="current_year">Current Year ({{filter_dashboard.current_year}})</option>
                                            <option value="by_year">By Year</option>
                                            <option value="by_month">By Month</option>
                                            <option value="date_range">By Date</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-2" v-if="filter_dashboard.method == 'by_year'">
                                    <div class="form-group">
                                        <small>
                                            <label for="">Tahun</label>
                                        </small>
                                        <datepicker :minimumView="'year'" :maximumView="'year'" v-model="filter_dashboard.selected_year" input-class="form-control" format="yyyy"></datepicker>
                                    </div>
                                </div>
                                <template v-if="filter_dashboard.method == 'by_month'">
                                    <div class="col-lg-2 col-md-2 col-sm-2">
                                        <div class="form-group">
                                            <small>
                                                <label for="">Select Month</label>
                                            </small>
                                            <datepicker :minimumView="'month'" :maximumView="'year'" v-model="filter_dashboard.selected_month" input-class="form-control" format="yyyy/MM"></datepicker>
                                        </div>
                                    </div>
                                </template>
                                <template v-if="filter_dashboard.method == 'date_range'">
                                    <div class="col-lg-2 col-md-2 col-sm-2">
                                        <div class="form-group">
                                            <small>
                                                <label for="">Start Date</label>
                                            </small>
                                            <datepicker :minimumView="'date'" :maximumView="'year'" v-model="filter_dashboard.from_date" input-class="form-control" format="yyyy/MM/dd"></datepicker>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-2">
                                        <div class="form-group">
                                            <small>
                                                <label for="">End Date</label>
                                            </small>
                                            <datepicker :minimumView="'date'" :maximumView="'year'" v-model="filter_dashboard.to_date" input-class="form-control" format="yyyy/MM/dd"></datepicker>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="row flex-row">
            <div class="col-xl-4 col-md-6 col-sm-6">
                <div class="widget widget-12 has-shadow">
                    <div class="widget-body">
                        <div class="media">
                            <div class="align-self-center ml-5 mr-5">
                                <i class="ion-location"></i>
                            </div>

                            <div class="media-body align-self-center">
                                <div class="title">
                                    <span v-if="total_data.drop_point.loading">Calculating...</span>
                                    <span v-if="!total_data.drop_point.loading">{{ currency(total_data.drop_point.data) }}</span>
                                </div>
                                <div class="" style="font-size:11pt">
                                    Total Drop Point
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-md-6 col-sm-6">
                <div class="widget widget-12 has-shadow">
                    <div class="widget-body">
                        <div class="media">
                            <div class="align-self-center ml-5 mr-5">
                                <i class="ion-ios-contact"></i>
                            </div>

                            <div class="media-body align-self-center">
                                <div class="title">
                                    <span v-if="total_data.customers.loading">Calculating...</span>
                                    <span v-if="!total_data.customers.loading">{{ currency(total_data.customers.data) }}</span>
                                </div>
                                <div class="" style="font-size:11pt">
                                    Total Customers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-md-6 col-sm-6">
                <div class="widget widget-12 has-shadow">
                    <div class="widget-body">
                        <div class="media">
                            <div class="align-self-center ml-5 mr-5">
                                <i class="ion-android-walk"></i>
                            </div>

                            <div class="media-body align-self-center">
                                <div class="title text-facebook">
                                    <span v-if="total_data.couriers.loading">Calculating...</span>
                                    <span v-if="!total_data.couriers.loading">{{ currency(total_data.couriers.data) }}</span>
                                </div>
                                <div class="" style="font-size:11pt">
                                    Total Couriers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-12">
                <!-- Vertical Bar 02 -->
                <div class="widget has-shadow">
                    <div class="widget-header bordered no-actions">
                        <h4 class="float-left">
                            Booking Statistics |
                            <small v-if="filter_dashboard.method == 'current_year' || filter_dashboard.method == 'by_year'">{{filter_dashboard._selected_year_formatted}}</small>
                            <small v-if="filter_dashboard.method == 'by_month'">{{filter_dashboard._selected_month_format}}</small>
                            <small v-if="filter_dashboard.method == 'date_range'">{{filter_dashboard._from_date_format}} <small>to</small> {{filter_dashboard._to_date_format}}</small>
                        </h4>
                        <button class="btn btn-info btn-sm float-right" @click.prevent="refreshDashboardStatistic()">Refresh</button>
                        <div class="clearfix"></div>
                    </div>
                    <div class="widget-body">
                        <h4>
                            Total Booking: &nbsp;
                            <small>
                                <span v-if="total_data.bookings.loading">Calculating...</span>
                                <span v-if="!total_data.bookings.loading">{{ total_data.bookings.data }}</span>
                            </small>
                        </h4>
                        <vue-apex-charts v-if="filter_dashboard.method == 'by_year' || filter_dashboard.method == 'current_year' || filter_dashboard.method == 'date_range' || filter_dashboard.method == 'by_month'" width="100%" height="300" type="bar" :options="totalBookingChartOptions" :series="totalBookingChartSeries"></vue-apex-charts>
                        <br>
                        <h4>Total Charges: &nbsp;
                            <small>
                                <span v-if="total_data.bookings.loading">Calculating...</span>
                                <span v-if="!total_data.bookings.loading">Rp. {{ currency(total_data.booking_charges.data) }}</span>
                            </small>
                        </h4>
                        <vue-apex-charts v-if="filter_dashboard.method == 'by_year' || filter_dashboard.method == 'current_year' || filter_dashboard.method == 'date_range' || filter_dashboard.method == 'by_month'" width="100%" height="300" type="bar" :options="chargesBookingChartOptions" :series="chargesBookingChartSeries"></vue-apex-charts>
                    </div>
                </div>
                <!-- End Vertical Bar 02 -->
            </div>
            <div class="col-md-12 pb-3">
                <h3>
                    New Request
                </h3>
            </div>
            <div class="col-xl-6">
                <div class="widget widget-07 has-shadow">
                    <!-- Begin Widget Header -->
                    <div class="widget-header bordered d-flex align-items-center">
                        <h2>New Feeder</h2>
                    </div>
                    <!-- End Widget Header -->
                    <!-- Begin Widget Body -->
                    <div class="table-responsive table-scroll">
                        <table class="table table-hover mb-0">
                            <thead>
                            <tr>
                                <th width="50%">Name</th>
                                <th width="30%">Phone</th>
                                <th width="20%">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="recentFeeder.data.length == 0">
                                <td class="warning text-center" colspan="3">No New Feeder</td>
                            </tr>
                            <template v-for="d in recentFeeder.data">
                                <tr>
                                    <td>
                                        <router-link tag="a" :to="'/internal/feeder-courier/'+d.id">{{ d.user.name }}</router-link>
                                    </td>
                                    <td>{{ d.user.phone }}</td>
                                    <td>
                                        <small
                                                v-if="d.active == 0"
                                                class="badge-text text-dark warning badge-text-small"
                                        >Pending</small>
                                        <small v-if="d.active == 1" class="badge-text success badge-text-small">Active</small>
                                        <small v-if="d.active == 2" class="badge-text danger badge-text-small">Suspended</small>
                                    </td>
                                </tr>
                            </template>
                            <tr>
                                <td colspan="3" class="primary">
                                    <router-link
                                            tag="button"
                                            class="btn btn-block btn-primary"
                                            :to="'/internal/feeder-courier'"
                                    >More</router-link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="widget widget-07 has-shadow">
                    <!-- Begin Widget Header -->
                    <div class="widget-header bordered d-flex align-items-center">
                        <h2>New Courier</h2>
                    </div>
                    <!-- End Widget Header -->
                    <!-- Begin Widget Body -->
                    <div class="table-responsive table-scroll">
                        <table class="table table-hover mb-0">
                            <thead>
                            <tr>
                                <th width="50%">Name</th>
                                <th width="30%">Phone</th>
                                <th width="20%">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="recentCourier.data.length == 0">
                                <td class="warning text-center" colspan="3">No New Courier</td>
                            </tr>
                            <template v-for="d in recentCourier.data">
                                <tr>
                                    <td>
                                        <router-link tag="a" :to="'/internal/courier/'+d.id">{{ d.user.name }}</router-link>
                                    </td>
                                    <td>{{ d.user.phone }}</td>
                                    <td>
                                        <small
                                                v-if="d.active == 0"
                                                class="badge-text text-dark warning badge-text-small"
                                        >Pending</small>
                                        <small v-if="d.is_active == 1" class="badge-text success badge-text-small">Active</small>
                                        <small v-if="d.is_active == 2" class="badge-text danger badge-text-small">Suspended</small>
                                    </td>
                                </tr>
                            </template>
                            <tr>
                                <td colspan="3" class="primary">
                                    <router-link tag="button" class="btn btn-block btn-primary" :to="'/internal/courier'">More</router-link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="clearfix"></div>
    </div>
</template>

<script>
    // import { GChart } from 'vue-google-charts'
    import VueApexCharts from 'vue-apexcharts';
    import FormUtill from "../form-utill";
    import Datepicker from "vuejs-datepicker";

    export default {
        components: {
            Datepicker,
            VueApexCharts
        },
        data() {
            return {
                totalBookingChartOptions: {
                    chart: {
                        events: {
                            dataPointSelection: function(event, chartContext, config) {
                                console.log(chartContext, config);
                            }
                        }
                    },
                    xaxis: {
                        categories: []
                    },

                    colors: ["#002BFE", "#83fe48"],
                },

                chargesBookingChartOptions: {
                    chart: {
                        events: {
                            dataPointSelection: function(event, chartContext, config) {
                                console.log(chartContext, config);
                            }
                        }
                    },
                    xaxis: {
                        categories: []
                    },
                    yaxis: {
                        labels: {
                            formatter: function (value) {
                                return "Rp. " + func.currency_number(value);
                            }
                        },
                    },
                    colors: ["#9aca48"],
                },

                totalBookingChartSeries: [
                    {
                        name: 'Total',
                        data: [0]
                    },
                ],

                chargesBookingChartSeries: [
                    {
                        name: 'Charges',
                        data: [0]
                    },
                ],

                filter_dashboard: {
                    // there are methods:
                    // all
                    // current_year
                    // by_month
                    // by_year
                    // date_range
                    method: 'current_year',

                    selected_year: moment().format("YYYY"),
                    _selected_year_formatted: moment().format("YYYY"),

                    from_month: moment().format("YYYY/MM"),
                    _from_month_format: moment().format("MMMM YYYY"),
                    to_month: moment().format("YYYY/MM"),
                    _to_month_format: moment().format("MMMM YYYY"),

                    selected_month: moment().format("YYYY/MM"),
                    _selected_month_format: moment().format("MMMM YYYY"),

                    from_date: moment().format("YYYY/MM/DD"),
                    _from_date_format: moment().format("DD MMMM YYYY"),
                    to_date: moment().format("YYYY/MM/DD"),
                    _to_date_format: moment().format("DD MMMM YYYY"),

                    current_year: moment().format("YYYY"),
                },

                total_data: {
                    users: {
                        data: 0,
                        loading: true
                    },
                    drop_point: {
                        data: 0,
                        loading: true
                    },
                    bookings: {
                        data: 0,
                        loading: true
                    },
                    booking_charges: {
                        data: 0,
                        loading: true
                    },
                    customers: {
                        data: 0,
                        loading: true
                    },
                    couriers: {
                        data: 0,
                        loading: true
                    }
                },

                recentFeeder: {
                    data: [],
                    loading: true
                },
                recentCourier: {
                    data: [],
                    loading: true
                }
            };
        },

        watch:
            {
                "filter_dashboard.selected_year" ()
                {
                    let self = this;

                    if(self.filter_dashboard.selected_year != '')
                    {
                        self.filter_dashboard._selected_year_formatted = self.filter_dashboard.selected_year != '' ? moment(self.filter_dashboard.selected_year).format(
                            "YYYY"
                        ) : moment().format("YYYY");

                        self.getBookingStatisticsByMonth(self.filter_dashboard._selected_year_formatted);
                        self.initCounter();
                    }
                },

                "filter_dashboard.method" ()
                {
                    let self = this;

                    if(self.filter_dashboard.method == 'current_year')
                    {
                        self.filter_dashboard.selected_year = self.filter_dashboard.current_year;
                        self.getBookingStatisticsByMonth(self.filter_dashboard.current_year);
                        self.initCounter();
                    }
                    else if(self.filter_dashboard.method == 'by_month')
                    {
                        self.getBookingStatisticsByDate(moment(self.filter_dashboard.selected_month).startOf("month").toDate(), moment(self.filter_dashboard.selected_month).endOf("month").toDate());
                        self.initCounter();
                    }
                    else if(self.filter_dashboard.method == 'date_range')
                    {
                        self.getBookingStatisticsByDate();
                        self.initCounter();
                    }
                },

                "filter_dashboard.selected_month" ()
                {
                    this.filter_dashboard._selected_month_format = this.filter_dashboard.selected_month != '' ? moment(this.filter_dashboard.selected_month).format(
                        "MMMM YYYY"
                    ) : moment().format("MMMM YYYY");

                    if(this.filter_dashboard.method == 'by_month' && this.filter_dashboard.selected_month != '')
                    {
                        this.getBookingStatisticsByDate(moment(this.filter_dashboard.selected_month).startOf("month").toDate(), moment(this.filter_dashboard.selected_month).endOf("month").toDate());
                        this.initCounter();
                    }
                },

                "filter_dashboard.from_date" ()
                {
                    this.filter_dashboard._from_date_format = this.filter_dashboard.from_date != '' ? moment(this.filter_dashboard.from_date).format(
                        "DD MMMM YYYY"
                    ) : moment().format("DD MMMM YYYY");

                    if(this.filter_dashboard.method == 'date_range' && this.filter_dashboard.from_date != '' && this.filter_dashboard.to_date != '')
                    {
                        this.getBookingStatisticsByDate();
                        this.initCounter();
                    }
                },

                "filter_dashboard.to_date" ()
                {
                    this.filter_dashboard._to_date_format = this.filter_dashboard.to_date != '' ? moment(this.filter_dashboard.to_date).format(
                        "DD MMMM YYYY"
                    ) : moment().format("DD MMMM YYYY");

                    if(this.filter_dashboard.method == 'date_range' && this.filter_dashboard.from_date != '' && this.filter_dashboard.to_date != '')
                    {
                        this.getBookingStatisticsByDate();
                        this.initCounter();
                    }
                }
            },

        methods: {
            currency(val)
            {
                let ret = 0;

                if(val)
                    ret = func.currency_number(val);

                return ret;
            },

            refreshDashboardStatistic()
            {
                let self = this;

                if(self.filter_dashboard.method == 'current_year')
                {
                    self.filter_dashboard.selected_year = self.filter_dashboard.current_year;
                    self.getBookingStatisticsByMonth(self.filter_dashboard.current_year);
                    self.initCounter();
                }
                else if(self.filter_dashboard.method == 'date_range')
                {
                    self.getBookingStatisticsByDate();
                    self.initCounter();
                }
            },

            async getRecentFeederRegistered()
            {
                db
                    .collection("feeder")
                    .where("active", "==", 0)
                    .limit(10)
                    .onSnapshot(async documentSnapshots => {
                        if (documentSnapshots.empty) {
                            this.recentFeeder.data = [];
                            this.recentFeeder.loading = false;

                            return;
                        }

                        documentSnapshots.forEach(async doc => {
                            let data = doc.data();
                            data.id = doc.id;
                            if (
                                data.user_id != "" &&
                                typeof data.user_id !== "undefined"
                            ) {
                                await db
                                    .collection("user")
                                    .doc(data.user_id)
                                    .get()
                                    .then(doc1 => {
                                        if (doc1.exists) {
                                            data.user = doc1.data();
                                        }
                                    });
                            }

                            this.recentFeeder.data.push(data);
                        });

                        this.recentFeeder.loading = false;
                    });
            },

            async getRecentCourierRegistered()
            {
                db
                    .collection("courier")
                    .where("active", "==", 0)
                    .limit(10)
                    .onSnapshot(async documentSnapshots => {
                        if (documentSnapshots.empty) {
                            this.recentCourier.data = [];
                            this.recentCourier.loading = false;

                            return;
                        }

                        documentSnapshots.forEach(async doc => {
                            let data = doc.data();
                            data.id = doc.id;
                            if (
                                data.user_id != "" &&
                                typeof data.user_id !== "undefined"
                            ) {
                                await db
                                    .collection("user")
                                    .doc(data.user_id)
                                    .get()
                                    .then(doc1 => {
                                        if (doc1.exists) {
                                            data.user = doc1.data();
                                        }
                                    });
                            }

                            this.recentCourier.data.push(data);
                        });

                        this.recentCourier.loading = false;
                    });
            },

            async initCounter()
            {
                let self = this;

                this.total_data.users.loading = true;

                db
                    .collection("user")
                    .get()
                    .then(snap => {
                        this.total_data.users.data = snap.size;
                        this.total_data.users.loading = false;
                    });

                //counter droppoint
                this.total_data.drop_point.loading = true;

                let queryDropPoint = db
                    .collection("drop_point")
                    .where("create_unix_time" ,'>=', moment(this.filter_dashboard.current_year.toString()).startOf('year').valueOf())
                    .where("create_unix_time" ,'<=', moment(this.filter_dashboard.current_year.toString()).endOf('year').valueOf());

                if(self.filter_dashboard.method == 'by_year')
                {
                    queryDropPoint =  db
                        .collection("drop_point")
                        .where("create_unix_time" ,'>=', moment(this.filter_dashboard.selected_year.toString()).startOf('year').valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_dashboard.selected_year.toString()).endOf('year').valueOf());
                }
                else if(self.filter_dashboard.method == 'by_month')
                {
                    queryDropPoint =  db
                        .collection("drop_point")
                        .where("create_unix_time" ,'>=', moment(this.filter_dashboard.from_month.toString()).startOf('month').valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_dashboard.to_month.toString()).endOf('month').valueOf());
                }
                else if(self.filter_dashboard.method == 'date_range')
                {
                    let startDay = new Date(this.filter_dashboard.from_date.toString());
                    startDay.setHours(0,0,0,0);
                    let endDay = new Date(this.filter_dashboard.to_date.toString());
                    endDay.setHours(23,59,59,999);

                    queryDropPoint =  db
                        .collection("drop_point")
                        .where("create_unix_time" ,'>=', startDay.valueOf())
                        .where("create_unix_time" ,'<=', endDay.valueOf());
                }

                queryDropPoint.get()
                    .then(snap => {
                        this.total_data.drop_point.data = snap.size;
                        this.total_data.drop_point.loading = false;
                    });

                //counter booking
                this.total_data.bookings.loading = true;
                this.total_data.booking_charges.loading = true;

                let queryBooking = db
                    .collection("booking")
                    .where("create_unix_time" ,'>=', moment(this.filter_dashboard.current_year.toString()).startOf('year').valueOf())
                    .where("create_unix_time" ,'<=', moment(this.filter_dashboard.current_year.toString()).endOf('year').valueOf());

                if(self.filter_dashboard.method == 'by_year')
                {
                    queryBooking =  db
                        .collection("booking")
                        .where("create_unix_time" ,'>=', moment(this.filter_dashboard.selected_year.toString()).startOf('year').valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_dashboard.selected_year.toString()).endOf('year').valueOf());
                }
                else if(self.filter_dashboard.method == 'by_month')
                {
                    queryBooking =  db
                        .collection("booking")
                        .where("create_unix_time" ,'>=', moment(this.filter_dashboard.from_month.toString()).startOf('month').valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_dashboard.to_month.toString()).endOf('month').valueOf());
                }
                else if(self.filter_dashboard.method == 'date_range')
                {
                    let startDay = new Date(this.filter_dashboard.from_date.toString());
                    startDay.setHours(0,0,0,0);
                    let endDay = new Date(this.filter_dashboard.to_date.toString());
                    endDay.setHours(23,59,59,999);

                    queryBooking =  db
                        .collection("booking")
                        .where("create_unix_time" ,'>=', startDay.valueOf())
                        .where("create_unix_time" ,'<=', endDay.valueOf());
                }

                queryBooking = queryBooking.where('status', '==', 1);

                queryBooking.get()
                    .then(snap => {
                        this.total_data.bookings.data = snap.size;
                        this.total_data.bookings.loading = false;

                        self.total_data.booking_charges.data = 0;

                        snap.forEach(function(change)
                        {
                            let data = change.data();

                            self.total_data.booking_charges.data += data.total_charges;
                        });

                        self.total_data.booking_charges.loading = false;
                    });

                // customer counter
                this.total_data.customers.loading = true;

                let queryCustomer = db
                    .collection("user").where('current_role','==','customer')
                    .where("create_unix_time" ,'>=', moment(this.filter_dashboard.current_year.toString()).startOf('year').valueOf())
                    .where("create_unix_time" ,'<=', moment(this.filter_dashboard.current_year.toString()).endOf('year').valueOf());

                if(self.filter_dashboard.method == 'by_year')
                {
                    queryCustomer = db
                        .collection("user").where('current_role','==','customer')
                        .where("create_unix_time" ,'>=', moment(this.filter_dashboard.selected_year.toString()).startOf('year').valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_dashboard.selected_year.toString()).endOf('year').valueOf());
                }
                else if(self.filter_dashboard.method == 'by_month')
                {
                    queryCustomer =  db
                        .collection("user").where('current_role','==','customer')
                        .where("create_unix_time" ,'>=', moment(this.filter_dashboard.from_month.toString()).startOf('month').valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_dashboard.to_month.toString()).endOf('month').valueOf());
                }
                else if(self.filter_dashboard.method == 'date_range')
                {
                    let startDay = new Date(this.filter_dashboard.from_date.toString());
                    startDay.setHours(0,0,0,0);
                    let endDay = new Date(this.filter_dashboard.to_date.toString());
                    endDay.setHours(23,59,59,999);

                    queryCustomer =  db
                        .collection("user").where('current_role','==','customer')
                        .where("create_unix_time" ,'>=', startDay.valueOf())
                        .where("create_unix_time" ,'<=', endDay.valueOf());
                }

                queryCustomer.onSnapshot(async documentSnapshots =>
                {
                    this.total_data.customers.data = documentSnapshots.size;
                    this.total_data.customers.loading = false;
                });

                //couriers counter
                this.total_data.couriers.loading = true;

                let queryCourier = db
                    .collection("courier")
                    .where("create_unix_time" ,'>=', moment(this.filter_dashboard.current_year.toString()).startOf('year').valueOf())
                    .where("create_unix_time" ,'<=', moment(this.filter_dashboard.current_year.toString()).endOf('year').valueOf());

                if(self.filter_dashboard.method == 'by_year')
                {
                    queryCourier = db
                        .collection("courier")
                        .where("create_unix_time" ,'>=', moment(this.filter_dashboard.selected_year.toString()).startOf('year').valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_dashboard.selected_year.toString()).endOf('year').valueOf());
                }
                else if(self.filter_dashboard.method == 'by_month')
                {
                    queryCourier =  db
                        .collection("courier")
                        .where("create_unix_time" ,'>=', moment(this.filter_dashboard.from_month.toString()).startOf('month').valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_dashboard.to_month.toString()).endOf('month').valueOf());
                }
                else if(self.filter_dashboard.method == 'date_range')
                {
                    let startDay = new Date(this.filter_dashboard.from_date.toString());
                    startDay.setHours(0,0,0,0);
                    let endDay = new Date(this.filter_dashboard.to_date.toString());
                    endDay.setHours(23,59,59,999);

                    queryCourier =  db
                        .collection("courier")
                        .where("create_unix_time" ,'>=', startDay.valueOf())
                        .where("create_unix_time" ,'<=', endDay.valueOf());
                }

                queryCourier.onSnapshot(async documentSnapshots =>
                {
                    this.total_data.couriers.data = documentSnapshots.size;
                });

                let queryFeeder = db
                    .collection("feeder")
                    .where("create_unix_time" ,'>=', moment(this.filter_dashboard.current_year.toString()).startOf('year').valueOf())
                    .where("create_unix_time" ,'<=', moment(this.filter_dashboard.current_year.toString()).endOf('year').valueOf());

                if(self.filter_dashboard.method == 'by_year')
                {
                    queryFeeder = db
                        .collection("feeder")
                        .where("create_unix_time" ,'>=', moment(this.filter_dashboard.selected_year.toString()).startOf('year').valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_dashboard.selected_year.toString()).endOf('year').valueOf());
                }
                else if(self.filter_dashboard.method == 'by_month')
                {
                    queryFeeder =  db
                        .collection("feeder")
                        .where("create_unix_time" ,'>=', moment(this.filter_dashboard.from_month.toString()).startOf('month').valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_dashboard.to_month.toString()).endOf('month').valueOf());
                }
                else if(self.filter_dashboard.method == 'date_range')
                {
                    let startDay = new Date(this.filter_dashboard.from_date.toString());
                    startDay.setHours(0,0,0,0);
                    let endDay = new Date(this.filter_dashboard.to_date.toString());
                    endDay.setHours(23,59,59,999);

                    queryFeeder =  db
                        .collection("feeder")
                        .where("create_unix_time" ,'>=', startDay.valueOf())
                        .where("create_unix_time" ,'<=', endDay.valueOf());
                }

                queryFeeder.onSnapshot(async documentSnapshots =>
                {
                    this.total_data.couriers.data += documentSnapshots.size;
                    this.total_data.couriers.loading = false;
                });
            },

            async getBookingStatisticsByMonth(year)
            {
                let self = this;
                self.totalBookingChartOptions = {
                    xaxis: {
                        categories: ['January','February','March','April','May','June','July','August','September','October','November','December']
                    }
                };

                let dataComplete = self.totalBookingChartSeries[0].data;
                // let dataProgress = self.totalBookingChartSeries[1].data;

                year = year || moment().format("YYYY");

                db
                    .collection("booking_monthly_statistic")
                    .where("year", "==", parseInt(year))
                    .onSnapshot(async documentSnapshots => {

                        dataComplete = [0,0,0,0,0,0,0,0,0,0,0,0];
                        // dataProgress = [0,0,0,0,0,0,0,0,0,0,0,0];

                        documentSnapshots.forEach(function(change)
                        {
                            let data = change.data();

                            dataComplete[data.month_index - 1] = data.total_success;
                            // dataProgress[data.month_index - 1] = data.total_process;
                        });

                        self.totalBookingChartSeries[0].data = dataComplete;
                        // self.totalBookingChartSeries[1].data = dataProgress;
                    });
            },

            async getBookingStatisticsByDate(from_date, to_date)
            {
                let self = this;

                from_date = from_date || moment(this.filter_dashboard.from_date);
                to_date = to_date || moment(this.filter_dashboard.to_date);

                self.loadTotalBookingChart(from_date, to_date);
                self.loadChargesBookingChart(from_date, to_date);
            },

            async loadTotalBookingChart(from_date, to_date)
            {
                let self = this;

                from_date = from_date || moment(this.filter_dashboard.from_date);
                to_date = to_date || moment(this.filter_dashboard.to_date);

                let xaxisCategories = [];
                let seriesDataTotal = [];

                for (var m = moment(from_date); m.diff(to_date, 'days') <= 0; m.add(1, 'days'))
                {
                    let date_formatted = m.format('DD MMMM YYYY');
                    let startDay = new Date(m.format('YYYY-MM-DD'));
                    startDay.setHours(0,0,0,0);
                    let endDay = new Date(m.format('YYYY-MM-DD'));
                    endDay.setHours(23,59,59,999);
                    let totalBookingDaily = 0;

                    db
                        .collection("booking")
                        .where("create_unix_time", ">=", startDay.valueOf())
                        .where("create_unix_time", "<=", endDay.valueOf())
                        .where('status', '==', 1)
                        .orderBy("create_unix_time", "desc")
                        .get().then(async documentSnapshots => {
                        totalBookingDaily = documentSnapshots.size;
                        seriesDataTotal.push(totalBookingDaily);
                    });

                    xaxisCategories.push(date_formatted);
                }

                self.totalBookingChartSeries[0].data = seriesDataTotal;

                self.totalBookingChartOptions = {
                    xaxis: {
                        categories: xaxisCategories
                    }
                };
            },

            async loadChargesBookingChart(from_date, to_date)
            {
                let self = this;

                from_date = from_date || moment(this.filter_dashboard.from_date);
                to_date = to_date || moment(this.filter_dashboard.to_date);

                let xaxisCategories = [];
                let seriesDataCharges = [];

                for (var m = moment(from_date); m.diff(to_date, 'days') <= 0; m.add(1, 'days'))
                {
                    let date_formatted = m.format('DD MMMM YYYY');
                    let startDay = new Date(m.format('YYYY-MM-DD'));
                    startDay.setHours(0,0,0,0);
                    let endDay = new Date(m.format('YYYY-MM-DD'));
                    endDay.setHours(23,59,59,999);
                    let totalBookingDaily = 0;

                    db
                        .collection("booking")
                        .where("create_unix_time", ">=", startDay.valueOf())
                        .where("create_unix_time", "<=", endDay.valueOf())
                        .where('status', '==', 1)
                        .orderBy("create_unix_time", "desc")
                        .get().then(async documentSnapshots => {
                        totalBookingDaily = documentSnapshots.size;

                        let totalCharges = 0;

                        await documentSnapshots.forEach(function(change)
                        {
                            let data = change.data();
                            totalCharges += data.total_charges;
                        });

                        seriesDataCharges.push(totalCharges);
                    });

                    xaxisCategories.push(date_formatted);
                }

                self.chargesBookingChartSeries[0].data = seriesDataCharges;

                self.chargesBookingChartOptions = {
                    xaxis: {
                        categories: xaxisCategories
                    }
                };
            },
        },

        async mounted()
        {
            $(".formSelect").selectpicker();
            this.initCounter();
            this.getRecentFeederRegistered();
            this.getRecentCourierRegistered();
            this.getBookingStatisticsByMonth(this.filter_dashboard.current_year);
        },
        updated() {
            $(".formSelect").selectpicker("refresh");
        }
    };
</script>
