import Link from 'next/link';
import { AppLogo } from './AppLogo';
import { UserNav } from './UserNav';
import { DarkModeToggle } from './DarkModeToggle';
import { Button } from '@/components/ui/button';
import { getCurrentUser } from '@/lib/auth';
import { Briefcase, FileText } from 'lucide-react';

export default async function Header() {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <AppLogo />
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link href="/professionals" className="text-foreground/70 hover:text-foreground transition-colors">
              <Button variant="ghost" className="gap-1.5">
                <Briefcase className="h-4 w-4" />
                Professionals
              </Button>
            </Link>
            {/* Example: Add a Blog link or other relevant navigation items here */}
            {/* <Link href="/blog" className="text-foreground/70 hover:text-foreground transition-colors">
              <Button variant="ghost" className="gap-1.5">
                <FileText className="h-4 w-4" />
                Blog
              </Button>
            </Link> */}
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            {/* Potentially a mobile menu trigger here */}
          </div>
          <UserNav />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
