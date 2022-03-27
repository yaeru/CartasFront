<template>
	<section id="CharacterSingle" v-if="!loading">
		<header class="uk-section uk-section-dark-beige">
			<div class="uk-container uk-container-large">
				<div class="uk-grid" uk-grid >
					<div class="uk-width-1-5@m">
						<img :src="api_url + card.data.attributes.cover.data.attributes.url" :alt="card.data.attributes.cover.data.attributes.alternativeText" />
					</div>

					<div class="uk-width-4-5@m">
						<ul class="uk-breadcrumb">
							<li><nuxt-link to="/">Incio</nuxt-link></li>
							<li><nuxt-link to="/academy">Academia</nuxt-link></li>
							<li><nuxt-link :to="'/cultures/' + card.data.attributes.culture.data.id">{{ card.data.attributes.culture.data.attributes.name }}</nuxt-link></li>
							<li><span>{{ card.data.attributes.title }}</span></li>
						</ul>
						
						<h2 class="uk-margin-remove-bottom">
							{{ card.data.attributes.culture.data.attributes.name }}
						</h2>
						<h1 class="uk-heading-medium uk-margin-remove-top">
							{{ card.data.attributes.title }}
						</h1>
						<p class="uk-text-lead">
							{{ card.data.attributes.shortDescription }}
						</p>
					</div>
				</div>
			</div>
		</header>
		
		<section class="uk-section">
			<div class="uk-container uk-container-large">
				<h3 class="uk-h2">Historia</h3>
				<div class="uk-column-1-2@m uk-dropcap" v-html="$md.render(card.data.attributes.description)"></div>
			</div>
		</section>

		<section class="uk-section uk-background-primary uk-preserve-color">
			<div class="uk-container uk-container-small">
				<div class="uk-grid uk-grid-large uk-flex-middle" uk-grid>
					<div class="uk-width-2-5@m">
						<article class="card-character uk-card uk-card-default uk-card-small uk-card-body uk-text-center">
							<div class="card-power">
								<h3 class="uk-margin-remove">{{card.data.attributes.power}}</h3>
							</div>

							<figure class="card-art uk-padding-small uk-margin-remove-top uk-margin-small-bottom">
								<img class="uk-border-circle uk-align-center uk-margin-remove-bottom" width="150" :src="api_url + card.data.attributes.cover.data.attributes.url" :alt="card.data.attributes.title" />
							</figure>

							<h3 class="uk-h2 uk-margin-remove">
								{{ card.data.attributes.title }}
							</h3>
							<p class="uk-text-muted uk-margin-remove">
								Cultura {{ card.data.attributes.culture.data.attributes.name }}
							</p>

							<p class="uk-card-description uk-text-small uk-margin-bottom">
								{{ card.data.attributes.shortDescription }}
							</p>
						</article>
					</div>
					<div class="uk-width-3-5@m uk-light">
						<h3 class="uk-h2">Jugando con {{ card.data.attributes.title }}</h3>
						<p class="uk-dropcap">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>

						<router-link to="/play" class="uk-button uk-button-primary uk-button-large">
							Jugá una partida
						</router-link>
					</div>
				</div>
			</div>
		</section>

		<section class="uk-section">
			<div class="uk-container uk-container-large">
				<h3 class="uk-h2 uk-text-center">
					Otros Dioses de la cultura {{ card.data.attributes.culture.data.attributes.name }}
				</h3>

				<CardList :cards="cards || []" ></CardList>
				
			</div>
		</section>
	</section>
</template>

<script>
	import {cardQuery} from '~/graphql/query'
	import {cardsQuery} from '~/graphql/query'
	var moment = require('moment')

	export default {
		components: {
		},
		head() {
			return {
				//title: this.card.data.attributes.title + " - " + this.siteTitle,
			}
		},
		data() {
			return {
				loading: 0,
				siteTitle: "Cartas CMS",
				api_url: "http://localhost:1337",
				card: [],
				cards: [],
				moment: moment,
			}
		},
		apollo: {
			$loadingKey: 'loading',
			card: {
				prefetch: true,
				query: cardQuery,
				variables () {
					return { id: parseInt(this.$route.params.id) }
				}
			},
			cards: {
				prefetch: true,
				query: cardsQuery,
				variables () {
					return { id: parseInt(this.$route.params.id) }
				}
			},
		}
	}
</script>