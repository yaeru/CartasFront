<template>
	<section v-if="!loading">
		<header class="uk-section uk-section-muted">
			<div class="uk-container uk-container-xlarge">
				<h2 class="uk-margin-remove-bottom">
					Cultura
				</h2>
				<h1 class="uk-heading-medium uk-margin-remove-top">
					{{ culture.data.attributes.name }}
				</h1>
			</div>
		</header>

		<section class="uk-section">
			<div class="uk-container uk-container-xlarge">
				<CardList :cards="culture.data.attributes.cards || []" ></CardList>
			</div>
		</section>

	</section>
</template>

<script>
	import {cultureQuery} from '~/graphql/query';
	
	var moment = require('moment')

	export default {
		name: 'CultureIndex',
		data() {
			return {
				siteTitle: "Cartas CMS pepe",
				api_url: "http://localhost:1337",
				culture: [],
				loading: 0,
				moment: moment,
			}
		},
		apollo: {
			$loadingKey: 'loading',
			culture: {
				prefetch: true,
				query: cultureQuery,
				variables () {
					return { id: parseInt(this.$route.params.id) }
				}
			},
		}
	}
</script>