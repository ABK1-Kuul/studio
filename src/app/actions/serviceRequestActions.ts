
"use server";

import { z } from "zod";
import { getCurrentUser } from "@/lib/auth";
import { mockServiceRequests } from "@/data/mock"; 
import type { ServiceRequest } from "@/lib/types";
import nodemailer from "nodemailer";
import { format } from "date-fns";

const serviceRequestSchema = z.object({
  professionalId: z.string().min(1, "Professional ID is required."),
  professionalName: z.string().min(1, "Professional name is required."),
  userName: z.string().min(1, "Your name is required."),
  userEmail: z.string().email("A valid email is required."),
  userPhone: z.string().min(1, "Phone number is required."), // Changed from optional
  companyName: z.string().optional(),
  projectDescription: z.string().min(10, "Project description must be at least 10 characters."),
  companySize: z.string().min(1, "Company size is required."),
  timeline: z.string().optional(),
  serviceName: z.string().optional(), 
});

export type ServiceRequestFormErrors = z.inferFlattenedErrors<typeof serviceRequestSchema>['fieldErrors'];

export type SubmitServiceRequestActionState = {
  message: string | null;
  errors: ServiceRequestFormErrors | null;
  isSuccess: boolean;
  serviceRequestId: string | null; 
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.example.com", 
  port: parseInt(process.env.SMTP_PORT || "587"), 
  secure: (process.env.SMTP_SECURE === 'true'), 
  auth: {
    user: process.env.SMTP_USER || "user@example.com", 
    pass: process.env.SMTP_PASS || "password", 
  },
});

export async function submitServiceRequestAction(
  prevState: SubmitServiceRequestActionState, 
  formData: FormData
): Promise<SubmitServiceRequestActionState> {
  const user = await getCurrentUser(); 

  const validatedFields = serviceRequestSchema.safeParse({
    professionalId: formData.get("professionalId"),
    professionalName: formData.get("professionalName"),
    userName: formData.get("userName"),
    userEmail: formData.get("userEmail"),
    userPhone: formData.get("userPhone"), 
    companyName: formData.get("companyName"),
    projectDescription: formData.get("projectDescription"),
    companySize: formData.get("companySize"),
    timeline: formData.get("timeline"),
    serviceName: formData.get("serviceName"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
      serviceRequestId: null, 
    };
  }

  const data = validatedFields.data;
  const submissionTime = new Date();

  const newServiceRequest: ServiceRequest = {
    id: `sr${mockServiceRequests.length + 1}_${submissionTime.getTime()}`, 
    ...data,
    userPhone: data.userPhone, // No longer needs to be conditionally undefined
    status: "pending",
    submittedAt: submissionTime.toISOString(),
  };
  
  mockServiceRequests.push(newServiceRequest); 
  console.log("New Service Request Submitted to mock data:", newServiceRequest);

  const emailRecipients = [
    "info@hdmxperts.com",
    "henokdoni@hdmxperts.com",
    "abk1kul@gmail.com"
  ];
  const emailSubject = `New Service Request: ${newServiceRequest.id} - For ${data.professionalName}`;
  const emailHtmlBody = `
    <h1>New Service Request Received</h1>
    <p>A new service request has been submitted on HDM Xperts.</p>
    <h2>Request Details:</h2>
    <ul>
      <li><strong>Request ID:</strong> ${newServiceRequest.id}</li>
      <li><strong>Submitted By:</strong> ${data.userName} (${data.userEmail})</li>
      <li><strong>Phone:</strong> ${data.userPhone}</li>
      <li><strong>For Xpert:</strong> ${data.professionalName}</li>
      ${data.serviceName ? `<li><strong>Specific Service:</strong> ${data.serviceName}</li>` : ''}
      ${data.companyName ? `<li><strong>Company Name:</strong> ${data.companyName}</li>` : ''}
      <li><strong>Company Size:</strong> ${data.companySize}</li>
      <li><strong>Project Description:</strong><br/><pre>${data.projectDescription}</pre></li>
      ${data.timeline ? `<li><strong>Expected Timeline:</strong> ${data.timeline}</li>` : ''}
      <li><strong>Submitted At:</strong> ${format(submissionTime, "MMM d, yyyy 'at' h:mm a")}</li>
    </ul>
    <p>Please log in to the admin dashboard to review and manage this request.</p>
  `;

  const mailOptions = {
    from: process.env.SMTP_FROM_EMAIL || `"HDM Xperts Platform" <servicerequest@hdmxperts.com>`,
    to: emailRecipients.join(", "), 
    subject: emailSubject, 
    html: emailHtmlBody, 
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email notification sent successfully. Message ID:", info.messageId);
    return {
      message: "Service request submitted successfully and notification sent! The admin will review it shortly.",
      isSuccess: true,
      errors: null,
      serviceRequestId: newServiceRequest.id, 
    };
  } catch (error) {
    console.error("Failed to send email notification:", error);
    return {
      message: "Service request submitted successfully, but there was an issue sending the email notification. The admin will still review your request.",
      isSuccess: true, 
      errors: null,
      serviceRequestId: newServiceRequest.id, 
    };
  }
}
