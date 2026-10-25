/**
 * Every word the site shows, in English. This is the source: its shape is
 * the shape every other language must fill (`Messages`). `{name}` marks a
 * value put in.
 */
export const en = {
  meta: {
    lang: 'English',
    /** As the browser tab and search results show it. */
    title: 'Mirrowick — one place, two times, and a mirror between them',
    description:
      'A single-player top-down game about one small New England town in two times: the sunlit present and the dark Fading Tomorrow, joined by a mirror in a cellar.',
  },
  nav: {
    world: 'The world',
    play: 'Play',
    news: 'News',
    language: 'Language',
    skip: 'Skip to content',
  },
  hero: {
    chapter: 'Chapter I · The Fading Tomorrow',
    tagline: 'One place, two times, and a mirror between them.',
    lead: 'Your uncle Victor has been missing for two days. The porch light is on day and night. Under his shed there is a hatch, under the hatch a cellar, and in the cellar a mirror.',
    play: 'Play in the browser',
    steam: 'Coming to Steam',
    status: 'Early prototype · v0.1 · free in the browser',
  },
  tales: {
    title: 'Every old town has its secret',
    lines: [
      'Of lights in the woods that draw away if you follow them.',
      'Of mirrors old women still cover for the night.',
      'Of wells where the echo answers from deeper than any well goes.',
    ],
    coda: "Most of us don't care about history. Until the day it calls you itself.",
  },
  worlds: {
    title: 'One place, two times',
    lead: 'Mirrowick is the same ground in two times. Cross the glass and everything you knew is still there, only decades later, at the edge of ruin.',
    slider: 'Drag to cross between the times',
    home: {
      name: 'Home',
      when: '2012',
      text: 'The sunlit edge of the small town of Mirrowick, in north-eastern Massachusetts. Victor’s old house, the garden, the shed at the end of it. Ordinary, quiet, lived-in.',
    },
    tomorrow: {
      name: 'The Fading Tomorrow',
      when: 'The far future',
      text: 'The same place, long after. Around the cellar stands the Facility, a vast abandoned laboratory built round the mirror. Down there it is dark, and you have a flashlight.',
    },
    pairNote:
      'The cellar under Victor’s shed and Chamber 7 of the Facility: the same seal, the same stones.',
  },
  light: {
    title: 'The light decides who you meet',
    lead: 'Every lamp, screen and fire is cut out of the dark, and walls and shut doors throw soft shadows. What lives down there keeps to the light or to the dark, so switching your flashlight on or off is a choice of whom to meet.',
    points: [
      {
        title: 'A flashlight, not a sun',
        text: 'Rooms you haven’t looked into stay black until you do. Light doesn’t pass walls; windows, bars and fences let it by.',
      },
      {
        title: 'Two ways out',
        text: 'Slip out quietly by the chalk arrows survivors left on the floor, or go looking for what the Facility’s guards left behind.',
      },
      {
        title: 'A hero who remembers',
        text: 'Mark doesn’t carry what he doesn’t need. He remembers it, and when he learns he needs it, he knows where to go back.',
      },
    ],
  },
  bestiary: {
    title: 'Not alone down there',
    lead: 'They seep into the world through whatever reflects: mirrors, glass, water. Near the glass there are more of them than anywhere else.',
    foes: {
      shade: {
        name: 'The shade',
        text: 'A scrap of darkness that hates your light. It keeps to the dark, waits, and strikes from out of it.',
      },
      chimers: {
        name: 'Chimers',
        text: 'Glass beetles the size of a palm, in flocks on lit walls. Almost blind, they only see you in the light, and they never come one at a time.',
      },
      crawler: {
        name: 'The glass crawler',
        text: 'Black glass the size of a large dog, carrying her brood on her back. Bullets glance off her shield. Come at her from the side.',
      },
    },
  },
  craft: {
    title: 'Painted by code',
    lead: 'There isn’t a single image or sound file in Mirrowick. Every texture is painted in code when the game starts, and the music is synthesised in your browser as you play.',
    facts: [
      { value: '0', label: 'image files' },
      { value: '0', label: 'sound files' },
      { value: '2', label: 'languages: English and Russian' },
    ],
  },
  status: {
    title: 'Where it stands',
    lead: 'Mirrowick is an early prototype of the first chapter, in active development.',
    has: 'In the prototype now',
    items: [
      'The intro and the call that starts it all',
      'Victor’s homestead, the shed and the cellar',
      'The Facility: its underground level and the yard above',
      'Travel between the times, by mirror and by stairs',
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
    title: 'Nothing on this side of the glass',
    text: 'The page you were looking for isn’t here.',
    home: 'Back to the start',
  },
};

/** The shape every language's catalog must have. */
export type Messages = typeof en;
