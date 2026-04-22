import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://marcusteixeirabr.github.io',
  base: '/resumos',
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: false,
    },
  },
});
