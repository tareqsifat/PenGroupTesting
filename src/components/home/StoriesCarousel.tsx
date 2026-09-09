"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CircularArrowButton } from "@/components/ui/CircularArrowButton";
import { SectionGridLines } from "@/components/layout/SectionGridLines";

/**
 * The design names one story; a second is modelled in the same
 * voice so the carousel has something to cycle between. See README.
 */
const STORIES = [
  {
    title: "Induction in VCAD Canary Wharf campus",
    body: "If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.",
    image: "/images/story-1.png",
  },
  {
    title: "A day inside the Fashion studio",
    body: "From pattern cutting to portfolio reviews, students spend as much time on the studio floor as they do in lectures — working alongside tutors who still practise professionally.",
    image: "/images/vision-2.png",
  },
];

export function StoriesCarousel() {
  const [index, setIndex] = useState(0);
  const story = STORIES[index];

  return (
    <section className="relative overflow-hidden bg-base px-6 py-16 md:px-20 md:py-[120px]">
      <SectionGridLines />
      <div className="frame relative flex flex-col gap-[76px]">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-5">
            <span className="text-[22px] font-bold uppercase leading-[1.2] text-magenta-light">
              Stories
            </span>
            <p className="text-[48px] font-semibold leading-[56px] text-text">
              Our Stories
            </p>
          </div>
          <div className="flex items-center gap-[5px]">
            <CircularArrowButton
              direction="left"
              label="Previous story"
              onClick={() => setIndex((i) => (i - 1 + STORIES.length) % STORIES.length)}
            />
            <CircularArrowButton
              direction="right"
              label="Next story"
              onClick={() => setIndex((i) => (i + 1) % STORIES.length)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="relative h-[320px] w-full shrink-0 border-2 border-white lg:h-[543px] lg:w-[630px]">
            <Image src={story.image} alt={story.title} fill sizes="630px" className="object-cover" />
          </div>
          <div className="flex flex-1 flex-col gap-16">
            <div className="flex flex-col gap-5">
              <p className="text-[32px] font-semibold leading-[1.2] text-text md:text-[42px] md:leading-[50px]">
                {story.title}
              </p>
              <p className="text-[22px] leading-[1.5] text-white">{story.body}</p>
            </div>
            <Button href="/" className="w-fit">
              Read Article
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
