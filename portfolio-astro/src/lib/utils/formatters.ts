export const shortDateFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

export const weekdayDateFmt = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
});

export const hmsTimeFmt = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export const intFmt = new Intl.NumberFormat("en-US").format;

export function formatSpotifyArtistsName(artists: string[]) {
  return artists.map((artist) => artist).join(", ");
}

export function formatBytesInMB(bytes: number) {
  const megabytes = bytes / (1024 * 1024);
  return `${megabytes.toFixed(2)} MB`;
}
