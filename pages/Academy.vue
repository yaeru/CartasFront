<template>
	<div id="Academy">

		<header class="uk-section uk-section-dark-beige">
			<div class="uk-container uk-container-large">
				<h2 class="uk-margin-remove-bottom">
					Aprendiendo mitologia
				</h2>
				<h1 class="uk-heading-medium uk-margin-remove-top">
					Academia
				</h1>
			</div>
		</header>


		<section class="uk-section">
			<div class="uk-container uk-container-large">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>

				<div class="uk-grid uk-child-width-1-2@s uk-child-width-1-4@m uk-flex-center uk-text-center" uk-grid>
					<div v-for="culture in cultures.data" v-bind:key="culture.id">
						<nuxt-link :to="{ path: '/cultures/' + culture.id }">
							<article class="card-character uk-card uk-card-default uk-card-small uk-card-body">
								<img class="uk-border-circle uk-align-center uk-margin-remove-bottom" width="150" :src="api_url + culture.attributes.cover.data.attributes.url" :alt="culture.attributes.name" />
								<h3 class="uk-h2 uk-margin-small-top">
									{{ culture.attributes.name }}
								</h3>
							</article>
						</nuxt-link>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import {culturesQuery} from '~/graphql/query'

	export default {
		data() {
			return {
				api_url: "http://localhost:1337",
			}
		},
		apollo: {
			cultures: {
				prefetch: true,
				query: culturesQuery,
				variables () {
					return { id: parseInt(this.$route.params.id) }
				}
			},
		}
	}
</script>