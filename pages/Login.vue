<template>
	<section class="uk-section">
		<div class="uk-container uk-container-large">
			<div v-show="error !== ''" class="uk-alert uk-alert-danger">
				<p>{{ error }}</p>
			</div>
			<div class="card-character uk-card uk-card-secondary uk-card-body uk-card-small uk-width-1-2@m uk-align-center uk-text-center">
				<h1>
					Login
				</h1>
				<form @submit="loginUser">
					<div class="uk-margin">
						<input
						v-model="identifier"
						class="uk-input"
						type="email"
						placeholder="email"
						/>
					</div>
					<div class="uk-margin">
						<input
						v-model="password"
						class="uk-input"
						type="password"
						placeholder="password"
						/>
					</div>
					<div class="uk-margin">
						<button
						:disabled="identifier === '' || password === ''"
						class="uk-button uk-button-primary"
						type="submit"
						>
						Login
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
</section>
</template>
<script>
	export default {
		data() {
			return {
				identifier: '',
				password: '',
				error: '',
			}
		},
		methods: {
			async loginUser(e) {
				e.preventDefault()
				try {
					const user = await this.$strapi.login({
						identifier: this.identifier,
						password: this.password,
					})
					console.log(user)
					if (user !== null) {
						this.error = ''
						this.$nuxt.$router.push('/profile')
					}
				} catch (error) {
					this.error = 'Error in login credentials'
				}
			},
		},
		middleware: 'auth',
	}
</script>