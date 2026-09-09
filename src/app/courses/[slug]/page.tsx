import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CourseHero } from "@/components/course-details/CourseHero";
import { CourseStats } from "@/components/course-details/CourseStats";
import { CourseSectionNav } from "@/components/course-details/CourseSectionNav";
import { StructureSection } from "@/components/course-details/StructureSection";
import { AdmissionsSection } from "@/components/course-details/AdmissionsSection";
import { CourseSpecCta } from "@/components/course-details/CourseSpecCta";
import { ReadyToApplyCta } from "@/components/course-details/ReadyToApplyCta";
import { TestimonialCarousel } from "@/components/shared/TestimonialCarousel";
import { getAllCourses, getCourseBySlug } from "@/data/courses";
import { testimonials } from "@/data/testimonials";

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
      <main className="flex-1 bg-base">
        <CourseHero course={course} />
        <CourseSectionNav />
        <CourseStats course={course} />
        <StructureSection course={course} />
        <AdmissionsSection course={course} />
        <CourseSpecCta />
        <ReadyToApplyCta />
        <TestimonialCarousel testimonials={testimonials} bg="deep" />
      </main>
      <Footer />
    </>
  );
}
