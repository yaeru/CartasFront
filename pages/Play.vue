<template>
	<div>
		<section id="PlayStage" v-if="gameOn === false">
			<div class="uk-flex uk-flex-middle uk-flex-center uk-height-1-1 uk-text-center">
				<form class="uk-form">
					<div class="uk-margin">
						<label class="uk-h3 uk-display-inline-block">
							Ingresa tu nombre
						</label>
						<input type="text" v-model="playerA.name" autofocus class="uk-input uk-form-large" placeholder="Tu Nombre" maxlength="30" required>
					</div>
					<div class="uk-margin-medium">
						<button class="uk-button uk-button-large uk-button-action" @click="startGame(cards.data || [])" :disabled="playerA.name === '' ">
							Iniciar Partida
						</button>
					</div>
				</form>
			</div>
		</section>

		<transition name="fade">
			<section id="PlayStage" v-if="gameOn">
				<section class="player-area player-top">
					<div class="player-side-cards">
						<div class="player-deck uk-card uk-card-primary">
							Mazo sin usar
							<br>
							23
						</div>
						<div class="player-cementery uk-card uk-card-default" v-if="contrincante">
							{{ contrincante.attributes.title }}
						</div>	
					</div>
					<h2 class="player-name">
						{{ playerB.name }} {{playerB.turno}}
					</h2>

					<div class="player-counter">
						<div class="player-life-counter">
							<span v-bind:style="{ 'height': playerB.life + '%'}"></span>
							<p class="uk-margin-remove uk-h1">
								{{playerB.life}}
							</p>
						</div>
						<div class="player-favor-counter">
							<span v-bind:style="{ 'height': playerB.favor + '%'}"></span>
							<p class="uk-margin-remove uk-h4">
								{{playerB.favor}}/100
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
						<div class="player-cementery uk-card uk-card-default" v-if="contrincante">
							{{participante.attributes.title}}
						</div>
					</div>
					<h2 class="player-name uk-text-capitalize">
						{{playerA.name}} {{playerA.turno}}
					</h2>
					<div class="player-counter">
						<div class="player-life-counter">
							<span v-bind:style="{ 'height': playerA.life + '%'}"></span>
							<p class="uk-margin-remove uk-h1">
								{{playerA.life}}
							</p>
						</div>
						<div class="player-favor-counter">
							<span v-bind:style="{ 'height': playerA.favor + '%'}"></span>
							<p class="uk-margin-remove uk-h3">
								{{playerA.favor}}/100
							</p>
						</div>
					</div>
					
					<!-- <div class="end-turn">
						<button class="uk-button uk-button-primary uk-button-large uk-button-action">
							Finalizar Turno
						</button>
					</div> -->

					<div class="player-hand uk-container">
						<CardPlayList :cards="pepe || []" v-on:playCard="compare($event,pepe)"
						/>
					</div>
				</section>

				<div id="modal-resultado" uk-modal="esc-close: false; bg-close: false;">
					<div  class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-text-center">

						<div>
							<div class="turn-result uk-grid uk-child-width-1-2 uk-grid-small uk-margin-bottom" uk-grid v-if="contrincante" v-bind:class="{ 'player-a-win' : resultado === true}">
								<div>
									<div class="uk-card card-player-a">
										<h4 class="uk-margin-remove">
											{{ playerA.name }}
										</h4>
										<img class="uk-border-circle uk-margin-remove" width="150" :src="api_url + participante.attributes.cover.data.attributes.url" />
										<h2 class="card-name">{{participante.attributes.title}}</h2>
										<h3 class="uk-margin-remove">Ataque: {{participante.attributes.attack}}</h3>
										<h3 class="uk-margin-remove">Vida: {{participante.attributes.life}}</h3>
									</div>
								</div>

								<div>
									<div class="uk-card card-player-b">
										<h4 class="uk-margin-remove">
											{{ playerB.name }}
										</h4>
										<img class="uk-border-circle uk-margin-remove" width="150" :src="api_url + contrincante.attributes.cover.data.attributes.url" />
										<h2 class="card-name">{{contrincante.attributes.title}}</h2>
										<h3 class="uk-margin-remove">Ataque: {{contrincante.attributes.attack}}</h3>
										<h3 class="uk-margin-remove">Vida: {{contrincante.attributes.life}}</h3>
									</div>
								</div>
							</div>

							<h3 class="uk-text-success uk-margin-remove uk-h2" v-if="resultado === true">¡Victoria!</h3>
							<h3 class="uk-text-danger uk-margin-remove uk-h2" v-if="resultado === false">Derrota</h3>
							
							<p v-if="resultado === true" class="uk-text-lead uk-margin-remove">
								Ganas el Turno y el enemigo pierde <span class="uk-label">{{ hisDamage }}</span> de Vida
							</p>
							<p v-if="resultado === false" class="uk-text-lead uk-margin-remove">
								Pierdes el Turno y <span class="uk-label">{{ myDamage }}</span> de Vida
							</p>
						</div>

						<button v-if="!finishGame" class="uk-button uk-button-primary uk-button-large uk-button-action uk-modal-close" type="button">
							Siguiente
						</button>
						<button v-if="finishGame" class="uk-button uk-button-primary uk-button-large uk-button-action uk-modal-close" type="button" uk-toggle="#openmodal">
							Siguiente
						</button>
					</div>
				</div>

				<div id="openmodal" uk-modal="esc-close: false; bg-close: false;">
					<div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-text-center">
						<div v-if="finishGame && winner === playerA.name">
							<h3 class="uk-h1">
								¡Victoria!
							</h3>
							<p class="uk-text-lead">
								{{ winner }} gana la partida
							</p>
						</div>

						<div v-if="finishGame && winner === playerB.name">
							<h3 class="uk-h1">
								Derrota
							</h3>
							<p class="uk-text-lead">
								{{ winner }} gana la partida
							</p>
						</div>
						<button @click="newGame(cards.data || [])" class="uk-button uk-button-primary uk-button-large uk-button-action uk-modal-close" type="button">
							Nuevo Juego
						</button>
					</div>
				</div>
			</section>
		</transition>
	</div>
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
				gameOn: false,
				resultado: null,
				participante: '',
				contrincante: '',
				winner: '',
				playerA: {
					name: '',
					life: 100,
					favor: 10,
					turno: null,
				},
				playerB: {
					name: 'Computadora',
					life: 100,
					favor: 10,
					turno: null,
				},
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
			startGame(cards) {
				this.gameOn = true;

				if(this.gameOn === true) {
					this.tossCoin();
					this.selectCards(cards)
				}
			},

			// seleccionar 5 cartas aleatorias para cada jugador
			selectCards(cards) {
				let playerA = [];
				let playerB = [];

				for(let i = 0; i < 5; i++) {
					let random = Math.floor(Math.random() * cards.length);
					playerA.push(cards[random]);
					cards.splice(random, 1);
				}

				for(let i = 0; i < 5; i++) {
					let random = Math.floor(Math.random() * cards.length);
					playerB.push(cards[random]);
					cards.splice(random, 1);
				}

				this.pepe = playerA;
			},
			cardDisponible(cards) {
				/*seleccionar cartas cuyo favor sea mayor al playerA favor*/
				let playerADisponibles = cards.filter(card => card.favor > this.playerA.favor);

				/*seleccionar cartas cuyo favor sea mayor al playerB favor*/
				let playerBDisponibles = cards.filter(card => card.favor > this.playerB.favor);

				console.log('cartas disponibles', this.playerADisponibles);
			},

			tossCoin() {
				let coin = Math.floor(Math.random() * 2)
				if (coin === 0) {
					this.playerA.turno = '1ero'
					this.playerB.turno = '2do'
				} else {
					this.playerA.turno = '2do'
					this.playerB.turno = '1ero'
				}
				console.log('turno A', this.playerA.turno);
				console.log('turno B', this.playerB.turno);
			},
			compare(id,cards) {
				if(this.finishGame === false) {
					this.battleCards(id,cards);
					this.applyLifeChanges();
					this.finalResult();
				}
			},
			battleCards(id,cards) {
				var card = cards.filter(card => card.id == id)[0];
				var randomCard = cards[Math.floor(Math.random()*cards.length)];

				this.resultado = card.attributes.attack > randomCard.attributes.life;
				this.contrincante = randomCard;
				this.participante = card;

				this.myCardAttack = card.attributes.attack;
				this.myCardLife = card.attributes.life;
				this.hisCardAttack = randomCard.attributes.attack;
				this.hisCardLife = randomCard.attributes.life;

				if(this.resultado === true) {
					this.hisDamage = Math.abs(this.hisCardLife -= this.myCardAttack);
				}
				else {
					this.myDamage = Math.abs(this.myCardLife -= this.hisCardAttack);
				}

				/* Paga el coste de la carta con favor */
				this.playerA.favor -= card.attributes.favor;
				this.playerB.favor -= randomCard.attributes.favor;
			},
			applyLifeChanges() {
				if(this.resultado === true) {
					this.playerB.life -= this.hisDamage;
					this.playerA.favor += 1;
					this.playerB.favor += 1;
				}
				else {
					this.playerA.life -= this.myDamage;
					this.playerA.favor += 1;
					this.playerB.favor += 1;
				}
			},

			finalResult() {
				this.finishGame = false;

				if(this.playerA.life <= 0) {
					this.finishGame = true;
					this.winner = this.playerB.name;
				}
				if(this.playerB.life <= 0) {
					this.finishGame = true;
					this.winner = this.playerA.name;
				}
				console.log('termino el juego? ', this.finishGame);
			},

			/* Reset de la partida*/
			newGame(cards) {
				this.finishGame = false;
				this.playerA.life = 100;
				this.playerB.life = 100;
				this.playerA.favor = 10;
				this.playerB.favor = 10;
				this.selectCards(cards)
			},
		}
	}
</script>