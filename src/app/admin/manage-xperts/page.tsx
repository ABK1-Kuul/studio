
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { mockProfessionals } from '@/data/mock';
import type { Professional } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Eye, Edit, Trash2, UserPlus } from 'lucide-react';
import { StyledXperts } from '@/components/layout/StyledXperts';

async function getAllProfessionals(): Promise<Professional[]> {
  // In a real app, fetch from a database
  return mockProfessionals;
}

export default async function ManageXpertsPage() {
  const user = await getCurrentUser();

  if (!user || user.role !== 'admin') {
    redirect('/login');
  }

  const professionals = await getAllProfessionals();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manage <StyledXperts /></h1>
          <p className="text-muted-foreground">View, edit, or manage professional profiles on the platform.</p>
        </div>
        <Button asChild>
          <Link href="#"> {/* TODO: Link to a "Create Xpert" page if needed */}
            <UserPlus className="mr-2 h-4 w-4" /> Add New <StyledXperts />
          </Link>
        </Button>
      </div>

      {professionals.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">No <StyledXperts /> found on the platform yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionals.map((prof) => (
            <Card key={prof.id} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <CardHeader className="flex flex-row items-start gap-4 p-4">
                <Avatar className="h-16 w-16 border">
                  <AvatarImage src={prof.avatarUrl || `https://picsum.photos/seed/${prof.id}/80`} alt={prof.name} />
                  <AvatarFallback>{prof.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{prof.name}</CardTitle>
                  <CardDescription className="text-xs">{prof.email}</CardDescription>
                  <CardDescription className="text-xs mt-1">{prof.industry}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <div className="flex flex-wrap gap-1 mb-2">
                  {prof.expertise.slice(0, 3).map(exp => (
                    <Badge key={exp} variant="secondary" className="text-xs">{exp}</Badge>
                  ))}
                  {prof.expertise.length > 3 && <Badge variant="secondary" className="text-xs">+{prof.expertise.length - 3} more</Badge>}
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {prof.bio}
                </p>
              </CardContent>
              <CardFooter className="p-4 border-t flex flex-col sm:flex-row gap-2 justify-end">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/professionals/${prof.id}`} target="_blank">
                    <Eye className="mr-1.5 h-3 w-3" /> View Public
                  </Link>
                </Button>
                <Button variant="secondary" size="sm" disabled> {/* Placeholder */}
                  <Edit className="mr-1.5 h-3 w-3" /> Edit
                </Button>
                <Button variant="destructive" size="sm" disabled> {/* Placeholder */}
                  <Trash2 className="mr-1.5 h-3 w-3" /> Remove
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
