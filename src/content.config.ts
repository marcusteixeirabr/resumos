import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const disciplineSchema = z.object({
  title:    z.string(),
  subtitle: z.string(),
  ua:       z.number(),
  group:    z.string(),
});

export const collections = {
  'software-design': defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/software-design' }),
    schema: disciplineSchema,
  }),
  'responsive-web': defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/responsive-web' }),
    schema: disciplineSchema,
  }),
};
