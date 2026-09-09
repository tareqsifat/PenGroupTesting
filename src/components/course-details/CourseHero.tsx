import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/data/courses";
import { SectionGridLines } from "@/components/layout/SectionGridLines";

interface CourseHeroProps {
  course: Course;
}

export function CourseHero({ course }: CourseHeroProps) {
  return (
    <section className="relative overflow-hidden bg-base px-6 pb-10 pt-12 md:px-20 md:pb-16 md:pt-16">
      <SectionGridLines />
      <div className="frame relative flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-[755px] flex-col gap-6 lg:order-2">
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

        <div className="relative flex h-[260px] w-full shrink-0 items-center justify-center gap-4 lg:order-1 lg:h-[420px] lg:w-[420px]">
          <div className="relative h-full w-[55%] overflow-hidden rounded-card">
            <Image
              src={course.visual.image}
              alt={course.visual.imageAlt}
              fill
              sizes="240px"
              className="object-cover"
            />
          </div>
          <div className="relative h-[70%] w-[40%] self-end overflow-hidden rounded-card">
            <Image
              src="/images/course-3.jpg"
              alt=""
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
