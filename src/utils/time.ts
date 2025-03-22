export function secondsToHours(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  return `${hours}`;
}
