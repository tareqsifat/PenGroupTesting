import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/data/courses";
import { SectionGridLines } from "@/components/layout/SectionGridLines";
import { cx } from "@/lib/utils";

interface CourseHeroProps {
  course: Course;
}

export function CourseHero({ course }: CourseHeroProps) {
  // The design shows three equal photos in a row. Not every course is
  // guaranteed two supplementary photos, so fall back to the single
  // course visual (centred, no row) rather than assuming the data exists.
  const photos =
    course.heroGallery && course.heroGallery.length >= 2
      ? [course.visual, ...course.heroGallery.slice(0, 2)]
      : [course.visual];

  return (
    <section className="relative overflow-hidden bg-base px-6 pb-10 pt-12 md:px-20 md:pb-16 md:pt-16">
      <SectionGridLines />

      {/* Tilted arc bleeding off the top-right corner, matching the design's
          "tabs-circles" layer: 745.17 x 475.12, rotated 125.52deg, centred at
          frame-x 1197.585 / frame-y 106.56 (so calc(50vw + 477.585px), which
          keeps it pinned to the same spot as the design regardless of
          viewport width beyond the 1440px frame). */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/circles-faint.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[calc(50vw+477.585px)] top-[106.56px] hidden h-[475.12px] w-[745.17px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[125.52deg] lg:block"
      />

      <div className="frame relative flex flex-col items-center gap-12 text-center">
        <div className="flex max-w-[996px] flex-col items-center gap-6">
          <div className="flex items-center gap-[6px] text-lead text-ice-blue">
            <Link href="/" className="underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/courses" className="underline">
              Courses
            </Link>
            <span>/</span>
            <span>Course Details</span>
          </div>
          <h1 className="text-[36px] font-semibold leading-[1.1] text-ice-blue md:text-[60px] md:leading-[66px]">
            {course.title}
          </h1>
          <p className="max-w-[996px] text-lead leading-[1.6] text-ice-blue/90">
            {course.description}
          </p>
        </div>

        <div
          className={cx(
            "grid w-full gap-6",
            photos.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "mx-auto max-w-[500px] grid-cols-1"
          )}
        >
          {photos.map((photo, i) => (
            <div
              key={photo.image + i}
              className="relative h-[220px] w-full overflow-hidden rounded-card md:h-[280px]"
            >
              <Image
                src={photo.image}
                alt={photo.imageAlt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
