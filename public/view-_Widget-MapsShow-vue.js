(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{Y7t9:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{center:{lat:this.lat,lng:this.long},markers:[],places:[],currentPlace:null,locations:[],formatedAddresses:[],infoContent:{header:null,body:null,footer:null},infoWindowPos:null,infoWinOpen:!1,currentMidx:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},watch:{lat:{immediate:!0,handler:function(t,e){this.init()}}},props:{address:{type:String},lat:{default:-6.2184634,type:Number},long:{default:106.8171466,type:Number},marked:{default:!1,type:Boolean},markerMode:{default:"default"}},methods:{getPosition:function(t){this.geocodedAddress(t,t.latLng.lat(),t.latLng.lng())},geocodedAddress:function(t,e,n){var o=this,i=new google.maps.Geocoder,a=(new google.maps.InfoWindow,{lat:parseFloat(e),lng:parseFloat(n)});i.geocode({location:a},function(t,e){"OK"===e?t[0]?o.setPlace(t[0]):window.alert("No results found"):window.alert("Geocoder failed due to: "+e)})},toggleInfoWindow:function(t,e){this.infoWindowPos=t.position,this.infoContent.body=t.infoText.formatted_address,this.infoWinOpen=!0,this.currentMidx=e},setPlace:function(t){this.currentPlace=t},addMarker:function(){if(this.currentPlace){"reset"==this.markerMode&&(this.markers=[]);var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.places.push(this.currentPlace),this.toggleInfoWindow({position:t,infoText:this.currentPlace}),this.$emit("getMarkedData",{position:t,infoText:this.currentPlace})}},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}})},init:function(){var t={lat:this.lat,lng:this.long};this.center={lat:t.lat,lng:t.lng},this.markers=[],this.markers.push({position:t,infoText:{formatted_address:this.address}})}},mounted:function(){this.marked?this.init():this.geolocate()}},i=n("KHd+"),a=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map-wrapper",staticStyle:{position:"relative"}},[n("GmapMap",{ref:"mymap",staticStyle:{width:"100%",height:"400px"},attrs:{center:t.center,zoom:16}},[n("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoWindowPos,opened:t.infoWinOpen},on:{closeclick:function(e){t.infoWinOpen=!1}}},[n("div",{staticStyle:{"font-size":"14px","font-weight":"500"}},[t._v(t._s(t.infoContent.header))]),t._v(" "),n("div",[t._v(t._s(t.infoContent.body))])]),t._v(" "),t._l(t.markers,function(t,e){return n("GmapMarker",{key:e,attrs:{icon:{path:"M9 11.041v-0.825c1.102-0.621 2-2.168 2-3.716 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z",fillColor:"#091cab",fillOpacity:1,strokeWeight:0,scale:2},position:t.position}})})],2)],1)},[],!1,null,null,null);e.default=a.exports}}]);