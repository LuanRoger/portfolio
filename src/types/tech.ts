export interface Tech {
  name: string;
  link: string;
  color: string;
  category: TechCategory;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export enum TechCategory {
  Language = "Languages",
  Frontend = "Frontend Frameworks",
  Backend = "Backend & Runtime",
  UILibrary = "UI Libraries",
  MobileDesktop = "Mobile & Desktop",
  Database = "Databases",
  Cloud = "Cloud & Hosting",
  DevOps = "DevOps & Build Tools",
  Infrastructure = "Infrastructure & Monitoring",
  CMS = "CMS & Backend Services",
}
