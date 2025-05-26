
import Link from 'next/link';

export function AppLogo() {
  return (
    <Link
      href="/"
      className="inline-flex flex-col items-start text-primary hover:text-primary/90 transition-colors whitespace-nowrap group pl-2"
      aria-label="HDM Xperts Home"
    >
      <div className="flex items-baseline">
        <span className="text-2xl font-bold">HDM</span>
        <span
          className="text-accent font-extrabold text-[1.2em] relative group-hover:text-primary/90 transition-colors duration-150"
          style={{ top: '-0.05em' }}
        >
          X
        </span>
        <span className="text-2xl font-bold -ml-[1px]">perts</span>
      </div>
      <span className="text-xs font-light text-muted-foreground tracking-tight group-hover:text-foreground/70 transition-colors duration-150" style={{ marginTop: '-0.2rem' }}>
        Diverse minds, single solution.
      </span>
    </Link>
  );
}
