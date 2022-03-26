<template>
	<section v-if="!loading" id="PlayStage" class="uk-section uk-section-small">
		<div class="uk-container uk-container-expand">
			<CardPlayList :cards="cards || []" v-on:playCard="compare($event,cards.data)"
			></CardPlayList>

			<div id="modal-resultado" uk-modal>
				<div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-text-center">
					<h3 class="uk-modal-title">
						Round NUMERO
					</h3>
					<div class="uk-grid uk-child-width-1-2@m uk-grid-small uk-margin-bottom" uk-grid v-if="contrincante">
						<div>
							<div class="uk-card">
								<h4 class="uk-margin-remove">Jugador A</h4>
								<img class="uk-border-circle uk-align-center uk-margin-remove-bottom" width="150" :src="api_url + participante.attributes.cover.data.attributes.url" />
								<h2 class="uk-margin-remove">{{participante.attributes.title}}</h2>
								<h3 class="uk-margin-remove">Poder {{participante.id}}</h3>
							</div>
						</div>
						
						<div>
							<div class="uk-card">
								<h4 class="uk-margin-remove">Jugador B</h4>
								<img class="uk-border-circle uk-align-center uk-margin-remove-bottom" width="150" :src="api_url + contrincante.attributes.cover.data.attributes.url" />
								<h2 class="uk-margin-remove">{{contrincante.attributes.title}}</h2>
								<h3 class="uk-margin-remove">Poder: {{contrincante.id}}</h3>
							</div>
						</div>
						
						<div class="uk-width-1-1">
							<h3 class="uk-h1 uk-margin-remove uk-text-success" v-if="resultado === true">¡Victoria!</h3>
							<h3 class="uk-h1 uk-margin-remove uk-text-danger" v-if="resultado === false">Derrota</h3>
						</div>
					</div>

					<button class="uk-button uk-button-primary uk-button-large uk-modal-close uk-margin-medium-top" type="button">
						Siguiente Round
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import {cardsQuery} from '~/graphql/query'

	export default {
		name: 'Play',
		layout: 'play',

		data() {
			return {
				api_url: "http://localhost:1337",
				cards: [],
				loading: 0,
				resultado: null,
				participante: '',
				contrincante: '',
			}
		},
		apollo: {
			$loadingKey: 'loading',
			cards: {
				prefetch: true,
				query: cardsQuery,
				variables () {
					return { id: parseInt(this.$route.params.id) }
				}
			},
		},
		methods:{
			compare(id,cards) {
				var card = cards.filter(card => card.id == id)[0];
				var randomCard = cards[Math.floor(Math.random()*cards.length)];
				
				console.log('es mas fuerte?', card.id > randomCard.id);
				console.log('carta random es', randomCard.id);

				//this.resultado = card.id > randomCard.id ? 'Ganaste' : 'Perdiste';
				this.resultado = card.id > randomCard.id;
				this.contrincante = randomCard;
				this.participante = card;
			}
		}
	}
</script>