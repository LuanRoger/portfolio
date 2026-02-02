"use server";

import { adaptAcordActivityToAcordCurrentActivity } from "@/types/adapters/acord";

export async function getCurrentAcordActivity() {
  const acordUrl = process.env.ACORD_URL;
  const acordKey = process.env.ACORD_KEY;
  if (!(acordUrl && acordKey)) {
    return;
  }

  const response = await fetch(acordUrl, {
    headers: {
      Authorization: acordKey,
    },
  });
  if (!response.ok) {
    return;
  }

  const data = await response.json();
  const activityData = adaptAcordActivityToAcordCurrentActivity(data);

  return activityData;
}
