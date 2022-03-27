<template>
	<section v-if="!loading">
		<header class="uk-section uk-section-dark-beige">
			<div class="uk-container uk-container-large">

				<div class="uk-grid" uk-grid >
					<div class="uk-width-1-5@m">
						<img :src="api_url + culture.data.attributes.cover.data.attributes.url" :alt="culture.data.attributes.name" />
					</div>

					<div class="uk-width-4-5@m">
						<ul class="uk-breadcrumb">
							<li><nuxt-link to="/">Incio</nuxt-link></li>
							<li><nuxt-link to="/academy">Academia</nuxt-link></li>
							<li><span>{{ culture.data.attributes.name }}</span></li>
						</ul>
						
						<h2 class="uk-margin-remove-bottom">
							Cultura
						</h2>
						<h1 class="uk-heading-medium uk-margin-remove-top">
							{{ culture.data.attributes.name }}
						</h1>
					</div>
				</div>
			</div>
		</header>

		<section class="uk-section">
			<div class="uk-container uk-container-large">
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