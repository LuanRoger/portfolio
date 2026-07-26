import type {
  WakatimeAllTimeMetrics,
  WakatimeCategory,
  WakatimeEditor,
  WakatimeLanguageMetadata,
  WakatimeStats,
} from "@/types/wakatime";

export function adaptWakatimeResponseToWakatimeStats(
  model: any,
  langaugeMetadata?: WakatimeLanguageMetadata[]
): WakatimeStats {
  if (!model || typeof model !== "object") {
    throw new Error("Invalid model: expected an object");
  }
  const data = model.data;

  const editors: WakatimeEditor[] = data.editors.map((editor: any) => ({
    hours: editor.hours,
    minutes: editor.minutes,
    name: editor.name,
    percent: editor.percent,
    text: editor.text,
    totalSeconds: editor.total_seconds,
  }));

  const languages = data.languages.map((language: any) => {
    const metadata = langaugeMetadata?.find(
      (lang) => lang.name === language.name
    );

    return {
      hours: language.hours,
      metadata,
      minutes: language.minutes,
      name: language.name,
      percent: language.percent,
      text: language.text,
      totalSeconds: language.total_seconds,
    };
  });

  return {
    avarengeText: data.human_readable_daily_average_including_other_language,
    editors,
    languages,
    status: data.status,
    totalInSeconds: data.total_seconds,
    totalText: data.human_readable_total_including_other_language,
  };
}

export function adaptWakatimeProgramLanguageResponseToWakatimeLanguages(
  model: any
): WakatimeLanguageMetadata[] {
  if (!model || typeof model !== "object") {
    throw new Error("Invalid model: expected an object");
  }

  const data = model.data;

  return data.map((language: any) => ({ ...language }));
}

export function adaptWakatimeSummaryResponseToWakatimeCategories(
  model: any
): WakatimeCategory[] {
  if (!model || typeof model !== "object") {
    throw new Error("Invalid model: expected an object");
  }

  const data = model.data[0].categories;

  return data.map((category: any) => ({
    hours: category.hours,
    minutes: category.minutes,
    name: category.name,
    percent: category.percent,
    seconds: category.seconds,
    text: category.text,
  }));
}

export function adaptWakatimeAllTimeResponseToWakatimeAllTime(
  model: any
): WakatimeAllTimeMetrics {
  if (!model || typeof model !== "object") {
    throw new Error("Invalid model: expected an object");
  }

  const data = model.data;

  return {
    text: data.text,
    totalSeconds: data.total_seconds,
  };
}
