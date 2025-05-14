
"use server";

import { z } from "zod";
import { getCurrentUser } from "@/lib/auth";
import { mockQuoteRequests } from "@/data/mock"; // For demo, we'll "add" to this mock array
import type { QuoteRequest } from "@/lib/types";

const quoteRequestSchema = z.object({
  professionalId: z.string().min(1, "Professional ID is required."),
  professionalName: z.string().min(1, "Professional name is required."),
  userName: z.string().min(1, "Your name is required."),
  userEmail: z.string().email("A valid email is required."),
  companyName: z.string().optional(),
  projectDescription: z.string().min(10, "Project description must be at least 10 characters."),
  companySize: z.string().min(1, "Company size is required."), // Added
  timeline: z.string().optional(),
});

export async function submitQuoteRequestAction(prevState: any, formData: FormData) {
  const user = await getCurrentUser(); // Optional: Check if user is logged in to prefill info

  const validatedFields = quoteRequestSchema.safeParse({
    professionalId: formData.get("professionalId"),
    professionalName: formData.get("professionalName"),
    userName: formData.get("userName"),
    userEmail: formData.get("userEmail"),
    companyName: formData.get("companyName"),
    projectDescription: formData.get("projectDescription"),
    companySize: formData.get("companySize"), // Changed from budget
    timeline: formData.get("timeline"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
    };
  }

  const data = validatedFields.data;

  // Simulate saving the quote request
  const newQuote: QuoteRequest = {
    id: `q${mockQuoteRequests.length + 1}`, // Simple ID generation
    ...data,
    status: "pending",
    submittedAt: new Date().toISOString(),
  };
  
  mockQuoteRequests.push(newQuote); // In a real app, save to DB
  console.log("New Quote Request Submitted:", newQuote);

  // In a real app, you might send an email notification to the admin here.

  return {
    message: "Quote request submitted successfully! The admin will review it shortly.",
    isSuccess: true,
    errors: null,
    quoteId: newQuote.id, // Optionally return the ID
  };
}
