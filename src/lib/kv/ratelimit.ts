import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

export const ratelimit = new Ratelimit({
  redis: kv,
  // 5 requests from the same IP in 10 seconds
  limiter: Ratelimit.fixedWindow(1, "60 s"),
});
