/** Spanish date shapes used across the blog. */

const short = new Intl.DateTimeFormat('es-ES', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

const long = new Intl.DateTimeFormat('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

/** "5 mar 2026" — Intl appends a period to the abbreviated month in es-ES. */
export const fmtDate = (d: Date) => short.format(d).replace('.', '');

/** "5 de marzo de 2026" */
export const fmtDateLong = (d: Date) => long.format(d);

/** Reading time from the raw markdown body, at ~200 wpm for Spanish prose. */
export const readingTime = (body: string) => {
  const words = body.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min de lectura`;
};
