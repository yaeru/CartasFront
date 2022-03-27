<template>
	<div id="DeckLayout">
		<Navigation/>
		<div class="uk-grid uk-grid-collapse" uk-grid>
			
			<main class="uk-width-4-5@m">
				<Nuxt/>
			</main>
			<aside class="uk-width-1-5@m">
				<div class="uk-background-primary uk-padding uk-height-1-1">
					<h2 class="uk-light">
						Tus Mazos
					</h2>

					<div class="uk-card uk-card-default uk-card-body uk-card-small uk-margin-bottom" v-for="deck in decks.data" v-bind:key="deck.id">
						<nuxt-link :to="{ path: '/decks/' + deck.id }">
							<h3 class="uk-margin-remove">
								{{ deck.attributes.name }}
							</h3>
							<p class="uk-margin-remove-top">
								{{ deck.attributes.description }}
							</p>
						</nuxt-link>
					</div>
					
				</div>
			</aside>
		</div>
	</div>
</template>

<script>
	import {decksQuery} from '~/graphql/query'

	export default {
		data() {
			return {
				api_url: "http://localhost:1337",
				decks: [],
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