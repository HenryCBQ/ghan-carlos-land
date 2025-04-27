// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: "https://ghan-carlos-land.pages.dev/",
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  experimental: {
    session: true
  }
});