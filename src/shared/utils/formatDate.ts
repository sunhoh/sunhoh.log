export function formatDate(isoString: string): string {
  const date = new Date(isoString);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Seoul',
  };

  return new Intl.DateTimeFormat('ko-KR', options).format(date);
}

export function formatMonthDay(isoString: string): string {
  const date = new Date(isoString);
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${month}.${day}`;
}