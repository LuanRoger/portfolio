// @ts-check
import { defineConfig, svgoOptimizer } from "astro/config";
import varlockAstroIntegration from "@varlock/astro-integration";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://luanroger.dev",
  output: "server",
  adapter: cloudflare(),
  integrations: [varlockAstroIntegration(), react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
