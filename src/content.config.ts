import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sessions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sessions" }),
  schema: z.object({
    num: z.number(),
    title: z.string(),
    focus: z.string(),
    desc: z.string(),
  }),
});

export const collections = { sessions };
