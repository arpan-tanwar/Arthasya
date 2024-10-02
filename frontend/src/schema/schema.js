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

export const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});

export const signupSchema = z.object({
  fname: z.string().min(1, {
    message: "First name must be at least 1 character",
  }),
  lname: z.string().min(1, {
    message: "Last name must be at least 1 character",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});

export const profileInfoSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  bio: z.string().min(5, {
    message: "Bio must be at least 5 characters",
  }),
});
