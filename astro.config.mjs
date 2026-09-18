// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: set this to your real production URL before deploying.
// It is used for the generated sitemap and canonical/Open Graph URLs.
const SITE = 'https://drumsyncacademy.netlify.app';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Static build output to `dist` (Astro's default output mode is static).
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
