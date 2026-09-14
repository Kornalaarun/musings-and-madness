// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kornalaarun.github.io',
  base: '/musings-and-madness',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/blog/placeholder-'),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: false,
    },
  },
  output: 'static',
});
