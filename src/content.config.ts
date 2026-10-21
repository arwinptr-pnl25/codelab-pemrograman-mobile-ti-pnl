import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const praktikum = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/praktikum",
  }),
  schema: z.object({
    title: z.string(),
    pertemuan: z.number(),
    deskripsi: z.string(),
    subCpmk: z.array(z.string()).default([]),
  }),
});

export const collections = { praktikum };
