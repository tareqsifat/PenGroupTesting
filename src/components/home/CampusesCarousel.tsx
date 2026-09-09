"use client";

import Image from "next/image";
import { useState } from "react";
import { CircularArrowButton } from "@/components/ui/CircularArrowButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionGridLines } from "@/components/layout/SectionGridLines";

/**
 * The design names one campus explicitly (Canary Wharf); Manchester —
 * International House is named on individual course pages, so it's modelled
 * here as the second campus. See README.
 */
const CAMPUSES = [
  { name: "Canary Wharf Campus", image: "/images/campus-center.png" },
  { name: "Manchester Campus", image: "/images/campus-right.png" },
];

export function CampusesCarousel() {
  const [index, setIndex] = useState(0);
  const active = CAMPUSES[index];
  const prev = CAMPUSES[(index - 1 + CAMPUSES.length) % CAMPUSES.length];
  const next = CAMPUSES[(index + 1) % CAMPUSES.length];

  return (
    <section className="relative overflow-hidden bg-base px-6 py-16 md:px-20 md:py-[120px]">
      <SectionGridLines />
      <div className="frame relative flex flex-col items-center gap-11">
        <div className="flex w-full flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <SectionHeading eyebrow="Our campuses" title="Explore our campuses" />
          <p className="max-w-[364px] text-default text-white">
            Our team at Victoria College of Arts and Design is passionate
            about creating innovative projects and generating new ideas.
          </p>
        </div>

        <div className="relative flex h-[420px] w-full max-w-[638px] items-center justify-center">
          <div className="absolute left-[-18%] top-10 hidden h-[380px] w-[300px] overflow-hidden opacity-50 sm:block">
            <Image src={prev.image} alt="" fill sizes="300px" className="object-cover" />
          </div>
          <div className="relative z-10 h-full w-full overflow-hidden">
            <Image src={active.image} alt={active.name} fill sizes="638px" className="object-cover" priority={false} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(3,10,46,0)_40%,_rgba(3,10,46,0.9)_100%)]" />
          </div>
          <div className="absolute right-[-18%] top-10 hidden h-[380px] w-[300px] overflow-hidden opacity-50 sm:block">
            <Image src={next.image} alt="" fill sizes="300px" className="object-cover" />
          </div>

          <div className="absolute z-20 flex size-[120px] items-center justify-center rounded-full bg-white/30 text-default font-semibold uppercase text-text drop-shadow-lg">
            Discover
          </div>

          <div className="absolute bottom-6 z-20 flex w-[80%] max-w-[420px] items-center justify-center bg-navy/70 py-5">
            <span className="text-[24px] font-bold uppercase text-text">
              {active.name}
            </span>
          </div>

          <div className="absolute z-30 flex w-full items-center justify-between px-2">
            <CircularArrowButton
              direction="left"
              label="Previous campus"
              onClick={() => setIndex((i) => (i - 1 + CAMPUSES.length) % CAMPUSES.length)}
            />
            <CircularArrowButton
              direction="right"
              label="Next campus"
              onClick={() => setIndex((i) => (i + 1) % CAMPUSES.length)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
