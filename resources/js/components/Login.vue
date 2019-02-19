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
									:disabled="email == '' || password == ''"
									class="btn btn-lg btn-gradient-01"
								>Sign In</button>
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
				email: "",
				password: ""
			};
		},
		methods: {
			login: function() {
				firebase
					.auth()
					.signInWithEmailAndPassword(this.email, this.password)
					.then(
						user => {
							window.location = "/internal";
						},
						err => {
							alert("Oops. " + err.message);
						}
					);
			}
		}
	};
</script>
