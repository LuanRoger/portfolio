"use server";

import { adaptWakatimeResponseToWakatimeStatus } from "@/types/adapters/wakatime";

export async function getWakatimeStatus() {
  const wakatimeUrl = process.env.WAKATIME_URL;
  const wakatimeKey = process.env.WAKATIME_KEY;
  if (!wakatimeUrl || !wakatimeKey) {
    return;
  }

  const response = await fetch(wakatimeUrl, {
    headers: {
      Authorization: `Basic ${wakatimeKey}`,
    },
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    return;
  }

  const data = await response.json();
  const statusData = adaptWakatimeResponseToWakatimeStatus(data);

  return statusData;
}
