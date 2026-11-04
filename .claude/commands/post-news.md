---
description: Write a news post about what changed in the game since the last post, on its own branch; merges only after the operator confirms
argument-hint: '[optional: what to stress, or what to leave out]'
disable-model-invocation: true
---

Write a news post for the site about what has been done in the game
(`Nepsha1986/mirrowick`, branch `main`) since the last post. The post informs:
it says what was done in that period, and nothing else.

Operator's note for this run, if any: $ARGUMENTS

Talk to the operator in Russian. Follow the site's `CLAUDE.md` throughout; its
rules (equal languages, no spoilers, only what is real, no GitHub links) apply
to every word and every picture here. **Nothing reaches `main` until the
operator says so in this run** (step 7): a push to `main` publishes the site.

## 1. Find the period

1. Stop and ask if `git status` shows changes to tracked files, or if a
   `news/*` branch or an open PR from one already exists.
2. `git fetch origin`. Work from `origin/main`, not from the local checkout.
3. **Start:** the latest commit of the game named by a `gameCommit` in
   `src/content/news/*/*.md`. Each post's `gameCommit` is the game's last commit
   that post covers.
4. Clone the game into the session's scratchpad, with
   `gh repo clone Nepsha1986/mirrowick <dir> -- --filter=blob:none`. Don't use
   the local `../Mirrowick`: it may sit on a branch with work players don't have.
5. **End:** the commit players can actually play, the last successful deploy of
   `play.mirrowick.com`:
   `gh run list -R Nepsha1986/mirrowick --workflow CI --branch main --status success --event push --limit 1 --json headSha`.
6. If start and end are the same, tell the operator there is nothing to write
   about, and stop.

## 2. Find out what changed

- Read `git log start..end`, the PR descriptions
  (`gh pr view <n> -R Nepsha1986/mirrowick`) and the diffs. Check the claims
  against the diff and the game's `docs/` (`decisions.md`, `locations/`,
  `mechanics/`, `equipment/`). A commit title is a lead, not a fact: the post
  says only what the code at `end` really does. Something added in the period
  and removed again by `end` never happened.
- Sort it into what a player notices, and how it was made: the work behind it
  worth a paragraph. Leave out routine: CI, formatting, dependencies, small fixes.
- If nothing in the period would interest a player, say so and ask the
  operator whether a post is wanted at all, rather than padding one out.

## 3. Check against the spoilers

Read the game's `docs/story.md` and `docs/chronology/` at `end`, then the
spoiler rule in the site's `CLAUDE.md`. Commit titles in the game speak freely
about the story; the post must not. Describe a feature, not the secret behind
it: a place by what it is at first sight, a mechanic by what it does. A story
turn the game reveals later stays out, even when it is the period's main work.
Keep a list of what you left out and why: the operator sees it in step 7.

## 4. Write the post

One file per language, the same name in each:
`src/content/news/<lang>/<slug>.md`, for every language in `src/i18n/locales.ts`.
Each language is written properly in its own right, not translated word by word.
Call places and things what the game calls them in that language (the game's
`src/i18n/`).

```yaml
---
title: '…'
description: 'One or two sentences for the list and for search results.'
date: <today>
cover: ../../../assets/shots/news/<slug>.png
coverAlt: '…'
gameCommit: <full SHA of the end commit>
---
```

- **Shape:** a short opening on the period, then a list of what changed for the
  player, then one or two paragraphs of how it was made. Read
  `src/content/news/*/concept-demo.md` for the voice: "we", plain and modest, no
  hype, no em-dash flourishes.
- **Only what was done.** No plans, promises or dates, unless the operator
  asks. It stays a concept demo, not the game: don't call it a release, and link
  to https://play.mirrowick.com/ where it offers to try something.
- **Never in the post:** the repository, PR numbers, commit hashes, links to
  GitHub. `gameCommit` isn't shown on the site.
- The operator's note above, if there is one, takes priority over this shape.

## 5. Take the screenshots

A cover, and an image in the text wherever it shows something better than words
(Markdown: `![alt](../../../assets/shots/news/<slug>-<what>.png)`, the alt in the
post's language). All of them are new, taken from the game at `end`:

```bash
cd <clone> && git checkout <end>
ELECTRON_SKIP_BINARY_DOWNLOAD=1 npm ci
npm i --no-save playwright-core
cp <site>/.claude/post-news/shoot.mjs .
npx vite --port 5173 --strictPort   # in the background
node shoot.mjs --query 'realm=home&light' --out <site>/src/assets/shots/news/<slug>.png
```

- `shoot.mjs` explains its options. The game's `src/debug.ts` lists the places
  and switches for `--query`; use `--eval` to move the hero or open what the
  shot needs, through `window.game`, and `--hud` when the new thing is on the HUD.
- **Look at every picture before using it.** It must show what the post is
  talking about, and no spoiler: never Chamber 7, the burrow under the trees, or
  anything else the rule in step 3 keeps back. `?light` removes the dark; leave it
  off when the light is the point.
- If a shot can't be got after a few tries, say so and go without that one.
  Don't use an old screenshot in its place.
- Afterwards stop the dev server. The clone goes with the scratchpad; nothing
  from it is committed.

## 6. Branch, check, open the PR

1. `git switch -c news/<slug> origin/main`, and commit only the post and its
   images.
2. Install with `npm ci` if `node_modules` is missing, then run `npm run build` and
   `npm run format:check`. Fix what they find (`npm run format`).
3. Push and open a PR into `main`. Its title and body say what the post is about
   and the period by date; no spoilers, and no links to the game's repository.
4. Wait for its checks (`gh pr checks --watch`). Report a failure rather than
   going past it.

## 7. Confirm with the operator

Show, in the chat:

- the period, as dates and the list of the game's PRs it covers;
- the full text of the post in every language;
- every picture's path in `src/assets/shots/news/`, absolute, so they can open it;
- the PR's link and the state of its checks;
- what you left out as a spoiler, and what you weren't sure about;
- anything on the landing page these changes have made out of date. Don't change
  it here; the operator decides.

Then ask with AskUserQuestion, saying that merging publishes the post on
mirrowick.com at once: **Merge**, **Change something**, or **Don't publish**.

- **Change something:** make the changes, push, wait for the checks, and show
  and ask again. An earlier yes doesn't cover a changed text.
- **Don't publish:** leave the branch and the PR as they are and ask whether to
  close them. Delete nothing unasked.
- **Merge:** go to step 8. Only this answer, or the operator saying it plainly,
  counts. If no one can answer, don't merge: leave the PR open and say so.

## 8. Merge and check it is live

```bash
gh pr merge <n> --squash --delete-branch
```

Wait for the `Deploy` workflow's run on `main`. Check that
`https://mirrowick.com/<lang>/news/<slug>/` answers in every language, then give
the operator the links. Switch the local checkout back to `main` and pull.
