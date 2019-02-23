<template>
	<div class="map-wrapper" style="position:relative">
		<div style="position:absolute;z-index:9;left:10px;margin:auto;bottom:40px;width:100%">
			<div class="form-inline">
				<gmap-autocomplete
					@place_changed="setPlace"
					class="form-control col-md-3"
					style="border:1px solid grey"
				></gmap-autocomplete>
			</div>
		</div>
		<GmapMap
			@click="getPosition"
			ref="mymap"
			:center="center"
			:zoom="16"
			style="width:100%;  height: 400px;"
		>
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
				:key="index"
				v-for="(m, index) in markers"
				:position="m.position"
				@click="toggleInfoWindow(m,index)"
			></GmapMarker>
		</GmapMap>
	</div>
</template>

<script>
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
				this.addMarker();
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

					this.markers.push({
						position: marker,
						infoText: this.currentPlace
					});

					this.places.push(this.currentPlace);
					this.center = marker;
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
			}
		},
		mounted() {
			let self = this;
			if (this.marked) {
				const marker = {
					lat: this.lat,
					lng: this.long
				};

				this.markers.push({
					position: marker,
					infoText: {
						formatted_address: this.address
					}
				});
			} else {
				self.geolocate();
			}
		}
	};
</script>
