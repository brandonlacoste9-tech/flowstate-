import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  projectType: z.enum(["launch", "growth", "custom", "other"]),
  budget: z.enum(["u3", "3to6", "6to12", "12p", "tbd"]),
  message: z.string().trim().min(10).max(5000),
  locale: z.enum(["en", "fr"]).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
