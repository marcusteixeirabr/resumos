import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const disciplineSchema = z.object({
  title:    z.string(),
  subtitle: z.string(),
  ua:       z.number(),
  group:    z.string(),
});

const questionSchema = z.object({
  question: z.string(),
  options: z.array(z.string()).length(4),
  correctIndex: z.number().int().min(0).max(3),
  explanation: z.string().optional(),
});

const exerciseSchema = z.object({
  ua: z.number(),
  questions: z.array(questionSchema).length(10),
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
  'programming-data-persistence': defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/programming-data-persistence' }),
    schema: disciplineSchema,
  }),
  'database-design-for-apps': defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/database-design-for-apps' }),
    schema: disciplineSchema,
  }),
  'pensamento-computacional': defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/pensamento-computacional' }),
    schema: disciplineSchema,
  }),
  'engenharia-requisitos': defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/engenharia-requisitos' }),
    schema: disciplineSchema,
  }),
  'paradigmas-programacao': defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/paradigmas-programacao' }),
    schema: disciplineSchema,
  }),
  'engenharia-software': defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/engenharia-software' }),
    schema: disciplineSchema,
  }),
  'exercicios-paradigmas-programacao': defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/exercicios/paradigmas-programacao' }),
    schema: exerciseSchema,
  }),
  'exercicios-engenharia-software': defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/exercicios/engenharia-software' }),
    schema: exerciseSchema,
  }),
};
