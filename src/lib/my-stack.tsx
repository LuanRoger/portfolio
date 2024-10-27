import {
  AstroIcon,
  AwsIcon,
  CloudflareIcon,
  DartIcon,
  DigitalOceanIcon,
  DockerIcon,
  DotnetIcon,
  ElectronIcon,
  FirebaseIcon,
  FlutterIcon,
  GitIcon,
  MinIOIcon,
  MongoDBIcon,
  MySQLIcon,
  PostgreSQLIcon,
  PythonIcon,
  RabbitMQIcon,
  ReactIcon,
  ShadcnIcon,
  StrapiIcon,
  SupabaseIcon,
  TailwindIcon,
  TurborepoIcon,
  TypeScriptIcon,
  RedisIcon,
  NodeIcon,
  GrafanaIcon,
  ViteIcon,
  PrometheusIcon,
  GitHubIcon,
  VercelIcon,
  NextJSIcon,
  CsharpIcon,
} from "@/components/svg-icons";
import { Tech, TechCategory } from "./types/tech";

export const myStack: Tech[] = [
  {
    name: "AWS",
    link: "https://aws.amazon.com/",
    color: "#232F3E",
    category: TechCategory.Cloud,
    icon: <AwsIcon />,
  },
  {
    name: "Astro",
    link: "https://astro.build/",
    color: "#BC52EE",
    category: TechCategory.Framework,
    icon: <AstroIcon />,
  },
  {
    name: "Cloduflare",
    link: "https://cloudflare.com/",
    color: "#F38020",
    category: TechCategory.Cloud,
    icon: <CloudflareIcon />,
  },
  {
    name: "C#",
    link: "https://dotnet.microsoft.com/",
    color: "#C026D3",
    category: TechCategory.Language,
    icon: <CsharpIcon />,
  },
  {
    name: "Dart",
    link: "https://dart.dev/",
    color: "#0175C2",
    category: TechCategory.Language,
    icon: <DartIcon />,
  },
  {
    name: "DigitalOcean",
    link: "https://digitalocean.com/",
    color: "#0080FF",
    category: TechCategory.Cloud,
    icon: <DigitalOceanIcon />,
  },
  {
    name: "Docker",
    link: "https://docker.com/",
    color: "#2496ED",
    category: TechCategory.Tool,
    icon: <DockerIcon />,
  },
  {
    name: ".NET",
    link: "https://dotnet.microsoft.com/",
    color: "#512BD4",
    category: TechCategory.Framework,
    icon: <DotnetIcon />,
  },
  {
    name: "Electron",
    link: "https://electronjs.org/",
    color: "#47848F",
    category: TechCategory.Framework,
    icon: <ElectronIcon />,
  },
  {
    name: "Firebase",
    link: "https://firebase.google.com/",
    color: "#DD2C00",
    category: TechCategory.Cloud,
    icon: <FirebaseIcon />,
  },
  {
    name: "Flutter",
    link: "https://flutter.dev/",
    color: "#02569B",
    category: TechCategory.Framework,
    icon: <FlutterIcon />,
  },
  {
    name: "Git",
    link: "https://git-scm.com/",
    color: "#F05032",
    category: TechCategory.Tool,
    icon: <GitIcon />,
  },
  {
    name: "GitHub",
    link: "https://github.com/",
    color: "#181717",
    category: TechCategory.Tool,
    icon: <GitHubIcon />,
  },
  {
    name: "MinIO",
    link: "https://min.io/",
    color: "#C72E49",
    category: TechCategory.Tool,
    icon: <MinIOIcon />,
  },
  {
    name: "MongoDB",
    link: "https://mongodb.com/",
    color: "#47A248",
    category: TechCategory.Database,
    icon: <MongoDBIcon />,
  },
  {
    name: "MySQL",
    link: "https://mysql.com/",
    color: "#4479A1",
    category: TechCategory.Database,
    icon: <MySQLIcon />,
  },
  {
    name: "PostgreSQL",
    link: "https://postgresql.org/",
    color: "#4169E1",
    category: TechCategory.Database,
    icon: <PostgreSQLIcon />,
  },
  {
    name: "Python",
    link: "https://python.org/",
    color: "#3776AB",
    category: TechCategory.Language,
    icon: <PythonIcon />,
  },
  {
    name: "RabitMQ",
    link: "https://rabbitmq.com/",
    color: "#FF6600",
    category: TechCategory.Other,
    icon: <RabbitMQIcon />,
  },
  {
    name: "React",
    link: "https://reactjs.org/",
    color: "#61DAFB",
    category: TechCategory.Framework,
    icon: <ReactIcon />,
  },
  {
    name: "shadcn-ui",
    link: "https://ui.shadcn.com/",
    color: "#000000",
    category: TechCategory.Framework,
    icon: <ShadcnIcon />,
  },
  {
    name: "Strapi",
    link: "https://strapi.io/",
    color: "#4945FF",
    category: TechCategory.Other,
    icon: <StrapiIcon />,
  },
  {
    name: "Supabase",
    link: "https://supabase.io/",
    color: "#3FCF8E",
    category: TechCategory.Cloud,
    icon: <SupabaseIcon />,
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    color: "#06B6D4",
    category: TechCategory.Framework,
    icon: <TailwindIcon />,
  },
  {
    name: "Turborepo",
    link: "https://turborepo.com/",
    color: "#EF4444",
    category: TechCategory.Tool,
    icon: <TurborepoIcon />,
  },
  {
    name: "TypeScript",
    link: "https://typescriptlang.org/",
    color: "#3178C6",
    category: TechCategory.Language,
    icon: <TypeScriptIcon />,
  },
  {
    name: "Vercel",
    link: "https://vercel.com/",
    color: "#000000",
    category: TechCategory.Cloud,
    icon: <VercelIcon />,
  },
  {
    name: "Redis",
    link: "https://redis.io/",
    color: "#FF4438",
    category: TechCategory.Database,
    icon: <RedisIcon />,
  },
  {
    name: "Node",
    link: "https://nodejs.org/",
    color: "#5FA04E",
    category: TechCategory.Framework,
    icon: <NodeIcon />,
  },
  {
    name: "Grafana",
    link: "https://grafana.com/",
    color: "#F46800",
    category: TechCategory.Tool,
    icon: <GrafanaIcon />,
  },
  {
    name: "Prometheus",
    link: "https://prometheus.io/",
    color: "#E6522C",
    category: TechCategory.Tool,
    icon: <PrometheusIcon />,
  },
  {
    name: "Next.js",
    link: "https://nextjs.org/",
    color: "#000000",
    category: TechCategory.Framework,
    icon: <NextJSIcon />,
  },
  {
    name: "Vite",
    link: "https://vitejs.dev/",
    color: "#646CFF",
    category: TechCategory.Tool,
    icon: <ViteIcon />,
  },
];

export function getTechByName(name: string) {
  return myStack.find((tech) => tech.name === name);
}

export function getTechsByName(names: string[]) {
  const techs = names.map((name) => getTechByName(name));
  return techs.filter((tech) => tech !== undefined) as Tech[];
}
