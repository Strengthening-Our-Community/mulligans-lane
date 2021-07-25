<script context="module">
	export const prerender = true;
</script>

<script>
	import { blank_object } from 'svelte/internal';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<h1>Strengthening OUR Community</h1>
		</div>
	</h1>
	<div style="align-items: center padding: 1em">
		<h4 style="background-color: black">
			<span style="color: aliceblue"> How many people do you need to make a </span>
			<span style="color: #f46524"> change in your community?</span> <br />
			<span style="color: #f46524">Just one!</span>
			<span style="color: aliceblue">But you need to want to change.</span> <br />
			<span style="color: aliceblue"> (Maybe with a little help from your neighbours)</span>
		</h4>
	</div>

	<h2>Community Owned Information Infrastructure</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
</style>
