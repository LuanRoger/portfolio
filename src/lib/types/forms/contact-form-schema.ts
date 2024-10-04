import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(3).max(50),
    email: z.string().email(),
    message: z.string().min(10).max(500),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
