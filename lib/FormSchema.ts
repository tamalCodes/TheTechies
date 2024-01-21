import * as z from "zod";

export const formSchema = z.object({
  email: z.string().email("Please provide a valid email"),
  full_name: z
    .string()
    .min(5, "Name must be at least 5 characters long")
    .max(100),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100),
});

export const formSchemaSignIn = z.object({
  email: z.string().email("Please provide a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100),
});
