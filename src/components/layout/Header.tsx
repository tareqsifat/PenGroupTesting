import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "ABOUT VCAD" },
  { href: "/courses", label: "COURSES" },
  { href: "/", label: "CONTACT US" },
];

export function Header() {
  return (
    <header className="relative z-40 flex h-[100px] items-center justify-center bg-card-alt px-6 md:px-20">
      <div className="frame flex w-full items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="VCAD home">
          <Image
            src="/svg/logo-vcad.svg"
            alt="Victoria College of Arts and Design"
            width={134}
            height={50}
            priority
          />
        </Link>

        <div className="hidden items-center justify-between gap-14 md:flex">
          <nav className="flex items-center gap-[55px]">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label + i}
                href={link.href}
                className="text-default text-text transition-colors hover:text-pink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            className="flex size-8 flex-col items-center justify-between py-[5px]"
          >
            <span className="h-[3px] w-full bg-text" />
            <span className="h-[3px] w-full bg-text" />
            <span className="h-[3px] w-full bg-text" />
          </button>
        </div>

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
