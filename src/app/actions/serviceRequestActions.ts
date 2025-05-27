
"use server";

import { z } from "zod";
import { getCurrentUser } from "@/lib/auth";
import { mockServiceRequests } from "@/data/mock"; 
import type { ServiceRequest } from "@/lib/types";

const serviceRequestSchema = z.object({
  professionalId: z.string().min(1, "Professional ID is required."),
  professionalName: z.string().min(1, "Professional name is required."),
  userName: z.string().min(1, "Your name is required."),
  userEmail: z.string().email("A valid email is required."),
  companyName: z.string().optional(),
  projectDescription: z.string().min(10, "Project description must be at least 10 characters."),
  companySize: z.string().min(1, "Company size is required."),
  timeline: z.string().optional(),
});

export async function submitServiceRequestAction(prevState: any, formData: FormData) {
  const user = await getCurrentUser(); 

  const validatedFields = serviceRequestSchema.safeParse({
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

  const newServiceRequest: ServiceRequest = {
    id: `sr${mockServiceRequests.length + 1}`, 
    ...data,
    status: "pending",
    submittedAt: new Date().toISOString(),
  };
  
  mockServiceRequests.push(newServiceRequest); 
  console.log("New Service Request Submitted:", newServiceRequest);

  // Simulate sending email notifications
  // In a real application, you would use an email service (e.g., SendGrid, Resend, Nodemailer) here.
  const emailRecipients = [
    "info@hdmxperts.com",
    "henokdoni@hdmxperts.com",
    "abk1kul@gmail.com"
  ];

  console.log("--------------------------------------------------");
  console.log("SIMULATING EMAIL NOTIFICATION:");
  console.log(`Service Request ID: ${newServiceRequest.id}`);
  console.log(`Submitted by: ${newServiceRequest.userName} (${newServiceRequest.userEmail})`);
  console.log(`For Xpert: ${newServiceRequest.professionalName}`);
  console.log("Project Description:", newServiceRequest.projectDescription);
  console.log("Intended email recipients:", emailRecipients.join(", "));
  console.log("To implement actual email sending, integrate an email service provider.");
  console.log("--------------------------------------------------");


  return {
    message: "Service request submitted successfully! The admin will review it shortly.",
    isSuccess: true,
    errors: null,
    serviceRequestId: newServiceRequest.id, 
  };
}

