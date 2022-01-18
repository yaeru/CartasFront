<template>
	<section v-if="!loading">
		<header class="uk-section uk-section-muted">
			<div class="uk-container">
				
				<h2 class="uk-margin-remove-bottom">
					{{ card.data.attributes.culture }}
				</h2>
				<h1 class="uk-heading-medium uk-margin-remove-top">
					{{ card.data.attributes.title }}
				</h1>
				<p class="uk-text-lead">
					{{ card.data.attributes.shortDescription }}
				</p>
			</div>
		</header>
		<div class="uk-section">
			<div class="uk-container">
				<div class="uk-column-1-2 uk-dropcap" v-html="$md.render(card.data.attributes.description)"></div>
			</div>
		</div>
	</section>
</template>

<script>
	import {cardQuery} from '~/graphql/query'
	
	var moment = require('moment')

	export default {
		components: {
		},
		data() {
			return {
				loading: 0,
				card: [],
				moment: moment,
				//api_url: process.env.STRAPI_URL
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
		}
	}
</script>