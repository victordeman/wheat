import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  organisation: z
    .string()
    .min(2, { message: "Organisation must be at least 2 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid official email address." }),
  pathway: z.enum(["millers", "msmes", "investors", "public"], {
    message: "Please select a valid stakeholder pathway.",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const pathwayRegistrationSchema = z.object({
  fullName: z.string().min(2),
  organisation: z.string().min(2),
  email: z.string().email(),
  pathway: z.enum(["millers", "msmes", "investors", "public"]),
  phone: z.string().optional(),
  details: z.string().optional(),
});

export type PathwayRegistrationData = z.infer<typeof pathwayRegistrationSchema>;
