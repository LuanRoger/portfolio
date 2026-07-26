import type { Tech } from "./tech";

export interface Project {
  description: string;
  image: {
    src: ImageMetadata;
    alt: string;
    animated?: boolean;
  };
  link?: string | undefined;
  repoName?: string | undefined;
  techStack: Tech[];
  title: string;
}
