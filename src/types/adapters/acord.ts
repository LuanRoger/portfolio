/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AcordCurrentActivity } from "../acord-current-activity";

export function adaptAcordActivityToAcordCurrentActivity(
  model: any
): AcordCurrentActivity {
  if (!model || typeof model !== "object") {
    throw new Error("Invalid model: expected an object");
  }

  const data = model.data;

  return {
    activity: data.state,
    details: data.details,
    imageUrl: data.largeImageKey,
    caption: data.largeImageText,
    environment: data.smallImageText,
    color: data.dominantColor,
  };
}
