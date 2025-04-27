// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: "https://ghan-carlos-land.pages.dev/",
  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
  output: 'server',
  experimental: {
    session: true
  }
});