// @ts-check

import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import varlockAstroIntegration from "@varlock/astro-integration";
import { defineConfig, fontProviders, svgoOptimizer } from "astro/config";

export default defineConfig({
  adapter: cloudflare(),
  build: {
    inlineStylesheets: "always",
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
  fonts: [
    {
      cssVariable: "--font-pixelta",
      name: "Pixelta",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PixeltaRegular.ttf"],
            style: "normal",
            weight: "normal",
          },
        ],
      },
      provider: fontProviders.local(),
    },
  ],
  integrations: [varlockAstroIntegration(), react(), sitemap()],
  output: "server",
  site: "https://luanroger.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});
