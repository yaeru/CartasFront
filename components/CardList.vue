<template>
	<div class="uk-grid uk-child-width-1-3@s uk-child-width-1-4@m" uk-grid uk-height-match="target: .uk-card-description">
		<!-- <article v-for="card in cards.data" v-bind:key="card.attributes.id"> -->
			<div v-for="card in listCards" v-bind:key="card.attributes.id">
				<article class="card-character uk-card uk-card-default uk-card-small uk-card-body uk-text-center" v-bind:class="card.attributes.culture" >
					<div class="card-power">
						<h3 class="uk-margin-remove">{{card.attributes.power}}</h3>
					</div>
					
					<figure class="card-art uk-padding-small uk-margin-remove-top uk-margin-small-bottom">
						<img class="uk-border-circle uk-align-center uk-margin-remove-bottom" width="150" :src="api_url + card.attributes.cover.data.attributes.url" :alt="card.attributes.title" />
					</figure>

					<h3 class="uk-h2 uk-margin-remove">
						{{card.attributes.title}}
					</h3>
					<p class="uk-text-muted uk-margin-remove">
						Cultura {{ card.attributes.culture.data.attributes.name }}
					</p>

					<p class="uk-card-description uk-text-small">
						{{ card.attributes.shortDescription }}
					</p>
					
					<NuxtLink :to="{ path: '/cards/' + card.id }" class="uk-button uk-button-secondary uk-button-small uk-width-1-1">
						Más info
					</NuxtLink>
					<!-- <a :href="'#modal-' + card.attributes.title" uk-toggle class="uk-button uk-button-default uk-button-small">
					modal</a> -->
				</article>
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
						</div>

						<div class="uk-modal-footer  uk-text-right">
							<button class="uk-button uk-button-primary uk-modal-close" type="button">Close</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</template>

	<script>
		import {cardsQuery} from '~/graphql/query'
		import _ from 'lodash';

		export default {
			name: 'CardList',
			props: {
				cards: Object,
			},
			data() {
				return {
					api_url: "http://localhost:1337",
				}
			},
			computed: {
				listCards() {
					return _.orderBy(this.cards.data, 'card.attributes.title', 'desc'); 
				}
			}
		}
	</script>