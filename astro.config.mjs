import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://maibeautyenzo.nl',
  integrations: [sitemap()],
  output: 'static',
});
