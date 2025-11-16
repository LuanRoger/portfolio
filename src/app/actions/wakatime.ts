"use server";

import {
  adaptWakatimeAllTimeResponseToWakatimeAllTime,
  adaptWakatimeProgramLanguageResponseToWakatimeLanguages,
  adaptWakatimeResponseToWakatimeStats,
  adaptWakatimeSummaryResponseToWakatimeCategories,
} from "@/types/adapters/wakatime";
import { WakatimeDateCategory } from "@/types/wakatime";
import { getLastDayDate, simpleFormatDate } from "@/utils/time";
import { cacheLife } from "next/cache";

export async function getWakatimeStats() {
  "use cache";
  cacheLife("hours");

  const wakatimeUrl = process.env.WAKATIME_URL;
  const wakatimeKey = process.env.WAKATIME_API_KEY;
  if (!wakatimeUrl || !wakatimeKey) {
    return;
  }

  const response = await fetch(`${wakatimeUrl}/users/current/stats`, {
    headers: {
      Authorization: `Basic ${wakatimeKey}`,
    },
  });
  if (!response.ok) {
    return;
  }

  const data = await response.json();
  const languageMetadataResponse = await getWakatimeLanguages();
  const statsData = adaptWakatimeResponseToWakatimeStats(
    data,
    languageMetadataResponse,
  );

  return statsData;
}

export async function getWakatimeLanguages() {
  "use cache";
  cacheLife("hours");

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
  const languageData =
    adaptWakatimeProgramLanguageResponseToWakatimeLanguages(data);

  return languageData;
}

export async function getWakatimeLastDaysCategoriesSummary() {
  "use cache";
  cacheLife("hours");

  const wakatimeUrl = process.env.WAKATIME_URL;
  const wakatimeKey = process.env.WAKATIME_API_KEY;
  if (!wakatimeUrl || !wakatimeKey) {
    return;
  }

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = getLastDayDate(i);
    const formattedDate = simpleFormatDate(date);

    return {
      date,
      formattedDate,
    };
  });

  const last7DaysCategories = last7Days.map(async ({ formattedDate, date }) => {
    const response = await fetch(
      `${wakatimeUrl}/users/current/summaries?start=${formattedDate}&end=${formattedDate}`,
      {
        headers: {
          Authorization: `Basic ${wakatimeKey}`,
        },
      },
    );
    if (!response.ok) {
      return;
    }

    const data = await response.json();
    const category = adaptWakatimeSummaryResponseToWakatimeCategories(data);
    const coddingCategory = category.find(
      (category) => category.name === "Coding",
    );
    const debuggingCategory = category.find(
      (category) => category.name === "Debugging",
    );
    return {
      date,
      dateText: formattedDate,
      coding: coddingCategory,
      debugging: debuggingCategory,
    } satisfies WakatimeDateCategory;
  });

  const categories = Promise.all(last7DaysCategories);
  const validCategories = (await categories).filter(
    (category) => category !== undefined,
  ) as WakatimeDateCategory[];

  return validCategories;
}

export async function getWakatimeAllTimeMetrics() {
  "use cache";
  cacheLife("hours");

  const wakatimeUrl = process.env.WAKATIME_URL;
  const wakatimeKey = process.env.WAKATIME_API_KEY;
  if (!wakatimeUrl || !wakatimeKey) {
    return;
  }

  const response = await fetch(
    `${wakatimeUrl}/users/current/all_time_since_today`,
    {
      headers: {
        Authorization: `Basic ${wakatimeKey}`,
      },
    },
  );
  if (!response.ok) {
    return;
  }

  const data = await response.json();
  const metricsData = adaptWakatimeAllTimeResponseToWakatimeAllTime(data);

  return metricsData;
}
