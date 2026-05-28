"use server";

import { ENV } from "varlock/env";
import {
  adaptLastPlayedGameResponseToLastPlayedGame,
  adaptRetroachievementsUserProfileResponseToUserProfile,
} from "@/types/adapters/retroachievements";

export async function getRetroachievementsUserProfile() {
  const baseUrl = ENV.NEXT_PUBLIC_RETROACHIEVEMENTS_BASE_URL;
  const apiUrl = ENV.RETROACHIEVEMENTS_API_URL;
  const apiKey = ENV.RETROACHIEVEMENTS_API_KEY;
  const username = ENV.RETROACHIEVEMENTS_USERNAME;

  if (!(baseUrl && apiUrl && apiKey && username)) {
    throw new Error("Retroachievements environment variables are not set");
  }

  const result = await fetch(
    `${apiUrl}/API_GetUserProfile.php?u=${username}&y=${apiKey}`,
    {
      method: "GET",
    }
  );

  const response = await result.json();

  return adaptRetroachievementsUserProfileResponseToUserProfile(
    response,
    baseUrl
  );
}

export async function getLastGamePlayed() {
  const baseUrl = ENV.NEXT_PUBLIC_RETROACHIEVEMENTS_BASE_URL;
  const apiUrl = ENV.RETROACHIEVEMENTS_API_URL;
  const apiKey = ENV.RETROACHIEVEMENTS_API_KEY;
  const username = ENV.RETROACHIEVEMENTS_USERNAME;

  if (!(baseUrl && apiUrl && apiKey && username)) {
    throw new Error("Retroachievements environment variables are not set");
  }

  const result = await fetch(
    `${apiUrl}/API_GetUserRecentlyPlayedGames.php?u=${username}&c=1&y=${apiKey}`,
    {
      method: "GET",
    }
  );

  const response = await result.json();

  return adaptLastPlayedGameResponseToLastPlayedGame(response[0], baseUrl);
}
