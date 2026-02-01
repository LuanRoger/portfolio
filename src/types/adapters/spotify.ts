/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SpotifyCurrentPlayingTrackInfo } from "../spotify-current-playing-track-info";

export function adaptCurrentPlayingReponseToSpotifyCurrentPlayingTrackInfo(
  model: any
): SpotifyCurrentPlayingTrackInfo {
  if (!model || typeof model !== "object") {
    throw new Error("Invalid model: expected an object");
  }

  const image = model.item.album.images[0];
  const artists = model.item.album.artists.map((artist: any) => artist.name);

  return {
    name: model.item.name,
    timestamp: model.timestamp,
    progressMs: model.progress_ms,
    isPlaying: model.is_playing,
    href: model.item.external_urls.spotify,
    artists,
    image,
  };
}
