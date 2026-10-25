/** The site's languages, all equal: each has its own prefix (`/en/`, `/ru/`). */
export const LOCALES = ['en', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];
/** Only what `/` falls back to when the browser asks for none of them. */
export const DEFAULT_LOCALE: Locale = 'en';

export const isLocale = (v: unknown): v is Locale => LOCALES.includes(v as Locale);
