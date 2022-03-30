<template>
	<nav id="PlayBar" class="uk-position-bottom uk-position-fixed">
		<div class="uk-grid uk-grid-collapse uk-child-width-expand uk-flex-between uk-flex-middle" uk-grid>
			<div id="PlayerA" class="player uk-grid uk-grid-collapse uk-flex-middle" uk-grid>
				<div>
					<div class="life-counter">
						<p class="uk-margin-remove uk-h1">
							{{player.playerAlife}}
						</p>
					</div>
				</div>
				<div class="uk-width-expand">
					<progress class="uk-progress uk-margin-small-bottom" :value="player.playerAlife" max="100"></progress>
					<p class="uk-margin-remove uk-h4 player-name">{{player.playerAname}}</p>
				</div>
			</div>
			<div class="uk-text-center uk-width-small uk-visible@m">
				<p class="uk-margin-remove uk-h3">VS</p>
			</div>
			<div id="PlayerB" class="player uk-grid uk-grid-collapse uk-flex-middle" uk-grid dir="rtl">
				<div>
					<div class="life-counter">
						<p class="uk-margin-remove uk-h1">
							{{player.playerBlife}}
						</p>
					</div>
				</div>
				<div class="uk-width-expand">
					<progress class="uk-progress uk-margin-small-bottom" :value="player.playerBlife" max="100" dir="ltr"></progress>
					<p class="uk-margin-remove uk-h4 player-name">{{player.playerBname}}</p>
				</div>
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
					playerAlife: 75,
					playerBname: 'Jugador B',
					playerBlife: 35,
				},
			}
		},
	}
</script>