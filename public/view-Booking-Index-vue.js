(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{HzW4:function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),i=a.n(n);function s(t,e,a,n,i,s,r){try{var o=t[s](r),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(n,i)}function r(t){return function(){var e=this,a=arguments;return new Promise(function(n,i){var r=t.apply(e,a);function o(t){s(r,n,i,o,c,"next",t)}function c(t){s(r,n,i,o,c,"throw",t)}o(void 0)})}}var o={data:function(){return{data:[],search:{keyword:""},paging:{total_data:0,data_per_page:10,end:!1,loading:!1},ref:{data:null,dataNext:null}}},methods:{searchLoad:_.debounce(function(){this.loadData()},500),loadData:function(){this.data=[],this.ref.data=db.collection("booking"),this.ref.data=this.ref.data.orderBy("create_unix_time","desc");var t=this.ref.data.limit(this.paging.data_per_page);this.handledata(t)},loadMore:function(){var t=this;t.paging.end||(this.paging.loading=!0,this.handledata(this.ref.dataNext).then(function(e){t.paging.loading=!1,e.empty&&(t.paging.end=!0)}))},handledata:function(t){var e=this;return new Promise(function(a,n){t.get().then(function(t){t.empty&&(e.paging.end=!0,a(t)),t.forEach(function(){var t=r(i.a.mark(function t(a){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(n=a.data()).id=a.id,t.next=4,db.collection("user").doc(n.user_id).get().then(function(t){t.exists&&(n.user=t.data())});case 4:e.data.push(n);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());var n=t.docs[t.size-1];n&&(e.ref.dataNext=e.ref.data.startAfter(n).limit(e.paging.data_per_page),a(t))})})},_deleteAction:function(){var t=r(i.a.mark(function t(e){var a,n=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=0,t.next=3,db.collection("booking").where("origin_hub_id","==",e).limit(1).get().then(function(t){a+=t.size});case 3:return t.next=5,db.collection("booking").where("destination_hub_id","==",e).limit(1).get().then(function(t){a+=t.size});case 5:if(!(a>0)){t.next=8;break}return swal.fire("Delete Fail","This HUB already used","error"),t.abrupt("return");case 8:db.collection("hub").doc(e).delete().then(function(){n.loadData()}).catch(function(t){alert("Error removing document: ",t)});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),deleteData:function(){var t=r(i.a.mark(function t(e,a){var n=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e&&swal.fire({title:"Delete Hub ?",html:"Your data "+a+" will permanently delete from database ?",type:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then(function(t){t.value&&n._deleteAction(e)});case 1:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}(),getBooking:function(){var t=r(i.a.mark(function t(){var e=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:db.collection("booking").onSnapshot(function(t){e.data=[],t.forEach(function(t){var a=t.data();a.id=t.id,db.collection("user").doc(a.user_id).get().then(function(t){t.exists&&(a.user=t.data())}),e.data.push(a)})});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},created:function(){var t=r(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.loadData();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},c=a("KHd+"),d=Object(c.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),a("div",{staticClass:"row flex-row"},[a("div",{staticClass:"col-xl-12"},[a("div",{staticClass:"widget widget-07 has-shadow"},[t._m(1),t._v(" "),a("div",{staticClass:"widget-body"},[a("div",{staticClass:"table-responsive table-scroll padding-right-10",staticStyle:{"max-height":"520px"}},[a("table",{staticClass:"table table-bordered table-hover mb-0"},[t._m(2),t._v(" "),a("tbody",[t._l(t.data,function(e){return a("tr",[t._m(3,!0),t._v(" "),a("td",{staticClass:"valign-top"},[a("span",{staticClass:"text-primary"},[t._v(t._s(e.code_booking))]),t._v(" "),a("br"),t._v(" "),0==e.status?a("small",{staticClass:"badge-text info badge-text-small"},[t._v("Progress")]):t._e(),t._v(" "),1==e.status?a("small",{staticClass:"badge-text success badge-text-small"},[t._v("Complete")]):t._e()]),t._v(" "),a("td",{staticClass:"valign-top"},[t._v(t._s(e.create_date))]),t._v(" "),a("td",{staticClass:"valign-top"},[t._v(t._s(e.user.name))]),t._v(" "),a("td",{staticClass:"valign-top"},[t._v(t._s(e.pickup_address))]),t._v(" "),a("td",{staticClass:"valign-top"},[t._v(t._s(e.destination_address))]),t._v(" "),a("td",{staticClass:"valign-top td-actions"},[a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn btn-secondary btn-sm dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tAction\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("router-link",{staticClass:"dropdown-item",attrs:{tag:"a",to:"/internal/booking/"+e.id}},[a("i",{staticClass:"la la-edit edit"}),t._v(" Edit\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),t._m(4,!0)],1)])])])}),t._v(" "),t.paging.end?t._e():a("tr",[a("td",{attrs:{colspan:"9"}},[a("button",{staticClass:"btn btn-block",on:{click:function(e){return e.preventDefault(),t.loadMore()}}},[t._v("Load more")])])])],2)])])]),t._v(" "),a("div",{staticClass:"widget-footer d-flex align-items-center"},[a("div",{staticClass:"mr-auto p-2"},[a("span",{staticClass:"display-items"},[t._v("Showing 1-"+t._s(t.data.length)+" Results")])])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"page-header"},[e("div",{staticClass:"d-flex align-items-center"},[e("h2",{staticClass:"page-header-title"},[this._v("Booking")]),this._v(" "),e("div",[e("div",{staticClass:"page-header-tools"})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-header bordered d-flex align-items-center"},[e("h2",[this._v("List Data")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticStyle:{width:"1%"}},[a("div",{staticClass:"styled-checkbox mt-2"},[a("input",{attrs:{type:"checkbox",name:"check-all",id:"check-all"}}),t._v(" "),a("label",{attrs:{for:"check-all"}})])]),t._v(" "),a("th",{staticStyle:{width:"10%"}},[t._v("No Booking")]),t._v(" "),a("th",{staticStyle:{width:"10%"}},[t._v("Date")]),t._v(" "),a("th",{staticStyle:{width:"20%"}},[t._v("Customer")]),t._v(" "),a("th",{staticStyle:{width:"25%"}},[t._v("Pickup Address")]),t._v(" "),a("th",{staticStyle:{width:"25%"}},[t._v("Destination")]),t._v(" "),a("th",{staticStyle:{width:"10%"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{width:"5%"}},[e("div",{staticClass:"styled-checkbox mt-2"},[e("input",{attrs:{type:"checkbox",name:"cb10",id:"cb10"}}),this._v(" "),e("label",{attrs:{for:"cb10"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("i",{staticClass:"la la-close delete"}),this._v(" Delete\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])}],!1,null,null,null);e.default=d.exports}}]);