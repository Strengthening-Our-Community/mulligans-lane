<script context="module">
	export async function load({ session }) {
		if (session) {
			// return {
			// 	status: 302,
			// 	redirect: '/'
			// };
		}
		console.log(session);
		return {};
	}
</script>

<script>
	import { goto } from '$app/navigation';
	async function signUp(e) {
		const response = await fetch('/api/auth/register', {
			method: 'post',
			body: new FormData(e.target)
		});

		if (response.ok) {
			console.log(response);
			window.location = '/';
		} else alert(await response.text());
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
		<!-- <form on:submit|preventDefault={signUp}> -->
		<form action="/api/auth/register" method="POST">
			<h1 class="mb-8 text-3xl text-center">Sign up</h1>
			<input
				id="fullname"
				type="text"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="fullname"
				required="required"
				placeholder="Full Name"
				autocomplete="name"
			/>
			<input
				id="streetaddress"
				type="text"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="streetaddress"
				required="required"
				placeholder="Street Address"
				autocomplete="address-line1"
			/>
			<div class="inline-block">
				<input
					id="suburb"
					type="text"
					class=" border max-w-1/2 border-orange-700 w-full p-3 rounded mb-4"
					name="suburb"
					required="required"
					placeholder="Suburb"
					autocomplete="address-level2"
				/>
				<input
					id="postcode"
					type="text"
					class=" border max-w-1/3 border-orange-700 w-full p-3 rounded mb-4"
					name="postcode"
					required="required"
					placeholder="Postcode"
					autocomplete="postal-code"
				/>
			</div>
			<input
				id="mobile"
				type="tel"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="mobile"
				required="required"
				placeholder="Mobile phone number"
			/>
			<!-- pattern="[0]{1}[1-9]{3} [0-9]{3} [0-9]{3}" -->
			<input
				id="username"
				type="username"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="username"
				required="required"
				placeholder="User Name"
				autocomplete="username"
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
				id="confirmpassword"
				type="password"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="confirmpassword"
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
