<template>
	<div class="container-fluid" style="height: 100%">
        <div class="row">
            <div class="page-header">
                <div class="d-flex align-items-center">
                    <h2 class="page-header-title">
                        Feeder Distance Report
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
                                            <label for=""><strong>Feeder</strong></label>
                                        </small>
                                        <p class="form-control-static mr-sm-2" v-if="filter_report.feeder_id != ''">
                                            {{filter_report.feeder_name}}
                                            <a href="#" @click.prevent="unselectFeeder()" class="float-right text-danger"><i class="ion-close"></i></a>
                                        </p>
                                        <input class="form-control mr-sm-2" v-model="filter_report.search_feeder_keyword" v-if="filter_report.feeder_id == ''" type="search" placeholder="Select Feeder" aria-label="Select Feeder">
                                    </div>
                                    <div class="search-result-box" v-if="filter_report.search_feeder_box_opened && filter_report.feeder_id == ''">
                                        <!--not found section-->
                                        <div class="p-3 text-danger" v-if="filter_report.search_feeder_result.length == 0">
                                            Search "{{filter_report.search_feeder_keyword}}" not found
                                        </div>

                                        <!--list feeder-->
                                        <div v-if="filter_report.search_feeder_result.length > 0">
                                            <div class="p-3 text-grey-dark">
                                                <small>
                                                    Feeder
                                                </small>
                                            </div>
                                            <div class="list-group">
                                                <template v-for="feeder in filter_report.search_feeder_result">
                                                    <div class="list-group-item list-group-item-action" @click.prevent="selectFeeder(feeder.id, feeder.fullname)">
                                                        <div class="row">
                                                            <div class="col-md-3 p-0">
                                                                <div style="height: 80px; width: 80px " class="center">
                                                                    <img :src="feeder.photo_file != '' ? feeder.photo_file : 'https://firebasestorage.googleapis.com/v0/b/pasarudang-6129d.appspot.com/o/_webs%2Fuser-img.png?alt=media&token=cb7062cb-1aab-428c-b5d2-8f84fee01cc3'" alt="" style="height: 100%; width: 100%; object-fit: cover" class="img-fluid rounded-circle">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-9">
                                                                <h5 class="card-title">
                                                                    {{feeder.fullname}}
                                                                </h5>
                                                                <div class="row">
                                                                    <div class="col-md-7 align-self-center">
                                                                        <!--<small class="text-muted text-12"> UD Muncul Jaya </small>-->
                                                                        <!--<br>-->
                                                                        <small class="text-orange mt-1">
                                                                            {{feeder.vehicle_name}}, {{feeder.vehicle_police_number}}
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
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
                                    <button class="btn btn-primary btn-sm" :disabled="filter_report.feeder_id == ''" @click.prevent="generateReport()">Generate</button>
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
                        <h4 class="float-left">Result</h4>
                        <div class="clearfix"></div>
                    </div>
                    <div class="widget-body">
                        <button @click.prevent="printElem('reportResult')" class="btn btn-info btn-sm"><i class="ion-printer"></i> Print</button>
                        <div style="height: 700px; overflow-y: scroll" id="reportResult" class="bg-grey p-3 mt-4">
                            <h3>Feeder Distance Report</h3>
                            <small>Feeder: {{filter_report.feeder_name}}</small>
                            <br>
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
                                        <th width="8%">Status</th>
                                        <th width="11%">Task</th>
                                        <th width="15%">Booking</th>
                                        <th width="10%">Distance</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="result in result.data">
                                        <td>{{ result.create_date }}</td>
                                        <td>
                                            {{result.id}}
                                            <br>
                                            <span v-if="result.task_status == 1" class="badge badge-success">Completed</span>
                                            <span v-if="result.task_status == 0" class="badge badge-primary">Progress</span>
                                        </td>
                                        <td>
                                            <span v-if="result.type && result.type == 0">Pickup</span>
                                            <span v-if="result.type && result.type == 1">Delivery</span>
                                        </td>
                                        <td>
                                            <small>
                                                Code: {{result.booking_code}}
                                            </small>
                                            <br>
                                            <small>
                                                <strong>
                                                    {{result.type && result.type == 0 ? 'Pickup Address' : 'Destination Address'}}
                                                </strong>
                                            </small>
                                            <br>
                                            <span>
                                                {{result.type && result.type == 0 ? result.pickup_address : result.destination_address}}
                                            </span>
                                        </td>
                                        <td>{{$parent.formatMoney(result.distance, 2)}} Km</td>
                                    </tr>
                                    <tr v-if="result.data.length == 0">
                                        <td colspan="5" class="bg-warning">
                                            Data Empty
                                        </td>
                                    </tr>
                                    </tbody>
                                    <!--<tfoot>-->
                                    <tr>
                                        <th colspan="4" class="text-right">
                                            Total Distance
                                        </th>
                                        <th>
                                           {{(result.total_distance)}} Km
                                        </th>
                                    </tr>
                                    <!--</tfoot>-->
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
				    total_distance: 0,
                    loading: false
                },
                filter_report: {
                    // there are methods:
                    // all
                    // current_year
                    // month_range
                    // by_year
                    // date_range
                    search_feeder_keyword: '',
                    search_feeder_box_opened: false,
                    search_feeder_result: [],

                    feeder_name: '',
                    feeder_id: '',
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
            "filter_report.search_feeder_keyword": _.debounce(async function(newVal)
            {
                let self = this;

                if(self.filter_report.search_feeder_keyword.length > 2)
                {
                    await self.searchFeeder();
                    self.filter_report.search_feeder_box_opened = true;
                }
                else
                    self.filter_report.search_feeder_box_opened  = false;

            }, 500),
            
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
		    selectFeeder(id, name)
            {
                let self = this;
                self.filter_report.feeder_id = id;
                self.filter_report.feeder_name = name;
                self.filter_report.search_feeder_keyword = '';
                self.filter_report.search_feeder_box_opened = false;
            },

            unselectFeeder()
            {
                let self = this;

                self.filter_report.feeder_id = '';
                self.filter_report.feeder_name = '';
                self.result.data = [];
            },

            async searchFeeder()
            {
                let self = this;

                self.filter_report.search_feeder_result= [];

                let ref = db.collection("feeder");

                await ref.get().then(async documentSnapshots =>
                {
                    let num = 1;
                    await documentSnapshots.forEach(async doc =>
                    {
                        let data = doc.data();
                        data.id = doc.id;

                        if(data.fullname.toLowerCase().indexOf(self.filter_report.search_feeder_keyword) !== -1 && num <= 10)
                        {
                            self.filter_report.search_feeder_result.push(data);
                            num++;
                        }
                    });
                });
            },
            
            printElem(elem)
            {
                return func.printElem(elem)
            },
            async generateReport()
            {
                let self = this;
                this.result.loading = true;
                this.result.data = [];
                this.result.total = 0;
                this.result.total_distance = 0;

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
                    .collection("feeder_task")
                    .where("create_unix_time" ,'>=', moment(this.filter_report.current_year.toString()).startOf('year').valueOf())
                    .where("create_unix_time" ,'<=', moment(this.filter_report.current_year.toString()).endOf('year').valueOf());

                if(self.filter_report.method == 'by_year')
                {
                    queryBooking =  db
                        .collection("feeder_task")
                        .where("create_unix_time" ,'>=', moment(this.filter_report.selected_year.toString()).startOf('year').valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_report.selected_year.toString()).endOf('year').valueOf());
                }
                else if(self.filter_report.method == 'month_range')
                {
                    queryBooking =  db
                        .collection("feeder_task")
                        .where("create_unix_time" ,'>=', moment(this.filter_report.from_month.toString()).startOf('month').valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_report.to_month.toString()).endOf('month').valueOf());
                }
                else if(self.filter_report.method == 'date_range')
                {
                    queryBooking =  db
                        .collection("feeder_task")
                        .where("create_unix_time" ,'>=', moment(this.filter_report.from_date.toString()).valueOf())
                        .where("create_unix_time" ,'<=', moment(this.filter_report.to_date.toString()).valueOf());
                }

                queryBooking = queryBooking.where('feeder_id', '==', self.filter_report.feeder_id);

                await queryBooking.orderBy('create_unix_time','desc').get()
                    .then(async snap => {
                        this.result.total = snap.size;
                        let totalDistance = 0;

                        snap.forEach(async doc =>
                        {
                            let data = doc.data();
                            data.id = doc.id;

                            if(data.distance)
                                totalDistance += parseFloat(data.distance);

                            this.result.data.push(data);
                        });
                        this.result.total_distance = totalDistance;
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
