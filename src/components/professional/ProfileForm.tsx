
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Professional, PortfolioItem, Service, ServiceCategory } from "@/lib/types";
import { updateProfessionalProfileAction } from "@/actions/profileActions";
import { Loader2, PlusCircle, Trash2 } from "lucide-react";
import { useActionState, useEffect } from "react"; 
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const portfolioItemSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  imageUrl: z.string().url("Must be a valid URL for image").optional().or(z.literal('')),
  projectUrl: z.string().url("Must be a valid URL for project").optional().or(z.literal('')),
});

const serviceSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Service name is required"),
  description: z.string().min(1, "Service description is required"),
  price: z.string().optional(),
  category: z.enum(['Consultation', 'Research', 'Training'], {
    required_error: "Service category is required.",
  }),
});

const profileFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  industry: z.string().min(1, "Industry is required."),
  expertise: z.string().min(1, "Expertise tags are required (comma-separated)."),
  bio: z.string().min(20, "Bio must be at least 20 characters long."),
  experienceYears: z.coerce.number().min(0, "Experience years cannot be negative."),
  location: z.string().optional(),
  phone: z.string().optional(),
  portfolioItems: z.array(portfolioItemSchema).optional(),
  servicesOffered: z.array(serviceSchema).optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const initialState = { message: null, errors: null, isSuccess: false };
const serviceCategories: ServiceCategory[] = ['Consultation', 'Research', 'Training'];

export function ProfileForm({ professional }: { professional: Professional }) {
  const { toast } = useToast();
  const [state, formAction, isPending] = useActionState(updateProfessionalProfileAction, initialState);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: professional.name || "",
      industry: professional.industry || "",
      expertise: professional.expertise?.join(", ") || "",
      bio: professional.bio || "",
      experienceYears: professional.experienceYears || 0,
      location: professional.location || "",
      phone: professional.phone || "",
      portfolioItems: professional.portfolio || [],
      servicesOffered: professional.servicesOffered?.map(s => ({...s, category: s.category || 'Consultation'})) || [],
    },
  });

  const { fields: portfolioFields, append: appendPortfolio, remove: removePortfolio } = useFieldArray({
    control: form.control,
    name: "portfolioItems",
  });

  const { fields: serviceFields, append: appendService, remove: removeService } = useFieldArray({
    control: form.control,
    name: "servicesOffered",
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.isSuccess ? "Success!" : "Error",
        description: state.message,
        variant: state.isSuccess ? "default" : "destructive",
      });
    }
  }, [state, toast, form]);

  function onSubmit(values: ProfileFormValues) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key === "portfolioItems" || key === "servicesOffered") {
        formData.append(`${key}Json`, JSON.stringify(value)); 
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });
    formAction(formData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader><CardTitle>Basic Information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control} name="industry" render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl><Input placeholder="e.g., FinTech, AgriTech, Tourism" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control} name="expertise" render={({ field }) => (
                <FormItem>
                  <FormLabel>Expertise / Skills</FormLabel>
                  <FormControl><Input placeholder="e.g., Java, Project Management, Digital Marketing (comma-separated)" {...field} /></FormControl>
                  <FormDescription>Separate skills with a comma.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control} name="bio" render={({ field }) => (
                <FormItem>
                  <FormLabel>Biography</FormLabel>
                  <FormControl><Textarea placeholder="Tell us about your professional journey and skills..." {...field} rows={5} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Details & Contact</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField control={form.control} name="experienceYears" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience</FormLabel>
                    <FormControl><Input type="number" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Optional - for admin use)</FormLabel>
                  <FormControl><Input type="tel" placeholder="e.g., +251 91 234 5678" {...field} /></FormControl>
                  <FormDescription>This will not be shown publicly.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <FormField control={form.control} name="location" render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl><Input placeholder="e.g., Addis Ababa, Bahir Dar or Remote" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Portfolio</CardTitle>
            <Button type="button" variant="outline" size="sm" onClick={() => appendPortfolio({ title: "", description: "", imageUrl: "", projectUrl: "" })}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add Portfolio Item
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {portfolioFields.map((item, index) => (
              <div key={item.id} className="p-4 border rounded-md space-y-3 relative">
                <FormField control={form.control} name={`portfolioItems.${index}.title`} render={({ field }) => (
                  <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} 
                />
                <FormField control={form.control} name={`portfolioItems.${index}.description`} render={({ field }) => (
                  <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} rows={3} /></FormControl><FormMessage /></FormItem>)}
                />
                <FormField control={form.control} name={`portfolioItems.${index}.imageUrl`} render={({ field }) => (
                  <FormItem><FormLabel>Image URL (Optional)</FormLabel><FormControl><Input type="url" placeholder="https://example.com/image.jpg" {...field} /></FormControl><FormMessage /></FormItem>)}
                />
                <FormField control={form.control} name={`portfolioItems.${index}.projectUrl`} render={({ field }) => (
                  <FormItem><FormLabel>Project URL (Optional)</FormLabel><FormControl><Input type="url" placeholder="https://example.com/project" {...field} /></FormControl><FormMessage /></FormItem>)}
                />
                <Button type="button" variant="destructive" size="sm" onClick={() => removePortfolio(index)} className="absolute top-2 right-2">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
             {portfolioFields.length === 0 && <p className="text-sm text-muted-foreground">No portfolio items yet. Add some to showcase your work!</p>}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Services Offered</CardTitle>
            <Button type="button" variant="outline" size="sm" onClick={() => appendService({ name: "", description: "", price: "", category: "Consultation" })}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add Service
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {serviceFields.map((item, index) => (
              <div key={item.id} className="p-4 border rounded-md space-y-3 relative">
                <FormField control={form.control} name={`servicesOffered.${index}.name`} render={({ field }) => (
                  <FormItem><FormLabel>Service Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)}
                />
                <FormField control={form.control} name={`servicesOffered.${index}.description`} render={({ field }) => (
                  <FormItem><FormLabel>Service Description</FormLabel><FormControl><Textarea {...field} rows={2} /></FormControl><FormMessage /></FormItem>)}
                />
                <FormField
                  control={form.control}
                  name={`servicesOffered.${index}.category`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {serviceCategories.map(cat => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField control={form.control} name={`servicesOffered.${index}.price`} render={({ field }) => (
                  <FormItem><FormLabel>Price Indication (Optional)</FormLabel><FormControl><Input placeholder="e.g., Project-based, From 10,000 ETB" {...field} /></FormControl><FormDescription>General pricing idea, admin will confirm final quote.</FormDescription><FormMessage /></FormItem>)}
                />
                 <Button type="button" variant="destructive" size="sm" onClick={() => removeService(index)} className="absolute top-2 right-2">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {serviceFields.length === 0 && <p className="text-sm text-muted-foreground">No services listed yet. Add services you offer.</p>}
          </CardContent>
        </Card>

        <Button type="submit" className="w-full md:w-auto" disabled={isPending}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save Changes
        </Button>
        {state.errors && (
          <div className="mt-4 text-sm text-destructive">
            <p>{typeof state.message === 'string' ? state.message : "An error occurred"}</p>
            {/* <pre>{JSON.stringify(state.errors, null, 2)}</pre> */}
          </div>
        )}
      </form>
    </Form>
  );
}
