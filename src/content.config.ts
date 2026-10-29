import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topic: z.enum(['Python', 'Web Development', 'JavaScript', 'AI & Machine Learning', 'Tools & Workflow', 'Computer Science']),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    tags: z
      .union([z.array(z.string()), z.string()])
      .transform((v) => (Array.isArray(v) ? v : v.split(',').map((t) => t.trim()).filter(Boolean)))
      .default([]),
    pubDate: z.coerce.date(),
    minutes: z.number().int().min(1).max(120).default(5),
  }),
});

export const collections = { articles };
