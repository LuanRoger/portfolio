import Dropnote from "@/assets/images/projects/dropnote.gif";
import ElectronShadcn from "@/assets/images/projects/electron-shadcn.png";
import unpluginUseWasm from "@/assets/images/projects/unplugin-use-wasm.png";
import VolumeVault from "@/assets/images/projects/volumeVault.png";
import WHMonitor from "@/assets/images/projects/whmonitor.png";
import XboxLauncher from "@/assets/images/projects/xboxLauncher.png";
import XinputGamepad from "@/assets/images/projects/xinputGamepad.png";
import type { Project } from "@/types/project";
import { getTechsByName } from "./my-stack";

export const projects: Project[] = [
  {
    description: "Electron Forge with shadcn-ui (Vite + Typescript)",
    image: {
      alt: "Template demo",
      src: ElectronShadcn,
    },
    repoName: "electron-shadcn",
    techStack: getTechsByName([
      "React",
      "TypeScript",
      "Electron",
      "Vite",
      "Tailwind CSS",
      "shadcn-ui",
    ]),
    title: "electron-shadcn",
  },
  {
    description: "Create, edit and share text instantly.",
    image: {
      alt: "Dropnote demo",
      animated: true,
      src: Dropnote,
    },
    link: "https://dropnote.luanroger.dev",
    repoName: "dropnote",
    techStack: getTechsByName(["Next.js", "React", "MongoDB", "TypeScript"]),
    title: "Dropnote",
  },
  {
    description:
      "A hardware monitor made with Web technologies and C#. Powered by Tauri.",
    image: {
      alt: "WHMonitor screenshot",
      src: WHMonitor,
    },
    repoName: "WHMonitor",
    techStack: getTechsByName([
      "React",
      "TypeScript",
      ".NET",
      "C#",
      "Tailwind CSS",
    ]),
    title: "WHMonitor",
  },
  {
    description:
      "📖 Keep your books informations safe and sound. Book management system with no effort and beautiful.",
    image: {
      alt: "Home page screenshot",
      src: VolumeVault,
    },
    repoName: "VolumeVault",
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
    title: "Volume Vault",
  },
  {
    description: "🎮 Add support to XInput controllers with Win32 API.",
    image: {
      alt: "GitHub repository's page",
      src: XinputGamepad,
    },
    link: "https://pub.dev/packages/xinput_gamepad",
    repoName: "xinput_gamepad",
    techStack: getTechsByName(["Dart"]),
    title: "xinput_gamepad",
  },
  {
    description:
      "Launcher with the Xbox Series X/S's dashboard to play Xbox Cloud Gaming (XCloud) games.",
    image: {
      alt: "Home page screenshot",
      src: XboxLauncher,
    },
    repoName: "xbox_launcher",
    techStack: getTechsByName(["Flutter", "Dart", "Python"]),
    title: "Xbox Launcher",
  },
  {
    description:
      'Plugin for Vite to add support to "use wasm" directive. The file with this directive will be compiled to WebAssembly.',
    image: {
      alt: "unplugin-use-wasm repository screenshot",
      src: unpluginUseWasm,
    },
    link: "https://www.npmjs.com/package/unplugin-use-wasm",
    repoName: "unplugin-use-wasm",
    techStack: getTechsByName(["TypeScript", "Vite", "Rolldown"]),
    title: "unplugin-use-wasm",
  },
];
