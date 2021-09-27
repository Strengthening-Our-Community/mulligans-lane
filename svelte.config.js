import { resolve } from 'path';
import WindiCSS from 'vite-plugin-windicss';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			define: {
				'process.env': process.env
			},
			resolve: {
				alias: {
					$components: resolve('./src/components'),
					$stores: resolve('./src/stores'),
					$actions: resolve('./src/actions')
				}
			},
			plugins: [WindiCSS.default()]
		},
		paths: {
			// base: '/mulligans-lane'
			// assets: '/mulligans-lane'
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
