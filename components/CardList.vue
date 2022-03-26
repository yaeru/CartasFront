<template>
	<div class="uk-grid uk-child-width-1-3 uk-child-width-1-4@m" uk-grid uk-height-match="target: .uk-card-description">
		<!-- <article v-for="card in cards.data" v-bind:key="card.attributes.id"> -->
			<div v-for="card in listCards" v-bind:key="card.attributes.id">
				<div class="uk-card uk-card-default uk-card-small" v-bind:class="card.attributes.culture" >
					<div class="uk-card-body uk-text-center">
						<img  class="uk-border-circle uk-align-center uk-margin-remove-bottom" width="150" :src="api_url + card.attributes.cover.data.attributes.url" :alt="card.attributes.title" />

						<h3 class="uk-h2 uk-margin-remove">
							{{card.attributes.title}}
						</h3>
						<p class="uk-text-muted uk-margin-remove">
							Cultura {{ card.attributes.culture.data.attributes.name }}
						</p>

						<p class="uk-card-description">
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
						<NuxtLink :to="{ path: '/cards/' + card.id }" class="uk-button uk-button-default uk-button-small uk-width-1-1">
							Más info
						</NuxtLink>

					<!-- <a :href="'#modal-' + card.attributes.title" uk-toggle class="uk-button uk-button-default uk-button-small">
						modal
					</a> -->
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