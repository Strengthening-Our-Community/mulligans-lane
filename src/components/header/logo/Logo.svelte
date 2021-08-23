<script>
	import logo from './hall_logo_image.png';
</script>

<div class="corner">
	<a
		aria-label="Burrell Creek Youth & Community Association Hall photo"
		href="https://www.facebook.com/Burrell-Creek-Youth-and-Community-Association-Inc-1584955455117833/?__tn__=-UC*F"
	>
		<img
			class="bcyc-logo"
			x="0"
			y="0"
			height="100%"
			preserveAspectRatio="xMinYMid slice"
			src={logo}
			alt="Burrell Creek Youth and Community Association Inc"
		/>
	</a>
</div>

<style>
	.corner {
		margin: 0.2em;
		width: 3em;
		height: 3em;
		background-color: var(--header-background-colour);
	}

	.bcyc-logo {
		border-radius: 50%;
		max-width: 9vw;
		position: relative;
		width: 9vw;
	}
</style>
