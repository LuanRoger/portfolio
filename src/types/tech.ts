export interface Tech {
  name: string;
  link: string;
  color: string;
  category: TechCategory;
  icon: React.ReactElement;
}

export enum TechCategory {
  Language = "Language",
  Framework = "Framework",
  Tool = "Tool",
  Database = "Database",
  Cloud = "Cloud",
  Other = "Other",
}
