<template>
	<div class="uk-grid uk-child-width-1-2 uk-child-width-1-3@m" uk-grid uk-height-match="target: .uk-card-body">
		<article v-for="card in cards.data" v-bind:key="card.attributes.id">
			<div class="uk-card uk-card-default uk-card-small" v-bind:class="card.attributes.culture" >

				<div class="uk-card-header">
					<div class="uk-grid-small uk-flex-middle" uk-grid>
						<div class="uk-width-auto">
							<img  class="uk-border-circle" width="80" height="40"  :src="api_url + card.attributes.cover.data.attributes.url" />
						</div>
						<div class="uk-width-expand">
							<h3 class="uk-card-title uk-margin-remove-bottom">
								{{card.attributes.title}}
							</h3>
							<p class="uk-text-meta uk-margin-remove-top">
								{{ card.attributes.culture.data.attributes.name }}
							</p>
						</div>
					</div>
				</div>
				<div class="uk-card-body">
					<p>
						{{ card.attributes.shortDescription }}
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
			<modal :id="'modal-' + card.attributes.title" uk-modal>
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
			</modal>
		</article>
	</div>
</template>

<script>
	import {cardsQuery} from '~/graphql/query'

	export default {
		name: 'CardList',
		props: {
			cards: Array,
		},
		data() {
			return {
				api_url: "http://localhost:1337",
			}
		},
	}
</script>