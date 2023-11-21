import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 8001,
  },
  integrations: [svelte()],
  adapter: node({
    mode: 'standalone',
  }),
});
