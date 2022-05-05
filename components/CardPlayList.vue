<template>
	<div class="player-hand-grid">
		<article class="card-character uk-card uk-card-small uk-card-body uk-text-center" v-bind:class="card.attributes.culture.data.attributes.name"v-for="card in listCards" v-bind:key="card.attributes.id" >
			<div class="card-circle card-favor" v-bind:class="{ 'card-favor-diseabled' : card.attributes.favor > playerA.favor}">
				<h3 class="uk-margin-remove">
					{{ card.attributes.favor }}
				</h3>
			</div>
			<div class="card-circle card-attack">
				<h3 class="uk-margin-remove">
					{{ card.attributes.attack }}
				</h3>
			</div>
			<div class="card-circle card-life">
				<h3 class="uk-margin-remove">
					{{ card.attributes.life }}
				</h3>
			</div>

			<figure class="card-art uk-margin-remove">
				<img class="uk-margin-remove-bottom" width="100%" :src="api_url + card.attributes.cover.data.attributes.url" :alt="card.attributes.title" />
			</figure>


			<div class="card-info">
				<h3 class="uk-margin-remove card-name uk-h4">
					{{card.attributes.title}}
				</h3>
				<p class="uk-margin-remove card-description uk-text-small">
					{{ card.attributes.shortDescription }}
				</p>

				<button class="uk-button uk-button-action uk-button-small" v-if="card.attributes.favor > playerA.favor" disabled>
					Sin Favor
				</button>
				<button v-on:click="$emit('playCard',card.id)" class="uk-button uk-button-action uk-button-small" uk-toggle="#modal-resultado" v-else>
					Jugar
				</button>
				

				<!-- <button v-on:click="$emit('playCard',card.id)" class="uk-button uk-button-primary uk-button-action" uk-toggle="#modal-resultado">
					Jugar Carta
				</button> -->
		</div>
	</article>
</div>
</template>

<script>
	import {cardsQuery} from '~/graphql/query'
	import _ from 'lodash';

	export default {
		name: 'CardPlayList',
		props: {
			cards: Array,
			//playerA: Object,
		},
		data() {
			return {
				api_url: "http://localhost:1337",
				cardAvailable: null,
				playerA: {
					favor: 10,
				},
			}
		},
		computed: {
			listCards() {
				return _.orderBy(this.cards, 'card.attributes.title', 'desc'); 
			}
		},
		// methods:{
		// 	cardDisponible(cards) {
		// 		if(card.attributes.favor > this.playerA.favor) {
		// 			this.cardAvailable = false;
		// 		}
		// 		else {
		// 			this.cardAvailable = true;
		// 		}
		// 	},
		// }
	}
</script>