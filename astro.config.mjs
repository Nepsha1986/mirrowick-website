// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { LOCALES, DEFAULT_LOCALE } from './src/i18n/locales.ts';

export default defineConfig({
  site: 'https://mirrowick.com',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  // Every language has its own prefix, the default too: they are equals,
  // and `/` only picks one (src/pages/index.astro).
  i18n: {
    locales: [...LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => page !== 'https://mirrowick.com/',
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: Object.fromEntries(LOCALES.map((l) => [l, l])),
      },
    }),
  ],
});
