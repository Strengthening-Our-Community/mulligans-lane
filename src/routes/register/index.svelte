<script>
	import supabase from '$lib/db';

	async function signUp() {
		const { user, error } = await supabase.auth.signUp({
			email: 'example@email.com',
			password: 'example-password'
		});
	}
</script>
<button on:Click={signUp}>Register</button>