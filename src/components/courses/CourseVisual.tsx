import { cx, accentStyles } from "@/lib/utils";
import type { Course } from "@/data/courses";

interface CourseVisualProps {
  course: Course;
  className?: string;
}

/**
 * No photography was available from the Figma export (view-only tokens
 * page, no image assets), so course imagery is represented with an
 * accent-coloured gradient block instead of a photo. See README.
 */
export function CourseVisual({ course, className }: CourseVisualProps) {
  const accent = accentStyles[course.accent];

  return (
    <div
      className={cx(
        "relative flex items-end overflow-hidden rounded-card bg-gradient-to-br to-deep p-5",
        accent.from,
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_55%)]" />
      <span className="relative text-heading font-bold text-white/25">
        {course.shortTitle.charAt(0)}
      </span>
    </div>
  );
}
