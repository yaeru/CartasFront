<template>

	<section class="uk-section">
		<div class="uk-container">
			<div class="uk-grid uk-child-width-1-2 uk-child-width-1-3@m" uk-grid>
				<article v-for="card in cards.data" v-bind:key="card.attributes.id">
					<div class="uk-card uk-card-default" v-bind:class="card.attributes.culture" >
						<div class="uk-card-header uk-card-deck">
							<img :src="api_url + card.attributes.cover.data.attributes.url" />

							<h2 class="uk-card-title uk-margin-remove-bottom">
								{{card.attributes.title}}
							</h2>
							<p class="uk-text-meta uk-margin-remove-top uk-text-capitalize">
								{{card.attributes.culture}}
							</p>
						</div>
						<div class="uk-card-body">
							<p>
								{{card.attributes.shortDescription}}
							</p>
						</div>

						<div class="uk-card-footer uk-text-right">
							<a :href="'#modal-' + card.attributes.title" uk-toggle class="uk-button uk-button-default uk-button-small">
								modal
							</a>
								<NuxtLink :to="{ path: '/cards/' + card.id }" class="uk-button uk-button-primary uk-button-small">
									more info
								</NuxtLink>
							</div>
						</div>

						
						<div :id="'modal-' + card.attributes.title" uk-modal>
							<div class="uk-modal-dialog uk-margin-auto-vertical">
								<button class="uk-modal-close-default" type="button" uk-close></button>
								<div class="uk-modal-header">
									<h2 class="uk-modal-title">
										{{card.attributes.title}}
									</h2>
								</div>
								<div class="uk-modal-body">
									<p v-if="card.attributes.description">
										{{card.attributes.description}}
									</p>
									<p v-else>
										No data
									</p>
									<!-- <ul v-if="page.atacks" class="uk-list uk-list-divider">
										<li v-for="atack in page.atacks">
											<strong>{{atack.pepe}}</strong> {{atack.points}}
										</li>
									</ul>
									<p v-else>
										No attacks
									</p> -->
								</div>

								<div class="uk-modal-footer  uk-text-right">
									<button class="uk-button uk-button-primary uk-modal-close" type="button">Close</button>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	</template>

	<script>
		import {cardsQuery} from '~/graphql/query'

		export default {
			name: 'IndexPage',

			data() {
				return {
					api_url: "http://localhost:1337",
					cards: [],
				}
			},

			apollo: {
				cards: {
					prefetch: true,
					query: cardsQuery,
				},
			}
		}
	</script>
