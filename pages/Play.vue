<template>
	<section id="PlayStage" class="uk-section uk-section-small">
		<div class="uk-container uk-container-expand">
			<CardPlayList :cards="cards || []" v-on:playCard="compare($event,cards.data)"
			></CardPlayList>

			<div id="modal-resultado" uk-modal>
				<div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
					
					<div class="uk-grid uk-child-width-1-2@m uk-grid-small uk-margin-bottom uk-text-center" uk-grid v-if="contrincante">
						<div>
							<div class="uk-card uk-card-secondary uk-card-body uk-card-small">
								<h4 class="uk-margin-remove">Enemigo</h4>
								<h2 class="uk-margin-remove">{{contrincante.attributes.title}}</h2>
								<h1 class="uk-margin-remove">Valor: {{contrincante.id}}</h1>
							</div>
						</div>
						<div>
							<div class="uk-card uk-card-primary uk-card-body uk-card-small">
								<h4 class="uk-margin-remove">Tu Carta</h4>
								<h2 class="uk-margin-remove">{{participante.attributes.title}}</h2>
								<h1 class="uk-margin-remove">Valor {{participante.id}}</h1>
							</div>
						</div>
						<div class="uk-width-1-1">
							<div class="uk-card uk-background-success uk-card-body uk-card-small" v-if="resultado === true">
								<h3 class="uk-margin-remove">Ganaste</h3>
							</div>
							<div class="uk-card uk-background-danger uk-card-body uk-card-small" v-if="resultado === false">
								<h3 class="uk-margin-remove">Perdiste</h3>
							</div>
						</div>
					</div>

					<button class="uk-button uk-button-primary uk-width-1-1 uk-modal-close" type="button">
						Volver a jugar
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
				resultado: null,
				participante: '',
				contrincante: '',
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