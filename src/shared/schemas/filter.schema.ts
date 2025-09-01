import { z } from "zod";

export const filterSchema = z.object({
  contentTypes: z.array(z.enum(["post", "article", "series"])),
  communities: z.string().optional(),
  includeInnerGroups: z.boolean(),
  tags: z.string().optional(),
  topics: z.string().optional(),
  creator: z.string().optional(),
  datePosted: z.enum(["today", "yesterday"]).optional(),
});

export type FilterFormData = z.infer<typeof filterSchema>;
