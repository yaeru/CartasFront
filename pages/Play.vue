<template>
	<section id="PlayStage">

		<section class="player-area player-top">
			<div class="player-side-cards">
				<div class="player-deck uk-card uk-card-primary">
					Mazo sin usar
					<br>
					23
				</div>
				<div class="player-cementery uk-card uk-card-default">
					Usadas
				</div>
			</div>
				<h2 class="player-name">
					{{player.playerBname}}
				</h2>

			<div class="player-counter">
				<div class="player-life-counter">
					<span v-bind:style="{ 'height': player.playerBlife + '%'}"></span>
					<p class="uk-margin-remove uk-h1">
						{{player.playerBlife}}
					</p>
				</div>
				<div class="player-favor-counter">
					<span v-bind:style="{ 'height': player.playerBfavor + '%'}"></span>
					<p class="uk-margin-remove uk-h4">
						{{player.playerBfavor}}/100
					</p>
				</div>
			</div>
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
			<div class="player-side-cards">
				<div class="player-deck uk-card uk-card-primary">
					Mazo sin usar
					<br>
					23
				</div>
				<div class="player-cementery uk-card uk-card-default">
					Usadas
				</div>
			</div>
			<h2 class="player-name">
				{{player.playerAname}}
				carta disponible: {{cardAvailable}}
			</h2>
			<div class="player-counter">
				<div class="player-life-counter">
					<span v-bind:style="{ 'height': player.playerAlife + '%'}"></span>
					<p class="uk-margin-remove uk-h1">
						{{player.playerAlife}}
					</p>
				</div>
				<div class="player-favor-counter">
					<span v-bind:style="{ 'height': player.playerAfavor + '%'}"></span>
					<p class="uk-margin-remove uk-h3">
						{{player.playerAfavor}}/100
					</p>
				</div>
			</div>
			<!-- <div class="end-turn">
				<button class="uk-button uk-button-primary uk-button-large uk-button-game">Finalizar Turno</button>
			</div> -->
			<div class="player-hand uk-container">
				<CardPlayList :cards="cards || []" v-on:playCard="compare($event,cards.data)"
				></CardPlayList>
			</div>
		</section>

		<div id="modal-resultado" uk-modal>
			<div v-if="!finishGame" class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-text-center">

				<div class="turn-result uk-grid uk-child-width-1-2@m uk-grid-small uk-margin-bottom" uk-grid v-if="contrincante" v-bind:class="{ 'player-a-win' : resultado === true}">
					<div>
						<div class="uk-card card-player-a">
							<h4 class="uk-margin-remove">
								{{ player.playerAname }}
							</h4>
							<img class="uk-border-circle uk-margin-remove" width="150" :src="api_url + participante.attributes.cover.data.attributes.url" />
							<h2 class="card-name">{{participante.attributes.title}}</h2>
							<h3 class="uk-margin-remove">Poder {{participante.attributes.power}}</h3>
						</div>
					</div>

					<div>
						<div class="uk-card card-player-b">
							<h4 class="uk-margin-remove">
								{{ player.playerBname }}
							</h4>
							<img class="uk-border-circle uk-margin-remove" width="150" :src="api_url + contrincante.attributes.cover.data.attributes.url" />
							<h2 class="card-name">{{contrincante.attributes.title}}</h2>
							<h3 class="uk-margin-remove">Poder: {{contrincante.attributes.power}}</h3>
						</div>
					</div>
				</div>

				<h3 class="uk-text-success uk-margin-remove uk-h2" v-if="resultado === true">¡Victoria!</h3>
				<h3 class="uk-text-danger uk-margin-remove uk-h2" v-if="resultado === false">Derrota</h3>
				<p v-if="resultado === false" class="uk-text-danger uk-text-lead uk-margin-remove">
					Pierdes el Turno y 10 puntos de Vida
				</p>

				<button class="uk-button uk-button-primary uk-button-large uk-modal-close" type="button">
					Siguiente Turno
				</button>
			</div>

			<div v-if="finishGame && winner === player.playerAname" class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-text-center">
				<h3 class="uk-modal-title">
					Ganaste la Partida
				</h3>
				<p>
					ganador: {{ winner }}
				</p>
			</div>

			<div v-if="finishGame && winner === player.playerBname" class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-text-center">
				<h3 class="uk-modal-title">
					Perdiste la Partida
				</h3>
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
				winner: '',
				player: {
					playerAname: 'Jugador A',
					playerAlife: 100,
					playerAfavor: 10,
					playerBname: 'Computadora',
					playerBlife: 100,
					playerBfavor: 10,
				},
				cardAvailable: false,
				finishGame: false,
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
				if(this.finishGame === false) {
					this.finalResult();
					this.battleCards(id,cards);
					this.cardCost();
					this.applyLifeChanges();
				}
			},
			/* Indica si la carta esta disponible para ser costeada */
			cardCost() {
				this.cardAvailable = false;

				if(this.player.playerAfavor >= 5) {
					this.cardAvailable = true;
				}
			},
			battleCards(id,cards) {
				var card = cards.filter(card => card.id == id)[0];
				var randomCard = cards[Math.floor(Math.random()*cards.length)];

				console.log('es mas fuerte?', card.attributes.power > randomCard.attributes.power);
				console.log('carta random es', randomCard.attributes.title);

				this.resultado = card.attributes.power > randomCard.attributes.power;
				this.contrincante = randomCard;
				this.participante = card;

				/* Paga el coste de la carta con favor */
				this.player.playerAfavor -= card.attributes.favor;
				this.player.playerBfavor -= randomCard.attributes.favor;
			},
			applyLifeChanges() {
				if(this.resultado === true) {
					this.player.playerBlife -= 5;
					this.player.playerAfavor += 10;
					this.player.playerBfavor += 10;
				}
				else {
					this.player.playerAlife -= 5;
					this.player.playerAfavor += 10;
					this.player.playerBfavor += 10;
				}
			},
			finalResult() {
				this.finishGame = false;

				if(this.player.playerAlife === 0) {
					this.finishGame = true;
					this.winner = this.player.playerBname;
				}
				if(this.player.playerBlife === 0) {
					this.finishGame = true;
					this.winner = this.player.playerAname;
				}
			}
		}
	}
</script>