/**
 * Every word the site shows, in English. This is the source: its shape is
 * the shape every other language must fill (`Messages`). `{name}` marks a
 * value put in.
 */
export const en = {
  meta: {
    lang: 'English',
    /** As the browser tab and search results show it. */
    title: 'Mirrowick — a top-down mystery game',
    description:
      'A single-player top-down game set in Mirrowick, an old New England town. Your uncle Victor is missing, and under his shed there is a cellar.',
  },
  nav: {
    play: 'Play',
    news: 'News',
    language: 'Language',
    skip: 'Skip to content',
  },
  hero: {
    chapter: 'Chapter I · The Fading Tomorrow',
    /** The intro's last words, its whole point. */
    line: "Most of us don't care about history. Until the day it calls for you.",
    play: 'Play in the browser',
    steam: 'Coming to Steam',
    status: 'Early prototype · v0.1 · free in the browser',
  },
  tales: {
    title: 'Every old town has its secret',
    /** Under the title: from the intro. */
    lead: 'It isn’t in the guidebooks. It is told.',
    /** The intro's pencil film, one picture per year. */
    film: 'Mirrowick in {year}, from the intro',
    years: 'The town through the years',
    lines: [
      'Of lights in the woods that draw away if you follow them.',
      'Of mirrors old women still cover for the night.',
      'Of wells where the echo answers from deeper than any well goes.',
    ],
    coda: 'Everyone has heard these tales: round a campfire, on the school bus, from Grandad at the table. And everyone knows they are only tales.',
  },
  glimpse: {
    line: 'Some cellars are older than the houses above them.',
    alt: 'A round stone chamber in the dark, with a glowing well in the middle',
  },
  gallery: {
    title: 'Have a look around',
    open: 'Enlarge',
    close: 'Close',
    shots: {
      porch: 'Victor’s house, in the afternoon',
      driveway: 'The drive, where his car always is',
      garage: 'Victor’s garage',
      evening: 'The porch light at dusk',
      night: 'Night by the house',
      checkpoint: 'A checkpoint, not empty',
      fight: 'Gunfire in the gallery',
      exp: 'Under the flashlight',
      director: 'An office left as it was',
      staff: 'A staff room',
      cornered: 'Two of them',
      vivarium: 'Cages',
    },
  },
  status: {
    title: 'Where it stands',
    lead: 'Mirrowick is an early prototype of the first chapter, in active development.',
    has: 'In the prototype now',
    items: [
      'The intro and the call that starts it all',
      'Victor’s homestead, the shed and the cellar',
      'The Facility: its underground level and the yard above',
      'Light and shadow, notes and letters, an inventory',
      'Real-time fights, running and tiring, autosave',
      'Survival mode, opened at the end of the demo',
    ],
    platforms: 'Where to play',
    browser: 'In the browser, free, right now',
    steamSoon: 'On Steam, later',
  },
  news: {
    title: 'News',
    lead: 'What’s new in Mirrowick and how it is made.',
    latest: 'Latest news',
    all: 'All news',
    read: 'Read',
    back: 'Back to news',
    none: 'Nothing here yet.',
  },
  footer: {
    made: 'Mirrowick © {year}',
    fonts: 'Set in Cormorant Infant and Manrope.',
  },
  notFound: {
    title: 'Nothing here but the dark',
    text: 'The page you were looking for isn’t here.',
    home: 'Back to the start',
  },
};

/** The shape every language's catalog must have. */
export type Messages = typeof en;
