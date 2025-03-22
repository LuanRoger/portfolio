"use server";

import {
  adaptWakatimeProgramLanguageResponseToWakatimeLanguages,
  adaptWakatimeResponseToWakatimeStatus,
} from "@/types/adapters/wakatime";

export async function getWakatimeStatus() {
  const wakatimeUrl = process.env.WAKATIME_URL;
  const wakatimeKey = process.env.WAKATIME_API_KEY;
  if (!wakatimeUrl || !wakatimeKey) {
    return;
  }

  const response = await fetch(`${wakatimeUrl}/users/current/stats`, {
    headers: {
      Authorization: `Basic ${wakatimeKey}`,
    },
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    return;
  }

  const data = await response.json();
  const languageMetadataResponse = await getWakatimeLanguages();
  const statusData = adaptWakatimeResponseToWakatimeStatus(
    data,
    languageMetadataResponse
  );

  return statusData;
}

export async function getWakatimeLanguages() {
  const wakatimeUrl = process.env.WAKATIME_URL;
  const wakatimeKey = process.env.WAKATIME_API_KEY;
  if (!wakatimeUrl || !wakatimeKey) {
    return;
  }

  const response = await fetch(`${wakatimeUrl}/program_languages`, {
    headers: {
      Authorization: `Basic ${wakatimeKey}`,
    },
  });
  if (!response.ok) {
    return;
  }

  const data = await response.json();
  const statusData =
    adaptWakatimeProgramLanguageResponseToWakatimeLanguages(data);

  return statusData;
}
