<template>
	<div class="uk-grid uk-child-width-1-3 uk-child-width-1-4@m" uk-grid uk-height-match="target: .uk-card-description">
		<article v-for="card in listCards" v-bind:key="card.attributes.id">
			<div class="uk-card uk-card-default uk-card-small" v-bind:class="card.attributes.culture" >
				<div class="uk-card-body uk-text-center">
					<img  class="uk-border-circle uk-align-center uk-margin-remove-bottom" width="150" :src="api_url + card.attributes.cover.data.attributes.url" :alt="card.attributes.title" />

					<h3 class="uk-h2 uk-margin-remove">
						{{card.attributes.title}}
					</h3>
					<p class="uk-text-muted uk-h4 uk-margin-remove">
						Cultura {{ card.attributes.culture.data.attributes.name }}
					</p>

					<p class="uk-card-description uk-text-small">
						{{ card.attributes.shortDescription }}
					</p>
					<div class="uk-grid uk-child-width-1-2 uk-flex-between" uk-grid>
						<div>
							<p class="uk-margin-remove">Poder</p>
							<h3 class="uk-margin-remove uk-h2">{{card.attributes.power}}</h3>
						</div>
						<div>
							<p class="uk-margin-remove">Defensa</p>
							<h3 class="uk-margin-remove uk-h2">213</h3>
						</div>
					</div>
				</div>

				<div class="uk-card-footer"  uk-margin>
					<button v-on:click="$emit('playCard',card.id)" class="uk-button uk-button-primary uk-width-1-1" uk-toggle="#modal-resultado">
						Jugar Carta {{ card.id }}
					</button>
				</div>
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