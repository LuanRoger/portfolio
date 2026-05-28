// instrumentation-client.js
import posthog from "posthog-js";
import { ENV } from "varlock/env";

const POSTHOG_KEY = ENV.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = ENV.NEXT_PUBLIC_POSTHOG_HOST;

if (POSTHOG_KEY && POSTHOG_HOST) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    defaults: "2025-05-24",
  });
}
