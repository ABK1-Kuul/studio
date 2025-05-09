
import Link from 'next/link';
import Image from 'next/image';

export function AppLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/90 transition-colors">
      {/*
        Placeholder for the HDM consultation logo.
        To use your actual logo:
        1. Save your logo image (e.g., logo.png or logo.svg) to the `public` folder of your project.
        2. Update the `src` attribute below from the placeholder "https://picsum.photos/28/28" to your logo's path, e.g., "/logo.png".
        3. Adjust the `width` and `height` attributes to match your logo's dimensions for optimal display.
      */}
      <Image
        src="https://picsum.photos/28/28" // Placeholder image. Replace with your logo path, e.g., /logo.png
        alt="HDM consultation Logo"
        width={28} // Adjust to your logo's width
        height={28} // Adjust to your logo's height
        data-ai-hint="company logo" // Hint for AI to find a suitable image if replacing placeholder
      />
      <span>HDM consultation</span>
    </Link>
  );
}

