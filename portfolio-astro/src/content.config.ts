import { defineCollection } from "astro:content";
import { file } from "astro/loaders";

const githubLanguageColors = defineCollection({
  loader: file("src/data/github-colors.json"),
});

export const collections = {
  githubLanguageColors,
};
