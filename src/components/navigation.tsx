import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg text-foreground hover:text-accent transition-colors">
          Patrick
        </Link>
        <div className="hidden md:flex gap-8">
          <a href="#work" className="text-muted hover:text-accent transition-colors">
            Work
          </a>
          <a href="/#contact" className="text-muted hover:text-accent transition-colors">
            Contact
          </a>
          <a href="/blog" className="text-muted hover:text-accent transition-colors">
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}
