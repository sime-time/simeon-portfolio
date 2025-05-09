import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(1, { message: "You must include your name." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  workType: z.string().min(1, { message: "Please select the type of development work you want completed." }).optional(),
  message: z.string().min(1, { message: "You must include a message." }),
});

export type ContactType = z.infer<typeof ContactSchema>;
