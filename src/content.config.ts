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
    startDate: z.string(), // YYYY-MM
    endDate: z.string().optional(), // YYYY-MM, undefined = present
    location: z.string(),
    type: z.enum(['contract', 'freelance', 'fulltime', 'workstudy']),
    tech: z.array(z.string()),
    highlights: z.array(z.string()),
    lang: z.enum(['en', 'fr']),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    urlSlug: z.string(),
    title: z.string(),
    client: z.string(),
    period: z.string().optional(),
    description: z.string(),
    tech: z.array(z.string()),
    metrics: z.array(z.string()),
    tag: z.string().optional(),
    order: z.number(),
    lang: z.enum(['en', 'fr']),
    // Detail page fields
    context: z.string(),
    solution: z.string(),
    role: z.string(),
    architecture: z.string(),
    results: z.array(z.string()),
  }),
});

export const collections = { experience, projects };
