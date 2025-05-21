
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Get In Touch Section - Far Left */}
          <div className="text-left">
            <h3 className="text-lg font-semibold text-foreground mb-3">Get In Touch</h3>
            <address className="not-italic space-y-1 text-sm text-muted-foreground">
              <p>Arada Sub city, Distrct 08 #600</p>
              <p>Addis Ababa, Ethiopia</p>
              <p>Tel: +251 911 44 97 76</p>
              <p>PoBox: 19451</p>
              <p>
                Email:
                <Link href="mailto:info@hdmxperts.com" className="hover:text-primary transition-colors ml-1">
                  info@hdmxperts.com
                </Link>
              </p>
            </address>
          </div>

          {/* Copyright and Developer Credit - Far Right */}
          <div className="text-left md:text-right mt-8 md:mt-0">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} HDM Xperts. All rights reserved.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Developed by{' '}
              <Link href="https://sinqtech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                SinqTechnologies (sinqtech.com)
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

