<template>
	<div>
		<header class="uk-section uk-section-small uk-section-dark-beige">
			<div class="uk-container uk-container-large">
				<h1 v-if="$strapi.user !== null" class="uk-heading-medium uk-margin-remove-top">
					Bienvenido {{ $strapi.user.username }}
				</h1>
				<h2 class="uk-margin-remove-top">
					Personalizá tus jugadas
				</h2>
			</div>
		</header>

		<section v-if="$strapi.user === null" class="uk-section">
			<div class="uk-container uk-container-large">
				<h1>Selecciona una opcion</h1>
				<NuxtLink to="/login" class="uk-button uk-button-primary">Login</NuxtLink>
				<NuxtLink to="/signup" class="uk-button uk-button-primary">Signup</NuxtLink>
			</div>
		</section>

		<section class="uk-section">
			<div class="uk-container uk-container-large">				
				<ul>
					<li v-for="(deck, i) in data.data" :key="i">
						{{ deck.attributes.name }}
					</li>
				</ul>

				<div class="uk-hidden">
					<div v-show="error !== ''">
						<p>{{ error }}</p>
						<button class="uk-button" @click="resetError()">Ok</button>
					</div>
					<div v-for="(deck, i) in data.data" :key="i">
						<h3>
							{{ deck.attributes.name }}
						</h3>
						<p>
							{{ deck.attributes.description }}
						</p>
						<button class="uk-button uk-button-primary" @click="readPost(deck)">
							Read more
						</button>
					</div>
				</div>
			</div>
		</section>

	</div>
</template>

<script>
	import {meQuery} from '~/graphql/query';

	export default {
		async asyncData({ $strapi, $md }) {
			const data = await $strapi.$decks.find({ populate: "*" });
			return { data };
		},
		
		data() {
			return {
				error: "",
				decks: [],
				me: [],
			};
		},
		methods: {
			readPost(deck) {
				if (this.$strapi.user) {
					this.error = "";
					this.$nuxt.$router.push(`/decks/${deck.id}`);
				} else {
					this.error = "Please Login to read deck";
				}
			},
			resetError() {
				this.error = "";
			},
		},
	};
</script>
