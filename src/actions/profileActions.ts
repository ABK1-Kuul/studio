"use server";

import { z } from "zod";
import { getCurrentUser } from "@/lib/auth";
import { mockProfessionals } from "@/data/mock"; // For demo, we'll "update" this mock array
import type { PortfolioItem, Professional, Service } from "@/lib/types";
import { revalidatePath } from "next/cache";

// Simplified schema for demo purposes
const portfolioItemSchema = z.object({
  id: z.string().optional(), // Existing items will have ID
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  imageUrl: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  projectUrl: z.string().url("Must be a valid URL").optional().or(z.literal('')),
});

const serviceSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Service name is required"),
  description: z.string().min(1, "Service description is required"),
  price: z.string().optional(), // Price for service (e.g. "Project-based", "$500") is kept
});

const profileFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  industry: z.string().min(1, "Industry is required."),
  expertise: z.string().min(1, "Expertise tags are required (comma-separated)."), // Will be split
  bio: z.string().min(20, "Bio must be at least 20 characters."),
  experienceYears: z.coerce.number().min(0, "Experience years cannot be negative."),
  location: z.string().optional(),
  // hourlyRate removed
  phone: z.string().optional(),
  portfolioItems: z.string().transform((str) => {
    try {
      return JSON.parse(str) as Partial<PortfolioItem>[];
    } catch (e) {
      return [];
    }
  }),
  servicesOffered: z.string().transform((str) => {
    try {
      return JSON.parse(str) as Partial<Service>[];
    } catch (e) {
      return [];
    }
  }),
});

export async function updateProfessionalProfileAction(prevState: any, formData: FormData) {
  const user = await getCurrentUser();
  if (!user || user.role !== "professional") {
    return {
      message: "Unauthorized: Only professionals can update their profile.",
      isSuccess: false,
      errors: null,
    };
  }

  const validatedFields = profileFormSchema.safeParse({
    name: formData.get("name"),
    industry: formData.get("industry"),
    expertise: formData.get("expertise"),
    bio: formData.get("bio"),
    experienceYears: formData.get("experienceYears"),
    location: formData.get("location"),
    // hourlyRate removed from formData parsing
    phone: formData.get("phone"),
    portfolioItems: formData.get("portfolioItemsJson"),
    servicesOffered: formData.get("servicesOfferedJson"),
  });
  
  if (!validatedFields.success) {
    console.log("Validation errors:", validatedFields.error.flatten().fieldErrors);
    return {
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
    };
  }

  const data = validatedFields.data;

  const professionalIndex = mockProfessionals.findIndex(p => p.email === user.email);
  if (professionalIndex === -1) {
    return {
      message: "Professional profile not found.",
      isSuccess: false,
      errors: null,
    };
  }

  const existingProfessional = mockProfessionals[professionalIndex];
  
  const updatedProfessional: Professional = {
    ...existingProfessional,
    name: data.name,
    industry: data.industry,
    expertise: data.expertise.split(',').map(e => e.trim()).filter(e => e),
    bio: data.bio,
    experienceYears: data.experienceYears,
    location: data.location || existingProfessional.location,
    // hourlyRate removed from update
    phone: data.phone || existingProfessional.phone,
    portfolio: data.portfolioItems.map((item, index) => ({
      id: item.id || `p_new_${Date.now()}_${index}`, 
      title: item.title!,
      description: item.description!,
      imageUrl: item.imageUrl || undefined,
      projectUrl: item.projectUrl || undefined,
    })),
    servicesOffered: data.servicesOffered.map((service, index) => ({
      id: service.id || `s_new_${Date.now()}_${index}`,
      name: service.name!,
      description: service.description!,
      price: service.price || undefined,
    })),
  };
  // Ensure hourlyRate is not accidentally re-added if it existed on existingProfessional
  delete updatedProfessional.hourlyRate;


  mockProfessionals[professionalIndex] = updatedProfessional;
  console.log("Professional Profile Updated:", updatedProfessional);

  revalidatePath(`/professional/profile`);
  revalidatePath(`/professionals/${user.id}`); 
  revalidatePath(`/professionals`);


  return {
    message: "Profile updated successfully!",
    isSuccess: true,
    errors: null,
  };
}
