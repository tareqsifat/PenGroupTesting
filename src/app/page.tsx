import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedCoursesCarousel } from "@/components/home/FeaturedCoursesCarousel";
import { SchoolsCarousel } from "@/components/home/SchoolsCarousel";
import { CtaSection } from "@/components/home/CtaSection";
import { getAllCourses, getFeaturedCourses } from "@/data/courses";

export default function Home() {
  const featured = getFeaturedCourses();
  const allCourses = getAllCourses();

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedCoursesCarousel courses={featured} />
        <SchoolsCarousel courses={allCourses} />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
