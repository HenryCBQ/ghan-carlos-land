// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  trailingSlash: 'never',
  site: "https://ghan-carlos-land.pages.dev",
});