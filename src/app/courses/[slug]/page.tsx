import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
      <Header variant="inner" />
      <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-base px-6 py-32 text-center">
        <p className="text-[32px] font-semibold text-ice-blue">Page coming soon</p>
        <p className="max-w-md text-lead text-text/80">
          This course details page is intentionally left blank.
        </p>
        <Link href="/courses" className="mt-4 underline text-ice-blue">
          Back to Courses
        </Link>
      </main>
      <Footer />
    </>
  );
}
