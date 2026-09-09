import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function ReadyToApplyCta() {
  return (
    <section className="relative overflow-hidden bg-card-alt px-6 py-16 md:px-20">
      <Image
        src="/svg/cta-shape-left.svg"
        alt=""
        width={384}
        height={340}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-[220px] w-[248px] opacity-40 md:h-[340px] md:w-[384px]"
      />
      <Image
        src="/svg/cta-shape-right.svg"
        alt=""
        width={324}
        height={340}
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[220px] w-[209px] opacity-40 md:h-[340px] md:w-[324px]"
      />
      <div className="frame relative flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[36px] font-bold leading-[40px] text-white">
            Ready to Apply?
          </p>
          <p className="text-lead text-ice-blue">
            Take the next step in your creative journey and join Victoria
            College of Arts and Design.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Button href="/courses">Apply Now</Button>
          <Button href="/" variant="solid">
            Get more info
          </Button>
        </div>
      </div>
    </section>
  );
}
