import type { Course } from "@/data/courses";
import { SectionGridLines } from "@/components/layout/SectionGridLines";
import { CoursesGalleryStrip } from "@/components/courses/CoursesGalleryStrip";

interface CoursesGallerySectionProps {
  courses: Course[];
}

/** Courses page gallery band — 1440 x 782 in the design. */
export function CoursesGallerySection({ courses }: CoursesGallerySectionProps) {
  return (
    <section className="relative overflow-hidden bg-card-alt px-6 py-16 md:py-[120px]">
      <SectionGridLines />

      {/* Arcs: 458.058 x 292.056 rotated 128.19deg, bounding box
          512.745 x 540.589 at 1066, 95 -> centre 1322.37, 365.29. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/circles-faint.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[91.83vw] top-[365.29px] hidden h-[292.056px] w-[458.058px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[128.19deg] lg:block"
      />

      <div className="relative flex flex-col gap-12">
        <div className="frame flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <span className="text-[22px] font-bold uppercase leading-[1.2] text-magenta-light">
              / Our Gallery
            </span>
            <p className="text-[48px] font-semibold leading-[56px] text-ice-blue">
              Degree Courses
            </p>
          </div>
          <p className="max-w-[858px] text-lead leading-[26px] text-ice-blue">
            Join Victoria College of Arts and Design and experience exceptional
            teaching, cutting-edge facilities, and industry connections that
            prepare you for a rewarding creative career.
          </p>
        </div>

        {/* The strip runs the full 1440 width, bleeding off both edges. */}
        <CoursesGalleryStrip courses={courses} />
      </div>
    </section>
  );
}
