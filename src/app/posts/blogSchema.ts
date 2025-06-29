import { z } from "zod/v4";

export const blogSchema = z.object({
  title: z.string(),
  date: z.string(),
  pathSegment: z.string(),
});
