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
  colegiada: 'CE-00266',
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
 * Three therapies (2026-09-20): individual — her specialty, presented with the
 * signals + "lo que ganas" block — plus pareja and familiar (lighter). Infantil
 * stays retired (its URL 301s to the hub). `/servicios` is a HUB listing all
 * three; each has a detail page at its Granada ranking URL. `service` remains an
 * alias for the individual object so the home page and its schema keep working.
 *
 * NOTE: the pareja and familiar copy is a solid draft, not Cintia's verified
 * words — flag it for her review like the rest.
 */
export const services = [
  {
    slug: 'terapia-individual',
    path: '/servicios/terapia-individual-en-granada',
    title: 'Terapia Individual',
    // Price shown in the FAQ + Service schema (Cintia, 2026-10). Only individual
    // has a published price.
    price: '65',
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
  },
  {
    slug: 'terapia-pareja',
    path: '/servicios/terapia-de-parejas-en-granada',
    title: 'Terapia de Pareja',
    short: 'Para salir de bucles que os hacen sufrir, recuperar la comunicación y decidir con claridad cómo queréis seguir.',
    body: 'Un espacio donde los dos podéis expresaros sin miedo y entender qué se ha ido desgastando. No es solo para crisis: también es valiosa cuando queréis cuidar lo que tenéis, atravesáis un cambio o notáis que la distancia crece. Trabajamos la relación y lo que se activa en cada uno.',
    signs: [
      'La comunicación se ha vuelto difícil o siempre acaba en lo mismo',
      'Hay conflictos que no lográis resolver por vuestra cuenta',
      'Atravesáis un momento de cambio (convivencia, hijos, una infidelidad)',
      'Os queréis, pero sentís que algo esencial se ha ido desgastando',
    ],
    meta: '60–90 min · Presencial u online · Los dos miembros',
    photo: 'terapia-pareja',
    alt: 'Terapia de pareja en Granada',
  },
  {
    slug: 'terapia-familiar',
    path: '/servicios/terapia-familiar',
    title: 'Terapia Familiar',
    short: 'Para mejorar la convivencia, entender qué pasa entre vosotros y construir un hogar más sereno.',
    body: 'Cuando algo se mueve en uno de los miembros, toda la familia se ve afectada. Trabajo desde una mirada sistémica: entender la dinámica que se repite, dar espacio a cada voz y encontrar juntos nuevas formas de relacionaros y apoyaros.',
    signs: [
      'Los conflictos en casa se han vuelto frecuentes',
      'Hay tensión entre padres e hijos adolescentes',
      'Atravesáis un cambio importante (una separación, una pérdida, una mudanza)',
      'Queréis mejorar cómo os comunicáis en el día a día',
    ],
    meta: '60–90 min · Toda la familia o subgrupos · Presencial preferente',
    photo: 'terapia-familiar',
    alt: 'Terapia familiar en Granada',
  },
] as const;

/** Individual is the practice's focus — kept as a named alias for the home page. */
export const service = services[0];

/** Areas she works with, for the pills on the home About block (Cintia, 2026-10). */
export const focusAreas = [
  'Rupturas',
  'Vínculos y relaciones',
  'Autoestima',
  'Inseguridad',
  'Dependencia emocional',
  'Miedo al abandono',
  'Ansiedad',
  'Duelo',
  'Cambios vitales',
] as const;

/**
 * Reference-style block for the individual page (Cintia's brief, 2026-09-20):
 * first-person "signals" that a visitor recognises in themselves, then what they
 * gain in therapy — instead of the long motivos desglose. Draft copy in her
 * relational focus; flag for her review. `individualConcerns` below is kept as the
 * source her signals were drawn from, in case she wants the full list again.
 */
export const individualSignals = [
  'Siento que mi valor depende demasiado de la aprobación de los demás.',
  'Vuelvo una y otra vez a los mismos patrones en mis relaciones.',
  'Sé que una relación no me hace bien y, aun así, me cuesta soltar.',
  'Me cuesta poner límites y acabo cargando con lo que no me toca.',
  'Vivo con una preocupación o una tristeza que no sé de dónde viene.',
  'Estoy atravesando un cambio o una pérdida y no sé cómo seguir.',
] as const;

export const individualGains = [
  'Entender qué hay detrás de lo que sientes, sin quedarte en la etiqueta.',
  'Relacionarte contigo y con los demás desde la elección, no desde el miedo.',
  'Recuperar la confianza en tu propio criterio y en tus decisiones.',
  'Poner límites y cuidar tus vínculos sin dejarte a un lado.',
  'Herramientas concretas para sostener los momentos difíciles.',
  'Avanzar a tu ritmo, con un acompañamiento cercano y sin juicios.',
] as const;

/**
 * Motivos de consulta para la terapia individual. Copia REAL de Cintia (PDF que
 * envió, 2026-09-08), en su propia voz — no reescribir. `featured` marca los cinco
 * que ella quiere destacar visualmente para posicionarse como especialista en
 * vínculos y relaciones (autoestima, rupturas y duelo, patrones relacionales,
 * dependencia emocional, miedo a la soledad y al abandono).
 */
export const individualConcerns = [
  {
    t: 'Autoestima',
    featured: true,
    d: 'La forma en la que nos valoramos influye en cómo nos relacionamos con nosotros mismos, con los demás y con las decisiones que tomamos. Si sientes que tu valor depende demasiado de la aprobación de los demás, de tus logros o de cómo te tratan, trabajaremos para construir una relación contigo más estable y segura.',
  },
  {
    t: 'Rupturas y duelo',
    featured: true,
    d: 'El final de una relación puede generar dolor, confusión, miedo y una sensación de pérdida difícil de gestionar. En terapia encontrarás un espacio para comprender y transitar este proceso, especialmente cuando sabes que necesitas avanzar pero sientes que te cuesta soltar, dejar de pensar en la otra persona o imaginar tu vida sin ese vínculo.',
  },
  {
    t: 'Patrones relacionales',
    featured: true,
    d: 'A veces, aunque las personas con las que nos relacionamos cambian, sentimos que determinadas situaciones o dificultades se repiten. Si te encuentras una y otra vez en vínculos similares, trabajaremos para comprender esos patrones y desarrollar nuevas formas de relacionarte sin tener que renunciar a tus propias necesidades.',
  },
  {
    t: 'Dependencia emocional',
    featured: true,
    d: 'Puede que seas consciente de que una relación no te hace bien y, aun así, sientas que alejarte es muy difícil. Descubriremos qué hace que ese vínculo tenga tanto peso en tu vida y cómo construir relaciones en las que puedas estar desde la elección y no únicamente desde el miedo a perder o quedarte sola/o.',
  },
  {
    t: 'Miedo a la soledad y al abandono',
    featured: true,
    d: 'Para algunas personas, estar solas puede generar una sensación intensa de vacío, inseguridad o miedo. Si la posibilidad de que alguien se aleje o de quedarte sola/o condiciona tus decisiones y relaciones, nos centraremos en comprender ese miedo y construir una relación más segura contigo y con los demás.',
  },
  {
    t: 'Relaciones insatisfactorias y «casi algo»',
    d: 'Las relaciones ambiguas, la incertidumbre o la sensación de no saber qué lugar ocupas en la vida de otra persona pueden generar mucho malestar. Si estás en un vínculo que no termina de darte lo que necesitas pero te cuesta alejarte, podremos trabajar qué está ocurriendo y qué necesitas para tomar decisiones más coherentes contigo.',
  },
  {
    t: 'Celos',
    d: 'Los celos pueden aparecer acompañados de miedo, inseguridad y una necesidad constante de comprobar que la relación está a salvo. Indagaremos para averiguar qué situaciones los activan, qué hay detrás del miedo a perder a la otra persona y cómo relacionarte con esa inseguridad sin que termine dirigiendo tus relaciones.',
  },
  {
    t: 'Inseguridad',
    d: 'La inseguridad puede hacer que dudes constantemente de ti, de tus decisiones o de tu lugar en la vida de los demás. En terapia comprenderemos qué alimenta esa sensación y nos centraremos en que puedas confiar más en tu propio criterio y actuar sin necesitar constantemente la confirmación externa.',
  },
  {
    t: 'Dificultades interpersonales',
    d: 'A veces nos cuesta expresar lo que necesitamos, poner límites o gestionar los conflictos con los demás. Exploraremos las dificultades que aparecen en tus relaciones para que puedas comunicarte de una forma más clara, defender tus necesidades y cuidar de tus vínculos sin dejarte a un lado.',
  },
  {
    t: 'Ansiedad',
    d: 'La preocupación constante, la anticipación o el miedo pueden llegar a ocupar gran parte de nuestro día a día. Si sientes que la ansiedad está interfiriendo en tu bienestar o condicionando lo que haces, abordaremos qué es lo que la mantiene y trabajaremos para desarrollar nuevas formas de relacionarte con aquello que te preocupa.',
  },
  {
    t: 'Gestión emocional',
    d: 'Hay momentos en los que determinadas emociones pueden sentirse tan intensas que no sabemos qué hacer con ellas. Te acompañaré a comprender mejor lo que sientes y a aprender a relacionarte de una forma diferente con las emociones difíciles, sin que estas tengan que dirigir necesariamente tus decisiones o comportamientos.',
  },
  {
    t: 'Depresión y/o apatía',
    d: 'Sentirse apagada/o, sin energía o desconectada/o de aquello que antes disfrutabas puede hacer que el día a día se vuelva cada vez más difícil. En terapia podremos comprender qué está ocurriendo y trabajar para recuperar poco a poco actividades, relaciones y aspectos de tu vida que sean importantes para ti.',
  },
  {
    t: 'Cambios vitales y crisis personales',
    d: 'Hay momentos en la vida en los que algo cambia y necesitamos adaptarnos a una situación que no habíamos previsto o que no sabemos cómo afrontar. Si estás atravesando un periodo de cambios, dudas o incertidumbre, te acompañaré a comprender qué necesitas en este momento y hacia dónde quieres avanzar.',
  },
  {
    t: 'Autoexigencia y perfeccionismo',
    d: 'Puede que sientas una presión constante por hacerlo todo bien, cumplir con las expectativas o alcanzar determinados objetivos. Si tienes la sensación de que nunca es suficiente o que equivocarte dice algo sobre tu valor, trabajaremos para flexibilizar esa exigencia y construir una relación más amable contigo misma/o.',
  },
  {
    t: 'Cambio de hábitos',
    d: 'A veces sabemos qué cambios queremos hacer, pero nos resulta difícil mantenerlos en el tiempo. Si quieres modificar determinados hábitos relacionados con tu bienestar, organización o rutina, trabajaremos las dificultades que están apareciendo y cómo construir cambios que sean realistas y sostenibles para ti.',
  },
  {
    t: 'Infidelidad',
    d: 'La infidelidad puede generar una profunda sensación de dolor, inseguridad y pérdida de confianza, tanto si la has sufrido como si has sido tú quien ha tenido una relación fuera de la pareja. En terapia podremos trabajar las emociones y dificultades que han surgido, así como comprender qué quieres hacer con la relación y cómo afrontar la situación.',
  },
  {
    t: 'Insatisfacción corporal / TCA',
    d: 'La relación con nuestro cuerpo puede estar marcada por la comparación, la exigencia y la sensación de no ser suficiente. Si la preocupación por tu apariencia o la insatisfacción corporal están afectando a tu autoestima y bienestar, trabajaremos para comprender esta relación y construir una forma más saludable y flexible de relacionarte con tu cuerpo.',
  },
  {
    t: 'Trauma',
    d: 'Hay experiencias que pueden dejarnos una huella profunda y hacer que determinadas situaciones, recuerdos o emociones sigan generando malestar incluso cuando ha pasado tiempo desde lo ocurrido. Juntos/as entenderemos cómo esa experiencia sigue influyendo en tu forma de sentir, pensar y relacionarte con lo que te rodea, y exploraremos nuevas formas de relacionarte con lo vivido para recuperar poco a poco seguridad, bienestar y libertad en tu día a día.',
  },
] as const;

/**
 * Motivos de consulta para terapia de pareja y familiar. ⚠️ BORRADOR de KitCat
 * (expande los `signs` y el `body` de cada servicio en el registro de Cintia) —
 * PENDIENTE de revisión/aprobación de Cintia antes de darlo por definitivo.
 * Misma estructura {t, d} que individualConcerns para reutilizar ConcernList.
 */
export const parejaConcerns = [
  {
    t: 'La comunicación se ha atascado',
    d: 'Cuando cada conversación acaba en el mismo punto, en un reproche o en silencio, es fácil sentir que ya no sabéis hablaros. Trabajaremos para romper esos bucles y recuperar una forma de comunicaros en la que los dos os sintáis escuchados y entendidos.',
  },
  {
    t: 'Conflictos que no se resuelven',
    d: 'Hay discusiones que vuelven una y otra vez sin llegar a ningún sitio. Miraremos qué hay debajo de esos conflictos —lo que cada uno necesita y teme— para que podáis abordarlos juntos en lugar de uno contra el otro.',
  },
  {
    t: 'Celos e inseguridad',
    d: 'Los celos o la inseguridad pueden ir generando control, tensión y una sensación constante de amenaza en la relación. Exploraremos qué los activa y cómo relacionaros con esa inseguridad sin que termine dañando lo que tenéis.',
  },
  {
    t: 'Infidelidad y confianza rota',
    d: 'Una infidelidad remueve la confianza y la imagen que teníais de la relación. En terapia encontraréis un espacio para hablar de lo ocurrido con calma y decidir juntos, sin presión, si queréis reconstruir y cómo hacerlo.',
  },
  {
    t: 'Distancia y desgaste',
    d: 'A veces no hay un gran conflicto, sino una distancia que ha ido creciendo sin daros cuenta: rutina, poco tiempo, menos complicidad. Miraremos qué se ha ido desgastando y cómo volver a acercaros.',
  },
  {
    t: 'Momentos de cambio',
    d: 'Empezar a convivir, la llegada de un hijo o una etapa difícil pueden poner la relación a prueba. Trabajaremos para atravesar ese cambio como equipo, de manera que os una en lugar de alejaros.',
  },
] as const;

export const familiarConcerns = [
  {
    t: 'Conflictos en casa',
    d: 'Cuando las discusiones se vuelven el tono habitual del hogar, el malestar termina afectando a todos. Buscaremos entender qué está alimentando esos conflictos y cómo recuperar una convivencia más tranquila.',
  },
  {
    t: 'Padres e hijos adolescentes',
    d: 'La adolescencia suele traer choques, silencios y distancias que desgastan. Trabajaremos para que volváis a entenderos y para que cada uno encuentre su lugar sin tanta pelea.',
  },
  {
    t: 'Cuesta comunicarse',
    d: 'Cuando es difícil hablar sin malentenderse o cada uno va por su lado, el día a día se vuelve más cuesta arriba. Exploraremos formas de comunicaros más claras y cercanas, en las que todos podáis expresaros.',
  },
  {
    t: 'Cambios y pérdidas',
    d: 'Una separación, una pérdida o una mudanza remueven a toda la familia. Os acompaño a atravesar ese cambio juntos y a sosteneros mientras encontráis un nuevo equilibrio.',
  },
  {
    t: 'Dinámicas que se repiten',
    d: 'Desde una mirada sistémica, lo que le ocurre a un miembro suele estar conectado con la dinámica de toda la familia. Entenderla nos ayuda a que el cambio se mantenga en el tiempo y no recaiga sobre una sola persona.',
  },
  {
    t: 'Reconstruir la convivencia',
    d: 'Cuando el ambiente en casa se ha tensado durante mucho tiempo, cuesta imaginar que pueda ser de otra manera. Trabajaremos para recuperar el respeto, el cuidado y un hogar en el que de verdad os sintáis a gusto.',
  },
] as const;
