/* eslint-disable @typescript-eslint/no-explicit-any */

import { WakatimeEditor, WakatimeStatus } from "../wakatime-status";

export function adaptWakatimeResponseToWakatimeStatus(
  model: any
): WakatimeStatus {
  if (!model || typeof model !== "object") {
    throw new Error("Invalid model: expected an object");
  }

  const editors: WakatimeEditor[] = model.editors.map((editor: any) => ({
    totalSeconds: editor.total_seconds,
    name: editor.name,
    percent: editor.percent,
    text: editor.text,
    hours: editor.hours,
    minutes: editor.minutes,
  }));

  const languages = model.languages.map((language: any) => ({
    name: language.name,
    totalSeconds: language.total_seconds,
    percent: language.percent,
    text: language.text,
    hours: language.hours,
    minutes: language.minutes,
  }));

  return {
    status: model.status,
    humanReadableTotalIncludingOtherLanguage:
      model.human_readable_total_including_other_language,
    editors,
    languages,
  };
}
