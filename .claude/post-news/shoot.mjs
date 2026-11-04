// Takes one screenshot of the game from its dev server, with the HUD hidden,
// through the machine's own Chrome. Copy it into a clone of the game that has
// `playwright-core` installed, and run it from there:
//
//   node shoot.mjs --query 'realm=home&light' --out /path/to/shot.png
//
// --query  the game's debug switches (see src/debug.ts in the game)
// --out    where to write the PNG
// --wait   milliseconds to let the scene settle (default 4000)
// --eval   JavaScript to run in the page before the shot; it can reach the
//          running game as `window.game`
// --hud    keep the HUD in the shot
// --port   the dev server's port (default 5173)
import { parseArgs } from 'node:util';
import { chromium } from 'playwright-core';

const { values: args } = parseArgs({
  options: {
    query: { type: 'string', default: '' },
    out: { type: 'string' },
    wait: { type: 'string', default: '4000' },
    eval: { type: 'string' },
    hud: { type: 'boolean', default: false },
    port: { type: 'string', default: '5173' },
  },
});
if (!args.out) throw new Error('--out is required');

const browser = await chromium.launch({
  channel: 'chrome',
  // Headless Chrome has no GPU here; the game needs WebGL all the same.
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
// The size the site's other screenshots are: 2560 × 1440.
const page = await browser.newPage({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 2,
});
page.on('pageerror', (e) => console.error('page error:', e.message));

await page.goto(`http://localhost:${args.port}/?${args.query}`);
await page.waitForFunction(() => window.game?.isRunning);
await page.waitForTimeout(Number(args.wait));
if (args.eval) console.log('eval:', await page.evaluate(args.eval));
if (!args.hud) await page.addStyleTag({ content: '#ui { display: none !important; }' });
await page.waitForTimeout(300);
await page.screenshot({ path: args.out });
await browser.close();
console.log('wrote', args.out);
