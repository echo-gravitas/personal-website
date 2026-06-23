import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      summary: z.string().optional(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      topic: z.enum([
        'cyber-security',
        'datenschutz',
        'security-research',
        'ki',
      ]),
      tags: z.array(z.string()),
      image: z.union([z.url(), image()]).optional(),
      imageAlt: z.string().optional(),
      sources: z
        .array(
          z.object({
            title: z.string(),
            url: z.url(),
          }),
        )
        .optional(),
    }),
});

export const collections = { blog };
