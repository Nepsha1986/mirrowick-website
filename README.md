# Mirrowick — the website

The website of Mirrowick, a
single-player top-down game. The game itself is
played at **https://play.mirrowick.com/**; this is the site around it: the
landing page and the news.

Built with [Astro](https://astro.build), static, in English and Russian.

## Running it

```bash
npm install
npm run dev        # http://localhost:4321
```

| Command           | What it does                                    |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Dev server with hot reload                      |
| `npm run build`   | Type-check (`astro check`) and build to `dist/` |
| `npm run preview` | Serve the production build                      |
| `npm run check`   | Type-check only                                 |
| `npm run format`  | Prettier                                        |

## Layout

```
src/
  pages/
    index.astro            `/`: sends the browser to its language
    [lang]/index.astro     the landing page, /en/ and /ru/
    [lang]/news/           the news list and one page per post
    404.astro
  components/
    home/                  the landing page's sections, in page order
    Seal.astro             the seal and the glass, as on the title screen
    Paper.astro            a section on old paper, its edges burnt
    Wordmark.astro         Mirr◯wick, the great rune for the "o"
    Rune.astro             one of the seal's signs, from src/assets/runes
    Heading.astro          a section's title as the game's menu sets one
    Divider.astro          the great rune between two dark sections
  content/news/<lang>/     news posts, Markdown or MDX
  i18n/                    every word the site shows, one file per language
  assets/shots/            screenshots of the game
  assets/film/             frames of the intro's pencil film, one per year
  assets/runes/            the seal's signs, copied from the game's docs/runes
  styles/global.css        the game's colours and type
```

## Languages

Every language is equal and has its own prefix (`/en/`, `/ru/`). `/` picks
one from what the browser asks for (or what the visitor chose last), falling
back to English.

- Every word lives in `src/i18n/`. `en.ts` is the source and its shape is
  `Messages`; `ru.ts` must fill the same shape, so a missing line is a type
  error. Never put text in a component.
- A new language: add its code to `LOCALES` in `src/i18n/locales.ts`, a
  catalog beside `en.ts`, and register it in `src/i18n/index.ts`.

## News

A post is a file in `src/content/news/<lang>/`, with this front matter:

```yaml
---
title: 'A concept demo of the first chapter'
description: 'One or two sentences for the list and for search results.'
date: 2026-10-25
cover: ../../../assets/shots/home-cellar.png # optional
coverAlt: 'What the cover shows' # optional
draft: false # optional; drafts show only in `npm run dev`
---
```

The same post in another language has the same file name in that
language's folder; then the language switch leads from one to the other. A
post needn't be in every language.

## Screenshots

There are no image files in the game, so screenshots are taken from it
running (`npm run dev` in the game, where `window.game` is exposed) with the
HUD hidden, and kept in `src/assets/shots/`. Astro turns them into WebP at
build time. The intro's frames (`src/assets/film/<year>.png`) are its film
canvas saved as it is, without the words under it.

## Analytics

Google Analytics 4 (`GA_ID` in `src/site.ts`), on the built site only:
`src/components/Analytics.astro` sets it up in consent mode with storage
denied, and `src/components/Consent.astro` asks once whether it may set its
cookies (the footer's "Cookies" asks again).

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`), at https://mirrowick.com/ (`public/CNAME`).
The domain's DNS: `A` records for `mirrowick.com` to GitHub's
185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153, and a
`CNAME` for `www` to `nepsha1986.github.io`.
