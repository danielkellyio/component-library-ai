import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    components: defineCollection({
      type: "page",
      source: "components/*.md",
      schema: z.object({
        name: z.string(),
        description: z.string(),
      }),
    }),
  },
});
