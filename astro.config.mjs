// @ts-check
import { defineConfig, fontProviders, svgoOptimizer } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

import varlockAstroIntegration from '@varlock/astro-integration';

export default defineConfig({
  site: "https://luanroger.dev",
  adapter: vercel(),
  integrations: [varlockAstroIntegration(), react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Pixelta",
      cssVariable: "--font-pixelta",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PixeltaRegular.ttf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
