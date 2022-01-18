<template>
	<nav class="uk-navbar-container" uk-navbar>
		<div class="uk-navbar-left">

			<ul class="uk-navbar-nav">
				<li>
					<nuxt-link to="/">
						Inicio
					</nuxt-link>
				</li>
				<li v-for="card in cards.data" v-bind:key="card.attributes.id">
					<nuxt-link :to="{ path: '/cards/' + card.id }">
						{{ card.attributes.title }}
					</nuxt-link>
				</li>
			</ul>

		</div>
	</nav>
</template>

<script>
	import {cardsQuery} from '~/graphql/query'

	export default {
		data() {
			return {
				cards: [],
			}
		},

		apollo: {
			cards: {
				prefetch: true,
				query: cardsQuery,
			},
		}
	};
</script>