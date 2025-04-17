import { defineCollection, z } from "astro:content";

const BlogCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        pubDate: z.string(),
        bodyContent: z.string()
    })
});

export const collections = {
    blog: BlogCollection
};