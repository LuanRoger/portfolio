import type { IconName } from "@/types/icons";

export type Tech = {
  name: string;
  link: string;
  color: string;
  category: TechCategory;
  icon: IconName;
  hide?: boolean;
};

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
