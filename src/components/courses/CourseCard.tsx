import Link from "next/link";
import type { Course } from "@/data/courses";
import { CourseVisual } from "@/components/courses/CourseVisual";
import { Badge } from "@/components/ui/Badge";

interface CardProps {
  course: Course;
}

export function FeatureCard({ course }: CardProps) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-card transition-colors hover:border-pink"
    >
      <CourseVisual course={course} className="h-56 md:h-full md:min-h-72" />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-meta uppercase tracking-wide text-text/50">
          {course.school}
        </span>
        <h3 className="text-cardtitle font-semibold text-white group-hover:text-pink">
          {course.shortTitle}
        </h3>
        <p className="text-default text-text/70">{course.tagline}</p>
      </div>
    </Link>
  );
}

export function StackedCard({ course }: CardProps) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex flex-1 items-center gap-4 rounded-card border border-border bg-card p-4 transition-colors hover:border-pink"
    >
      <CourseVisual course={course} className="h-20 w-20 shrink-0" />
      <div className="flex flex-col gap-1">
        <span className="text-meta uppercase tracking-wide text-text/50">
          {course.school}
        </span>
        <h3 className="text-default font-semibold text-white group-hover:text-pink">
          {course.shortTitle}
        </h3>
        <span className="text-meta text-text/60">{course.duration}</span>
      </div>
    </Link>
  );
}

export function ExpandedCard({ course }: CardProps) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-card-alt transition-colors hover:border-pink"
    >
      <CourseVisual course={course} className="h-40" />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap gap-2">
          <Badge>{course.school}</Badge>
          <Badge>{course.duration}</Badge>
        </div>
        <h3 className="text-cardtitle font-semibold text-white group-hover:text-pink">
          {course.shortTitle}
        </h3>
        <p className="text-default text-text/70">{course.summary}</p>
      </div>
    </Link>
  );
}

export function StripCard({ course }: CardProps) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex w-64 shrink-0 flex-col overflow-hidden rounded-card border border-border bg-card transition-colors hover:border-pink"
    >
      <CourseVisual course={course} className="h-36" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-meta uppercase tracking-wide text-text/50">
          {course.school}
        </span>
        <h3 className="text-default font-semibold text-white group-hover:text-pink">
          {course.shortTitle}
        </h3>
        <div className="mt-1 flex gap-2">
          <Badge>{course.level}</Badge>
          <Badge>{course.duration}</Badge>
        </div>
      </div>
    </Link>
  );
}
