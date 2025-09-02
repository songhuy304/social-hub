import { z } from "zod";

export const filterSchema = z.object({
  communities: z.string().optional(),
  tags: z.string().optional(),
  topics: z.string().optional(),
  creator: z.string().optional(),
});

export type FilterFormData = z.infer<typeof filterSchema>;
