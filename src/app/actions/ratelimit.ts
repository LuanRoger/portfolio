"use server";

import { headers } from "next/headers";
import { ratelimit } from "@/lib/kv/ratelimit";

export async function checkRateLimitAction() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";

  const ip = headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
  console.log("Checking rate limit for IP", ip);

  const { success } = await ratelimit.limit(ip);
  return success;
}
