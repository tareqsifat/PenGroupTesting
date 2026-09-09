import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function CourseSpecCta() {
  return (
    <section className="bg-card-alt px-6 py-8 md:px-20">
      <div className="frame flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <span className="flex size-[90px] shrink-0 items-center justify-center rounded-full bg-border">
            <Image src="/svg/icon-file.svg" alt="" width={40} height={40} />
          </span>
          <div className="flex max-w-[474px] flex-col gap-2">
            <p className="text-[24px] font-semibold leading-[32px] text-ice-blue">
              Course Specification
            </p>
            <p className="text-body text-ice-blue">
              Download the full course specification for detailed
              information.
            </p>
          </div>
        </div>
        <Button href="#" className="shrink-0">
          Download PDF
        </Button>
      </div>
    </section>
  );
}
