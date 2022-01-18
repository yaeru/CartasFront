<template>
	<section class="uk-section">
		<div class="uk-container">
			<CardList :cards="cards || []" ></CardList>
		</div>
	</section>
</template>

<script>
	import {cardsQuery} from '~/graphql/query'
	import CardList from '@/components/CardList';

	export default {
		name: 'IndexPage',
		components: {
			CardList,
		},

		data() {
			return {
				api_url: "http://localhost:1337",
				cards: [],
			}
		},
		apollo: {
			cards: {
				prefetch: true,
				query: cardsQuery,
				variables () {
					return { id: parseInt(this.$route.params.id) }
				}
			},
		}
	}
</script>
