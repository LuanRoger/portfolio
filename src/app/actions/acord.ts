"use server";

import { adaptAcordActivityToAcordCurrentActivity } from "@/types/adapters";

export async function getCurrentAcordActivity() {
  const acordUrl = process.env.ACORD_URL;
  const acordKey = process.env.ACORD_KEY;
  if (!acordUrl || !acordKey) {
    return;
  }

  const response = await fetch(acordUrl, {
    next: {
      revalidate: 60 * 2, // Revalidate every 2 minutes
    },
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
