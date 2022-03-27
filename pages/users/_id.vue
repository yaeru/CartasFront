<template>
	<section>
		<header class="uk-section uk-section-dark-beige">
			<div class="uk-container uk-container-large">
				<h1 class="uk-heading-medium uk-margin-remove-top">
					{{ user.data.attributes.username }}
				</h1>
			</div>
		</header>

		<section class="uk-section">
			<div class="uk-container uk-container-large">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</section>
	</section>
</template>

<script>
	import {userQuery} from '~/graphql/query';

	export default {
		data() {
			return {
				api_url: "http://localhost:1337",
				user: [],
			}
		},
		apollo: {
			user: {
				prefetch: true,
				query: userQuery,
				variables () {
					return { id: parseInt(this.$route.params.id) }
				}
			},
		}
	}
</script>