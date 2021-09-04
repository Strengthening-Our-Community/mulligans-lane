<script>
	import supabase from '$lib/db';

	async function resetPassword() {
		const { user, error } = await supabase.auth.signIn({
			email: 'example@email.com',
			password: 'example-password'
		});
		let p = 'p';
	}
</script>

<div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
	<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
		<form on:submit|preventDefault={resetPassword}>
			<h1 class="mb-8 text-3xl text-center">Reset Password</h1>
			<input
				id="email"
				type="email"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="email"
				required="required"
				placeholder="Email"
				autocomplete="email"
			/>
			<button
				type="submit"
				class="w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
				>Send Password Reset Link</button
			>
		</form>
	</div>
</div>
