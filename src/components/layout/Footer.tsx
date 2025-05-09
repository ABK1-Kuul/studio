
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Get In Touch Section */}
        <div className="text-center md:text-left mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-3">Get In Touch</h3>
          <address className="not-italic space-y-1 text-sm text-muted-foreground">
            <p>Addis Ababa, Ethiopia</p>
            <p>Phone: +251 91 144 9776</p>
            <p>
              Email:
              <Link href="mailto:henokdoni@email.com" className="hover:text-primary transition-colors ml-1">
                henokdoni@email.com
              </Link>
            </p>
          </address>
        </div>

        {/* Copyright and Developer Credit */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HDM consultation. All rights reserved.</p>
          <p className="mt-1">
            Developed by{' '}
            <Link href="https://sinqtech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              SinqTechnologies (sinqtech.com)
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
