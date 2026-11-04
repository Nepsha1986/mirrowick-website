# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

The website of the game Mirrowick (the game is in `../Mirrowick`, played at
https://play.mirrowick.com/). Astro, static, TypeScript. See `README.md` for
the layout, the news front matter and the domain's DNS. The owner speaks
Russian: talk to them in Russian. Code, comments and commit messages are in
English.

## Commands

```bash
npm run dev            # http://localhost:4321
npm run build          # astro check, then astro build into dist/
npm run preview        # serve the built site
npm run check          # type-check only
npm run format         # Prettier, writes
npm run format:check   # Prettier, checks
```

Node 24 (`.nvmrc`). There are no tests and no linter: `astro check` and Prettier
are the only gates, and CI runs both on every PR.

Before finishing, run `npm run build` and `npm run format:check`.

**A push to `main` publishes the site** to https://mirrowick.com/
(`.github/workflows/deploy.yml`).

## Rules

- **Languages are equal.** Every word is in `src/i18n/` (`en.ts` is the
  shape, every other catalog fills it); never put text in a component. Add a
  line to every language at once.
- **No spoilers.** The site sells the mystery, it doesn't solve it. Keep
  off it what the game's `docs/story.md` keeps for later: what the mirror
  really is, that Home and the Fading Tomorrow are one place in two times
  (no "two times", no crossing between them), the company, the year of the
  disaster, that the glass only leads forward, what became of Victor.
  Screenshots too: Chamber 7 is the cellar long after, so it never goes on
  the site beside the cellar; nor does the burrow under the trees (a secret).
- **Only what is real.** Describe what the game has now, not what was only
  discussed. Steam is "coming", with no link, until there is a store page.
- **No GitHub links.** The game's repository is closed; the site never links to
  it or names it.
- **Not only dark.** The dark sections take turns with old paper (`Paper.astro`,
  like the game's notes and the intro's pencil film), so the page doesn't sink
  into black.
- **Look like the game.** The colours and fonts in `src/styles/global.css`
  are the game's own (`Mirrowick/src/ui/styles.css`); runes come from the
  game's `docs/runes/`.
- npm: `.npmrc` points at the public registry, since the machine's global
  one is a private mirror.

## How it fits together

- **Pages and language.** Every page lives under `src/pages/[lang]/` and is
  generated once per entry of `LOCALES` (`src/i18n/locales.ts`, also read by
  `astro.config.mjs`). `/` belongs to no language: it only redirects, is
  `noindex` and stays out of the sitemap. Components take a `lang` prop and read
  their words with `t(lang)`; build inner links with `href(lang, …)`, since the
  site uses `trailingSlash: 'always'`. `Messages` is `typeof en`, and `CATALOGS`
  and `OG_LOCALE` in `src/i18n/index.ts` are keyed by `Locale`, so a line or a
  language left out is a type error at `npm run build`.
- **`Base.astro`** holds the head (canonical, `hreflang`, Open Graph), the header,
  the footer, the consent banner and analytics. The language switch swaps the
  path's prefix; a page whose other languages live elsewhere passes `alternates`.
- **News** is a content collection (`src/content.config.ts`). Its text lives in
  Markdown under `src/content/news/<lang>/`, not in `src/i18n/`. An entry's id is
  `<lang>/<slug>`; use `slugOf`, `langOf` and `postsIn` from `src/lib/news.ts`.
  A post with no pair in another language switches to that language's news list.
- **Images** are imported from `src/assets/` and go through `astro:assets`, which
  makes the WebP at build time. A gallery shot takes three edits: the file, its
  import and entry in `components/home/Gallery.astro`, and its caption under
  `gallery.shots` in every catalog. Each shot carries one of the seal's twelve
  signs, by position.
- **Styles and scripts** stay in the component: scoped `<style>`, a local
  `<script>`, tokens from `global.css`. `data-reveal` plus `src/scripts/reveal.ts`
  fades things in on scroll; the hidden state applies only under the `.js` class
  on `<html>`, so the content stays visible without JavaScript.
- **Analytics** runs on the built site only, so check it with `npm run preview`,
  not `npm run dev`.
- **The game is the source of facts.** `../Mirrowick` may sit on a branch with work
  players don't have, so check what is really live before describing it.
- **`/post-news`** (`.claude/commands/post-news.md`) writes a news post about what
  changed in the game since the last `gameCommit`. Only the operator runs it.
