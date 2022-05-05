<template>
	<div class="uk-position-top">
		<nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
			<div class="uk-navbar-right">
				<ul class="uk-navbar-nav uk-visible@m">
					<li>
						<nuxt-link to="/">
							Volver
						</nuxt-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
	import {culturesQuery} from '~/graphql/query'
	import {cardsQuery} from '~/graphql/query'

	export default {
		data() {
			return {
				api_url: "http://localhost:1337",
				cultures: [],
				cards: [],
			}
		},
		methods: {
			async logout() {
				await this.$strapi.logout()
				this.$nuxt.$router.push('/')
			},
		},

		apollo: {
			cultures: {
				prefetch: true,
				query: culturesQuery,
			},
			cards: {
				prefetch: true,
				query: cardsQuery,
			},
		}
	};
</script>