<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import logo from './hall_logo_image.png';
	import Navbar from '$components/header/navbar/Navbar.svelte';
	import Logo from '$components/header/logo/Logo.svelte'
</script>

<header>
	<Logo />
	<Navbar />
	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<section><h3>Prepare Connect Rebound</h3></section>

<style>
	header {
		display: inline-flex;
		justify-content: space-between;
		background-color: var(--header-background-colour);
	}
	section {
		display: flex;
		justify-content: center;
		color: aliceblue;
		background-color: var(--header-background-colour);
	}
	.corner {
		margin: 0.2em;
		width: 3em;
		height: 3em;
		background-color: var(--header-background-colour);
	}

</style>
