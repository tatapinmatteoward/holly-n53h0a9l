import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://hollywood-insider-daily.pages.dev',
  build: {
    format: 'directory'
  }
});
