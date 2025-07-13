export function formatSpotifyArtistsName(artists: string[]) {
  return artists.map((artist) => artist).join(", ");
}

export function formatBytesInMB(bytes: number) {
  const megabytes = bytes / (1024 * 1024);
  return `${megabytes.toFixed(2)} MB`;
}
