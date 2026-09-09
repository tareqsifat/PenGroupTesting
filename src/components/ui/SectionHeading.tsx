import { cx } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, className, light }: SectionHeadingProps) {
  return (
    <div className={cx("flex flex-col gap-4", className)}>
      <span className="text-[22px] font-bold uppercase leading-[1.2] text-magenta-light">
        {eyebrow}
      </span>
      <p
        className={cx(
          "text-[48px] font-semibold leading-[56px]",
          light ? "text-ice-blue" : "text-text"
        )}
      >
        {title}
      </p>
    </div>
  );
}
