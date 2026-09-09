import Image from "next/image";
import { SectionGridLines } from "@/components/layout/SectionGridLines";

/** Partners section — 1440 x 584 in the design. */
export function PartnersSection() {
  return (
    <section className="relative overflow-hidden bg-deep px-6 py-16 md:px-20 md:py-[120px]">
      <SectionGridLines />

      {/* The same 926.571 x 589.636 arc artwork as the quote section, here
          rotated 160.11deg and flipped on Y. Its rotated bounding box is
          1071.906 x 869.709 at calc(50% + 55px), -194.81, so the centre lands
          at calc(50% + 590.95px), 240.04 — above the section's top edge, which
          is why it reads as a cut-off arc. Same strokes (#EBECF3) as the quote
          section, but at 0.1 opacity instead of 0.5. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/circles-faint.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[calc(50vw+590.95px)] top-[240.04px] hidden h-[589.636px] w-[926.571px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[160.11deg] -scale-y-100 lg:block"
      />

      <div className="frame relative flex flex-col gap-14 lg:flex-row lg:items-stretch lg:gap-[76px]">
        <div className="flex flex-col gap-[76px]">
          <div className="flex flex-col gap-5">
            <span className="text-[22px] font-bold uppercase leading-[1.2] text-magenta-light">
              Our partners
            </span>
            <p className="text-[48px] font-semibold leading-[56px] text-text">
              Partner Institutions
            </p>
          </div>
          <p className="max-w-[744px] text-[22px] leading-[1.5] text-white">
            Our team at Victoria College of Arts and Design is passionate
            about creating innovative projects and generating new ideas. We
            work with a variety of experts and esteemed companies using a
            collaborative approach. Located in London&apos;s Design District,
            we have valuable connections within our industry.
          </p>
        </div>

        {/* Vertically centred against the copy, with the Ravensbourne mark
            sitting inside its own 148.346px box. */}
        <div className="flex shrink-0 flex-col items-start justify-center gap-6">
          <div className="flex items-center md:h-[148.346px]">
            <Image
              src="/svg/partner-ravensbourne.svg"
              alt="Ravensbourne University London"
              width={352}
              height={86}
              className="h-[64px] w-auto md:h-[86px]"
            />
          </div>
          <Image
            src="/svg/partner-aup.svg"
            alt="Arts University Plymouth"
            width={254}
            height={86}
            className="h-[64px] w-auto md:h-[86px]"
          />
        </div>
      </div>
    </section>
  );
}
