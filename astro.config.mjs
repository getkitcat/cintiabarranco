import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import trailingSlashLinks from './src/lib/trailingSlashLinks.mjs';

// Cintia Barranco González — psicóloga general sanitaria, Granada.
// Spanish-only by design: the practice is local (Granada) plus online within Spain,
// and every patient-facing word is Spanish. No i18n block, no /en/ routes — adding
// an unused English locale would only publish thin duplicate pages for Google to
// weigh against the real ones.
export default defineConfig({
  site: 'https://cintiabarranco.es',
  trailingSlash: 'always',
  // We serve our own pre-optimised images (scripts/optimize-images.mjs → static
  // files in public/assets, referenced by Photo.astro as plain <img>). We never
  // use astro:assets / <Image>, so Astro has no reason to load sharp at build.
  // Passthrough keeps the Cloudflare build off sharp entirely — the sharp native
  // compile on a newer Node is what was hanging the build for ~31 min. The
  // committed .nvmrc/.node-version (Node 20) also give sharp a prebuilt for the
  // one devDep install.
  image: { service: passthroughImageService() },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/404'),
    }),
    trailingSlashLinks(),
  ],
});
