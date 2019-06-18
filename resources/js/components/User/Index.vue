<template>
	<div class="container-fluid">
		<!-- Begin Page Header-->
		<div class="row">
			<div class="page-header">
				<div class="d-flex align-items-center">
					<h2 class="page-header-title">Data User</h2>
					<div>
						<div class="page-header-tools">
							<!--<router-link tag="button" to="/internal/user/new" class="btn btn-primary ripple">Tambah</router-link>-->
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
						<div class="table-responsive table-scroll padding-right-10" style="max-height:520px;">
							<table class="table table-hover mb-0">
								<thead>
									<tr>
										<th width="1%">
											<div class="styled-checkbox mt-2">
												<input type="checkbox" name="check-all" id="check-all">
												<label for="check-all"></label>
											</div>
										</th>
										<th width="5%"></th>
										<th width="15%">Role</th>
										<th width="20%">Name</th>
										<th width="20%">Email</th>
										<th width="10%">Phone</th>
										<!--<th width="10%">Actions</th>-->
									</tr>
								</thead>
								<tbody>
									<tr v-for="user in dataUser">
										<td style="width:5%;">
											<div class="styled-checkbox mt-2">
												<input type="checkbox" name="cb10" id="cb10">
												<label for="cb10"></label>
											</div>
										</td>
                                        <td class="text-center">
                                            <div style="height: 80px; width: 80px">
                                                <img :src="user.photo != '' ? user.photo : 'https://firebasestorage.googleapis.com/v0/b/pasarudang-6129d.appspot.com/o/_webs%2Fuser-img.png?alt=media&token=cb7062cb-1aab-428c-b5d2-8f84fee01cc3'" alt="" style="height: 100%; width: 100%; object-fit: cover" class="img-fluid rounded-circle">
                                            </div>
                                        </td>
                                        <td>
                                            <span class="badge-text badge-text-small bg-blue">{{user.current_role}}</span>
                                        </td>
										<td>
                                            {{user.name}}
                                        </td>
										<td>{{user.email}}</td>
										<td>{{user.phone}}</td>
										<!--<td class="td-actions">-->
											<!--<div class="dropdown">-->
												<!--<button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
													<!--Action-->
												<!--</button>-->
												<!--<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">-->
													<!--<router-link class="dropdown-item" tag="a" :to="'/internal/user/'+user.id">-->
														<!--<i class="la la-edit edit"></i> Edit-->
													<!--</router-link>-->
													<!--&lt;!&ndash;@click.prevent="deleteData(d.id, d.user.name)"&ndash;&gt;-->
                                                    <!--<a href="#" @click.prevent="deleteUser()" v-if="current_user.uid != user.id"-->
                                                    <!--&gt;-->
														<!--<i class="la la-close delete"></i> Delete-->
													<!--</a>-->
												<!--</div>-->
											<!--</div>-->
										<!--</td>-->
									</tr>
									<tr v-if="!paging.end">
										<td colspan="7">
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
							<span class="display-items">Showing 1-{{dataUser.length}} Results</span>
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
				current_user: firebase.auth().currentUser,
				dataUser: [],

				paging: {
					total_data: 0,
					user_per_page: 10,
					end: false,
					loading: false
				},
				ref: {
					users: null,
					usersNext: null
				}
			};
		},

		beforeRouteEnter(to, from, next) {
			next(vm => {
				vm.loadUsers();
			});
		},

		methods: {
			loadUsers() {
				console.log(db.collection("user").get());
				let self = this;

				this.ref.users = db
					.collection("user")
					.orderBy("create_unix_time", "desc");

				const firstPage = this.ref.users.limit(this.paging.user_per_page);
				this.handleUsers(firstPage);
			},

			loadMore() {
				let self = this;

				if (self.paging.end) {
					return;
				}

				this.paging.loading = true;
				this.handleUsers(this.ref.usersNext).then(documentSnapshots => {
					self.paging.loading = false;

					if (documentSnapshots.empty) self.paging.end = true;
				});
			},

			handleUsers(ref) {
				return new Promise((resolve, reject) => {
					ref.get().then(documentSnapshots => {
						if (documentSnapshots.empty) {
							this.paging.end = true;
							resolve(documentSnapshots);
						}

						documentSnapshots.forEach(doc => {
							let userData = doc.data();
							userData.id = doc.id;
							this.dataUser.push(userData);
						});

						const lastVisible =
							documentSnapshots.docs[documentSnapshots.size - 1];

						if (!lastVisible) return;

						this.ref.usersNext = this.ref.users
							.startAfter(lastVisible)
							.limit(this.paging.user_per_page);

						resolve(documentSnapshots);
					});
				});
			}
		},

		mounted() {}
	};
</script>
