// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';


import vercel from '@astrojs/vercel';


import icon from 'astro-icon';


import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()]
  },

  integrations: [react(), icon(), mdx()],
  adapter: vercel(),
  output: 'server'
});