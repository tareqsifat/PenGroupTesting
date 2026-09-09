const LINKS = [
  { href: "#overview", label: "Course Overview" },
  { href: "#structure", label: "Course Structure & Details" },
  { href: "#admissions", label: "Admissions & Key Details" },
];

export function CourseSectionNav() {
  return (
    <nav
      id="overview"
      aria-label="Course sections"
      className="scroll-mt-24 bg-base px-6 md:px-20"
    >
      <div className="frame no-scrollbar flex items-center gap-3 overflow-x-auto rounded-pill border border-border bg-card-alt/60 px-3 py-3">
        {LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className={
              i === 0
                ? "shrink-0 whitespace-nowrap rounded-pill bg-plum px-5 py-3 text-lead text-white"
                : "shrink-0 whitespace-nowrap rounded-pill px-5 py-3 text-lead text-white transition-colors hover:text-pink"
            }
          >
            / {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
