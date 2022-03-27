<template>
	<section v-if="!loading">
		<header class="uk-section uk-section-small uk-section-dark-beige">
			<div class="uk-container uk-container-large">
				<h1 class="uk-heading-medium uk-margin-remove-top">
					{{ deck.data.attributes.name }}
				</h1>
				<h2 class="uk-margin-remove-top">
					{{ deck.data.attributes.description }}
				</h2>
			</div>
		</header>

		<section class="uk-section">
			<div class="uk-container uk-container-large">
				<h3>
					Listado de cartas
				</h3>
				<CardList :cards="deck.data.attributes.cards || []" ></CardList>
			</div>
		</section>
	</section>
</template>

<script>
	import {deckQuery} from '~/graphql/query'

	export default {
		name: 'DeckIndex',
		layout: 'deck',

		data() {
			return {
				api_url: "http://localhost:1337",
				deck: [],
				loading: 0,
			}
		},
		apollo: {
			$loadingKey: 'loading',
			deck: {
				prefetch: true,
				query: deckQuery,
				variables () {
					return { id: parseInt(this.$route.params.id) }
				}
			},
		}
	}
</script>