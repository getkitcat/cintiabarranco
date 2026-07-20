# cintiabarranco-web

Web de **Cintia Barranco González**, psicóloga general sanitaria en Granada.
Astro + Cloudflare Pages + Sveltia CMS. Español, una sola lengua.

> **Antes de tocar nada, lee [`NOTES.md`](./NOTES.md)** — ahí están los bloqueantes de
> lanzamiento, los datos legales que faltan y las decisiones que se apartan del diseño original.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # valida el esquema de contenido y genera dist/
```

`npm run build` antes de cada push: detecta errores de esquema y enlaces rotos que el
servidor de desarrollo se traga.

## Despliegue

Cloudflare Pages despliega solo con cada push a `main`. **El push es el despliegue.**

- Build command: `npm run build`
- Output directory: `dist`
- Variable de entorno: `PUBLIC_WEB3FORMS_KEY` (la clave del formulario; no se commitea)

## Contenido

Cintia edita el blog en `/admin` (Sveltia CMS, entra con GitHub). Cada vez que guarda,
commitea a `main` y Cloudflare redespliega.

Un campo del blog vive en **tres** sitios que deben coincidir siempre:

```
src/content.config.ts     ← el esquema Zod (manda; si algo no cuadra, el build falla)
src/content/blog/*.md     ← los artículos
public/admin/config.yml   ← lo que ve Cintia en el CMS
```

Cambiarlos en la misma edición, siempre. Si divergen, o Cintia no puede editar un campo, o
guarda algo que rompe el despliegue en producción.

## Estructura

```
src/
  components/   Head, Nav, Footer, Photo, Faq, ServiceBlock
  content/      blog/*.md
  data/         site.ts (datos reales de la consulta), schema.ts (JSON-LD)
  layouts/      Base.astro — cortina de entrada, reveal, botón de WhatsApp
  lib/          format.ts (fechas en español, tiempo de lectura)
  pages/        rutas
  styles/       global.css (tokens + sistema), fonts.css (generado)
public/
  admin/        Sveltia CMS
  assets/       photos/ (optimizadas), fonts/ (autoalojadas), logo, og-cover
  _redirects  llms.txt  robots.txt
scripts/
  optimize-images.mjs   fotos originales → WebP 640/1000/1600 + JPEG
  fonts.mjs             descarga y autoaloja Playfair Display + DM Sans
```

## Reglas del proyecto

- **Rutas heredadas**: las cuatro URLs `/servicios/*` vienen de la web de Framer y ya
  posicionan. No renombrarlas.
- **Nada de datos sin verificar**: cifras de pacientes, años de experiencia, número de
  colegiada. Si no está confirmado por Cintia, no se publica. Ella responde de lo que dice
  su web.
- **Cero terceros al cargar**: tipografías autoalojadas y mapa con clic previo. Añadir
  analítica o un píxel obliga a poner banner de cookies; hoy no hace falta.
