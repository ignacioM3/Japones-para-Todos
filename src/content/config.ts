import { defineCollection, z} from 'astro:content';


const clasesInfo = defineCollection({
    schema: z.object({
        id: z.number(),
        title: z.string(),
        description: z.string()
    })
})

export const collections = {
    clasesInfo
}