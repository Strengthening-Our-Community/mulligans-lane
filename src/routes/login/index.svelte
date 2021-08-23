<script>
	import supabase from '$lib/db';

	async function signIn() {
		const { user, error } = await supabase.auth.signIn({
			email: 'example@email.com',
			password: 'example-password'
		});
		let p = 'p';
	}
</script>

<button on:Click={signIn}>Sign In</button>
