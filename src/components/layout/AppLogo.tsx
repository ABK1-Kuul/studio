
import Link from 'next/link';

export function AppLogo() {
  return (
    <Link href="/" className="text-xl font-bold text-primary hover:text-primary/90 transition-colors">
      <span>HDM consultation</span>
    </Link>
  );
}
