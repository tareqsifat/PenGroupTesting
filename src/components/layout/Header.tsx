import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
  chevron?: boolean;
}

const HOME_NAV_LINKS: NavLink[] = [
  { href: "/", label: "ABOUT VCAD" },
  { href: "/courses", label: "COURSES" },
  { href: "/", label: "CONTACT US" },
];

const INNER_NAV_LINKS: NavLink[] = [
  { href: "/", label: "ABOUT VCAD", chevron: true },
  { href: "/courses", label: "COURSES" },
  { href: "/", label: "CAMPUSES" },
  { href: "/", label: "VCAD LIFE", chevron: true },
];

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6 3.5 10.5 8 6 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface HeaderProps {
  /** "home" is the simple public nav; "inner" is the section-nav used on
   *  Courses / Course Details, with school links and an Apply Now CTA. */
  variant?: "home" | "inner";
}

export function Header({ variant = "home" }: HeaderProps) {
  const isInner = variant === "inner";
  const navLinks = isInner ? INNER_NAV_LINKS : HOME_NAV_LINKS;

  return (
    <header
      className={cx(
        "relative z-40 flex h-[100px] items-center justify-center px-6 md:px-20",
        isInner ? "bg-deep" : "bg-card-alt"
      )}
    >
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
            {navLinks.map((link, i) => (
              <Link
                key={link.label + i}
                href={link.href}
                className="flex items-center gap-[3px] text-default text-text transition-colors hover:text-pink"
              >
                {isInner ? `/ ${link.label}` : link.label}
                {link.chevron && <ChevronRightIcon />}
              </Link>
            ))}
          </nav>

          {isInner ? (
            <Button href="/courses" variant="primary">
              Apply Now
            </Button>
          ) : (
            <button
              type="button"
              aria-label="Open menu"
              className="flex size-8 flex-col items-center justify-between py-[5px]"
            >
              <span className="h-[3px] w-full bg-text" />
              <span className="h-[3px] w-full bg-text" />
              <span className="h-[3px] w-full bg-text" />
            </button>
          )}
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
