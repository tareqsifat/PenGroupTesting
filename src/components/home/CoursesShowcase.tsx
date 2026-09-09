import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/data/courses";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionGridLines } from "@/components/layout/SectionGridLines";

interface CoursesShowcaseProps {
  courses: Course[];
}

export function CoursesShowcase({ courses }: CoursesShowcaseProps) {
  const [featured, ...rest] = courses;

  return (
    <section className="relative overflow-hidden bg-base px-6 py-16 md:px-20 md:py-[120px]">
      <SectionGridLines />
      <div className="frame relative flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Our courses" title="Explore our creative courses" />
          <Button href="/courses" className="shrink-0">
            View Courses
          </Button>
        </div>

        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex w-full flex-col lg:w-[702px] lg:shrink-0">
            {featured && (
              <div className="flex flex-col gap-4 border-b border-white pb-8">
                <h3 className="text-[24px] font-semibold text-text">
                  {featured.title}
                </h3>
                <div className="flex items-start gap-3">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="mt-1 shrink-0" aria-hidden="true">
                    <path d="M7 18h22M20 9l9 9-9 9" stroke="currentColor" strokeWidth="2" className="text-text" />
                  </svg>
                  <p className="text-body leading-[1.6] text-text">
                    {featured.description}
                  </p>
                </div>
              </div>
            )}
            {rest.map((course, index) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className={`pb-8 pr-8 pt-[14px] transition-colors hover:border-pink ${
                  index === rest.length - 1 ? "" : "border-b border-white"
                }`}
              >
                <h3 className="text-[24px] font-semibold text-text hover:text-pink">
                  {course.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-card lg:h-[476px] lg:w-[558px]">
            <Image
              src="/images/courses-classroom.png"
              alt="Students in a VCAD lecture"
              fill
              sizes="(min-width: 1024px) 558px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
