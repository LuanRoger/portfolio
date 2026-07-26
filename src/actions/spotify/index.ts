import { defineAction } from "astro:actions";
import { ENV } from "varlock/env";
import type { SpotifyAuthResponse } from "@/types/spotify";
import { adaptCurrentPlayingReponseToSpotifyCurrentPlayingTrackInfo } from "./adapters";

async function getSpotifyAccessToken() {
  const clientId = ENV.SPOTIFY_CLIENT_ID;
  const clientSecret = ENV.SPOTIFY_CLIENT_SECRET;
  const refreshToken = ENV.SPOTIFY_REFRESH_TOKEN;

  const result = await fetch("https://accounts.spotify.com/api/token", {
    body: `grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });

  return (await result.json()) as SpotifyAuthResponse;
}

const getSpotifyCurrentPlaying = defineAction({
  handler: async (_, context) => {
    context.cache.set({
      maxAge: 300,
      swr: 60,
    });

    const accessToken = await getSpotifyAccessToken();

    const result = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accessToken.access_token}`,
        },
      }
    );
    if (result.status !== 200) {
      return;
    }

    const response = await result.json();
    const trackInfo =
      adaptCurrentPlayingReponseToSpotifyCurrentPlayingTrackInfo(response);

    return trackInfo;
  },
});

export const spotify = { getSpotifyCurrentPlaying };
