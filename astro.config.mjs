import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";
import Unocss from 'unocss/vite'

// https://astro.build/config
export default defineConfig({
	integrations: [svelte()],
	vite: {
		plugins: [Unocss()]
	}
});
