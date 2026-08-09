'use strict';

/**
 * Post-build prerender step.
 *
 * This site is a plain client-rendered SPA (Vite + React, no SSR) — the
 * built dist/index.html ships with an empty <div id="root">, so any tool
 * that fetches the page without running JavaScript (crawlers, link
 * previews, some AI tools) sees nothing. This script launches a real
 * headless browser after `vite build`, visits each route, waits for
 * React + GSAP to finish rendering, and overwrites each route's HTML in
 * dist/ with the fully-rendered output.
 *
 * Real visitors are unaffected — React still hydrates and runs normally;
 * this only changes what's present in the initial HTML payload.
 *
 * Note: routes are reached via client-side navigation (history.pushState +
 * a popstate event), not by requesting /about etc. directly from the static
 * server — this project has no server-side rewrite rule for deep links
 * (see also Frontend/vercel.json, which needed the same treatment), so a
 * direct request for /about against the plain static build 404s before
 * React Router ever loads.
 *
 * Usage: node scripts/prerender.cjs   (run after `vite build`, see package.json)
 */

const path = require('path');
const fs = require('fs/promises');
const { chromium } = require('playwright');
const { createServer } = require('http-server');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const PORT = 5005;

// Every client-side route this SPA defines — see src/App.jsx.
const ROUTES = [
  { path: '/', outFile: 'index.html' },
  { path: '/about', outFile: 'about/index.html' },
  { path: '/privacy-policy', outFile: 'privacy-policy/index.html' },
  { path: '/terms-of-service', outFile: 'terms-of-service/index.html' },
];

async function settleAnimations(page) {
  // GSAP's ScrollTrigger-based entrance animations only fire once their
  // element scrolls into view — scroll the full page height so every
  // section actually animates in before we snapshot, not just the fold.
  await page.evaluate(async () => {
    const distance = document.body.scrollHeight;
    const step = 400;
    for (let y = 0; y < distance; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  // Let any in-flight GSAP tweens finish settling after the scroll pass.
  await page.waitForTimeout(800);
}

async function writeSnapshot(page, outFile) {
  const html = await page.content();
  const outPath = path.join(DIST_DIR, outFile);
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, html, 'utf-8');
}

async function main() {
  console.log('Prerendering routes...');

  const server = createServer({ root: DIST_DIR });
  await new Promise((resolve) => server.listen(PORT, resolve));
  const baseUrl = `http://127.0.0.1:${PORT}`;

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

    // Only the first route is a real HTTP request — the static server has
    // no SPA rewrite rule, so it's the only path guaranteed to resolve.
    // Every subsequent route is reached by client-side navigation inside
    // the already-loaded app, exactly like a real visitor clicking a <Link>.
    const [first, ...rest] = ROUTES;

    await page.goto(`${baseUrl}${first.path}`, { waitUntil: 'networkidle' });
    await settleAnimations(page);
    await writeSnapshot(page, first.outFile);
    console.log(`  ✓ ${first.path} -> dist/${first.outFile}`);

    for (const route of rest) {
      await page.evaluate((p) => {
        window.history.pushState({}, '', p);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }, route.path);
      // Let React Router process the navigation and mount the new route.
      await page.waitForTimeout(300);
      await settleAnimations(page);
      await writeSnapshot(page, route.outFile);
      console.log(`  ✓ ${route.path} -> dist/${route.outFile}`);
    }

    await page.close();
  } finally {
    await browser.close();
    server.close();
  }

  console.log('Prerendering complete.');
}

main().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
