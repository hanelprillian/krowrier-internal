<template>
	<div class="container-fluid">
		<!-- Begin Page Header-->
		<div class="row">
			<div class="page-header">
				<div class="d-flex align-items-center">
					<h2 class="page-header-title">Service Package</h2>
					<div>
						<div class="page-header-tools">
							<router-link
								tag="button"
								to="/internal/service-package/new"
								class="btn btn-primary ripple"
							>Tambah</router-link>
						</div>
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
						<div class="table-responsive table-scroll padding-right-10">
							<table class="table table-hover mb-0">
								<thead>
									<tr>
										<th width="1%">
											<div class="styled-checkbox mt-2">
												<input type="checkbox" name="check-all" id="check-all">
												<label for="check-all"></label>
											</div>
										</th>
										<th width="15%">Name</th>
										<th width="10%">Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="d in data">
										<td style="width:5%;">
											<div class="styled-checkbox mt-2">
												<input type="checkbox" name="cb10" id="cb10">
												<label for="cb10"></label>
											</div>
										</td>
										<td>{{d.name}}</td>
										<td class="td-actions">
											<router-link :to="{path:'/internal/service-package/'+d.id}">
												<i class="la la-edit edit"></i>
											</router-link>

											<a href="#" @click.prevent="deleteData(d.id, d.name)">
												<i class="la la-close delete"></i>
											</a>
										</td>
									</tr>
									<tr v-if="!paging.end">
										<td colspan="5">
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

				search: {
					keyword: ""
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

				this.ref.data = db.collection("service_package");

				if (this.search.keyword != "") {
					this.ref.data = this.ref.data
						.orderBy("name", "asc")
						.startAt(this.search.keyword)
						.endAt(this.search.keyword + "\uf8ff");
				} else {
					this.ref.data.orderBy("created_at", "desc");
				}

				const firstPage = this.ref.data.limit(this.paging.data_per_page);
				this.handledata(firstPage);
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

						documentSnapshots.forEach(doc => {
							let data = doc.data();
							data.id = doc.id;
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

			deleteData(id, data_name) {
				if (id) {
					swal.fire({
						title: "Delete Service Package ?",
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
							db.collection("courier_schedule")
								.where("service_package_id", "==", id)
								.limit(1)
								.get()
								.then(snap => {
									if (snap.size == 0) {
										db.collection("service_package")
											.doc(id)
											.delete()
											.then(() => {
												this.loadData();
											})
											.catch(error => {
												alert(
													"Error removing document: ",
													error
												);
											});
									}
								});
						}
					});
				}
			}
		},
		async created() {
			await this.loadData();
		},
		mounted() {}
	};
</script>
