import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CoursesHero } from "@/components/courses/CoursesHero";
import { ExploreCoursesClient } from "@/components/courses/ExploreCoursesClient";
import { CoursesGallerySection } from "@/components/courses/CoursesGallerySection";
import { getAllCourses, getSchools } from "@/data/courses";

export const metadata: Metadata = {
  title: "Explore Our Courses — VCAD",
  description:
    "Explore creative courses at VCAD across fashion, graphic design and business for creatives.",
};

export default function ExploreCoursesPage() {
  const courses = getAllCourses();
  const schools = getSchools();

  return (
    <>
      <Header />
      <main className="flex-1 bg-base">
        <CoursesHero />
        <section className="relative overflow-hidden bg-base px-6 py-16 md:px-20 md:py-[120px]">
          <div className="frame relative">
            <ExploreCoursesClient courses={courses} schools={schools} />
          </div>
        </section>
        <CoursesGallerySection courses={courses} />
      </main>
      <Footer variant="courses" />
    </>
  );
}
