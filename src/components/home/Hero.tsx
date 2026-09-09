import Image from "next/image";
import { Button } from "@/components/ui/Button";

const TAGS = [
  { label: "management", bg: "bg-navy", text: "text-magenta", left: "33.05px", top: "526.5px", w: "245.957px", rotate: "0deg" },
  { label: "Graphic design", bg: "bg-navy", text: "text-cyan", left: "146.04px", top: "332.15px", w: "274.685px", rotate: "-13.87deg" },
  { label: "fashion", bg: "bg-pink", text: "text-white", left: "0", top: "22.29px", w: "156.226px", rotate: "-13.87deg" },
  { label: "photography", bg: "bg-magenta", text: "text-white", left: "436.58px", top: "0", w: "245.666px", rotate: "14.23deg" },
  { label: "media", bg: "bg-cyan", text: "text-navy", left: "12.3px", top: "345.88px", w: "131.556px", rotate: "16.44deg" },
  { label: "Business", bg: "bg-navy", text: "text-white", left: "544.18px", top: "231.35px", w: "164.9px", rotate: "15.38deg" },
  { label: "marketing", bg: "bg-sky", text: "text-white", left: "313.95px", top: "474.35px", w: "211.649px", rotate: "-13.87deg" },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-base px-6 py-16 md:px-20 md:py-[100px]">
      <div className="frame flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-[605px] flex-col gap-[62px]">
          <div className="flex flex-col gap-8">
            <h1 className="text-[56px] font-black uppercase leading-[1.05] text-text md:text-[80px] lg:text-[110px]">
              welcome to VCAD
            </h1>
            <p className="max-w-[586px] text-body leading-[1.6] text-pale-blue">
              Our team at Victoria College of Arts and Design is passionate
              about creating innovative projects and generating new ideas. We
              work with a variety of experts and esteemed companies using a
              collaborative approach. Located in London&apos;s Design
              District, we have valuable connections within our industry.
              Search our latest courses.
            </p>
          </div>
          <Button href="/courses" className="w-fit">
            Explore Courses
          </Button>
        </div>

        <div className="relative h-[420px] w-[440px] shrink-0 sm:h-[560px] sm:w-[586px] lg:h-[680px] lg:w-[713px]">
          <div className="absolute left-[60.6%] top-[39.5%] h-[60.5%] w-[39.3%] border border-magenta">
            <Image
              src="/images/hero-kelly.jpg"
              alt="Fashion student portrait"
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
          <div className="absolute left-[24.2%] top-[50.5%] h-[49.5%] w-[32.2%] border border-magenta">
            <Image
              src="/images/hero-molly.jpg"
              alt="Student with sunglasses"
              fill
              sizes="230px"
              className="object-cover"
            />
          </div>
          <div className="absolute left-[5.9%] top-[2.7%] h-[61.3%] w-[39.8%] border border-magenta">
            <Image
              src="/images/hero-ayo.jpg"
              alt="Graphic design student at work"
              fill
              sizes="290px"
              className="object-cover"
            />
          </div>
          <div className="absolute left-[50.9%] top-[2.7%] h-[55.4%] w-[36.1%] border border-magenta">
            <Image
              src="/images/hero-ahmed.jpg"
              alt="Photography student holding a magazine"
              fill
              sizes="260px"
              className="object-cover"
            />
          </div>

          {TAGS.map((tag) => (
            <div
              key={tag.label}
              className="absolute flex items-center justify-center px-[12px] py-[9px]"
              style={{
                left: tag.left,
                top: tag.top,
                width: tag.w,
                transform: `rotate(${tag.rotate})`,
              }}
            >
              <span
                className={`${tag.bg} ${tag.text} flex h-[45px] w-full items-center justify-center px-[10px] text-[18px] font-black uppercase`}
              >
                {tag.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
