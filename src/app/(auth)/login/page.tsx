import { LoginForm } from '@/components/auth/LoginForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AppLogo } from '@/components/layout/AppLogo';
import Link from 'next/link';

export default function LoginPage({ searchParams }: { searchParams?: { error?: string }}) {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center py-12">
      <div className="mb-8">
        <AppLogo />
      </div>
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome Back!</CardTitle>
          <CardDescription>Log in to access your HDM ProConnect account.</CardDescription>
        </CardHeader>
        <CardContent>
          {searchParams?.error && (
            <p className="mb-4 text-center text-sm text-destructive">
              Login failed. Please check your credentials.
            </p>
          )}
          <LoginForm />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{' '}
            <Button variant="link" asChild className="p-0 h-auto">
              <Link href="/signup">Sign up</Link>
            </Button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
