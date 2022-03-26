<template>
	<section v-if="!loading" class="uk-grid" uk-grid>
		<main class="uk-width-2-3@m">
			<section class="uk-section">
				<div class="uk-container">
					<CardList :cards="cards || []" ></CardList>
				</div>
			</section>
		</main>
		<aside class="uk-width-1-3@m">
			<div class="uk-background-primary uk-padding uk-height-1-1">
				<h2>Tus Mazos</h2>
				<div uk-margin>
					<div class="uk-card uk-card-default uk-card-body uk-card-small">
						<h3 class="uk-margin-remove">Nombre de Mazo</h3>
						<p class="uk-margin-remove-top">
							Descripcion del mazo
						</p>
						<div uk-margin>
							<a href="#" class="uk-button uk-button-secondary">Ver</a>
							<a href="#" class="uk-button uk-button-secondary">Editar</a>
						</div>
					</div>

					<div class="uk-card uk-card-default uk-card-body uk-card-small">
						<h3 class="uk-margin-remove">Nombre de Mazo</h3>
						<p class="uk-margin-remove-top">
							Descripcion del mazo
						</p>
						<div uk-margin>
							<a href="#" class="uk-button uk-button-secondary">Ver</a>
							<a href="#" class="uk-button uk-button-secondary">Editar</a>
						</div>
					</div>

					<div class="uk-card uk-card-default uk-card-body uk-card-small">
						<h3 class="uk-margin-remove">Nombre de Mazo</h3>
						<p class="uk-margin-remove-top">
							Descripcion del mazo
						</p>
						<div uk-margin>
							<a href="#" class="uk-button uk-button-secondary">Ver</a>
							<a href="#" class="uk-button uk-button-secondary">Editar</a>
						</div>
					</div>
				</div>
			</div>
		</aside>
	</section>
</template>

<script>
	import {cardsQuery} from '~/graphql/query'

	export default {
		name: 'Deck',

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
	}
</script>