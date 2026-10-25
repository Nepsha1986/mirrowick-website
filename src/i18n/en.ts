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
      'A concept demo of a single-player top-down game set in Mirrowick, an old New England town. Your uncle Victor is missing, and under his shed there is a cellar.',
  },
  nav: {
    play: 'Demo',
    news: 'News',
    language: 'Language',
    skip: 'Skip to content',
  },
  hero: {
    chapter: 'Chapter I · The Fading Tomorrow',
    /** The intro's last words, its whole point. */
    line: 'We think history is behind us. Until the day it stands in front of us.',
    play: 'Play the demo',
    steam: 'Steam, later',
    status: 'A concept demo · not the finished game · free in the browser',
  },
  tales: {
    kicker: 'Folklore',
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
  },
  gallery: {
    kicker: 'Stills',
    title: 'Have a look around',
    lead: 'Shots from the concept demo. All of it will still change.',
    open: 'Enlarge',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
    shots: {
      inside: 'Inside Victor’s house',
      driveway: 'The drive, where his car always is',
      garden: 'The garden behind the house',
      shed: 'The shed among the trees',
      cellar: 'The cellar under the shed',
      evening: 'Dusk by the house',
      corridor: 'A corridor under red lamps',
      lockers: 'The changing room',
      exit: 'The way to the exit',
      shotgun: 'A shotgun in the dark',
      pistol: 'Two of them',
      m4: 'A burst from the M4',
    },
  },
  status: {
    kicker: 'Concept demo',
    title: 'Where it stands',
    lead: 'Mirrowick is not a game yet, only its concept: a short demo where we try out the town, the light and the fights. It is rough, much of it will be redone, and the finished game is a long way off.',
    has: 'In the demo now',
    items: [
      'The intro and the call that starts it all',
      'Victor’s homestead, the shed and the cellar',
      'The Facility: its underground level and the yard above',
      'Light and shadow, notes and letters, an inventory',
      'Real-time fights, running and tiring, autosave',
      'Survival mode, opened at the end of the demo',
    ],
    platforms: 'Where to play',
    browser: 'The demo, in the browser, free',
    steamSoon: 'On Steam, later',
    /** Typed at the foot of the note. */
    caveat: 'This is a concept, not the game. Expect rough edges.',
  },
  news: {
    kicker: 'From the workshop',
    title: 'News',
    lead: 'What’s new in Mirrowick and how it is made.',
    latest: 'Latest news',
    all: 'All news',
    read: 'Read',
    back: 'Back to news',
    none: 'Nothing here yet.',
  },
  consent: {
    label: 'Cookies',
    text: 'We count visits with Google Analytics, to see what people look at here. May it set its cookies?',
    accept: 'Allow',
    decline: 'No, thanks',
    settings: 'Cookies',
  },
  footer: {
    made: 'Mirrowick © {year}',
  },
  notFound: {
    title: 'Nothing here but the dark',
    text: 'The page you were looking for isn’t here.',
    home: 'Back to the start',
  },
};

/** The shape every language's catalog must have. */
export type Messages = typeof en;
