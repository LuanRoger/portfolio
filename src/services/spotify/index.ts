import { env } from "cloudflare:workers";
import type { SpotifyCurrentPlayingTrackInfo } from "@/types/spotify";
import { METRICS_API_HOST_PLACEHOLDER } from "../constants";

export async function getSpotifyCurrentPlaying(): Promise<SpotifyCurrentPlayingTrackInfo> {
  const currentPlayingResponse = await env.METRICS_API.fetch(
    `${METRICS_API_HOST_PLACEHOLDER}/spotify/current-playing`
  );
  if (!currentPlayingResponse.ok) {
    throw new Error("Failed to fetch current playing info");
  }

  const currentPlayingInfo = await currentPlayingResponse.json();

  return currentPlayingInfo as SpotifyCurrentPlayingTrackInfo;
}
