
export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} HDM consultation. All rights reserved.</p>
        <p className="mt-1">
          Built with Next.js and ShadCN UI.
        </p>
      </div>
    </footer>
  );
}

