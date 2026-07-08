// @ts-check
import { defineConfig, svgoOptimizer } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    svgOptimizer: svgoOptimizer()
  }
});
