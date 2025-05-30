
import Link from 'next/link';
import { AppLogo } from './AppLogo';
import { UserNav } from './UserNav';
import { DarkModeToggle } from './DarkModeToggle';
import { Button } from '@/components/ui/button';
import { getCurrentUser } from '@/lib/auth';
import { Briefcase, Menu, LogIn, UserPlus, Palette, X } from 'lucide-react'; // Removed BookOpen, GraduationCap, LayoutGrid
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { StyledXperts } from '@/components/layout/StyledXperts';

export default async function Header() {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <AppLogo />
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            <Button variant="ghost" asChild size="sm" className="text-foreground/70 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-colors duration-150 ease-in-out group">
              <Link href="/professionals" className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-primary group-hover:text-primary transition-colors duration-150 ease-in-out" />
                 <p className='text-lg text-muted-foreground'> <StyledXperts /></p>
              </Link>
            </Button>
            <Button variant="ghost" asChild size="sm" className="text-foreground/70 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md transition-colors duration-150 ease-in-out group">
              <Link href="/services" className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-primary group-hover:text-primary transition-colors duration-150 ease-in-out" /> 
                Services
              </Link>
            </Button>
            {/* Research and Training links removed from main nav */}
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
                  <div className="flex justify-between items-center">
                    <AppLogo />
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon">
                          <X className="h-6 w-6" /> 
                          <span className="sr-only">Close navigation menu</span>
                       </Button>
                    </SheetClose>
                  </div>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle> 
                  <SheetDescription className="sr-only">Main navigation links and theme settings.</SheetDescription> 
                </SheetHeader>
                <nav className="flex-grow p-4 space-y-2">
                  <SheetClose asChild>
                    <Link href="/professionals" className="flex items-center gap-3 p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-foreground/90">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <StyledXperts />
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/services" className="flex items-center gap-3 p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-foreground/90">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Services
                    </Link>
                  </SheetClose>
                  {/* Research and Training links removed from mobile nav */}
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
                   <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                     <Palette className="h-5 w-5" /> <span>Select Theme</span>
                   </div>
                  <DarkModeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {!user && (
            <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="outline">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
          {user && <UserNav />}
          <div className="hidden md:block">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
