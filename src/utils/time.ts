export function secondsToHours(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  return `${hours}`;
}

export function getLastDayDate(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
}

export function simpleFormatDate(date: Date): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return "Invalid date";
  }

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const dayStr = day < 10 ? `0${day}` : `${day}`;
  const monthStr = month + 1 < 10 ? `0${month + 1}` : `${month + 1}`;

  return `${year}-${monthStr}-${dayStr}`;
}

export function formatDateAsHumanReadable(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}
