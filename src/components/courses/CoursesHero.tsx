import Image from "next/image";
import { SectionGridLines } from "@/components/layout/SectionGridLines";

/** Courses page hero — 1440 x 452 in the design. */
export function CoursesHero() {
  return (
    <section className="relative overflow-hidden bg-base px-6 py-16 text-center md:px-20 md:py-[140px]">
      <SectionGridLines />

      {/* Arcs: 745.168 x 475.117 rotated 135deg, its 862.872px square bounding
          box at calc(58.33% + 73px), -311 -> centre 1344.44, 120.44. Same
          0.1-opacity artwork as the partners section. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/circles-faint.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[calc(58.33vw+504.44px)] top-[120.44px] hidden h-[475.117px] w-[745.168px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[135deg] lg:block"
      />

      {/* The photo tucked into the top-left, bleeding off the top edge. */}
      <div className="absolute left-[9.375vw] top-[-15px] hidden h-[210px] w-[208px] lg:block">
        <Image
          src="/images/course-3.jpg"
          alt="Students talking in a VCAD common room"
          fill
          sizes="208px"
          className="object-cover"
        />
      </div>

      {/* The photo that overlaps the heading on the right. */}
      <div className="absolute left-[82.29vw] top-[97px] hidden h-[195px] w-[194px] lg:block">
        <Image
          src="/images/explore-hero-2.png"
          alt="Students reviewing print work in a VCAD studio"
          fill
          sizes="194px"
          className="object-cover"
        />
      </div>

      <div className="frame relative flex flex-col items-center gap-[14px]">
        <div className="flex items-center gap-[6px] text-[18px] font-medium leading-[26px] text-ice-blue">
          <span className="underline">Home</span>
          <span>/</span>
          <span>Courses</span>
        </div>
        <h1 className="text-[40px] font-semibold leading-[1.1] text-ice-blue md:text-[60px] md:leading-[66px]">
          Explore Our Courses
        </h1>
        <p className="max-w-[834px] text-[18px] font-medium leading-[26px] text-ice-blue">
          Join Victoria College of Arts and Design and experience exceptional
          teaching, cutting-edge facilities, and industry connections that
          prepare you for a rewarding creative career.
        </p>
      </div>
    </section>
  );
}
