(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"2PbS":function(t,e,r){"use strict";r.r(e);var a=r("o0o1"),o=r.n(a);r("AuhY");function s(t,e,r,a,o,s,i){try{var n=t[s](i),l=n.value}catch(t){return void r(t)}n.done?e(l):Promise.resolve(l).then(a,o)}function i(t){return function(){var e=this,r=arguments;return new Promise(function(a,o){var i=t.apply(e,r);function n(t){s(i,a,o,n,l,"next",t)}function l(t){s(i,a,o,n,l,"throw",t)}n(void 0)})}}var n={data:function(){return{result:{data:[],total:0,total_charges:0,loading:!1},filter_report:{status_name:"Completed",status:1,method:"current_year",selected_year:moment().format("YYYY"),_selected_year_formatted:moment().format("YYYY"),from_month:moment().format("YYYY/MM"),_from_month_format:moment().format("MMMM YYYY"),to_month:moment().format("YYYY/MM"),_to_month_format:moment().format("MMMM YYYY"),from_date:moment().format("YYYY/MM/DD"),_from_date_format:moment().format("DD MMMM YYYY"),to_date:moment().format("YYYY/MM/DD"),_to_date_format:moment().format("DD MMMM YYYY"),current_year:moment().format("YYYY")}}},watch:{"filter_report.status":function(){this.filter_report.status_name="Completed",0==this.filter_report.status?this.filter_report.status_name="On Progress":""==this.filter_report.status&&(this.filter_report.status_name="All")}},components:{Datepicker:r("+jP+").a},methods:{printElem:function(t){return func.printElem(t)},generateReport:function(){var t=i(o.a.mark(function t(){var e,r,a=this;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,this.result.loading=!0,this.result.data=[],this.result.total=0,this.result.total_charges=0,swal.fire({title:"Generating Report",text:"Please waiting..",allowOutsideClick:!1,allowEscapeKey:!1,onOpen:function(){swal.showLoading()}}),r=db.collection("booking").where("create_unix_time",">=",moment(this.filter_report.current_year.toString()).startOf("year").valueOf()).where("create_unix_time","<=",moment(this.filter_report.current_year.toString()).endOf("year").valueOf()),"by_year"==e.filter_report.method?r=db.collection("booking").where("create_unix_time",">=",moment(this.filter_report.selected_year.toString()).startOf("year").valueOf()).where("create_unix_time","<=",moment(this.filter_report.selected_year.toString()).endOf("year").valueOf()):"month_range"==e.filter_report.method?r=db.collection("booking").where("create_unix_time",">=",moment(this.filter_report.from_month.toString()).startOf("month").valueOf()).where("create_unix_time","<=",moment(this.filter_report.to_month.toString()).endOf("month").valueOf()):"date_range"==e.filter_report.method&&(r=db.collection("booking").where("create_unix_time",">=",moment(this.filter_report.from_date.toString()).valueOf()).where("create_unix_time","<=",moment(this.filter_report.to_date.toString()).valueOf())),e.filter_report.status.length>0&&e.filter_report.status,r=r.where("status","==",1),t.next=12,r.orderBy("create_unix_time","desc").get().then(function(){var t=i(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.result.total=e.size,e.forEach(function(){var t=i(o.a.mark(function t(e){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(r=e.data()).id=e.id,r.user=null,db.collection("user").doc(r.user_id).get().then(function(t){t.exists&&(r.user=t.data())}),a.result.total_charges+=r.total_charges,a.result.data.push(r);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),a.result.loading=!1;case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 12:swal.close();case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=i(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:$(".formSelect").selectpicker();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),updated:function(){$(".formSelect").selectpicker("refresh")}},l=r("KHd+"),_=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid",staticStyle:{height:"100%"}},[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12"},[r("div",{attrs:{id:"filterSection"}},[r("div",{staticClass:"widget has-shadow"},[t._m(1),t._v(" "),r("div",{staticClass:"widget-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-3 col-md-3 col-sm-3 col-xs-3"},[r("div",{staticClass:"form-group"},[t._m(2),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.filter_report.method,expression:"filter_report.method"}],staticClass:"form-control formSelect btn-sm no-margin",attrs:{name:"",id:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.filter_report,"method",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"current_year"}},[t._v("Current Year ("+t._s(t.filter_report.current_year)+")")]),t._v(" "),r("option",{attrs:{value:"by_year"}},[t._v("By Year")]),t._v(" "),r("option",{attrs:{value:"month_range"}},[t._v("By Month")]),t._v(" "),r("option",{attrs:{value:"date_range"}},[t._v("By Date")])])])]),t._v(" "),"by_year"==t.filter_report.method?r("div",{staticClass:"col-lg-2 col-md-2 col-sm-2"},[r("div",{staticClass:"form-group"},[t._m(3),t._v(" "),r("datepicker",{attrs:{minimumView:"year",maximumView:"year","input-class":"form-control",format:"yyyy"},model:{value:t.filter_report.selected_year,callback:function(e){t.$set(t.filter_report,"selected_year",e)},expression:"filter_report.selected_year"}})],1)]):t._e(),t._v(" "),"month_range"==t.filter_report.method?[r("div",{staticClass:"col-lg-2 col-md-2 col-sm-2"},[r("div",{staticClass:"form-group"},[t._m(4),t._v(" "),r("datepicker",{attrs:{minimumView:"month",maximumView:"year","input-class":"form-control",format:"yyyy/MM"},model:{value:t.filter_report.from_month,callback:function(e){t.$set(t.filter_report,"from_month",e)},expression:"filter_report.from_month"}})],1)]),t._v(" "),r("div",{staticClass:"col-lg-2 col-md-2 col-sm-2"},[r("div",{staticClass:"form-group"},[t._m(5),t._v(" "),r("datepicker",{attrs:{minimumView:"month",maximumView:"year","input-class":"form-control",format:"yyyy/MM"},model:{value:t.filter_report.to_month,callback:function(e){t.$set(t.filter_report,"to_month",e)},expression:"filter_report.to_month"}})],1)])]:t._e(),t._v(" "),"date_range"==t.filter_report.method?[r("div",{staticClass:"col-lg-2 col-md-2 col-sm-2"},[r("div",{staticClass:"form-group"},[t._m(6),t._v(" "),r("datepicker",{attrs:{minimumView:"date",maximumView:"year","input-class":"form-control",format:"yyyy/MM/dd"},model:{value:t.filter_report.from_date,callback:function(e){t.$set(t.filter_report,"from_date",e)},expression:"filter_report.from_date"}})],1)]),t._v(" "),r("div",{staticClass:"col-lg-2 col-md-2 col-sm-2"},[r("div",{staticClass:"form-group"},[t._m(7),t._v(" "),r("datepicker",{attrs:{minimumView:"date",maximumView:"year","input-class":"form-control",format:"yyyy/MM/dd"},model:{value:t.filter_report.to_date,callback:function(e){t.$set(t.filter_report,"to_date",e)},expression:"filter_report.to_date"}})],1)])]:t._e()],2),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(e){return e.preventDefault(),t.generateReport()}}},[t._v("Generate")])])])])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"widget has-shadow"},[t._m(8),t._v(" "),r("div",{staticClass:"widget-body"},[r("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return e.preventDefault(),t.printElem("reportResult")}}},[r("i",{staticClass:"ion-printer"}),t._v(" Print")]),t._v(" "),r("div",{staticClass:"bg-grey p-3 mt-4",staticStyle:{height:"700px","overflow-y":"scroll"},attrs:{id:"reportResult"}},[r("h3",[t._v("Transaction Report")]),t._v(" "),r("small",[t._v("Status: "+t._s(t.filter_report.status_name))]),t._v(" "),r("br"),t._v(" "),r("small",[t._v("Filter By: "+t._s(t.filter_report.method))]),t._v(" "),r("br"),t._v(" "),"current_year"==t.filter_report.method||"by_year"==t.filter_report.method?r("small",[t._v("Year: "+t._s(t.filter_report._selected_year_formatted))]):t._e(),t._v(" "),"month_range"==t.filter_report.method?r("small",[t._v("From "+t._s(t.filter_report._from_month_format)+" "),r("small",[t._v("to")]),t._v(" "+t._s(t.filter_report._to_month_format))]):t._e(),t._v(" "),"date_range"==t.filter_report.method?r("small",[t._v("From "+t._s(t.filter_report._from_date_format)+" "),r("small",[t._v("to")]),t._v(" "+t._s(t.filter_report._to_date_format))]):t._e(),t._v(" "),r("div",{staticClass:"margin-top-10"},[r("table",{staticClass:"table table-report table-bordered",staticStyle:{width:"100%"}},[t._m(9),t._v(" "),r("tbody",[t._l(t.result.data,function(e){return r("tr",[r("td",[t._v(t._s(e.create_date))]),t._v(" "),r("td",[t._v(t._s(e.code_booking))]),t._v(" "),r("td",[t._v("\n                                            "+t._s(e.goods_name)+"\n                                            "),r("br"),t._v(" "),r("small",[t._v("\n                                                Qty: "+t._s(e.goods_quantity)+"\n                                            ")]),t._v(" "),r("br"),t._v(" "),r("small",[t._v("\n                                                Weight: "+t._s(e.goods_weight)+" Kg\n                                            ")])]),t._v(" "),r("td",[t._v(t._s(e.user.name))]),t._v(" "),r("td",[t._v(t._s(e.destination_address))]),t._v(" "),r("td",[t._v("Rp. "+t._s(t.$parent.currency(e.total_charges)))])])}),t._v(" "),0==t.result.data.length?r("tr",[r("td",{staticClass:"bg-warning",attrs:{colspan:"6"}},[t._v("\n                                            Data Empty\n                                        ")])]):t._e()],2),t._v(" "),r("tr",[r("th",{staticClass:"text-right",attrs:{colspan:"5"}},[t._v("\n                                            Total Charges\n                                        ")]),t._v(" "),r("th",[t._v("\n                                            Rp. "+t._s(t.$parent.currency(t.result.total_charges))+"\n                                        ")])])])])])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"page-header"},[e("div",{staticClass:"d-flex align-items-center"},[e("h2",{staticClass:"page-header-title"},[this._v("\n                        Booking Report\n                    ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-header bordered no-actions"},[e("h4",[this._v("Filter")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",[e("label",{attrs:{for:""}},[e("strong",[this._v("Filter Method")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",[e("label",{attrs:{for:""}},[this._v("Tahun")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",[e("label",{attrs:{for:""}},[this._v("Start Month")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",[e("label",{attrs:{for:""}},[this._v("End Month")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",[e("label",{attrs:{for:""}},[this._v("Start Date")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("small",[e("label",{attrs:{for:""}},[this._v("End Date")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-header bordered no-actions"},[e("h4",{staticClass:"float-left"},[this._v("Result")]),this._v(" "),e("div",{staticClass:"clearfix"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{width:"10%"}},[t._v("Date")]),t._v(" "),r("th",{attrs:{width:"15%"}},[t._v("Code")]),t._v(" "),r("th",{attrs:{width:"15%"}},[t._v("Product")]),t._v(" "),r("th",{attrs:{width:"15%"}},[t._v("Customer")]),t._v(" "),r("th",{attrs:{width:"25%"}},[t._v("Destination")]),t._v(" "),r("th",{attrs:{width:"15%"}},[t._v("Charges")])])])}],!1,null,null,null);e.default=_.exports}}]);