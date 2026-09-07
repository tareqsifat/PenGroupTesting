import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExploreCoursesClient } from "@/components/courses/ExploreCoursesClient";
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
      <main className="flex-1">
        <section className="frame px-6 pt-16 pb-10 md:px-10">
          <span className="text-meta uppercase tracking-wide text-pink">
            Courses
          </span>
          <h1 className="mt-3 text-pagetitle font-bold text-white">
            Explore Our Courses
          </h1>
          <p className="mt-4 max-w-2xl text-lead text-text/70">
            Every course VCAD offers, modelled from a single source of data.
            Filter by school, or browse the full gallery below.
          </p>
        </section>

        <section className="frame px-6 pb-20 md:px-10">
          <ExploreCoursesClient courses={courses} schools={schools} />
        </section>
      </main>
      <Footer />
    </>
  );
}
