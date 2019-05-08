<template>
	<div class="map-wrapper" style="position:relative">
		<GmapMap ref="mymap" :center="center" :zoom="16" style="width:100%;  height: 400px;">
			<gmap-info-window
				:options="infoOptions"
				:position="infoWindowPos"
				:opened="infoWinOpen"
				@closeclick="infoWinOpen=false"
			>
				<div style="font-size:14px;font-weight:500">{{infoContent.header}}</div>
				<div>{{infoContent.body}}</div>
			</gmap-info-window>

			<GmapMarker
				:icon="{path:'M9 11.041v-0.825c1.102-0.621 2-2.168 2-3.716 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548 0.898 3.095 2 3.716v0.825c-3.392 0.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z',fillColor: '#091cab', fillOpacity: 1, strokeWeight: 0, scale: 2}"
				:key="index"
				v-for="(m, index) in markers"
				:position="m.position"
			></GmapMarker>
		</GmapMap>
	</div>
</template>

<script>
	import Gmaps from "../../gmaps"
	export default {
		data() {
			return {
				center: { lat: this.lat, lng: this.long },
				markers: [],
				places: [],
				currentPlace: null,
				locations: [],
				formatedAddresses: [],
				infoContent: {
					header: null,
					body: null,
					footer: null
				},
				infoWindowPos: null,
				infoWinOpen: false,
				currentMidx: null,
				infoOptions: {
					pixelOffset: {
						width: 0,
						height: -35
					}
				}
			};
		},

		watch: {
			lat: {
				immediate: true,
				handler(val, oldVal) {
					this.init();
				}
			}
		},

		props: {
			address: {
				type: String
			},
			lat: {
				default: -6.2184634,
				type: Number
			},
			long: {
				default: 106.8171466,
				type: Number
			},
			marked: {
				default: false,
				type: Boolean
			},
			markerMode: {
				default: "default"
			}
		},

		methods: {
			getPosition(marker) {
				this.geocodedAddress(
					marker,
					marker.latLng.lat(),
					marker.latLng.lng()
				);
			},

			geocodedAddress(map, lat, long) {
				let self = this;
				var geocoder = new google.maps.Geocoder();
				var infowindow = new google.maps.InfoWindow();

				var latlng = {
					lat: parseFloat(lat),
					lng: parseFloat(long)
				};

				geocoder.geocode({ location: latlng }, function(results, status) {
					if (status === "OK") {
						if (results[0]) {
							self.setPlace(results[0]);
						} else {
							window.alert("No results found");
						}
					} else {
						window.alert("Geocoder failed due to: " + status);
					}
				});
			},

			toggleInfoWindow: function(marker, idx) {
				this.infoWindowPos = marker.position;
				this.infoContent.body = marker.infoText.formatted_address;
				this.infoWinOpen = true;
				this.currentMidx = idx;
			},

			setPlace(place) {
				this.currentPlace = place;
			},

			addMarker() {
				if (this.currentPlace) {
					if (this.markerMode == "reset") {
						this.markers = [];
					}

					const marker = {
						lat: this.currentPlace.geometry.location.lat(),
						lng: this.currentPlace.geometry.location.lng()
					};

					this.places.push(this.currentPlace);
					this.toggleInfoWindow({
						position: marker,
						infoText: this.currentPlace
					});

					this.$emit("getMarkedData", {
						position: marker,
						infoText: this.currentPlace
					});
				}
			},
			geolocate() {
				navigator.geolocation.getCurrentPosition(position => {
					this.center = {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					};
				});
			},
			init() {
				const marker = {
					lat: this.lat,
					lng: this.long
				};
				this.center = {
					lat: marker.lat,
					lng: marker.lng
				};

				this.markers = [];

				this.markers.push({
					position: marker,
					infoText: {
						formatted_address: this.address
					}
				});
			}
		},
		mounted() {
			let self = this;
			if (this.marked) {
				self.init();
			} else {
				self.geolocate();
			}
		}
	};
</script>
