/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  WakatimeEditor,
  WakatimeLanguageMetadata,
  WakatimeStatus,
} from "../wakatime";

export function adaptWakatimeResponseToWakatimeStatus(
  model: any,
  langaugeMetadata?: WakatimeLanguageMetadata[]
): WakatimeStatus {
  if (!model || typeof model !== "object") {
    throw new Error("Invalid model: expected an object");
  }
  const data = model.data;

  const editors: WakatimeEditor[] = data.editors.map((editor: any) => ({
    totalSeconds: editor.total_seconds,
    name: editor.name,
    percent: editor.percent,
    text: editor.text,
    hours: editor.hours,
    minutes: editor.minutes,
  }));

  const languages = data.languages.map((language: any) => {
    const metadata = langaugeMetadata?.find(
      (lang) => lang.name === language.name
    );

    return {
      name: language.name,
      totalSeconds: language.total_seconds,
      percent: language.percent,
      text: language.text,
      hours: language.hours,
      minutes: language.minutes,
      metadata,
    };
  });

  return {
    status: data.status,
    humanReadableTotalIncludingOtherLanguage:
      data.human_readable_total_including_other_language,
    totalInSeconds: data.total_seconds,
    editors,
    languages,
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
