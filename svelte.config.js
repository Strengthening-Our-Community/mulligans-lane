import { resolve } from 'path';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
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
		},
		paths: {
			base: '/mulligans-lane',
			assets: '/mulligans-lane'
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
