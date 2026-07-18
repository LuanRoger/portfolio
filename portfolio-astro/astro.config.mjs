// @ts-check
import { defineConfig, svgoOptimizer } from 'astro/config';
import varlockAstroIntegration from '@varlock/astro-integration';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://luanroger.dev',
  output: 'server',
  adapter: vercel(),
  integrations: [varlockAstroIntegration(), react(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    svgOptimizer: svgoOptimizer()
  },
});
