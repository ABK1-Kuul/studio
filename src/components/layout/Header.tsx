import Link from 'next/link';
import { AppLogo } from './AppLogo';
import { UserNav } from './UserNav';
import { DarkModeToggle } from './DarkModeToggle';
import { Button } from '@/components/ui/button';
import { getCurrentUser } from '@/lib/auth';
import { Briefcase, LayoutGrid, Menu, LogIn, UserPlus } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

export default async function Header() {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <AppLogo />
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            <Link href="/professionals" passHref legacyBehavior>
              <Button variant="ghost" asChild size="sm" className="text-foreground/70">
                <a className="flex items-center gap-1.5">
                  <Briefcase className="h-4 w-4" />
                  Professionals
                </a>
              </Button>
            </Link>
            <Link href="/services" passHref legacyBehavior>
              <Button variant="ghost" asChild size="sm" className="text-foreground/70">
                <a className="flex items-center gap-1.5">
                  <LayoutGrid className="h-4 w-4" />
                  Services
                </a>
              </Button>
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[340px] p-0 flex flex-col">
                <SheetHeader className="p-4 border-b">
                  <AppLogo />
                  {/* <SheetTitle className="sr-only">Navigation Menu</SheetTitle> */}
                </SheetHeader>
                <nav className="flex-grow p-4 space-y-2">
                  <SheetClose asChild>
                    <Link href="/professionals" className="flex items-center gap-3 p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-foreground/90">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Professionals
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services" className="flex items-center gap-3 p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-foreground/90">
                      <LayoutGrid className="h-5 w-5 text-primary" />
                      Services
                    </Link>
                  </SheetClose>
                  {!user && (
                    <>
                      <Separator className="my-3" />
                      <SheetClose asChild>
                        <Link href="/login" className="flex items-center gap-3 p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-foreground/90">
                          <LogIn className="h-5 w-5 text-primary" />
                          Login
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/signup" className="flex items-center gap-3 p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-foreground/90">
                          <UserPlus className="h-5 w-5 text-primary" />
                          Sign Up
                        </Link>
                      </SheetClose>
                    </>
                  )}
                </nav>
                <div className="p-4 border-t mt-auto">
                  <DarkModeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <UserNav />
          <div className="hidden md:block">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

