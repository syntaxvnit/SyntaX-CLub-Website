import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://syntaxvnit.vercel.app',
  integrations: [sitemap()],
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  build: {
    format: 'directory'
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
