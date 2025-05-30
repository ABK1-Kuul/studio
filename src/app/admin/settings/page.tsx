
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings as SettingsIcon } from 'lucide-react'; // Renamed to avoid conflict

export default async function PlatformSettingsPage() {
  const user = await getCurrentUser();

  if (!user || user.role !== 'admin') {
    redirect('/login');
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <SettingsIcon className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">Platform Settings</h1>
      </div>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Manage general configuration for the HDM Xperts platform.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Platform settings options will be available here. This section is currently under development.
          </p>
          {/* Placeholder for future settings forms */}
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Appearance & Theming</CardTitle>
          <CardDescription>Customize the look and feel of the platform.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Theme customization options will be available here.
          </p>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Integration Settings</CardTitle>
          <CardDescription>Manage integrations with third-party services.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Integration settings will appear here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
