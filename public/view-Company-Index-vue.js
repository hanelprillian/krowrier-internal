(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Uql6:function(t,a,e){"use strict";e.r(a);var s=e("o0o1"),n=e.n(s);function i(t,a,e,s,n,i,r){try{var o=t[i](r),c=o.value}catch(t){return void e(t)}o.done?a(c):Promise.resolve(c).then(s,n)}function r(t){return function(){var a=this,e=arguments;return new Promise(function(s,n){var r=t.apply(a,e);function o(t){i(r,s,n,o,c,"next",t)}function c(t){i(r,s,n,o,c,"throw",t)}o(void 0)})}}var o={data:function(){return{data:[],dataLoading:!0,search:{keyword:"",status:""},paging:{total_data:0,data_per_page:10,end:!1,loading:!1},ref:{data:null,dataNext:null}}},methods:{searchLoad:_.debounce(function(){this.loadData()},500),loadData:function(){var t=this;this.data=[],this.ref.data=db.collection("company"),""!=this.search.keyword?this.ref.data=this.ref.data.orderBy("name","asc").startAt(this.search.keyword).endAt(this.search.keyword+""):this.ref.data=this.ref.data.orderBy("created_at","desc"),""!=this.search.status&&(this.ref.data=this.ref.data.where("active","==",parseInt(this.search.status)));var a=this.ref.data.limit(this.paging.data_per_page);this.dataLoading=!0,this.handledata(a).then(function(a){t.dataLoading=!1})},loadMore:function(){var t=this;t.paging.end||(this.paging.loading=!0,this.handledata(this.ref.dataNext).then(function(a){t.paging.loading=!1,a.empty&&(t.paging.end=!0)}))},handledata:function(t){var a=this;return new Promise(function(e,s){t.get().then(function(t){t.empty&&(a.paging.end=!0,e(t)),t.forEach(function(){var t=r(n.a.mark(function t(e){var s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((s=e.data()).id=e.id,""==s.user_id||void 0===s.user_id){t.next=5;break}return t.next=5,db.collection("user").doc(s.user_id).get().then(function(t){t.exists&&(s.user=t.data())});case 5:a.data.push(s);case 6:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}());var s=t.docs[t.size-1];s&&(a.ref.dataNext=a.ref.data.startAfter(s).limit(a.paging.data_per_page),e(t))})})},_deleteAction:function(){var t=r(n.a.mark(function t(a){var e=this;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:0,t.next=4;break;case 4:db.collection("company").doc(a).delete().then(function(){e.loadData()}).catch(function(t){alert("Error removing document: ",t)});case 5:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),deleteData:function(){var t=r(n.a.mark(function t(a,e){var s=this;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a&&swal.fire({title:"Delete Courier ?",html:"Your data "+e+" will permanently delete from database ?",type:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then(function(t){t.value&&s._deleteAction(a)});case 1:case"end":return t.stop()}},t,this)}));return function(a,e){return t.apply(this,arguments)}}()},mounted:function(){var t=r(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadData();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},c=e("KHd+"),d=Object(c.a)(o,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),e("div",{staticClass:"row flex-row"},[e("div",{staticClass:"col-xl-12"},[e("div",{staticClass:"widget widget-07 has-shadow"},[t._m(1),t._v(" "),e("div",{staticClass:"widget-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"}),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-inline float-right"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Search")]),t._v("  \n\t\t\t\t\t\t\t\t\t"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search.keyword,expression:"search.keyword"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.search.keyword},on:{keyup:function(a){return t.searchLoad()},input:function(a){a.target.composing||t.$set(t.search,"keyword",a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"clearfix"})]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"table-responsive table-scroll padding-right-10",staticStyle:{"max-height":"520px"}},[e("table",{staticClass:"table table-hover mb-0"},[t._m(2),t._v(" "),e("tbody",[t.dataLoading?e("tr",[e("td",{attrs:{colspan:"7"}},[t._v("Loading...")])]):t._e(),t._v(" "),0!=t.data.length||t.dataLoading?t._e():e("tr",[e("td",{staticClass:"warning",attrs:{colspan:"7"}},[t._v("Data Empty")])]),t._v(" "),t._l(t.data,function(a){return e("tr",[t._m(3,!0),t._v(" "),e("td",[t._v(t._s(a.company_name))]),t._v(" "),e("td",[t._v(t._s(a.user.name))]),t._v(" "),e("td",[t._v(t._s(a.user.email))]),t._v(" "),e("td",[t._v(t._s(a.company_code))]),t._v(" "),e("td",[t._v(t._s(a.company_address))]),t._v(" "),e("td",{staticClass:"td-actions"},[e("router-link",{attrs:{tag:"a",to:"/internal/company/"+a.id}},[e("i",{staticClass:"la la-edit edit"})])],1)])}),t._v(" "),t.paging.end?t._e():e("tr",[e("td",{attrs:{colspan:"9"}},[e("button",{staticClass:"btn btn-block",on:{click:function(a){return a.preventDefault(),t.loadMore()}}},[t._v("Load more")])])])],2)])])]),t._v(" "),e("div",{staticClass:"widget-footer d-flex align-items-center"},[e("div",{staticClass:"mr-auto p-2"},[e("span",{staticClass:"display-items"},[t._v("Showing 1-"+t._s(t.data.length)+" Results")])])])])])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"d-flex align-items-center"},[a("h2",{staticClass:"page-header-title"},[this._v("Company")]),this._v(" "),a("div",[a("div",{staticClass:"page-header-tools"})])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"widget-header bordered d-flex align-items-center"},[a("h2",[this._v("List Data")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[e("div",{staticClass:"styled-checkbox mt-2"},[e("input",{attrs:{type:"checkbox",name:"check-all",id:"check-all"}}),t._v(" "),e("label",{attrs:{for:"check-all"}})])]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("User")]),t._v(" "),e("th",[t._v("User Email")]),t._v(" "),e("th",[t._v("Company Code")]),t._v(" "),e("th",[t._v("Address")]),t._v(" "),e("th",[t._v("Actions")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",{staticStyle:{width:"5%"}},[a("div",{staticClass:"styled-checkbox mt-2"},[a("input",{attrs:{type:"checkbox",name:"cb10",id:"cb10"}}),this._v(" "),a("label",{attrs:{for:"cb10"}})])])}],!1,null,null,null);a.default=d.exports}}]);