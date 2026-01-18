export interface Tech {
  name: string;
  link: string;
  color: string;
  category: TechCategory;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  hide?: boolean;
}

export enum TechCategory {
  Language = "Languages",
  Frontend = "Frontend",
  Styling = "Styling",
  Runtime = "Runtimes",
  Backend = "Backend",
  CrossPlatform = "Cross-Platform",
  Database = "Databases",
  Infrastructure = "Infrastructure",
  BuildTools = "Build Tools",
  DevOps = "DevOps",
  CloudHosting = "Cloud & Hosting",
  BackendServices = "Backend Services",
  Observability = "Observability",
}
