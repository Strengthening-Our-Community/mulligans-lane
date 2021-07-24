<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	
</script>

<header>
	<div class="corner">
		<!-- <a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a> -->
		<a
			aria-label="Burrell Creek Youth and Community Association Inc. profile photo"
			href="https://www.facebook.com/1584955455117833/photos/a.2044859805794060/2044859812460726/?__tn__=%3C"
			role="link"
			><div>
				<svg
					aria-hidden="true"
					data-visualcompletion="ignore-dynamic"
					role="none"
					style="height: 132px; width: 132px;"
					><mask id="jsc_c_p"><circle cx="66" cy="66" fill="white" r="66" /></mask><g
						mask="url(#jsc_c_p)"
						><image
							x="0"
							y="0"
							height="100%"
							preserveAspectRatio="xMidYMid slice"
							width="100%"
							xlink:href="https://scontent.fmel3-1.fna.fbcdn.net/v/t1.6435-1/p148x148/30127796_2044859815794059_9075512152692883456_n.png?_nc_cat=102&amp;ccb=1-3&amp;_nc_sid=1eb0c7&amp;_nc_ohc=kRHcDI0QRO8AX_vU8N_&amp;_nc_ht=scontent.fmel3-1.fna&amp;oh=f6bb35ef28c8f8cde05ec0d4821d1fd8&amp;oe=61209295"
							style="height: 132px; width: 132px;"
						/><circle class="mlqo0dh0 georvekb s6kb5r3f" cx="66" cy="66" r="66" /></g
					></svg
				>
				<div
					class="s45kfl79 emlxlaya bkmhp75w spb7xbtv i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s rnr61an3"
					data-visualcompletion="ignore"
				/>
			</div></a
		>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.path === '{base}/'}><a sveltekit:prefetch href="{base}/">Home</a></li>
			<li class:active={$page.path === '{base}/about'}>
				<a sveltekit:prefetch href="{base}/about">About</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	/* .corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	} */

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
