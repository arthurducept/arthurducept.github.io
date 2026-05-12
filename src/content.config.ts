import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    employer: z.string().optional(),
    client: z.string().optional(),
    role: z.string(),
    period: z.string(),
    location: z.string(),
    type: z.enum(['contract', 'freelance', 'fulltime', 'workstudy']),
    tech: z.array(z.string()),
    highlights: z.array(z.string()),
    order: z.number(),
    lang: z.enum(['en', 'fr']),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    metrics: z.array(z.string()),
    tag: z.string().optional(),
    order: z.number(),
    lang: z.enum(['en', 'fr']),
  }),
});

export const collections = { experience, projects };
