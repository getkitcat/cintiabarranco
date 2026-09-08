# Cintia Barranco — estado del proyecto

Astro + Cloudflare Pages + Sveltia CMS. Español, una sola lengua.
Sustituye a `cintiabarranco.framer.website`.

Build verde: 13 páginas. `npm run build` antes de cada push.

---

## Cambios 2026-09-08 (3) — WhatsApp como CTA + copia real de motivos

Restauración previa: tag `v3-before-whatsapp-cta`.

- **CTA = WhatsApp en todo el sitio.** Los botones "Primera consulta gratuita" /
  "Empieza hoy" / "Reserva tu primera cita" / "Quiero iniciar el cambio" / "Pedir
  cita para…" pasan a **"Escríbeme por WhatsApp"** (→ `site.whatsapp`, externo). El
  botón "Pedir cita" del nav y del footer sigue apuntando a `/contacto` (para no
  dejar huérfano el formulario, que se mantiene). El formulario de 3 pasos sigue ahí.
- **Retirado el reclamo "consulta gratuita / informativa / 15 minutos"** de toda la
  copia visible: hero, FAQs, slabs, proceso, meta descripciones, llms.txt, tags del
  contacto. NO se tocó lo legal (acceso gratuito al sitio, derechos RGPD gratuitos,
  024/112 gratuitos del blog — todo eso es correcto y se queda).
- **Motivos de consulta = copia REAL de Cintia** (PDF `Web.pdf`, en su voz, 18
  temas) en `individualConcerns`. Los 5 que pidió destacar (Autoestima, Rupturas y
  duelo, Patrones relacionales, Dependencia emocional, Miedo a la soledad y al
  abandono) van como bloque destacado "Mi especialidad — Vínculos y relaciones"
  (tarjetas siempre visibles); los otros 13, en el acordeón de dos columnas.
  Posiciona a Cintia como especialista en vínculos, como ella quería.

## Cambios 2026-09-08 (2) — solo terapia individual

Cintia solo ofrece **terapia individual**. Retiradas pareja y familiar (infantil ya
lo estaba). Restauración previa: tag `v2-three-services` (estado con 3 terapias).

- **Una sola página de servicio** en `/servicios` = la página de terapia individual
  (hero + bloque de motivos + razones + FAQ). Fuera el hub, las páginas por terapia
  (`/servicios/[...slug]` eliminada) y el selector "¿quién necesita el espacio?".
- **301** de todas las URLs antiguas `/servicios/*` (individual-en-granada, parejas,
  familiar, infantil) → `/servicios`, para no tirar el SEO local heredado.
- Home: fuera la rejilla de 3 tarjetas de servicios (el bloque de motivos ya cubre
  individual). Marquee y píldoras de "Sobre mí" pasan a áreas de trabajo individuales.
- Footer, schema (`knowsAbout`, `serviceSchema`), `llms.txt` y meta descripciones:
  solo individual. `site.ts` ahora exporta `service` (uno) + `focusAreas`, no `services`.

## Cambios 2026-09-08 (1) — rediseño estilo Julia Moreno

Punto de restauración antes de estos cambios (por si hay que volver atrás):
`git reset --hard v1-pre-julia-redesign` — también la rama `backup/pre-julia-redesign`.
Ambos están en GitHub.

- **Terapia Infantil retirada.** La consulta se centra ahora en individual, con
  pareja y familiar al lado. Su URL con posicionamiento (`/servicios/terapia-infantil-en-granada`)
  se redirige 301 a la de individual (ver `public/_redirects`), así no se pierde el SEO.
- **Bloque "Consulta individual"** (`ConcernList.astro`) — inspirado en el sitio que
  le gusta a Cintia (juliamorenopsicologa.com) pero en su paleta cálida, no en el
  blanco y negro de la referencia. Lista en dos columnas de motivos de consulta
  (ansiedad, autoestima, duelo…), cada uno se abre a una línea. Está en la home y,
  completo, en la página de terapia individual. Los motivos están en `site.ts`
  (`individualConcerns`) — Cintia puede añadir o quitar; **conviene que los revise**.
- **Formulario de cita en 3 pasos** (`/contacto`) — datos → tipo/modalidad → mensaje
  + consentimiento. Sigue enviando por Web3Forms (recoge todos los campos aunque
  estén en pasos distintos) y mantiene el aviso RGPD y el fallback sin clave.

---

## 🔴 Bloqueantes — no se puede publicar sin esto

### 1. Dominio sin confirmar
`https://cintiabarranco.es` es un **marcador**, no un dominio comprobado. Está en dos sitios:
`src/data/site.ts` (`site.url`) y `astro.config.mjs` (`site`). Todo lo demás —canonical,
hreflang, sitemap, JSON-LD, textos legales— deriva de ahí, así que cambiarlo es una edición
de dos líneas. Pero hasta que no se sepa el dominio real, el sitemap y los canonical apuntan
a un sitio que puede no existir.

### 2. Datos legales obligatorios que faltan
El aviso legal y la política de privacidad **no son compatibles con la LSSI** hasta rellenarlos.
Aparecen en la página como etiquetas rojas `[PENDIENTE: …]`, imposibles de pasar por alto:

| Dato | Dónde | Por qué es obligatorio |
|---|---|---|
| NIF de Cintia | aviso legal, privacidad | LSSI art. 10.1.a) |
| Número de colegiada | aviso legal, privacidad | LSSI art. 10.1.d) — profesión regulada |
| Colegio Oficial de Psicología (sede exacta) | aviso legal, privacidad | LSSI art. 10.1.d) |
| Registro sanitario de la consulta (Junta de Andalucía) | aviso legal | Si atiende en consulta propia |
| Proveedor de alojamiento | privacidad | Encargado del tratamiento, art. 28 RGPD |

**Todo esto hay que pedírselo a Cintia.** No hemos inventado ninguno.

### 3. Web3Forms — clave y contrato
- La clave va en Cloudflare Pages como variable de entorno `PUBLIC_WEB3FORMS_KEY`. **No se
  commitea.** Sin ella el formulario no se renderiza: en su lugar sale un panel con WhatsApp,
  email y teléfono, para que ningún mensaje de una paciente se pierda en silencio.
- Riesgo real: Web3Forms procesa datos en EE. UU. y **no hay contrato de encargado del
  tratamiento firmado** (art. 28 RGPD), ni hemos podido verificar su adhesión al marco
  UE-EE. UU. Su página de privacidad devuelve 403. En un formulario donde la gente cuenta por
  qué necesita terapia, esto es lo más delicado del sitio. Alternativa si preocupa: un
  endpoint propio en Cloudflare Workers que envíe por email, sin terceros.

---

## 🟡 Decisiones tomadas — conviene revisarlas

### Las cifras del diseño están fuera (y son de ella)
El prototipo mostraba «100+ pacientes acompañados», «95% clientes satisfechos», «5+ años de
experiencia» y una insignia «Nº Col.» sin número. Se decidió quitarlas por no ser verificables.

**Dato importante que apareció después: no las inventó el diseño — están hoy en su web de
Framer.** Son afirmaciones de la propia Cintia. Si las confirma, se restauran en una edición;
si no, se quedan fuera. La insignia «Nº Col.» sí necesita el número real para volver.

También se ha quitado «he acompañado a cientos de personas» de dos párrafos, por lo mismo.

### Contradicción de titulación, resuelta
El diseño decía «Máster en Psicología Clínica» en la home y «Máster en Psicología General
Sanitaria» en Sobre mí. Se ha unificado en **Psicología General Sanitaria**, que es la
titulación que habilita el título de PGS que ella usa. **Confirmar con Cintia.**

### Las cuatro páginas de servicio se conservan
El diseño colapsaba las cuatro terapias en anclas de `/servicios`. La web de Framer tiene
cuatro URLs propias que ya posicionan para «terapia X en Granada» —la búsqueda de más
intención que tiene esta consulta—. Se han mantenido **exactamente en las mismas rutas**:

```
/servicios/terapia-individual-en-granada
/servicios/terapia-de-parejas-en-granada
/servicios/terapia-infantil-en-granada
/servicios/terapia-familiar
```

`/servicios` sigue mostrando los cuatro bloques, así que el diseño no cambia.

### Newsletter → Instagram
El diseño tenía un formulario de suscripción. No hay proveedor de email detrás, y una caja
que se traga direcciones es peor que ninguna (además recoge datos personales sin dónde
guardarlos legalmente). Se ha sustituido por un CTA a Instagram + pedir cita. Si algún día
hay Mailchimp/Brevo, se recupera el formulario.

### Sin banner de cookies, a propósito
Dos cambios sobre el diseño original para que el sitio **no instale ninguna cookie**:
- **Tipografías autoalojadas** (`scripts/fonts.mjs` → `/assets/fonts`). Cargarlas de Google
  enviaba la IP de cada visitante a un tercero antes de consentir nada.
- **Mapa con clic previo.** El iframe de Google Maps ya no se carga solo; hay un recuadro con
  la dirección y un botón. Ese clic es el consentimiento, solo para esa finalidad. Incrustarlo
  directamente era una infracción del art. 22.2 LSSI desde el minuto uno.

Resultado: cero peticiones externas al cargar cualquier página. Verificado.
**Si algún día se añade analítica o un píxel, esto deja de ser cierto y hará falta un
mecanismo de consentimiento con aceptar/rechazar al mismo nivel.**

---

## 🟢 Blog

- Colección `blog` + Sveltia en `/admin`. Los tres sitios que deben coincidir
  (`src/content.config.ts`, los `.md`, `public/admin/config.yml`) están sincronizados.
- **Los cuatro «artículos» de la web de Framer están vacíos** — son fichas con título y
  descripción, sin cuerpo. No había nada que migrar.
- Hay **un artículo escrito**: `cuando-ir-al-psicologo.md`. Sin estadísticas inventadas, sin
  afirmaciones diagnósticas, con los teléfonos 024 y 112 verificados contra el Ministerio de
  Sanidad, y con aviso de que no sustituye a la terapia.
  **Necesita el visto bueno de Cintia antes del cambio de DNS** — va firmado con su nombre y
  la responsabilidad deontológica es suya. Los otros tres se escriben en cuanto lo diga.
- Detalle de estilo: el artículo y la web usan femenino al dirigirse a la lectora
  («acompañada», «juntas»), siguiendo el tono del propio diseño. Si Cintia lo quiere neutro,
  son tres palabras.

---

## Checklist de lanzamiento

- [ ] Confirmar el dominio y actualizarlo en `site.ts` + `astro.config.mjs`
- [ ] Pedir a Cintia: NIF, nº de colegiada, Colegio, registro sanitario
- [ ] Confirmar (o retirar) las cifras 100+ / 95% / 5+ años y el nº de colegiada de la insignia
- [ ] Confirmar la titulación del máster
- [ ] Clave de Web3Forms → variable `PUBLIC_WEB3FORMS_KEY` en Cloudflare Pages
- [ ] Firmar el contrato de encargado con Web3Forms, o cambiar de solución
- [ ] Que Cintia lea y apruebe el artículo del blog
- [ ] Conectar el repo a Cloudflare Pages (build: `npm run build`, output: `dist`)
- [ ] Comprobar que `/admin` entra (worker `sveltia-cms-auth`, repo `getkitcat/cintiabarranco`)
- [ ] Cambio de DNS desde Framer
- [ ] Enviar `sitemap-index.xml` en Google Search Console
- [ ] Portada social propia (`/assets/og-cover.jpg` es un recorte de una foto)

---

## Notas técnicas

- **Imágenes**: los originales pesaban 52 MB en total. `scripts/optimize-images.mjs` genera
  WebP a 640/1000/1600 + JPEG de respaldo → 1,9 MB. Reejecutar solo si cambian las fotos.
- **Móvil**: el prototipo era solo escritorio (todo dentro de un `min-width: 1100px`). Los
  layouts responsive son nuevos; el aspecto en escritorio es el del diseño.
- **Movimiento reducido**: la cortina de entrada no se muestra y las revelaciones aparecen ya
  visibles si el sistema pide menos animación (el Windows de Sage lo pide).
- **Redirecciones**: `public/_redirects`. Solo mueven los slugs antiguos del blog; todas las
  demás rutas se conservan tal cual.
