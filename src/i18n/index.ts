import { en, type Messages } from './en';
import { ru } from './ru';
import { LOCALES, type Locale } from './locales';

export { LOCALES, DEFAULT_LOCALE, isLocale, type Locale } from './locales';
export type { Messages };

const CATALOGS: Record<Locale, Messages> = { en, ru };

/** The words of one language. */
export const t = (lang: Locale): Messages => CATALOGS[lang];

/** Puts values into `{slot}`s: `fill('© {year}', { year: 2026 })`. */
export const fill = (line: string, slots: Record<string, string | number>): string =>
  line.replace(/\{(\w+)\}/g, (m, k: string) => (k in slots ? String(slots[k]) : m));

/** The same page in another language: swaps the first part of the path. */
export function localePath(path: string, lang: Locale): string {
  const parts = path.split('/').filter(Boolean);
  if (parts.length && (LOCALES as readonly string[]).includes(parts[0])) parts.shift();
  return `/${[lang, ...parts].join('/')}/`;
}

/** `/en/` or `/ru/news/`: a path inside one language. */
export const href = (lang: Locale, ...parts: string[]): string =>
  `/${[lang, ...parts].filter(Boolean).join('/')}/`;

/** For `<html lang>` and `og:locale`. */
export const OG_LOCALE: Record<Locale, string> = { en: 'en_US', ru: 'ru_RU' };

/** Dates as each language writes them. */
export const formatDate = (date: Date, lang: Locale): string =>
  new Intl.DateTimeFormat(lang, { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
