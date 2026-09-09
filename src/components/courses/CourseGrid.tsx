import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/data/courses";
import { CircularArrowButton as ArrowVisual } from "@/components/courses/StaticArrowVisual";

interface CourseGridProps {
  courses: Course[];
}

/**
 * Course card. Resting state shows the photo, title and tagline; hovering
 * drops a #030A2E/60 panel over the lower 45% of the card (411 x 329 of a
 * 720-tall card) and reveals the school/duration chips, the longer summary
 * and the school line, while the corner badge turns fuchsia.
 */
const CORNER_CUT =
  // The 102px circle around the badge is punched out of the card, so the
  // bottom-right corner is missing entirely rather than curving behind the
  // badge. Badge centre is 39px in from each edge; the cut has a 51px radius.
  "radial-gradient(circle 51px at calc(100% - 39px) calc(100% - 39px), transparent 51px, #000 51.5px)";

function CourseCard({ course, tall }: { course: Course; tall: boolean }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className={`group relative flex shrink-0 flex-col justify-end ${
        tall ? "h-[720px] flex-1" : "h-[343px] w-full"
      }`}
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-[20px]"
        style={{ maskImage: CORNER_CUT, WebkitMaskImage: CORNER_CUT }}
      >
        <Image
          src={course.visual.image}
          alt={course.visual.imageAlt}
          fill
          sizes="(min-width: 1024px) 434px, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent" />
        {/* The translucent panel that appears on hover. */}
        <div className="absolute inset-x-0 bottom-0 top-[52.6%] rounded-[20px] bg-[#030a2e]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <ArrowVisual />

      <div className="relative flex flex-col gap-2 p-[20px] pb-[28px] pr-[104px]">
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="overflow-hidden">
            <div className="flex flex-wrap gap-[10px] pb-2">
              <span className="rounded-chip bg-blue/30 px-[10px] py-1 text-[10px] uppercase leading-5 text-text">
                {course.school}
              </span>
              <span className="rounded-chip bg-blue/30 px-[10px] py-1 text-[10px] leading-5 text-text">
                {course.duration}
              </span>
            </div>
          </div>
        </div>

        <h3 className="text-[20px] font-semibold leading-[28px] text-ice-blue">
          {course.title}
        </h3>
        <p className="text-meta leading-[20px] text-pale-blue">
          {course.tagline}
        </p>

        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="overflow-hidden">
            <p className="pt-2 text-meta leading-[20px] text-pale-blue">
              {course.summary}
            </p>
            <div className="flex flex-col gap-1 pt-4">
              <span className="text-[16px] font-semibold leading-[22px] text-ice-blue">
                School:
              </span>
              <span className="text-meta leading-[20px] text-pale-blue">
                {course.school}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/**
 * Asymmetric grid per the brief: one large feature card, two stacked
 * cards, one expanded card. Reproducing this layout with fewer than 4
 * courses gracefully drops the missing slots rather than breaking the grid.
 */
export function CourseGrid({ courses }: CourseGridProps) {
  const [feature, stacked1, stacked2, expanded] = courses;

  if (!feature) return null;

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
      <CourseCard course={feature} tall />

      {(stacked1 || stacked2) && (
        <div className="flex flex-1 flex-col gap-6">
          {stacked1 && <CourseCard course={stacked1} tall={false} />}
          {stacked2 && <CourseCard course={stacked2} tall={false} />}
        </div>
      )}

      {expanded && <CourseCard course={expanded} tall />}
    </div>
  );
}
