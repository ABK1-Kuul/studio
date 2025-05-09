import Link from 'next/link';
import { Briefcase } from 'lucide-react'; // Or any other suitable icon

export function AppLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/90 transition-colors">
      <Briefcase className="h-7 w-7" />
      <span>HDM ProConnect</span>
    </Link>
  );
}
