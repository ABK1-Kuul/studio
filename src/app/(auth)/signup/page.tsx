
import { SignupForm } from '@/components/auth/SignupForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AppLogo } from '@/components/layout/AppLogo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SignupPage({ searchParams }: { searchParams?: { error?: string }}) {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center py-12">
      <div className="mb-8">
         <AppLogo />
      </div>
      <Card className="w-full max-w-lg shadow-xl"> {/* Increased max-w for more fields */}
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create Your Professional Profile</CardTitle>
          <CardDescription>
            Join HDM Xperts by providing your details to showcase your expertise and connect with opportunities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {searchParams?.error === "email_exists" && (
            <p className="mb-4 text-center text-sm text-destructive">
              An account with this email already exists. Please <Link href="/login" className="underline">log in</Link>.
            </p>
          )}
           {searchParams?.error === "missing_fields_server" && (
            <p className="mb-4 text-center text-sm text-destructive">
              Some required information was missing. Please fill out all fields.
            </p>
          )}
          <SignupForm />
           <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/login">Log in</Link>
            </Button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
