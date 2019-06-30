<template>
	<div class="container-fluid" style="height: 100%">
        <div class="row">
            <div class="page-header">
                <div class="d-flex align-items-center">
                    <h2 class="page-header-title">
                        Booking Report
                    </h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <!--collapsed collapse-->
                <div class="" id="filterSection">
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
                                        <select name="" v-model="filter_report.method" id="" class="form-control formSelect btn-sm no-margin">
                                            <option value="current_year">Current Year ({{filter_report.current_year}})</option>
                                            <option value="by_year">By Year</option>
                                            <option value="month_range">By Month</option>
                                            <option value="date_range">By Date</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <div class="form-group">
                                        <small>
                                            <label for=""><strong>Status</strong></label>
                                        </small>
                                        <select name="" v-model="filter_report.status" id="" class="form-control formSelect btn-sm no-margin">
                                            <option value="">All</option>
                                            <option value="0">Progress</option>
                                            <option value="1">Complete</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-2" v-if="filter_report.method == 'by_year'">
                                    <div class="form-group">
                                        <small>
                                            <label for="">Tahun</label>
                                        </small>
                                        <datepicker :minimumView="'year'" :maximumView="'year'" v-model="filter_report.selected_year" input-class="form-control" format="yyyy"></datepicker>
                                    </div>
                                </div>
                                <template v-if="filter_report.method == 'month_range'">
                                    <div class="col-lg-2 col-md-2 col-sm-2">
                                        <div class="form-group">
                                            <small>
                                                <label for="">Start Month</label>
                                            </small>
                                            <datepicker :minimumView="'month'" :maximumView="'year'" v-model="filter_report.from_month" input-class="form-control" format="yyyy/MM"></datepicker>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-2">
                                        <div class="form-group">
                                            <small>
                                                <label for="">End Month</label>
                                            </small>
                                            <datepicker :minimumView="'month'" :maximumView="'year'" v-model="filter_report.to_month" input-class="form-control" format="yyyy/MM"></datepicker>
                                        </div>
                                    </div>
                                </template>
                                <template v-if="filter_report.method == 'date_range'">
                                    <div class="col-lg-2 col-md-2 col-sm-2">
                                        <div class="form-group">
                                            <small>
                                                <label for="">Start Date</label>
                                            </small>
                                            <datepicker :minimumView="'date'" :maximumView="'year'" v-model="filter_report.from_date" input-class="form-control" format="yyyy/MM/dd"></datepicker>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-2">
                                        <div class="form-group">
                                            <small>
                                                <label for="">End Date</label>
                                            </small>
                                            <datepicker :minimumView="'date'" :maximumView="'year'" v-model="filter_report.to_date" input-class="form-control" format="yyyy/MM/dd"></datepicker>
                                        </div>
                                    </div>
                                </template>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <button class="btn btn-primary btn-sm" @click.prevent="generateReport()">Generate</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="widget has-shadow">
                    <div class="widget-header bordered no-actions">
                        <h4>Result</h4>
                    </div>
                    <div class="widget-body">
                        <div style="height: 500px; overflow-y: scroll" class="bg-grey p-3">
                            <h3>Transaction Report</h3>
                            <small>Status: {{filter_report.status_name}}</small>
                            <br>
                            <small>Filter By: {{filter_report.method}}</small>
                            <br>
                            <small v-if="filter_report.method == 'current_year' || filter_report.method == 'by_year'">Year: {{filter_report._selected_year_formatted}}</small>
                            <small v-if="filter_report.method == 'month_range'">From {{filter_report._from_month_format}} <small>to</small> {{filter_report._to_month_format}}</small>
                            <small v-if="filter_report.method == 'date_range'">From {{filter_report._from_date_format}} <small>to</small> {{filter_report._to_date_format}}</small>

                            <div class="margin-top-10">
                                <table class="table table-report table-bordered" style="width: 100%;">
                                    <thead>
                                    <tr>
                                        <th width="10%">Date</th>
                                        <th width="15%">Code</th>
                                        <th width="15%">Customer</th>
                                        <th width="25%">Destination</th>
                                        <th width="15%">Charges</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="result in result.data">
                                        <td>{{ result.create_date }}</td>
                                        <td>{{result.code_booking}}</td>
                                        <td>{{ result.user.name }}</td>
                                        <td>{{ result.destination_address }}</td>
                                        <td>Rp. {{$parent.currency(result.total_charges)}}</td>
                                    </tr>
                                    <tr v-if="result.data.length == 0">
                                        <td colspan="5" class="bg-warning">
                                            Data Empty
                                        </td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th colspan="4" class="text-right">
                                            Total Charges
                                        </th>
                                        <th>
                                            Rp. {{$parent.currency(result.total_charges)}}
                                        </th>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
    import FormUtill from "../../form-utill";
    import Datepicker from "vuejs-datepicker";

	export default {
		data() {
			return {
				result: {
				    data: [],
				    total: 0,
				    total_charges: 0,
                    loading: false
                },
                filter_report: {
                    // there are methods:
                    // all
                    // current_year
                    // month_range
                    // by_year
                    // date_range
                    status_name: 'All',
                    status: '',
                    method: 'current_year',

                    selected_year: moment().format("YYYY"),
                    _selected_year_formatted: moment().format("YYYY"),

                    from_month: moment().format("YYYY/MM"),
                    _from_month_format: moment().format("MMMM YYYY"),
                    to_month: moment().format("YYYY/MM"),
                    _to_month_format: moment().format("MMMM YYYY"),

                    from_date: moment().format("YYYY/MM/DD"),
                    _from_date_format: moment().format("DD MMMM YYYY"),
                    to_date: moment().format("YYYY/MM/DD"),
                    _to_date_format: moment().format("DD MMMM YYYY"),

                    current_year: moment().format("YYYY"),
                },
            };
		},
        watch: {
		    "filter_report.status" ()
            {
                this.filter_report.status_name = 'All';

                if(this.filter_report.status != '' || this.filter_report.status != null)
                {
                    if(this.filter_report.status == 0)
                    {
                        this.filter_report.status_name = 'On Progress';
                    }
                    else if(this.filter_report.status == 1)
                    {
                        this.filter_report.status_name = 'Completed';
                    }
                }
            }
        },
        components: {
            Datepicker,
        },

		methods: {
            async generateReport()
            {
                let self = this;
                this.result.loading = true;
                this.result.data = [];
                this.result.total = 0;
                this.result.total_charges = 0;

                swal.fire({
                    title: "Generating Report",
                    text: "Please waiting..",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    onOpen: () => {
                        swal.showLoading();
                    }
                });

                let queryBooking = db
                    .collection("booking")
                    .where("create_unix_time" ,'>=', moment(this.filter_report.current_year.toString()).startOf('year').valueOf())
                    .where("create_unix_time" ,'<=', moment(this.filter_report.current_year.toString()).endOf('year').valueOf());

                if(self.filter_report.method == 'by_year')
                {
                    queryBooking =  db
                        .collection("booking")
                        .where("create_unix_time" ,'>=', moment(this.filter_report.selected_year.toString()).startOf('year').valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_report.selected_year.toString()).endOf('year').valueOf());
                }
                else if(self.filter_report.method == 'month_range')
                {
                    queryBooking =  db
                        .collection("booking")
                        .where("create_unix_time" ,'>=', moment(this.filter_report.from_month.toString()).startOf('month').valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_report.to_month.toString()).endOf('month').valueOf());
                }
                else if(self.filter_report.method == 'date_range')
                {
                    queryBooking =  db
                        .collection("booking")
                        .where("create_unix_time" ,'>=', moment(this.filter_report.from_date.toString()).valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_report.to_date.toString()).valueOf());
                }

                if(self.filter_report.status != '' || self.filter_report.status != null)
                {
                    // queryBooking = queryBooking.where('status', '==', self.filter_report.status);
                }

                await queryBooking.orderBy('create_unix_time','desc').get()
                    .then(async snap => {
                        this.result.total = snap.size;

                        snap.forEach(async doc =>
                        {
                            let data = doc.data();
                            data.id = doc.id;
                            data.user = null;

                            db
                                .collection("user")
                                .doc(data.user_id)
                                .get()
                                .then(doc1 => {
                                    if (doc1.exists) {
                                        data.user = doc1.data();
                                    }
                                });

                            this.result.total_charges += data.total_charges;

                            this.result.data.push(data);
                        });
                        this.result.loading = false;
                    });

                swal.close();
            },
		},
        async mounted()
        {
            $(".formSelect").selectpicker();
        },
        updated() {
            $(".formSelect").selectpicker("refresh");
        }
	};
</script>
