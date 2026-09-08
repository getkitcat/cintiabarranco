import { site } from './site';

/**
 * JSON-LD graphs. Injected by Head.astro.
 *
 * Deliberately absent: aggregateRating and review. Google treats invented review
 * markup as a manual-action offence, and for a health professional a fabricated
 * satisfaction score is a professional-conduct problem too. If Cintia collects
 * real Google reviews we can wire them in from the GBP, not from thin air.
 */

const address = {
  '@type': 'PostalAddress',
  streetAddress: site.street,
  addressLocality: site.city,
  addressRegion: site.region,
  postalCode: site.postal,
  addressCountry: site.country,
};

/** The practice itself — the anchor entity for local search in Granada. */
export const practiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['Psychologist', 'LocalBusiness'],
  '@id': `${site.url}/#practice`,
  name: site.name,
  alternateName: site.shortName,
  description: site.tagline,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  image: `${site.url}/assets/photos/cintia-retrato.jpg`,
  telephone: site.phone,
  email: site.email,
  address,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.lat,
    longitude: site.lon,
  },
  areaServed: [
    { '@type': 'City', name: 'Granada' },
    { '@type': 'AdministrativeArea', name: 'Andalucía' },
  ],
  availableLanguage: { '@type': 'Language', name: 'Spanish', alternateName: 'es' },
  sameAs: [site.instagram],
  knowsAbout: [
    'Terapia individual',
    'Ansiedad',
    'Autoestima',
    'Duelo',
    'Heridas del pasado',
    'Dependencia emocional',
    'Vínculos y relaciones',
  ],
});

/** Cintia as a person — lets AI assistants and Google connect name to practice. */
export const personSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.url}/#cintia`,
  name: site.name,
  jobTitle: site.role,
  image: `${site.url}/assets/photos/cintia-retrato.jpg`,
  url: `${site.url}/sobre-mi`,
  worksFor: { '@id': `${site.url}/#practice` },
  address,
  sameAs: [site.instagram],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidad de Granada',
  },
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  name: site.name,
  url: site.url,
  inLanguage: 'es-ES',
  publisher: { '@id': `${site.url}/#practice` },
});

export const serviceSchema = (s: {
  title: string;
  body: string;
  path: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.title,
  description: s.body,
  serviceType: s.title,
  url: `${site.url}${s.path}`,
  provider: { '@id': `${site.url}/#practice` },
  areaServed: { '@type': 'City', name: 'Granada' },
  availableChannel: [
    { '@type': 'ServiceChannel', name: 'Presencial', servicePostalAddress: address },
    { '@type': 'ServiceChannel', name: 'Online', serviceUrl: site.url },
  ],
});

export const faqSchema = (items: readonly { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a },
  })),
});

export const breadcrumbSchema = (crumbs: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: `${site.url}${c.path}`,
  })),
});

export const postSchema = (p: {
  title: string;
  description: string;
  date: Date;
  updated?: Date;
  slug: string;
  cover?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: p.title,
  description: p.description,
  datePublished: p.date.toISOString(),
  dateModified: (p.updated ?? p.date).toISOString(),
  inLanguage: 'es-ES',
  mainEntityOfPage: `${site.url}/blog/${p.slug}`,
  image: p.cover ? `${site.url}${p.cover}` : `${site.url}${site.ogImage}`,
  author: { '@id': `${site.url}/#cintia` },
  publisher: { '@id': `${site.url}/#practice` },
});
