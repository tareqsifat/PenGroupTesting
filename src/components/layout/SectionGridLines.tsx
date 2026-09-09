/**
 * The faint 5-column vertical rule that runs behind every section of the
 * design. Drawn in CSS rather than shipped as an image so it stays crisp at
 * any width.
 */
export function SectionGridLines() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="frame relative h-full">
        {[0, 25, 50, 75, 100].map((pct) => (
          <span
            key={pct}
            className="absolute inset-y-0 w-px bg-white/10"
            style={{ left: `${pct}%` }}
          />
        ))}
      </div>
    </div>
  );
}
