
"use server";

import { z } from "zod";
import { getCurrentUser } from "@/lib/auth";
import { mockServiceRequests } from "@/data/mock"; // Changed from mockQuoteRequests
import type { ServiceRequest } from "@/lib/types"; // Changed from QuoteRequest

const quoteRequestSchema = z.object({
  professionalId: z.string().min(1, "Professional ID is required."),
  professionalName: z.string().min(1, "Professional name is required."),
  userName: z.string().min(1, "Your name is required."),
  userEmail: z.string().email("A valid email is required."),
  companyName: z.string().optional(),
  projectDescription: z.string().min(10, "Project description must be at least 10 characters."),
  companySize: z.string().min(1, "Company size is required."),
  timeline: z.string().optional(),
});

export async function submitQuoteRequestAction(prevState: any, formData: FormData) {
  const user = await getCurrentUser(); 

  const validatedFields = quoteRequestSchema.safeParse({
    professionalId: formData.get("professionalId"),
    professionalName: formData.get("professionalName"),
    userName: formData.get("userName"),
    userEmail: formData.get("userEmail"),
    companyName: formData.get("companyName"),
    projectDescription: formData.get("projectDescription"),
    companySize: formData.get("companySize"), 
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

  const newQuote: ServiceRequest = { // Changed type to ServiceRequest
    id: `q${mockServiceRequests.length + 1}`, // Changed to use mockServiceRequests
    ...data,
    status: "pending",
    submittedAt: new Date().toISOString(),
  };
  
  mockServiceRequests.push(newQuote); // Changed to use mockServiceRequests
  console.log("New Quote Request Submitted:", newQuote);

  return {
    message: "Quote request submitted successfully! The admin will review it shortly.",
    isSuccess: true,
    errors: null,
    quoteId: newQuote.id, 
  };
}
