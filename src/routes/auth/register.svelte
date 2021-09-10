<script context="module">
	export async function load({ session }) {
		if (session) {
			// return {
			// 	status: 302,
			// 	redirect: '/'
			// };
			console.log(session);
		}
		console.log('No session');
		return {};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	async function signUp(e) {
		const response = await fetch('/auth/signup', {
			method: 'post',
			body: new FormData(e.target)
		});
		if (response.ok) window.location = '/';
		else alert(await response.text());
	}
	async function signIn(e) {
		const response = await fetch('/auth/signin', {
			method: 'post',
			body: new FormData(e.target)
		});
		if (response.ok) window.location = '/';
		else alert(await response.text());
	}
</script>

<div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
	<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
		<form on:submit|preventDefault={signUp}>
			<h1 class="mb-8 text-3xl text-center">Sign up</h1>
			<input
				id="fullname"
				type="text"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="fullname"
				required="required"
				placeholder="Full Name"
			/>

			<input
				id="email"
				type="email"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="email"
				required="required"
				placeholder="Email"
				autocomplete="email"
			/>
			<input
				id="password"
				type="password"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="password"
				required="required"
				placeholder="Password"
			/>
			<input
				id="confirm_password"
				type="password"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="confirm_password"
				required="required"
				placeholder="Confirm Password"
			/>

			<button
				type="submit"
				class="w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
				>Create Account</button
			>
		</form>
		<div class="text-center text-sm text-grey-dark mt-4">
			By signing up, you agree to the
			<a
				class="no-underline border-b border-grey-dark text-grey-dark"
				href="/policies/termsofservice"
			>
				Terms of Service
			</a>
			and
			<a class="no-underline border-b border-grey-dark text-grey-dark" href="/policies/privacy">
				Privacy Policy
			</a>
		</div>
	</div>

	<div class="text-grey-dark mt-6">
		Already have an account?
		<a class="no-underline border-b border-blue text-blue" href="../auth/login/"> Sign in </a>.
	</div>
</div>
