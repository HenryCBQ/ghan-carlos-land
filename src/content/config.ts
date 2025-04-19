import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            author: z.string(),
            description: z.string(),
            image: image(),
            pubDate: z.date()
        })
});

export const collections = { 
    blog: blogCollection
};