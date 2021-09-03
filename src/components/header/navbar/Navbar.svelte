<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<nav>
	<svg width="2.3em" height="3.8em" viewBox="0 0.55 2 3" aria-hidden="true">
		<path d="m 0 0 l 1 2 c 0.5 1 0.5 1 1 1 l 0 -3 z" />
	</svg>
	<ul>
		<li class="nav-item" class:active={$page.path.endsWith('/')}>
			<a class="nav-link" sveltekit:prefetch href="{base}/">
				<!-- <i class="ion-gear-a" /> -->
				<!-- &nbsp;  -->
				Home
			</a>
		</li>
		<li class="nav-item" class:active={$page.path.endsWith('/about')}>
			<a class="nav-link" sveltekit:prefetch href="{base}/about">
				<!-- <i class="ion-gear-a" /> -->
				<!-- &nbsp;  -->
				About
			</a>
		</li>
		<li class="nav-item" class:active={$page.path.endsWith('/auth')}>
			<a class="nav-link" sveltekit:prefetch href="{base}/auth">
				<!-- <i class="ion-gear-a" /> -->
				<!-- &nbsp;  -->
				Auth
			</a>
		</li>
		<li class="nav-item" class:active={$page.path.endsWith('/login')}>
			<a class="nav-link" sveltekit:prefetch href="{base}/login">
				<!-- <i class="ion-gear-a" /> -->
				<!-- &nbsp;  -->
				Sign In
			</a>
		</li>
		<li class="nav-item" class:active={$page.path.endsWith('/register')}>
			<a class="nav-link" sveltekit:prefetch href="{base}/register">
				<!-- <i class="ion-gear-a" /> -->
				<!-- &nbsp; -->
				Sign Up
			</a>
		</li>
	</ul>
	<svg width="2.3em" height="3.8em" viewBox="0 0.55 2 3" aria-hidden="true">
		<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
	</svg>
</nav>

<style>
	nav {
		font-family: 'Segoe UI';
		display: inline-flex;
		--background: rgba(255, 255, 255, 0.7);
	}

	path {
		fill: var(--background-without-opacity);
	}

	ul {
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
		--size: 9px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	li.active::after {
		--size: 9px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		bottom: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-bottom: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 800;
		font-size: 0.6rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
