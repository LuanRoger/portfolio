"use server";

import { ActionError, defineAction } from "astro:actions";
import { ENV } from "varlock/env";
import { getLastDayDate, simpleFormatDate } from "@/lib/utils/time";
import type { WakatimeDateCategory } from "@/types/wakatime";
import {
  adaptWakatimeAllTimeResponseToWakatimeAllTime,
  adaptWakatimeProgramLanguageResponseToWakatimeLanguages,
  adaptWakatimeResponseToWakatimeStats,
  adaptWakatimeSummaryResponseToWakatimeCategories,
} from "./adapters";

async function getWakatimeLanguages() {
  const wakatimeUrl = ENV.WAKATIME_URL;
  const wakatimeKey = ENV.WAKATIME_API_KEY;
  if (!(wakatimeUrl && wakatimeKey)) {
    throw new ActionError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Wakatime URL or API key not set",
    });
  }

  const response = await fetch(`${wakatimeUrl}/program_languages`, {
    headers: {
      Authorization: `Basic ${wakatimeKey}`,
    },
  });
  if (!response.ok) {
    throw new ActionError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to fetch Wakatime stats",
    });
  }

  const data = await response.json();
  const languageData =
    adaptWakatimeProgramLanguageResponseToWakatimeLanguages(data);

  return languageData;
}

const getWakatimeStats = defineAction({
  handler: async (_, context) => {
    context.cache.set({
      maxAge: 86_400,
      swr: 14_400,
    });

    const wakatimeUrl = ENV.WAKATIME_URL;
    const wakatimeKey = ENV.WAKATIME_API_KEY;
    if (!(wakatimeUrl && wakatimeKey)) {
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Wakatime URL or API key not set",
      });
    }

    const response = await fetch(`${wakatimeUrl}/users/current/stats`, {
      headers: {
        Authorization: `Basic ${wakatimeKey}`,
      },
    });
    if (!response.ok) {
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch Wakatime stats",
      });
    }

    const data = await response.json();
    const languageMetadataResponse = await getWakatimeLanguages();
    const statsData = adaptWakatimeResponseToWakatimeStats(
      data,
      languageMetadataResponse
    );

    return statsData;
  },
});

const getWakatimeLastDaysCategoriesSummary = defineAction({
  handler: async (_input, context) => {
    context.cache.set({
      maxAge: 86_400,
      swr: 14_400,
    });

    const wakatimeUrl = ENV.WAKATIME_URL;
    const wakatimeKey = ENV.WAKATIME_API_KEY;
    if (!(wakatimeUrl && wakatimeKey)) {
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

    const last7DaysCategories = last7Days.map(
      async ({ formattedDate, date }) => {
        const response = await fetch(
          `${wakatimeUrl}/users/current/summaries?start=${formattedDate}&end=${formattedDate}`,
          {
            headers: {
              Authorization: `Basic ${wakatimeKey}`,
            },
          }
        );
        if (!response.ok) {
          return;
        }

        const data = await response.json();
        const categories =
          adaptWakatimeSummaryResponseToWakatimeCategories(data);
        const coddingCategory = categories.find(
          (category) => category.name === "Coding"
        );
        const debuggingCategory = categories.find(
          (category) => category.name === "Debugging"
        );
        return {
          coding: coddingCategory,
          date,
          dateText: formattedDate,
          debugging: debuggingCategory,
        } satisfies WakatimeDateCategory;
      }
    );

    const categories = Promise.all(last7DaysCategories);
    const validCategories = (await categories).filter(
      (category) => category !== undefined
    ) as WakatimeDateCategory[];

    return validCategories;
  },
});

const getWakatimeAllTimeMetrics = defineAction({
  handler: async (_, context) => {
    context.cache.set({
      maxAge: 86_400,
      swr: 14_400,
    });

    const wakatimeUrl = ENV.WAKATIME_URL;
    const wakatimeKey = ENV.WAKATIME_API_KEY;
    if (!(wakatimeUrl && wakatimeKey)) {
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Wakatime URL or API key not set",
      });
    }

    const response = await fetch(
      `${wakatimeUrl}/users/current/all_time_since_today`,
      {
        headers: {
          Authorization: `Basic ${wakatimeKey}`,
        },
      }
    );
    if (!response.ok) {
      throw new ActionError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch Wakatime all-time metrics",
      });
    }

    const data = await response.json();
    const metricsData = adaptWakatimeAllTimeResponseToWakatimeAllTime(data);

    return metricsData;
  },
});

export const wakatime = {
  getWakatimeAllTimeMetrics,
  getWakatimeLastDaysCategoriesSummary,
  getWakatimeStats,
};
