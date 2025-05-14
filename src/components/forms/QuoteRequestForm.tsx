
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitQuoteRequestAction } from "@/app/actions/quoteActions";
import { Loader2 } from "lucide-react";
import { useActionState, useEffect } from "react"; 
import { useToast } from "@/hooks/use-toast";
import type { MockUser } from "@/lib/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const companySizeIntervals = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
  "Just Me (Solopreneur)",
  "Not Applicable"
];

const formSchema = z.object({
  professionalId: z.string(),
  professionalName: z.string(),
  userName: z.string().min(2, { message: "Your name must be at least 2 characters." }),
  userEmail: z.string().email({ message: "Please enter a valid email address." }),
  companyName: z.string().optional(),
  projectDescription: z.string().min(20, { message: "Project description must be at least 20 characters." }),
  companySize: z.string().min(1, { message: "Please select your company size." }), // Added
  timeline: z.string().optional(),
});

type QuoteRequestFormValues = z.infer<typeof formSchema>;

const initialState = { message: null, errors: null, isSuccess: false, quoteId: null };

interface QuoteRequestFormProps {
  professionalId: string;
  professionalName: string;
  serviceId?: string;
  serviceName?: string;
  currentUser?: MockUser | null;
}

export function QuoteRequestForm({ professionalId, professionalName, serviceId, serviceName, currentUser }: QuoteRequestFormProps) {
  const { toast } = useToast();
  const [state, formAction, isPending] = useActionState(submitQuoteRequestAction, initialState);

  const form = useForm<QuoteRequestFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      professionalId: professionalId,
      professionalName: professionalName,
      userName: currentUser?.name || "",
      userEmail: currentUser?.email || "",
      companyName: "",
      projectDescription: serviceName ? `Enquiry about service: ${serviceName}\n\n` : "",
      companySize: "", // Default to empty
      timeline: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.isSuccess ? "Success!" : "Error",
        description: state.message,
        variant: state.isSuccess ? "default" : "destructive",
      });
    }
    if (state.isSuccess) {
        form.reset(); // Reset form on successful submission
    }
  }, [state, toast, form]);
  
  function onSubmit(values: QuoteRequestFormValues) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            formData.append(key, String(value));
        }
    });
    // Optionally add serviceId and serviceName if present
    if (serviceId) formData.append('serviceId', serviceId);
    if (serviceName) formData.append('serviceName', serviceName);
    
    formAction(formData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Hidden fields for professionalId and professionalName */}
        <input type="hidden" {...form.register("professionalId")} />
        <input type="hidden" {...form.register("professionalName")} />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField control={form.control} name="userName" render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField control={form.control} name="userEmail" render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email</FormLabel>
                <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <FormField control={form.control} name="companyName" render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name (Optional)</FormLabel>
              <FormControl><Input placeholder="Your Company Inc." {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
            control={form.control}
            name="companySize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Size</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {companySizeIntervals.map(interval => (
                      <SelectItem key={interval} value={interval}>
                        {interval}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>


        <FormField control={form.control} name="projectDescription" render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl><Textarea placeholder="Describe your project requirements, goals, and any specific details..." {...field} rows={6} /></FormControl>
              <FormDescription>
                Be as detailed as possible. {serviceName ? `You are requesting a quote for the service: ${serviceName}.` : ""}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField control={form.control} name="timeline" render={({ field }) => (
            <FormItem>
              <FormLabel>Expected Timeline (Optional)</FormLabel>
              <FormControl><Input placeholder="e.g., 2 weeks, 3 months, Flexible" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full md:w-auto" disabled={isPending}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit Quote Request
        </Button>

        {state.errors && typeof state.errors === 'object' && (
          <div className="mt-4 text-sm text-destructive">
            <p>{typeof state.message === 'string' ? state.message : "An error occurred"}</p>
            <ul>
              {Object.entries(state.errors).map(([key, fieldErrors]) => (
                fieldErrors && (fieldErrors as string[]).map((errorMsg: string) => (
                  <li key={`${key}-${errorMsg}`}>{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${errorMsg}`}</li>
                ))
              ))}
            </ul>
          </div>
        )}
      </form>
    </Form>
  );
}
