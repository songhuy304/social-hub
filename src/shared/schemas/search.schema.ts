import { z } from "zod";

// Query must be non-empty and trimmed
export const searchSchema = z.object({
  query: z.string().trim().min(1, "Required field"),
});

export type SearchSchema = z.infer<typeof searchSchema>;
