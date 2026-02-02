#!/usr/bin/env bun

import { readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import { $ } from "bun";

const DEFAULT_UI_PATH = join(import.meta.dir, "..", "src", "components", "ui");

function getUIComponentsPath(): string {
  const args = process.argv.slice(2);

  if (args.length > 0 && args[0]) {
    return resolve(args[0]);
  }

  return DEFAULT_UI_PATH;
}

async function getComponentNames(uiPath: string): Promise<string[]> {
  try {
    const files = await readdir(uiPath);

    const components = files
      .filter((file) => file.endsWith(".tsx"))
      .map((file) => file.replace(".tsx", ""));

    return components;
  } catch (error) {
    console.error(`Error reading UI components directory at ${uiPath}:`, error);
    throw error;
  }
}

async function updateComponents(components: string[]): Promise<void> {
  if (components.length === 0) {
    console.log("No components found to update.");
    return;
  }

  console.log(`Found ${components.length} components to update:`);
  console.log(components.join(", "));
  console.log("");

  const componentList = components.join(" ");

  try {
    console.log(`Running: npx shadcn@latest add ${componentList} -y -o`);
    console.log("");

    await $`npx shadcn@latest add ${componentList.split(" ")} -y -o`;

    console.log("");
    console.log("✅ All components updated successfully!");
  } catch (error) {
    console.error("❌ Error updating components:", error);
    throw error;
  }
}

async function main(): Promise<void> {
  console.log("🚀 Starting UI components update...");
  console.log("");

  const uiPath = getUIComponentsPath();
  console.log(`📁 Using UI components path: ${uiPath}`);
  console.log("");

  const components = await getComponentNames(uiPath);
  await updateComponents(components);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
