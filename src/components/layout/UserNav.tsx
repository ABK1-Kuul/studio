import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCurrentUser, logoutAction } from '@/lib/auth';
import type { MockUser } from '@/lib/types';
import { LogOut, User, LayoutDashboard, Briefcase, FolderKanban } from 'lucide-react';

export async function UserNav() {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button asChild variant="outline">
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            {/* In a real app, user.avatarUrl would be used */}
            <AvatarImage src={`https://picsum.photos/seed/${user.id}/40/40`} alt={user.name} data-ai-hint="user avatar" />
            <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {user.role === 'admin' && (
            <DropdownMenuItem asChild>
              <Link href="/admin/dashboard">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Admin Dashboard</span>
              </Link>
            </DropdownMenuItem>
          )}
          {user.role === 'admin' && (
            <DropdownMenuItem asChild>
              <Link href="/admin/quotes">
                <FolderKanban className="mr-2 h-4 w-4" />
                <span>View Quotes</span>
              </Link>
            </DropdownMenuItem>
          )}
          {user.role === 'professional' && (
            <DropdownMenuItem asChild>
              <Link href="/professional/dashboard">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>My Dashboard</span>
              </Link>
            </DropdownMenuItem>
          )}
          {user.role === 'professional' && (
            <DropdownMenuItem asChild>
              <Link href="/professional/profile">
                <User className="mr-2 h-4 w-4" />
                <span>Manage Profile</span>
              </Link>
            </DropdownMenuItem>
          )}
           <DropdownMenuItem asChild>
              <Link href="/professionals">
                <Briefcase className="mr-2 h-4 w-4" />
                <span>Find Professionals</span>
              </Link>
            </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <form action={logoutAction} className="w-full">
          <DropdownMenuItem asChild>
            <button type="submit" className="w-full text-left cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
