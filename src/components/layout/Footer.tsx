import Link from "next/link";
import { getSchools } from "@/data/courses";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Study",
    links: [
      { label: "Explore Courses", href: "/courses" },
      { label: "How to Apply", href: "/courses" },
      { label: "Open Days", href: "/" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About VCAD", href: "/" },
      { label: "PEN Group", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
];

export function Footer() {
  const schools = getSchools();

  return (
    <footer className="border-t border-border/60 bg-deep">
      <div className="frame grid gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-chip bg-pink text-default font-semibold text-white">
              V
            </span>
            <span className="text-cardtitle font-semibold text-white">
              VCAD
            </span>
          </div>
          <p className="mt-4 max-w-xs text-default text-text/70">
            Victoria College of Arts and Design, part of PEN Group. Creative
            education across fashion, graphic design and business for
            creatives.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-meta uppercase tracking-wide text-text/50">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-default text-text/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-meta uppercase tracking-wide text-text/50">
            Schools
          </h3>
          <ul className="mt-4 space-y-3">
            {schools.map((school) => (
              <li key={school} className="text-default text-text/80">
                {school}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="frame flex flex-col gap-2 border-t border-border/60 px-6 py-6 text-meta text-text/50 md:flex-row md:items-center md:justify-between md:px-10">
        <span>&copy; {new Date().getFullYear()} VCAD — part of PEN Group.</span>
        <span>Chattogram</span>
      </div>
    </footer>
  );
}
