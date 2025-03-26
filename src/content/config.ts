import { defineCollection, z} from 'astro:content';


const clasesInfo = defineCollection({
    schema: z.object({
        id: z.number(),
        title: z.string(),
        description: z.string()
    })
})

const clases = defineCollection({
    schema: z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        subtitle: z.string(),
        descriptionSubtitle: z.string()
    })
})

export const collections = {
    clasesInfo,
    clases
}