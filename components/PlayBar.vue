<template>
	<nav class="uk-navbar-container uk-position-bottom uk-position-fixed" uk-navbar>
		<div class="uk-navbar-left">
			<ul class="uk-navbar-nav">
				<li>
					<nuxt-link to="/">
						Inicio
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/academy">
						Academia
					</nuxt-link>
				</li>
				
			</ul>
		</div>

		<div class="uk-navbar-center">
			<nuxt-link to="/" class="uk-navbar-item uk-logo">
				VS
			</nuxt-link>
		</div>

		<div class="uk-navbar-right">

			<ul class="uk-navbar-nav">
				<li>
					<nuxt-link to="/play">
						Jugar
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/">
						Coleccion
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/deck">
						Mazos
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/">
						Perfil
					</nuxt-link>
				</li>
			</ul>
		</div>
	</nav>
</template>