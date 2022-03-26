<template>
	<div class="uk-grid uk-child-width-1-3 uk-child-width-1-4@m uk-child-width-1-5@xl" uk-grid uk-height-match="target: .uk-card-description">
		<div v-for="card in listCards" v-bind:key="card.attributes.id">
			<article class="card-character uk-card uk-card-default uk-card-small uk-card-body uk-text-center" v-bind:class="card.attributes.culture">
				<div class="card-power">
					<h3 class="uk-margin-remove">{{card.attributes.power}}</h3>
				</div>
				
				<figure class="card-art uk-padding-small uk-margin-remove-top uk-margin-small-bottom">
					<img class="uk-border-circle uk-align-center uk-margin-remove-bottom" width="150" :src="api_url + card.attributes.cover.data.attributes.url" :alt="card.attributes.title" />
				</figure>

				<h3 class="uk-h2 uk-margin-remove">
					{{card.attributes.title}}
				</h3>
				<p class="uk-text-muted uk-h4 uk-margin-remove">
					Cultura {{ card.attributes.culture.data.attributes.name }}
				</p>

				<p class="uk-card-description uk-text-small uk-margin-small-top">
					{{ card.attributes.shortDescription }}
				</p>				
				<button v-on:click="$emit('playCard',card.id)" class="uk-button uk-button-primary uk-width-1-1" uk-toggle="#modal-resultado">
					Jugar Carta {{ card.id }}
				</button>
		</article>
	</div>
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