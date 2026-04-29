import { defineCollection, z } from 'astro:content';

const clasesInfo = defineCollection({
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    locked: z.boolean(),
    date: z.string(),
  }),
});



const hiragana = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      subTitle: z.string(),
      info: z.string().optional(),
      kana: z.array(
        z.object({
          kana: z.string(),
          romaji: z.string(),
          isException: z.boolean().optional(),
        })
      ),
    })
  ),
});


const katakana = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      subTitle: z.string(),
      info: z.string().optional(),
      kana: z.array(
        z.object({
          kana: z.string(),
          romaji: z.string(),
          isException: z.boolean().optional(),
        })
      ),
    })
  ),
});


export const collections = {
  clasesInfo,
  katakana,
  hiragana
};