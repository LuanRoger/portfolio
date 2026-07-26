import type { IconName } from "@/types/icons";

export interface Tech {
  category: TechCategory;
  color: string;
  hide?: boolean;
  icon: IconName;
  link: string;
  name: string;
}

export const TechCategory = {
  Backend: "Backend",
  BackendServices: "Backend Services",
  BuildTools: "Build Tools",
  CloudHosting: "Cloud & Hosting",
  CrossPlatform: "Cross-Platform",
  Database: "Databases",
  DevOps: "DevOps",
  Frontend: "Frontend",
  Infrastructure: "Infrastructure",
  Language: "Languages",
  Observability: "Observability",
  Runtime: "Runtimes",
  Styling: "Styling",
} as const;

export type TechCategory = (typeof TechCategory)[keyof typeof TechCategory];
