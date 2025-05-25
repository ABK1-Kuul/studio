
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google'; // Using Inter as a common professional font
import './globals.css';
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'HDM Xperts',
  description: 'Connect with top industry Xperts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={[
            'light', 'dark', 
            'corporate-blue', 'eco-green', 'innovation-orange', 
            'lemon-green', 'lemon-navy', 'lemon-grey-minimalist', 
            'green-authority', 
            'orange-emerald', 'orange-sage', 'orange-dark-teal', 'orange-teal',
            'system'
          ]}
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8 sm:px-6 lg:px-8">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
