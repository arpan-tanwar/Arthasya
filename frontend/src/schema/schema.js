import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  comment: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});
