<template>
	<div class="player-hand-grid">
		<article class="card-character uk-card uk-card-default uk-card-small uk-card-body uk-text-center" v-for="card in listCards" v-bind:key="card.attributes.id" v-bind:class="card.attributes.culture">
			<div class="card-favor">
				<h3 class="uk-margin-remove">
					{{card.attributes.favor}}
				</h3>
			</div>

			<figure class="card-art uk-padding-small uk-margin-remove-top uk-margin-small-bottom">
				<img class="uk-border-circle uk-align-center uk-margin-remove-bottom" width="150" :src="api_url + card.attributes.cover.data.attributes.url" :alt="card.attributes.title" />
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

			<h3 class="uk-margin-remove">
				{{card.attributes.power}}
			</h3>
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