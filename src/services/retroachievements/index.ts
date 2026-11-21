import { env } from "cloudflare:workers";
import type {
  LastPlayedGame,
  RetroachievementsUserProfile,
} from "@/types/retroachievements";
import { METRICS_API_HOST_PLACEHOLDER } from "../constants";

export async function getRetroachievementsUserProfile() {
  const userProfileResponse = await env.METRICS_API.fetch(
    `${METRICS_API_HOST_PLACEHOLDER}/spotify/current-playing`
  );
  if (!userProfileResponse.ok) {
    throw new Error("Failed to fetch Retroachievements profile");
  }

  const userProfile = await userProfileResponse.json();

  return userProfile as RetroachievementsUserProfile;
}

export async function getRetroachievementsLastGamePlayed() {
  const lastGamePlayedResponse = await env.METRICS_API.fetch(
    `${METRICS_API_HOST_PLACEHOLDER}/retroachievements/games/last-played`
  );
  if (!lastGamePlayedResponse.ok) {
    throw new Error("Failed to fetch Retroachievements last game played");
  }

  const lastGamePlayed = await lastGamePlayedResponse.json();

  return lastGamePlayed as LastPlayedGame;
}
