import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const beobachtungen = defineCollection({
  loader: glob({
    base: './src/content/beobachtungen',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string().optional(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    topic: z.enum(['cyber-security', 'datenschutz', 'security-research', 'ki']),
    tags: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    sources: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url(),
        }),
      )
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { beobachtungen };
