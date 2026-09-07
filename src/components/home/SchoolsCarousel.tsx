import { Carousel } from "@/components/ui/Carousel";
import type { Course } from "@/data/courses";
import { accentStyles } from "@/lib/utils";

interface SchoolsCarouselProps {
  courses: Course[];
}

export function SchoolsCarousel({ courses }: SchoolsCarouselProps) {
  const schools = Array.from(
    new Map(
      courses.map((c) => [c.school, { school: c.school, accent: c.accent }])
    ).values()
  );

  return (
    <section className="frame border-t border-border/60 px-6 py-16 md:px-10">
      <span className="text-meta uppercase tracking-wide text-pink">
        Schools
      </span>
      <h2 className="mt-2 mb-8 text-subheading font-semibold text-white">
        {schools.length} schools, one campus
      </h2>

      <Carousel>
        {schools.map(({ school, accent }) => {
          const count = courses.filter((c) => c.school === school).length;
          return (
            <div
              key={school}
              className="flex w-72 shrink-0 flex-col gap-4 rounded-card border border-border bg-card p-6"
            >
              <span
                className={`h-10 w-10 rounded-chip ${accentStyles[accent].bg}`}
              />
              <h3 className="text-cardtitle font-semibold text-white">
                {school}
              </h3>
              <p className="text-default text-text/70">
                {count} {count === 1 ? "course" : "courses"} on offer, from
                diplomas to degrees.
              </p>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
