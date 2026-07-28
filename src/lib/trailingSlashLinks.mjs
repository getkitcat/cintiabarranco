import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

/**
 * Astro integration: normalize internal <a href> links to the trailing-slash form.
 *
 * The site is trailingSlash:'always' — Cloudflare serves `/page/` as 200 and
 * 307-redirects `/page`. Author-side links are written without the slash in many
 * places (Nav, Footer, inline literals, data files), so without this every internal
 * click would hop through a redirect and Google would waste crawl budget on it.
 *
 * This rewrites the BUILT HTML at astro:build:done, so it runs on every build
 * (local and Cloudflare) and cannot be regressed by a new link forgetting the slash.
 * Scope is deliberately narrow: root-relative `<a href="/...">` only — absolute URLs,
 * canonical/og tags, anchors (#), query strings (?), and file paths (foo.png) are left
 * untouched.
 */
export default function trailingSlashLinks() {
  return {
    name: 'trailing-slash-internal-links',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);

        async function htmlFiles(d) {
          const out = [];
          for (const e of await readdir(d, { withFileTypes: true })) {
            const p = join(d, e.name);
            if (e.isDirectory()) out.push(...(await htmlFiles(p)));
            else if (e.name.endsWith('.html')) out.push(p);
          }
          return out;
        }

        // Matches <a ... href="/some/path"> — captures the path (no quote/#/? inside).
        const re = /(<a\b[^>]*?\bhref=")(\/[^"#?]*)(")/g;
        let changed = 0;

        for (const file of await htmlFiles(root)) {
          const before = await readFile(file, 'utf8');
          const after = before.replace(re, (m, pre, href, post) => {
            if (href.endsWith('/')) return m;            // already slashed (incl. "/")
            const last = href.slice(href.lastIndexOf('/') + 1);
            if (last.includes('.')) return m;            // looks like a file (foo.png)
            changed++;
            return `${pre}${href}/${post}`;
          });
          if (after !== before) await writeFile(file, after);
        }

        logger?.info?.(`trailing-slash: normalized ${changed} internal link(s)`);
      },
    },
  };
}
