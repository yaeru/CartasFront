<template>
	<section id="PlayStage">

		<section class="player-area player-top">
			<div class="player-left-cards">
				<div class="player-deck uk-card uk-card-primary">
					Mazo sin usar
					<br>
					23
				</div>
				<div class="player-cementery uk-card uk-card-default">
					Usadas
				</div>
			</div>
			<!-- <div class="player-right">
				<div class="player-life-bar">
					<span style="height: 45%;"></span>
				</div>
				<div class="player-favor-bar">
					<span style="height: 28%;"></span>
				</div>
			</div> -->
			<div class="player-hand uk-container">
				<div class="player-hand-grid">
					<article class="card-character uk-card uk-card-default uk-card-small uk-card-body">
					</article>
					<article class="card-character uk-card uk-card-default uk-card-small uk-card-body">
					</article>
					<article class="card-character uk-card uk-card-default uk-card-small uk-card-body">
					</article>
					<article class="card-character uk-card uk-card-default uk-card-small uk-card-body">
					</article>
					<article class="card-character uk-card uk-card-default uk-card-small uk-card-body">
					</article>
					<article class="card-character uk-card uk-card-default uk-card-small uk-card-body">
					</article>
					<article class="card-character uk-card uk-card-default uk-card-small uk-card-body">
					</article>
				</div>
			</div>
		</section>

		<section class="player-area player-bottom">
			<div class="player-left-cards">
				<div class="player-deck uk-card uk-card-primary">
					Mazo sin usar
					<br>
					23
				</div>
				<div class="player-cementery uk-card uk-card-default">
					Usadas
				</div>
			</div>
			<div class="player-center">
				<h2 class="player-name uk-margin-small-top uk-margin-remove-bottom">
					Player A Name
				</h2>
			</div>
			<!-- <div class="player-right">
				<div class="player-life-bar">
					<span style="height: 85%;"></span>
				</div>
				<div class="player-favor-bar">
					<span style="height: 66%;"></span>
				</div>
			</div> -->
			<div class="player-counter">
				<div class="player-life-counter">
					<span></span>
					<p class="uk-margin-remove uk-h1">
						85
					</p>
				</div>
				<div class="player-favor-counter">
					<span></span>
					<p class="uk-margin-remove uk-h1">
						55
					</p>
				</div>
			</div>
			<div class="end-turn">
				<button class="uk-button uk-button-primary uk-button-large uk-button-game">Finalizar Turno</button>
			</div>
			<div class="player-hand uk-container">
				<CardPlayList :cards="cards || []" v-on:playCard="compare($event,cards.data)"
				></CardPlayList>
			</div>
		</section>

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
	</section>
</template>

<script>
	import {cardsQuery} from '~/graphql/query'
	var moment = require('moment')

	export default {
		name: 'Play',
		layout: 'play',

		data() {
			return {
				api_url: "http://localhost:1337",
				cards: [],
				loading: 0,
				moment: moment,
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