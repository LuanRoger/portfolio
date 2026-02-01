import type { StaticImageData } from "next/image";
import type { Tech } from "./tech";

export type Project = {
  title: string;
  description: string;
  techStack: Tech[];
  image: {
    src: string | StaticImageData;
    alt: string;
    animated?: boolean;
  };
  repoName?: string | undefined;
  link?: string | undefined;
};
