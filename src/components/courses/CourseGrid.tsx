import type { Course } from "@/data/courses";
import { FeatureCard, StackedCard, ExpandedCard } from "@/components/courses/CourseCard";

interface CourseGridProps {
  courses: Course[];
}

/**
 * Asymmetric grid per the brief: one large feature card, two stacked
 * cards, one expanded card with school + duration badges. Reproducing
 * this layout with fewer than 4 courses gracefully drops the missing
 * slots rather than breaking the grid.
 */
export function CourseGrid({ courses }: CourseGridProps) {
  const [feature, stacked1, stacked2, expanded] = courses;

  if (!feature) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <FeatureCard course={feature} />

      {(stacked1 || stacked2) && (
        <div className="flex flex-col gap-6">
          {stacked1 && <StackedCard course={stacked1} />}
          {stacked2 && <StackedCard course={stacked2} />}
        </div>
      )}

      {expanded && <ExpandedCard course={expanded} />}
    </div>
  );
}
