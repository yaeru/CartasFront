<template>
	<nav class="uk-navbar-container" uk-navbar>
		<div class="uk-navbar-left">

			<nuxt-link to="/" class="uk-navbar-item uk-logo">
				Cartas
			</nuxt-link>

			<ul class="uk-navbar-nav">
				<li v-for="culture in cultures.data" v-bind:key="culture.attributes.id">
					<nuxt-link :to="{ path: '/cultures/' + culture.id }">
						{{ culture.attributes.name }}
					</nuxt-link>
					<div class="uk-navbar-dropdown">
						<ul class="uk-nav uk-navbar-dropdown-nav">
							<li v-for="card in culture.attributes.cards.data" v-bind:key="card.id">
								 <nuxt-link :to="{ path: '/cards/' + card.id }">
									{{ card.attributes.title }}
								</nuxt-link> 
							</li>
						</ul>
					</div>
				</li>

				<!-- <li v-for="card in cards.data" v-bind:key="card.attributes.id">
					<nuxt-link :to="{ path: '/cards/' + card.id }">
						{{ card.attributes.title }}
					</nuxt-link>
				</li> -->
			</ul>

		</div>
	</nav>
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