// @ts-check
import { defineConfig, svgoOptimizer } from "astro/config";
import varlockAstroIntegration from "@varlock/astro-integration";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";
import { cacheCloudflare } from "@astrojs/cloudflare/cache";

export default defineConfig({
  site: "https://luanroger.dev",
  output: "server",
  adapter: cloudflare(),
  integrations: [varlockAstroIntegration(), react(), sitemap()],
  cache: {
    provider: cacheCloudflare(),
  },
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
