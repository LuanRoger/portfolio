import { getTechsByName } from "./my-stack";
import { Project } from "../types/project";
import NotionBlogImg from "~/public/images/projects/notion-blog.png";
import ElectronShadcn from "~/public/images/projects/electron-shadcn.png";
import WHMonitor from "~/public/images/projects/whmonitor.png";
import Yaste from "~/public/images/projects/yaste.png";
import TodoSync from "~/public/images/projects/todoSync.png";
import VolumeVault from "~/public/images/projects/volumeVault.png";
import XboxLauncher from "~/public/images/projects/xboxLauncher.png";
import XinputGamepad from "~/public/images/projects/xinputGamepad.png";
import VirtualKeyboard from "~/public/images/projects/virtualKeyboard.png";
import GlobalStrings from "~/public/images/projects/globalStrings.png";
import SerializedConfiguration from "~/public/images/projects/serializedConfiguration.png";
import Dropnote from "~/public/images/projects/dropnote.gif";
import TsPackageTemplate from "~/public/images/projects/ts-package-template.png";
import unpluginUseWasm from "~/public/images/projects/unplugin-use-wasm.png";

export const projects: Project[] = [
  {
    title: "electron-shadcn",
    description: "Electron Forge with shadcn-ui (Vite + Typescript)",
    techStack: getTechsByName([
      "React",
      "TypeScript",
      "Electron",
      "Vite",
      "Tailwind CSS",
      "shadcn-ui",
    ]),
    repoName: "electron-shadcn",
    image: {
      src: ElectronShadcn,
      alt: "Template demo",
    },
  },
  {
    title: "Notion Blog",
    description:
      "A simple blog powered by Astro 🚀. It uses the Notion API as CMS.",
    techStack: getTechsByName(["React", "TypeScript", "Vercel"]),
    link: "https://notion-blog-luanroger.vercel.app/",
    repoName: "notion-blog",
    image: {
      src: NotionBlogImg,
      alt: "Notion Blog example",
    },
  },
  {
    title: "WHMonitor",
    description:
      "A hardware monitor made with Web technologies and C#. Powered by Tauri.",
    techStack: getTechsByName([
      "React",
      "TypeScript",
      ".NET",
      "C#",
      "Tailwind CSS",
    ]),
    repoName: "WHMonitor",
    image: {
      src: WHMonitor,
      alt: "WHMonitor screenshot",
    },
  },
  {
    title: "yaste",
    description:
      "Yet another super ₛᵢₘₚₗₑ text editor. It's a simple text editor made with React and Electron. This project is just for demo purposes.",
    techStack: getTechsByName([
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Electron",
    ]),
    repoName: "yaste",
    image: {
      src: Yaste,
      alt: "yaste screenshot",
    },
  },
  {
    title: "Todo Sync",
    description:
      "Event Soucing as synchronization mechanism using Flutter with Riverpod and Realm.",
    techStack: getTechsByName(["Flutter", "Dart"]),
    repoName: "todo_sync",
    image: {
      src: TodoSync,
      alt: "Sync demo",
    },
  },
  {
    title: "Volume Vault",
    description:
      "📖 Keep your books informations safe and sound. Book management system with no effort and beautiful.",
    techStack: getTechsByName([
      "Flutter",
      "Dart",
      ".NET",
      "C#",
      "Docker",
      "Redis",
      "Firebase",
      "AWS",
      "DigitalOcean",
    ]),
    repoName: "VolumeVault",
    image: {
      src: VolumeVault,
      alt: "Home page screenshot",
    },
  },
  {
    title: "xinput_gamepad",
    description: "🎮 Add support to XInput controllers with Win32 API.",
    techStack: getTechsByName(["Dart"]),
    link: "https://pub.dev/packages/xinput_gamepad",
    repoName: "xinput_gamepad",
    image: {
      src: XinputGamepad,
      alt: "GitHub repository's page",
    },
  },
  {
    title: "Xbox Launcher",
    description:
      "Launcher with the Xbox Series X/S's dashboard to play Xbox Cloud Gaming (XCloud) games.",
    techStack: getTechsByName(["Flutter", "Dart", "Python"]),
    repoName: "xbox_launcher",
    image: {
      src: XboxLauncher,
      alt: "Home page screenshot",
    },
  },
  {
    title: "virtual_keyboard",
    description: "Simulate keystrokes with Win32 API.",
    techStack: getTechsByName(["Dart"]),
    repoName: "virtual_keyboard",
    image: {
      src: VirtualKeyboard,
      alt: "GitHub repository's page",
    },
  },
  {
    title: "GlobalStrings",
    description:
      "🌐 Simple package that helps manage strings for implementing new languages in .NET applications.",
    techStack: getTechsByName([".NET", "C#"]),
    link: "https://www.nuget.org/packages/GlobalStrings",
    repoName: "GlobalStrings",
    image: {
      src: GlobalStrings,
      alt: "GitHub repository's page",
    },
  },
  {
    title: "Serialized Configuration",
    description: "⚙️ Create, manage and save settings in .yaml or .json. ",
    techStack: getTechsByName([".NET", "C#"]),
    link: "https://www.nuget.org/packages/SerializedConfig",
    repoName: "SerializedConfiguration",
    image: {
      src: SerializedConfiguration,
      alt: "GitHub repository's page",
    },
  },
  {
    title: "Dropnote",
    description: "Create, edit and share text instantly.",
    techStack: getTechsByName(["Next.js", "React", "MongoDB", "TypeScript"]),
    repoName: "dropnote",
    image: {
      src: Dropnote,
      alt: "Dropnote demo",
      animated: true,
    },
  },
  {
    title: "ts-package-template",
    description: "Modern tools to build an NPM package with TypeScript support",
    techStack: getTechsByName(["TypeScript", "Node.js", "Rolldown"]),
    repoName: "ts-package-template",
    link: "https://www.npmjs.com/package/@luanroger/ts-package-template",
    image: {
      src: TsPackageTemplate,
      alt: "ts-package-template repository screenshot",
    },
  },
  {
    title: "unplugin-use-wasm",
    description: 'Support to "use wasm" directive to compile to WebAssembly.',
    techStack: getTechsByName(["TypeScript", "Vite", "Rolldown"]),
    repoName: "unplugin-use-wasm",
    link: "https://www.npmjs.com/package/unplugin-use-wasm",
    image: {
      src: unpluginUseWasm,
      alt: "unplugin-use-wasm repository screenshot",
    },
  },
];
