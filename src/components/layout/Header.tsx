import Link from "next/link";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Explore Courses" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-deep/90 backdrop-blur-md">
      <div className="frame flex items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-chip bg-pink text-default font-semibold text-white">
            V
          </span>
          <span className="text-cardtitle font-semibold text-white">
            VCAD
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-default text-text/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="/courses" variant="primary" className="hidden md:inline-flex">
          Apply now
        </Button>

        <Link
          href="/courses"
          className="rounded-badge border border-border px-4 py-2 text-meta text-text md:hidden"
        >
          Menu
        </Link>
      </div>
    </header>
  );
}
