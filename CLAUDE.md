# Mirrowick website — notes for Claude

The website of the game Mirrowick (the game is in `../Mirrowick`, played at
https://play.mirrowick.com/). Astro, static, TypeScript. See `README.md` for
the commands and the layout. The owner speaks Russian: talk to them in
Russian. Code, comments and commit messages are in English.

- **Languages are equal.** Every word is in `src/i18n/` (`en.ts` is the
  shape, every other catalog fills it); never put text in a component. Add a
  line to every language at once.
- **No spoilers.** The site sells the mystery, it doesn't solve it. Keep
  off it what the game's `docs/story.md` keeps for later: what the mirror
  really is, that Home and the Fading Tomorrow are one place in two times
  (no "two times", no crossing between them), the company, the year of the
  disaster, that the glass only leads forward, what became of Victor.
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

Before finishing, run `npm run build` (it type-checks) and `npm run format:check`.
