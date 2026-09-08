/**
 * Single source of truth for the practice's real-world details.
 *
 * Everything here is verifiable fact taken from the client's existing site and the
 * design handoff. Claims we could NOT verify (patients treated, satisfaction rate,
 * years in practice, the colegiada number) are deliberately absent — see NOTES.md.
 * A psicóloga sanitaria carries professional liability for what her site asserts,
 * so an unverified number is worse than no number.
 */

export const site = {
  name: 'Cintia Barranco González',
  shortName: 'Cintia Barranco',
  role: 'Psicóloga General Sanitaria',
  tagline: 'Un espacio seguro para cuidar tu bienestar emocional con cercanía y profesionalidad.',
  url: 'https://cintiabarranco.es',
  logo: '/assets/logo.png',
  ogImage: '/assets/og-cover.jpg',

  email: 'cintiabarrancopsico@gmail.com',
  // Tel in two shapes: one to dial, one to read.
  phone: '+34644214595',
  phoneDisplay: '+34 644 21 45 95',
  whatsapp:
    'https://wa.me/34644214595?text=Hola%20Cintia%2C%20me%20gustar%C3%ADa%20pedir%20una%20cita.',
  instagram: 'https://www.instagram.com/cintiabarrancopsico/',
  instagramHandle: '@cintiabarrancopsico',

  street: 'Cl. el Guerra, 17',
  district: 'Beiro',
  postal: '18014',
  city: 'Granada',
  region: 'Andalucía',
  country: 'ES',
  addressLine: 'Cl. el Guerra, 17, Beiro, 18014 Granada',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Calle+el+Guerra+17+18014+Granada',
  mapsEmbed:
    'https://www.google.com/maps?q=Calle+el+Guerra+17+18014+Granada&output=embed',
  lat: '37.1935',
  lon: '-3.6089',

  /**
   * Web3Forms access key. Injected at build time so the key is not committed.
   * Set PUBLIC_WEB3FORMS_KEY in the Cloudflare Pages environment variables.
   * With no key the contact form renders a WhatsApp/phone fallback instead of a
   * form that silently swallows a patient's message.
   */
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
} as const;

export const nav = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
];

/**
 * The practice offers ONE therapy: individual (decision 2026-09-08). Terapia de
 * pareja, familiar and infantil were retired; their old ranking URLs 301 to
 * /servicios (see public/_redirects). `service` is the single offering, used by
 * the /servicios page and its schema.
 */
export const service = {
  slug: 'terapia-individual',
  path: '/servicios',
  title: 'Terapia Individual',
  kicker: 'Tu espacio para reencontrarte',
  short: 'Trabaja lo que te pesa y afronta la vida con nuevos recursos y herramientas.',
  body: 'Un acompañamiento personalizado donde trabajamos en lo que tú necesitas: ansiedad, autoestima, heridas del pasado, decisiones importantes o simplemente conocerte mejor. A tu ritmo, sin juicios.',
  signs: [
    'Sientes ansiedad, tristeza o agobio sin saber bien por qué',
    'Te cuesta poner límites o decir que no',
    'Estás pasando por un duelo, una ruptura o un cambio vital',
    'Quieres trabajar tu autoestima o tu autoconocimiento',
  ],
  meta: '50 min · Semanal o quincenal · Presencial u online',
  photo: 'cintia-retrato',
  alt: 'Terapia individual en Granada',
} as const;

/** A short set of areas she works with, for the pills on the About page. */
export const focusAreas = [
  'Ansiedad',
  'Autoestima',
  'Duelo',
  'Dependencia emocional',
  'Vínculos y relaciones',
  'Cambios vitales',
] as const;

/**
 * Motivos de consulta para la terapia individual — el bloque expandible al estilo
 * del sitio de referencia (Julia Moreno), pero escrito para lo que Cintia atiende
 * de verdad. Deliberadamente NO incluye ítems muy específicos (TCA, sexología,
 * alto rendimiento) que ella no anuncia. Cada motivo abre a una línea en tú.
 */
export const individualConcerns = [
  { t: 'Ansiedad', d: 'Vives con una tensión o una preocupación constante que te cuesta soltar.' },
  { t: 'Autoestima', d: 'Quieres dejar de exigirte tanto y aprender a valorarte tal y como eres.' },
  { t: 'Estado de ánimo bajo', d: 'Te sientes apagada/o, sin energía o sin ilusión desde hace tiempo.' },
  { t: 'Duelo', d: 'Estás atravesando una pérdida y necesitas un espacio para elaborarla.' },
  { t: 'Rupturas', d: 'Una relación ha terminado y te cuesta reencontrarte contigo.' },
  { t: 'Dependencia emocional', d: 'Sientes que necesitas a la otra persona para estar bien.' },
  { t: 'Heridas del pasado', d: 'Hay experiencias que siguen pesando en tu presente y en tus relaciones.' },
  { t: 'Poner límites', d: 'Te cuesta decir que no y acabas cargando con lo que no te toca.' },
  { t: 'Estrés y agobio', d: 'Vas a mil, no llegas a todo y sientes que la situación puede contigo.' },
  { t: 'Cambios vitales', d: 'Atraviesas una etapa de incertidumbre y no sabes qué camino tomar.' },
  { t: 'Gestión emocional', d: 'Las emociones te desbordan y quieres aprender a acompañarlas.' },
  { t: 'Autoconocimiento', d: 'Quieres entenderte mejor y construir una relación más amable contigo.' },
] as const;
