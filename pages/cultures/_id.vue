<template>
	<section v-if="!loading">
		<header class="uk-section uk-section-muted">
			<div class="uk-container">
				<h2 class="uk-margin-remove-bottom">
					Cultura
				</h2>
				<h1 class="uk-heading-medium uk-margin-remove-top">
					{{ culture.data.attributes.name }}
				</h1>
			</div>
		</header>

		<section class="uk-section">
			<div class="uk-container">
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
		head() {
			return {
				//title: this.culture.data.attributes.name + " - " + this.siteTitle,
			}
		},
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
		},
		mounted: function() {
			setTimeout(function(){
				var card = culture.data.attributes.cards.find(card => card.id == 2)
                var randomCard = this.culture.data.attributes.cards[Math.floor(Math.random()*this.culture.data.attributes.cards.length)]
                console.log('es mas fuerte?', card.id > randomCard.id);
			}, 3000);
		},
		methods:{
            /* function que dado un id, compare la fuerza entre la card con ese id y una random */
            compare(id){
                
            },
        },
	}
</script>