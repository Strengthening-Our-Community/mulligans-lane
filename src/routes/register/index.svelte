<script>
	import supabase from '$lib/db';
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import ListErrors from '$lib/ListErrors.svelte';

	let fullname = '';
	let homeaddress = '';
	let mailaddress = '';
	let email = '';
	let mobile = '';
	let phone = '';
	let username = '';
	let password = '';
	let errors = null;

	async function signUp() {
		const { user, error } = await supabase.auth.signUp({
			email: 'example@email.com',
			password: 'example-password'
		});
		console.log(user);
		console.log(error);
	}
</script>

<svelte:head>
	<title>Sign up • Stronger Community</title>
</svelte:head>

<div class="content">
	<p>
		<a href="/login">Have an account?</a>
	</p>

	<ListErrors {errors} />

	<form on:submit|preventDefault={signUp}>
		<fieldset class="form-group">
			<legend>Please provide the following information:</legend>
			<label for="fullname">Full name:</label>
			<input
				class="form-control"
				type="text"
				required
				id="fullname"
				name="fullname"
				placeholder="Your Full Name"
				bind:value={fullname}
			/><br />
			<label for="homeaddress">Residential address:</label>
			<input
				class="form-control"
				type="text"
				required
				id="homeaddress"
				name="homeaddress"
				placeholder="Where you live"
				bind:value={homeaddress}
			/><br />
			<label for="mailaddress">Contact address:</label>
			<input
				class="form-control"
				type="text"
				required
				id="mailaddress"
				name="mailaddress"
				placeholder="Mail address"
				bind:value={mailaddress}
			/><br />
			<label for="mobile">Mobile phone:</label>
			<input
				class="form-control"
				type="tel"
				required
				id="mobile"
				name="mobile"
				placeholder="0XXX XXX XXX"
				bind:value={mobile}
			/><br />
			<label for="phone">Landline:</label>
			<input
				class="form-control"
				type="phone"
				required
				id="phone"
				name="phone"
				placeholder="(XX) XXXX XXXX)"
				bind:value={phone}
			/><br /><br />
			<label for="email">Email address:</label>
			<input
				class="form-control"
				type="email"
				required
				id="email"
				name="email"
				placeholder="Email"
				bind:value={email}
			/><br />
			<input
				class="form-control"
				type="password"
				required
				id="password"
				name="password"
				placeholder="Password"
				bind:value={password}
			/><br /><br />
			<input class="submit" type="submit" value="Sign up" />
		</fieldset>
	</form>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		text-align: center;
	}
	fieldset {
		/* background-color: #eeeeee; */
		background-color: rgba(255, 255, 255, 0.7);
		border: 1px solid var(--header-background-colour);
	}

	legend {
		background-color: var(--header-background-colour);
		color: white;
		padding: 5px 10px;
	}

	input {
		margin: 5px;
	}
</style>
