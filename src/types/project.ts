import type { Tech } from "./tech";

export type Project = {
  title: string;
  description: string;
  techStack: Tech[];
  image: {
    src: ImageMetadata;
    alt: string;
    animated?: boolean;
  };
  repoName?: string | undefined;
  link?: string | undefined;
};
