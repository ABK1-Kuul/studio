
import Link from 'next/link';

export function AppLogo() {
  return (
    <Link 
      href="/" 
      className="inline-flex items-baseline text-2xl font-bold text-primary hover:text-primary/90 transition-colors whitespace-nowrap"
      aria-label="HDM Xperts Home"
    >
      <span>HDM</span>
      <span 
        className="text-accent font-extrabold text-[1.2em] mx-0.5 relative" 
        style={{ top: '-0.05em' }}
      >
        X
      </span>
      <span>perts</span>
    </Link>
  );
}
