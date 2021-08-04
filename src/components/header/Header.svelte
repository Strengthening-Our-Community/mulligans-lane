<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import logo from './hall_logo_image.png';
	// import motto from './motto.png';
</script>

<header>
	<div class="corner">
		<a
			aria-label="Alan Keown profile photo"
			href="https://www.facebook.com/Burrell-Creek-Youth-and-Community-Association-Inc-1584955455117833/?__tn__=-UC*F"
		>
			<img
				class="bcyc-logo"
				x="0"
				y="0"
				height="100%"
				preserveAspectRatio="xMinYMid slice"
				src={logo}
				alt="Burrell Creek Youth and Community Association Inc"
			/>
		</a>
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
			<li class:active={$page.path === '{base}/'}><a sveltekit:prefetch href="{base}/">Login</a></li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<section><h3>Prepare Connect Rebound</h3></section>

<style>
	header {
		display: flex;
		justify-content: space-between;
		background-color: #f46524;
	}
	section {
		display: flex;
		justify-content: center;
		color: aliceblue;
		background-color: #f46524;
	}
	.corner {
		margin: 0.2em;
		width: 3em;
		height: 3em;
		background-color: #f46524;
	}

	.bcyc-logo {
		border-radius: 50%;
	}
	/* .context-left {
		align-items: center;
		justify-content: flex-start;
	} */

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
