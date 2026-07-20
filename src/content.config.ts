import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * SOURCE OF TRUTH for the blog collection.
 * Any change here must land in the same edit as public/admin/config.yml,
 * or Cintia will either save data the build rejects or lose access to a field.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'Bienestar emocional',
      'Ansiedad y bienestar',
      'Terapia infantil',
      'Relaciones y pareja',
    ]),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { blog };
