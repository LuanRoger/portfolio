"use server";

import { adaptAcordActivityToAcordCurrentActivity } from "@/types/adapters";
import { cacheLife } from "next/dist/server/use-cache/cache-life";

export async function getCurrentAcordActivity() {
  "use cache";
  cacheLife("seconds");

  const acordUrl = process.env.ACORD_URL;
  if (!acordUrl) {
    return;
  }

  const response = await fetch(acordUrl);
  if (!response.ok) {
    return;
  }

  const data = await response.json();
  const actvityData = adaptAcordActivityToAcordCurrentActivity(data);

  return actvityData;
}
