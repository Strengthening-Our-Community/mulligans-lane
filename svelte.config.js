import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// Comment the paths if wants to run in dev mode.
		paths: {
			base: '/Strengthening-Our-Community/mulligans-lane',
			assets: '/Strengthening-Our-Community/mulligans-lane'
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
