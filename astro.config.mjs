// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';


import vercel from '@astrojs/vercel';


import icon from 'astro-icon';


// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()]
  },

  integrations: [react(), icon()],
  adapter: vercel(),
  output: 'server'
});