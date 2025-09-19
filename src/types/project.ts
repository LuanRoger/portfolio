import { StaticImageData } from "next/image";
import { Tech } from "./tech";

export interface Project {
  title: string;
  description: string;
  techStack: Tech[];
  image: {
    src: string | StaticImageData;
    alt: string;
    animated?: boolean;
  };
  repoLink?: string | undefined;
  link?: string | undefined;
}
