import Image from "next/image";
import { SectionGridLines } from "@/components/layout/SectionGridLines";

/**
 * Quote section — 1440 x 979 in the design.
 * Quote sits top-left; three bordered photos fan across the lower half with the
 * faint concentric arcs behind them. Percentages below are the design's
 * coordinates divided by 1440 / 979 so the collage scales with the section.
 */
const PHOTOS = [
  {
    // Upright, top right.
    src: "/images/vision-1.png",
    alt: "Fashion designers working together",
    left: "65.97%",
    top: "12.26%",
    width: "28.47%",
    height: "54.95%",
    rotate: "0deg",
    sizes: "410px",
  },
  {
    // Left of the fan.
    src: "/images/vision-3.png",
    alt: "Creative practitioner at work",
    left: "19.72%",
    top: "67.06%",
    width: "29.03%",
    height: "47.50%",
    rotate: "-7.19deg",
    sizes: "418px",
  },
  {
    // Centre of the fan, painted on top.
    src: "/images/vision-2.png",
    alt: "Student painting with watercolours",
    left: "50.10%",
    top: "67.06%",
    width: "28.40%",
    height: "47.50%",
    rotate: "11.32deg",
    sizes: "409px",
  },
] as const;

export function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-base">
      <SectionGridLines />

      {/* Mobile / tablet: quote above a simple photo row. */}
      <div className="frame relative flex flex-col gap-12 px-6 py-16 lg:hidden">
        <Quote className="text-[36px] leading-[1.15] md:text-[48px] md:leading-[1.15]" />
        <div className="flex gap-4">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[409/465] flex-1 border-[5px] border-white"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: the full composition. The design is drawn edge to edge, so
          this canvas is full-bleed and every x is a percentage of the viewport
          — at 1440 it lands on the designed pixels exactly, and wider it keeps
          the same composition instead of drifting away from the artwork. */}
      <div className="relative hidden h-[979px] w-screen overflow-hidden lg:block">
        {/* Concentric arcs: 926.571 x 589.636, rotated 19.89deg, its
            1071.906 x 869.709 rotated bounding box sitting at
            calc(16.67% + 79px), 182 -> centre 855, 616.85. Positioned by that
            centre so the rotation lands where the design puts it. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/svg/circles.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-[59.38%] top-[63.01%] h-[589.636px] w-[926.571px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[19.89deg]"
        />

        <div className="absolute left-[7.5%] top-[12.26%] w-[832px]">
          <Image
            src="/svg/quote.svg"
            alt=""
            width={67}
            height={51}
            aria-hidden
            className="absolute -left-[27px] -top-[17px]"
          />
          <Quote className="w-[765px] text-[64px] leading-[70px]" />
          <Image
            src="/svg/quote.svg"
            alt=""
            width={67}
            height={51}
            aria-hidden
            className="absolute left-[597px] top-[177px] rotate-180"
          />
        </div>

        {PHOTOS.map((photo) => (
          <div
            key={photo.src}
            className="absolute border-[5px] border-white"
            style={{
              left: photo.left,
              top: photo.top,
              width: photo.width,
              height: photo.height,
              transform:
                photo.rotate === "0deg"
                  ? undefined
                  : `translate(-50%, -50%) rotate(${photo.rotate})`,
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={photo.sizes}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Quote({ className }: { className?: string }) {
  return (
    <p className={`font-bold text-white ${className ?? ""}`}>
      A world where{" "}
      <span className="text-magenta">everyone has the opportunity</span> to
      fulfil their potential
    </p>
  );
}
