/* eslint-disable @typescript-eslint/no-explicit-any */
import { AcordCurrentActivity } from "../acord-current-activity";

export function adaptAcordActivityToAcordCurrentActivity(
  model: any
): AcordCurrentActivity {
  if (!model || typeof model !== "object") {
    throw new Error("Invalid model: expected an object");
  }

  return {
    activity: model.state,
    details: model.details,
    imageUrl: model.largeImageKey,
    caption: model.largeImageText,
    environment: model.smallImageText,
    color: model.dominantColor	,
  };
}
