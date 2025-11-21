"use server";

import { adaptLastPlayedGameResponseToLastPlayedGame } from "@/types/adapters/retroachievements";
import { cacheLife } from "next/cache";

export async function getLastGamePlayed() {
  "use cache";
  cacheLife("minutes");

  const baseUrl = process.env.RETROACHIEVEMENTS_BASE_URL;
  const apiUrl = process.env.RETROACHIEVEMENTS_API_URL;
  const apiKey = process.env.RETROACHIEVEMENTS_API_KEY;
  const username = process.env.RETROACHIEVEMENTS_USERNAME;

  if (!baseUrl || !apiUrl || !apiKey || !username) {
    throw new Error("Retroachievements environment variables are not set");
  }

  const result = await fetch(
    `${apiUrl}/API_GetUserRecentlyPlayedGames.php?u=${username}&c=1&y=${apiKey}`,
    {
      method: "GET",
    },
  );

  const response = await result.json();

  return adaptLastPlayedGameResponseToLastPlayedGame(response[0], baseUrl);
}
