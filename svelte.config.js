import { resolve } from 'path';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	kit: {
		adapter: adapter(),
		// Comment the paths if wants to run in dev mode.
		paths: {
			base: '/mulligans-lane',
			assets: '/mulligans-lane'
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$components: resolve('./src/components'),
					$stores: resolve('./src/stores'),
					$actions: resolve('./src/actions')
				}
			}
		}
	}
};

export default config;
