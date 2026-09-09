"use client";

import Image from "next/image";
import { useState } from "react";
import type { Testimonial } from "@/data/testimonials";
import { CircularArrowButton } from "@/components/ui/CircularArrowButton";
import { SectionGridLines } from "@/components/layout/SectionGridLines";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  bg?: "base" | "deep";
}

export function TestimonialCarousel({ testimonials, bg = "base" }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  return (
    <section
      className={`relative overflow-hidden px-6 py-16 md:px-20 md:py-[120px] ${
        bg === "deep" ? "bg-deep" : "bg-base"
      }`}
    >
      <SectionGridLines />
      <div className="frame relative flex flex-col gap-[76px]">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-5">
            <span className="text-[22px] font-bold uppercase leading-[1.2] text-magenta-light">
              Students Testimonial
            </span>
            <p className="text-[48px] font-semibold leading-[56px] text-text">
              Our students sharing their thoughts
            </p>
          </div>
          <div className="flex items-center gap-[5px]">
            <CircularArrowButton
              direction="left"
              label="Previous testimonial"
              onClick={() =>
                setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
              }
            />
            <CircularArrowButton
              direction="right"
              label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            />
          </div>
        </div>

        <div className="flex flex-col items-stretch gap-6 lg:flex-row">
          <div className="relative h-[300px] w-full shrink-0 overflow-hidden lg:h-[431px] lg:w-[411px]">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              sizes="411px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-[42px] border border-[#f9f9f9] p-8 lg:p-[31px]">
            <Image src="/svg/quote.svg" alt="" width={67} height={51} aria-hidden />
            <div className="flex flex-col gap-[42px] text-white">
              <p className="text-[22px] leading-[1.5]">{testimonial.quote}</p>
              <div className="flex flex-col gap-2">
                <span className="text-[22px] font-medium">{testimonial.name}</span>
                <span className="text-body">{testimonial.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
