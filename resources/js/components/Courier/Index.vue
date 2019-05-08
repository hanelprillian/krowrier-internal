<template>
	<div class="container-fluid">
		<!-- Begin Page Header-->
		<div class="row">
			<div class="page-header">
				<div class="d-flex align-items-center">
					<h2 class="page-header-title">Courier</h2>
					<div>
						<div class="page-header-tools"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- End Page Header -->
		<div class="row flex-row">
			<div class="col-xl-12">
				<!-- Begin Widget 07 -->
				<div class="widget widget-07 has-shadow">
					<!-- Begin Widget Header -->
					<div class="widget-header bordered d-flex align-items-center">
						<h2>List Data</h2>
					</div>
					<!-- End Widget Header -->
					<!-- Begin Widget Body -->
					<div class="widget-body">
						<div class="row">
							<div class="col-md-6"></div>
							<div class="col-md-6">
								<div class="form-inline float-right">
									<div class="form-group">
										<label for>Status</label>&nbsp;&nbsp;
										<select v-model="search.status" class="form-control" @change="searchLoad()">
											<option value>All</option>
											<option value="1">Active</option>
											<option value="0">Pending</option>
											<option value="2">Suspended</option>
										</select>
									</div>
									<div class="form-group">
										<label for>Search</label>&nbsp;&nbsp;
										<input
											type="text"
											v-model="search.keyword"
											class="form-control"
											@keyup="searchLoad()"
										>
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
						<br>
						<div class="table-responsive table-scroll padding-right-10" style="max-height:520px;">
							<table class="table table-hover mb-0">
								<thead>
									<tr>
										<th>
											<div class="styled-checkbox mt-2">
												<input type="checkbox" name="check-all" id="check-all">
												<label for="check-all"></label>
											</div>
										</th>
										<th>Name</th>
										<th>Email</th>
										<th>Phone</th>
										<th>Address</th>
										<th>Status</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr v-if="dataLoading">
										<td colspan="7">Loading...</td>
									</tr>
									<tr v-if="data.length == 0 && !dataLoading">
										<td colspan="7" class="warning">Data Empty</td>
									</tr>
									<tr v-for="d in data">
										<td style="width:5%;">
											<div class="styled-checkbox mt-2">
												<input type="checkbox" name="cb10" id="cb10">
												<label for="cb10"></label>
											</div>
										</td>
										<td>{{ d.user.name }}</td>
										<td>{{ d.user.email }}</td>
										<td>{{ d.user.phone }}</td>
										<td>{{ d.user.address }}</td>
										<td>
											<small v-if="d.active == 0" class="badge-text text-dark warning badge-text-small">Pending</small>
											<small v-if="d.active == 1" class="badge-text success badge-text-small">Active</small>
											<small v-if="d.active == 2" class="badge-text danger badge-text-small">Suspended</small>
										</td>
										<td class="td-actions">
											<router-link tag="a" :to="'/internal/courier/'+d.id">
												<i class="la la-edit edit"></i>
											</router-link>
											<!-- <a href="#">
												<i class="la la-close delete"></i>
											</a>-->
										</td>
									</tr>
									<tr v-if="!paging.end">
										<td colspan="9">
											<button class="btn btn-block" @click.prevent="loadMore()">Load more</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- End Widget Body -->
					<!-- Begin Widget Footer -->
					<div class="widget-footer d-flex align-items-center">
						<div class="mr-auto p-2">
							<span class="display-items">Showing 1-{{data.length}} Results</span>
						</div>
					</div>
					<!-- End Widget Footer -->
				</div>
				<!-- End Widget 07 -->
			</div>
		</div>
		<!-- End Row -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: [],
				dataLoading: true,

				search: {
					keyword: "",
					status: ""
				},

				paging: {
					total_data: 0,
					data_per_page: 10,
					end: false,
					loading: false
				},
				ref: {
					data: null,
					dataNext: null
				}
			};
		},

		methods: {
			searchLoad: _.debounce(function() {
				this.loadData();
			}, 500),

			loadData() {
				let self = this;

				self.data = [];

				this.ref.data = db.collection("courier");

				if (this.search.keyword != "") {
					this.ref.data = this.ref.data
						.orderBy("name", "asc")
						.startAt(this.search.keyword)
						.endAt(this.search.keyword + "\uf8ff");
				} else {
					this.ref.data = this.ref.data.orderBy("created_at", "desc");
				}

				if (this.search.status != "") {
					this.ref.data = this.ref.data.where(
						"active",
						"==",
						parseInt(this.search.status)
					);
				}

				const firstPage = this.ref.data.limit(this.paging.data_per_page);

				this.dataLoading = true;
				this.handledata(firstPage).then(documentSnapshots => {
					this.dataLoading = false;
				});
			},

			loadMore() {
				let self = this;

				if (self.paging.end) {
					return;
				}

				this.paging.loading = true;
				this.handledata(this.ref.dataNext).then(documentSnapshots => {
					self.paging.loading = false;

					if (documentSnapshots.empty) self.paging.end = true;
				});
			},

			handledata(ref) {
				return new Promise((resolve, reject) => {
					ref.get().then(documentSnapshots => {
						if (documentSnapshots.empty) {
							this.paging.end = true;
							resolve(documentSnapshots);
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

							this.data.push(data);
						});

						const lastVisible =
							documentSnapshots.docs[documentSnapshots.size - 1];

						if (!lastVisible) return;

						this.ref.dataNext = this.ref.data
							.startAfter(lastVisible)
							.limit(this.paging.data_per_page);

						resolve(documentSnapshots);
					});
				});
			},

			async _deleteAction(id) {
				var total_booking = 0;
				// await db
				// 	.collection("booking")
				// 	.where("origin_hub_id", "==", id)
				// 	.limit(1)
				// 	.get()
				// 	.then(snap => {
				// 		total_booking += snap.size;
				// 	});
				// await db
				// 	.collection("booking")
				// 	.where("destination_hub_id", "==", id)
				// 	.limit(1)
				// 	.get()
				// 	.then(snap => {
				// 		total_booking += snap.size;
				// 	});

				if (total_booking > 0) {
					swal.fire("Delete Fail", "This HUB already used", "error");
					return;
				}
				db.collection("courier")
					.doc(id)
					.delete()
					.then(() => {
						this.loadData();
					})
					.catch(error => {
						alert("Error removing document: ", error);
					});
			},

			async deleteData(id, data_name) {
				if (id) {
					swal.fire({
						title: "Delete Courier ?",
						html:
							"Your data " +
							data_name +
							" will permanently delete from database ?",
						type: "question",
						showCancelButton: true,
						confirmButtonColor: "#3085d6",
						cancelButtonColor: "#d33",
						confirmButtonText: "Yes"
					}).then(result => {
						if (result.value) {
							this._deleteAction(id);
						}
					});
				}
			}
		},
		async mounted() {
			await this.loadData();
		}
	};
</script>

