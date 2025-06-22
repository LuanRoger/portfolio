"use server";

import { adaptAcordActivityToAcordCurrentActivity } from "@/types/adapters";

export async function getCurrentAcordActivity() {
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
