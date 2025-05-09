
import Link from 'next/link';
import Image from 'next/image';

export function AppLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/90 transition-colors">
      <Image
        src="/hdm-logo.svg" 
        alt="HDM consultation Logo"
        width={36} 
        height={36} 
      />
      <span>HDM consultation</span>
    </Link>
  );
}

