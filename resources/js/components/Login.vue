<template>
	<div class="container-fluid no-padding h-100">
		<div class="row flex-row h-100 bg-white">
			<!-- Begin Left Content -->
			<div class="col-1 no-padding">
				<div class="elisyam-bg background-03">
					<div class="elisyam-overlay overlay-08"></div>
				</div>
			</div>
			<!-- End Left Content -->
			<!-- Begin Right Content -->
			<div class="col-11 my-auto no-padding">
				<!-- Begin Form -->
				<div class="authentication-form-2 mx-auto">
					<div class="tab-content" id="animate-tab-content">
						<!-- Begin Sign In -->
						<div role="tabpanel" class="tab-pane show active" id="singin" aria-labelledby="singin-tab">
							<h3>Internal Login</h3>
							<br>
							<div class="alert alert-outline-danger" v-if="error">Wrong username or password</div>
							<br>
							<form>
								<div class="group material-input">
									<input type="text" v-model="email">
									<span class="highlight"></span>
									<span class="bar"></span>
									<label>Email</label>
								</div>
								<div class="group material-input">
									<input type="password" v-model="password">
									<span class="highlight"></span>
									<span class="bar"></span>
									<label>Password</label>
								</div>
							</form>
							<!-- <div class="row">
								<div class="col text-left">
									<div class="styled-checkbox">
										<input type="checkbox" name="checkbox" id="remeber">
										<label for="remeber">Remember me</label>
									</div>
								</div>
								<div class="col text-right">
									<a href="pages-forgot-password.html">Forgot Password ?</a>
								</div>
							</div>-->
							<div class="sign-btn text-center">
								<button
									@click="login()"
									:disabled="email == '' || password == '' || loading"
									class="btn btn-lg btn-gradient-01"
								>{{loading ? 'Loading...' : 'Sign In'}}</button>
							</div>
						</div>
						<!-- End Sign In -->
					</div>
				</div>
				<!-- End Form -->
			</div>
			<!-- End Right Content -->
		</div>
		<!-- End Row -->
	</div>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				loading: false,
				error: false,
				email: "",
				password: ""
			};
		},
		methods: {
			async login() {
				this.loading = true;

				firebase
					.auth()
					.signInWithEmailAndPassword(this.email, this.password)
					.then(
						async user => {
                            await this.getLoggedUser();
						},
						err => {
							this.loading = false;
							this.error = true;
							console.log("Oops. " + err.message);
						}
					);
			},

            async getLoggedUser()
            {
                let self = this;
                let currentUser = firebase.auth().currentUser;

                await db.collection("user").where("user_id","==",currentUser.uid).limit(1).onSnapshot(async documentSnapshots =>
                {
                    if (!documentSnapshots.empty)
                    {
                        documentSnapshots.forEach(async doc =>
                        {
                            let data = await doc.data();
                            data.id = doc.id;
                            localStorage.setItem('userLoginData', JSON.stringify(data));
                            console.log(localStorage.getItem('userLoginData'))

                            this.error = false;
                            window.location = "/internal";
                        });
                    }
                    else
                    {
                        self.logout();
                    }
                });

            },

            logout() {
                firebase
                    .auth()
                    .signOut()
                    .then(() =>
                    {
                        window.IsLogged = false;
                        self.IsLogged = false;
                        self.userLogged = [];
                        localStorage.removeItem('userLoginData');
                        window.location = "/internal/auth/login";
                    });
            },
        }
	};
</script>
