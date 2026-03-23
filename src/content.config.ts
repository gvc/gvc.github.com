import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const logs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/logs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    severity: z.enum(['success', 'warning', 'critical', 'archive', 'info']).default('info'),
    tags: z.array(z.string()).default([]),
    icon: z.string().default('terminal'),
  }),
});

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiments' }),
  schema: z.object({
    title: z.string(),
    projectId: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    status: z.enum(['active', 'stable', 'critical', 'archived']).default('active'),
    icon: z.string().default('science'),
    stack: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    stats: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
    metadata: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
  }),
});

export const collections = { experiments, logs };
