import { QuoteRequestForm } from '@/components/forms/QuoteRequestForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getCurrentUser } from '@/lib/auth';
import { mockProfessionals } from '@/data/mock'; // To validate professional ID
import { redirect }
from 'next/navigation';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default async function QuotePage({
  searchParams,
}: {
  searchParams?: {
    professionalId?: string;
    professionalName?: string;
    serviceId?: string;
    serviceName?: string;
  };
}) {
  const currentUser = await getCurrentUser();
  const professionalId = searchParams?.professionalId;
  const professionalName = searchParams?.professionalName;
  const serviceId = searchParams?.serviceId;
  const serviceName = searchParams?.serviceName;

  if (!professionalId || !professionalName) {
    return (
       <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <Alert variant="destructive" className="max-w-lg">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Missing Information</AlertTitle>
          <AlertDescription>
            Professional details are missing. Please select a professional or service from the directory.
            <Link href="/professionals" className="font-bold underline ml-2">Go to Directory</Link>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  // Optional: Validate professionalId against mock data or a DB
  const professionalExists = mockProfessionals.some(p => p.id === professionalId);
  if (!professionalExists) {
     return (
       <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <Alert variant="destructive" className="max-w-lg">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Professional Not Found</AlertTitle>
          <AlertDescription>
            The selected professional could not be found.
            <Link href="/professionals" className="font-bold underline ml-2">Go to Directory</Link>
          </AlertDescription>
        </Alert>
      </div>
    );
  }


  return (
    <div className="max-w-3xl mx-auto py-8">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl">Request a Quote</CardTitle>
          <CardDescription>
            You are requesting a quote from <strong>{professionalName}</strong>.
            {serviceName && <> Specifically for the service: <strong>{serviceName}</strong>.</>}
            <br />
            Please provide details about your project or requirements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <QuoteRequestForm
            professionalId={professionalId}
            professionalName={professionalName}
            serviceId={serviceId}
            serviceName={serviceName}
            currentUser={currentUser}
          />
        </CardContent>
      </Card>
    </div>
  );
}
