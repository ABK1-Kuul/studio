
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 text-left md:text-center">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Get In Touch</h3>
            <p>Addis Ababa, Ethiopia</p>
            <p>+251 91 144 9776</p>
            <p>
              <Link href="mailto:henokdoni@email.com" className="hover:text-primary transition-colors">
                henokdoni@email.com
              </Link>
            </p>
          </div>
          <div className="md:text-right">
             {/* Can add more links or info here if needed */}
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} HDM consultation. All rights reserved.</p>
        <p className="mt-1">
          Developed by{' '}
          <Link href="https://sinqtech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            SinqTechnologies (sinqtech.com)
          </Link>
        </p>
      </div>
    </footer>
  );
}
