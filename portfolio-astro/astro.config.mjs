// @ts-check
import { defineConfig, svgoOptimizer } from 'astro/config';
import varlockAstroIntegration from '@varlock/astro-integration';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [varlockAstroIntegration(), react()],
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    svgOptimizer: svgoOptimizer()
  },
});
