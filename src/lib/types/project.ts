import { StaticImageData } from "next/image";
import { Tech } from "./tech";

export interface Project {
  title: string;
  description: string;
  techStack: Tech[];
  imageSrc: string | StaticImageData;
  imageAlt: string;
  repoLink?: string | undefined;
  link?: string | undefined;
}
