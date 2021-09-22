<script>
	import Header from '$components/header/Header.svelte';
	import 'virtual:windi.css';
	// import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>Building a safer connected community</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;

		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
		background-color: #f46524;
		color: aliceblue;
	}

	footer p {
		color: aliceblue;
	}

	@media (min-width: 480px) {
		footer {
			padding: 10px 0;
		}
	}
</style>
