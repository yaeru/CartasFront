<template>
	<nav id="PlayBar" class="uk-position-bottom uk-position-fixed">
		<div class="uk-grid uk-child-width-expand uk-flex-between uk-flex-middle" uk-grid>
			<div id="PlayerA">
				<p class="uk-margin-remove">{{player.playerAname}}</p>
				<progress class="uk-progress uk-margin-small-top" :value="player.playerAlife" max="100"></progress>
			</div>
			<div class="uk-text-center uk-width-small">
				<p class="uk-margin-remove uk-h3">VS</p>
			</div>
			<div id="PlayerB" class="uk-text-right" dir="rtl">
				<p class="uk-margin-remove">{{player.playerBname}}</p>
				<progress class="uk-progress uk-margin-small-top" :value="player.playerBlife" max="100"></progress>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				player: {
					playerAname: 'Jugador A',
					playerAlife: 85,
					playerBname: 'Jugador B',
					playerBlife: 37,
				},
			}
		},
	}
</script>