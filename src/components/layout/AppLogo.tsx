
import Link from 'next/link';

export function AppLogo() {
  return (
    <Link
      href="/"
      className="inline-flex flex-col items-start text-primary transition-colors duration-150 whitespace-nowrap group pl-2"
      aria-label="HDM Xperts Home"
    >
      <div className="flex items-baseline">
        <span className="text-2xl font-bold group-hover:text-accent transition-colors duration-150">HDM</span>
        <span
          className="text-accent font-extrabold text-[1.3em] -ml-[1px] relative group-hover:text-primary transition-colors duration-150"
          style={{ top: '-0.05em' }}
        >
          X
        </span>
        <span className="text-2xl font-bold -ml-[1px] group-hover:text-accent transition-colors duration-150">perts</span>
      </div>
      <span 
        className="text-xs font-light text-muted-foreground tracking-tight group-hover:text-accent/80 transition-colors duration-150"
        style={{ marginTop: '-0.2rem' }}
      >
        Diverse minds, single solution.
      </span>
    </Link>
  );
}
