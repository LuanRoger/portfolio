import { getTechsByName } from "./my-stack";
import { Project } from "./types/project";
import NotionBlogImg from "~/public/images/notion-blog.png";
import ElectronShadcn from "~/public/images/electron-shadcn.gif";
import WHMonitor from "~/public/images/whmonitor.png";
import Yaste from "~/public/images/yaste.png";
import TodoSync from "~/public/images/todoSync.gif";
import VolumeVault from "~/public/images/volumeVault.png";
import XboxLauncher from "~/public/images/xboxLauncher.png";
import XinputGamepad from "~/public/images/xinputGamepad.png";
import VirtualKeyboard from "~/public/images/virtualKeyboard.png";
import GlobalStrings from "~/public/images/globalStrings.png";
import SerializedConfiguration from "~/public/images/serializedConfiguration.png";

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
    repoLink: "https://github.com/LuanRoger/electron-shadcn",
    imageSrc: ElectronShadcn,
    imageAlt: "Template demo",
  },
  {
    title: "Notion Blog",
    description:
      "A simple blog powered by Astro 🚀. It uses the Notion API as CMS.",
    techStack: getTechsByName(["React", "TypeScript", "Vercel"]),
    link: "https://notion-blog-luanroger.vercel.app/",
    repoLink: "https://github.com/LuanRoger/notion-blog",
    imageSrc: NotionBlogImg,
    imageAlt: "Notion Blog example",
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
    repoLink: "https://github.com/LuanRoger/WHMonitor",
    imageSrc: WHMonitor,
    imageAlt: "WHMonitor screenshot",
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
    repoLink: "https://github.com/LuanRoger/yaste",
    imageSrc: Yaste,
    imageAlt: "yaste screenshot",
  },
  {
    title: "Todo Sync",
    description:
      "Event Soucing as synchronization mechanism using Flutter with Riverpod and Realm.",
    techStack: getTechsByName(["Flutter", "Dart"]),
    repoLink: "https://github.com/LuanRoger/todo_sync",
    imageSrc: TodoSync,
    imageAlt: "Sync demo",
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
    repoLink: "https://github.com/LuanRoger/VolumeVault",
    imageSrc: VolumeVault,
    imageAlt: "Home page screenshot",
  },
  {
    title: "xinput_gamepad",
    description: "🎮 Add support to XInput controllers with Win32 API.",
    techStack: getTechsByName(["Dart"]),
    link: "https://pub.dev/packages/xinput_gamepad",
    repoLink: "https://github.com/LuanRoger/xinput_gamepad",
    imageSrc: XinputGamepad,
    imageAlt: "GitHub repository's page",
  },
  {
    title: "Xbox Launcher",
    description:
      "Launcher with the Xbox Series X/S's dashboard to play Xbox Cloud Gaming (XCloud) games.",
    techStack: getTechsByName(["Flutter", "Dart", "Python"]),
    repoLink: "https://github.com/LuanRoger/xbox_launcher",
    imageSrc: XboxLauncher,
    imageAlt: "Home page screenshot",
  },
  {
    title: "virtual_keyboard",
    description: "Simulate keystrokes with Win32 API.",
    techStack: getTechsByName(["Dart"]),
    repoLink: "https://github.com/LuanRoger/virtual_keyboard",
    imageSrc: VirtualKeyboard,
    imageAlt: "GitHub repository's page",
  },
  {
    title: "GlobalStrings",
    description:
      "🌐 Simple package that helps manage strings for implementing new languages in .NET applications.",
    techStack: getTechsByName([".NET", "C#"]),
    link: "https://www.nuget.org/packages/SerializedConfig",
    repoLink: "https://github.com/LuanRoger/GlobalStrings",
    imageSrc: GlobalStrings,
    imageAlt: "GitHub repository's page",
  },
  {
    title: "SerializedConfiguration",
    description: "⚙️ Create, manage and save settings in .yaml or .json. ",
    techStack: getTechsByName([".NET", "C#"]),
    link: "https://www.nuget.org/packages/GlobalStrings",
    repoLink: "https://github.com/LuanRoger/SerializedConfiguration",
    imageSrc: SerializedConfiguration,
    imageAlt: "GitHub repository's page",
  },
];
