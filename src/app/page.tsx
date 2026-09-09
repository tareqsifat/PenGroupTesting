import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { CoursesShowcase } from "@/components/home/CoursesShowcase";
import { QuoteSection } from "@/components/home/QuoteSection";
import { CampusesCarousel } from "@/components/home/CampusesCarousel";
import { PartnersSection } from "@/components/home/PartnersSection";
import { StoriesCarousel } from "@/components/home/StoriesCarousel";
import { TestimonialCarousel } from "@/components/shared/TestimonialCarousel";
import { getFeaturedCourses } from "@/data/courses";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  const featured = getFeaturedCourses();

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <CoursesShowcase courses={featured} />
        <QuoteSection />
        <CampusesCarousel />
        <TestimonialCarousel testimonials={testimonials} />
        <PartnersSection />
        <StoriesCarousel />
      </main>
      <Footer />
    </>
  );
}
