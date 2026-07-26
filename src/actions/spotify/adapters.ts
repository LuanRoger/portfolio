// biome-ignore-all lint/suspicious/noExplicitAny: Need to handle raw responses

import type { SpotifyCurrentPlayingTrackInfo } from "@/types/spotify";

export function adaptCurrentPlayingReponseToSpotifyCurrentPlayingTrackInfo(
  model: any
): SpotifyCurrentPlayingTrackInfo {
  if (!model || typeof model !== "object") {
    throw new Error("Invalid model: expected an object");
  }

  const artists = model.item.album.artists.map((artist: any) => artist.name);

  return {
    artists,
    href: model.item.external_urls.spotify,
    image: model.item.album.images[0],
    isPlaying: model.is_playing,
    name: model.item.name,
    progressMs: model.progress_ms,
    timestamp: model.timestamp,
  };
}
