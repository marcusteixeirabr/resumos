import { defineConfig, fontProviders } from 'astro/config';
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
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Outfit',
      cssVariable: '--font-outfit',
      weights: [400, 500, 600, 700, 800],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: [400, 500],
    },
  ],
});
