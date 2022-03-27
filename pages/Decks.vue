<template>
	<div id="Decks">

		<header class="uk-section uk-section-small uk-section-dark-beige">
			<div class="uk-container uk-container-large">
				<h1 class="uk-heading-medium uk-margin-remove-top">
					Mazos
				</h1>
				<h2 class="uk-margin-remove-top">
					Personalizá tus jugadas
				</h2>
			</div>
		</header>


		<section class="uk-section">
			<div class="uk-container uk-container-large">
				<h3 class="uk-heading-small uk-text-center">
					Selecciona un mazo para verlo
				</h3>
			</div>
		</section>
	</div>
</template>

<script>
	import {decksQuery} from '~/graphql/query'

	export default {
		layout: 'deck',

		data() {
			return {
				api_url: "http://localhost:1337",
			}
		},
		apollo: {
			decks: {
				prefetch: true,
				query: decksQuery,
				variables () {
					return { id: parseInt(this.$route.params.id) }
				}
			},
		}
	}
</script>