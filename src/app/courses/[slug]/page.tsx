import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CourseVisual } from "@/components/courses/CourseVisual";
import { CourseDetailsTabs } from "@/components/course-details/CourseDetailsTabs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getAllCourses, getCourseBySlug } from "@/data/courses";

interface CourseDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCourses().map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: CourseDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} — VCAD`,
    description: course.summary,
  };
}

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="frame grid gap-10 px-6 pt-16 pb-10 md:grid-cols-2 md:px-10 md:pt-20">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              <Badge>{course.school}</Badge>
              <Badge>{course.level}</Badge>
              <Badge>{course.duration}</Badge>
            </div>
            <h1 className="text-pagetitle font-bold text-white">
              {course.title}
            </h1>
            <p className="max-w-lg text-lead text-text/70">
              {course.tagline}
            </p>
            <div>
              <Button href="/courses">Apply now</Button>
            </div>
          </div>
          <CourseVisual course={course} className="h-64 md:h-full" />
        </section>

        <section className="frame border-t border-border/60 px-6 py-14 md:px-10">
          <CourseDetailsTabs course={course} />
        </section>
      </main>
      <Footer />
    </>
  );
}
