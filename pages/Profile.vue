<template>
	<section class="uk-section">
		<div class="uk-container uk-container-large">
			<h1 v-if="$strapi.user !== null">
				Bienvenido {{ $strapi.user.username }}
			</h1>

			<div v-if="$strapi.user === null">
				<h1>Selecciona una opcion</h1>
				<NuxtLink to="/login" class="uk-button uk-button-primary">Login</NuxtLink>

				<NuxtLink to="/signup" class="uk-button uk-button-primary">Signup</NuxtLink>
			</div>
		</div>
	</section>
</template>
