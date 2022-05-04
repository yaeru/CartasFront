<template>
	<div class="player-hand-grid">
		<article class="card-character uk-card uk-card-default uk-card-small uk-card-body uk-text-center" v-for="card in listCards" v-bind:key="card.attributes.id" v-bind:class="card.attributes.culture">
			<div class="card-circle card-favor">
				<h3 class="uk-margin-remove">
					{{card.attributes.favor}}
				</h3>
			</div>
			<div class="card-circle card-attack">
				<h3 class="uk-margin-remove">
					{{card.attributes.attack}}
				</h3>
			</div>
			<div class="card-circle card-life">
				<h3 class="uk-margin-remove">
					{{card.attributes.life}}
				</h3>
			</div>

			<figure class="card-art uk-margin-remove-top uk-margin-small-bottom">
				<img class="uk-margin-remove-bottom" width="100%" :src="api_url + card.attributes.cover.data.attributes.url" :alt="card.attributes.title" />
			</figure>


			<div class="card-info">
				<h3 class="uk-h2 uk-margin-remove">
					{{card.attributes.title}} <img src="@/assets/img/greek.png" width="30">
				</h3>
				<p class="uk-text-muted uk-h4 uk-margin-remove uk-hidden">
					Cultura {{ card.attributes.culture.data.attributes.name }}
				</p>
				<p class="uk-margin-small-top card-description">
					{{ card.attributes.shortDescription }}
				</p>
			</div>

			
			<button v-on:click="$emit('playCard',card.id)" class="uk-button uk-button-primary uk-button-action" uk-toggle="#modal-resultado">
				Jugar Carta
			</button>
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
		},
		data() {
			return {
				api_url: "http://localhost:1337",
			}
		},
		computed: {
			listCards() {
				return _.orderBy(this.cards, 'card.attributes.title', 'desc'); 
			}
		},
		methods:{
			
		}
	}
</script>