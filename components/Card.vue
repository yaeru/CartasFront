<template>
	<article class="uk-card uk-card-default uk-card-small" v-bind:class="card.attributes.culture" >
		<div class="uk-card-body uk-text-center">
			<img  class="uk-border-circle uk-align-center uk-margin-remove-bottom" width="150" :src="api_url + card.attributes.cover.data.attributes.url" :alt="card.attributes.title" />

			<h3 class="uk-h2 uk-margin-remove">
				{{card.attributes.title}}
			</h3>
			<p class="uk-text-muted uk-margin-remove">
				Cultura {{ card.attributes.culture.data.attributes.name }}
			</p>

			<p class="uk-card-description">
				{{ card.attributes.shortDescription }}
			</p>
			<div class="uk-grid uk-child-width-1-2 uk-flex-between" uk-grid>
				<div>
					<p class="uk-margin-remove">Poder</p>
					<h3 class="uk-margin-remove uk-h2">{{card.attributes.power}}</h3>
				</div>
				<div>
					<p class="uk-margin-remove">Defensa</p>
					<h3 class="uk-margin-remove uk-h2">213</h3>
				</div>
			</div>
		</div>

		<div class="uk-card-footer"  uk-margin>
			<NuxtLink :to="{ path: '/cards/' + card.id }" class="uk-button uk-button-default uk-button-small uk-width-1-1">
				Más info
			</NuxtLink>
		</div>
	</article>
</template>

<script>
	export default {
		props: {
			cards: Object,
		}
	}
</script>