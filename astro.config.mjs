import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import trailingSlashLinks from './src/lib/trailingSlashLinks.mjs';

import cloudflare from "@astrojs/cloudflare";

// Cintia Barranco González — psicóloga general sanitaria, Granada.
// Spanish-only by design: the practice is local (Granada) plus online within Spain,
// and every patient-facing word is Spanish. No i18n block, no /en/ routes — adding
// an unused English locale would only publish thin duplicate pages for Google to
// weigh against the real ones.
export default defineConfig({
  site: 'https://cintiabarranco.es',
  trailingSlash: 'always',

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/404'),
    }),
    trailingSlashLinks(),
  ],

  adapter: cloudflare()
});