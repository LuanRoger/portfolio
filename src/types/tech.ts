export type Tech = {
  name: string;
  link: string;
  color: string;
  category: TechCategory;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  hide?: boolean;
};

export const TechCategory = {
  Language: "Languages",
  Frontend: "Frontend",
  Styling: "Styling",
  Runtime: "Runtimes",
  Backend: "Backend",
  CrossPlatform: "Cross-Platform",
  Database: "Databases",
  Infrastructure: "Infrastructure",
  BuildTools: "Build Tools",
  DevOps: "DevOps",
  CloudHosting: "Cloud & Hosting",
  BackendServices: "Backend Services",
  Observability: "Observability",
} as const;

export type TechCategory = (typeof TechCategory)[keyof typeof TechCategory];
