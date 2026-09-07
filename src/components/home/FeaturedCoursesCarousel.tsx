import type { Course } from "@/data/courses";
import { Carousel } from "@/components/ui/Carousel";
import { StripCard } from "@/components/courses/CourseCard";

interface FeaturedCoursesCarouselProps {
  courses: Course[];
}

export function FeaturedCoursesCarousel({
  courses,
}: FeaturedCoursesCarouselProps) {
  return (
    <section className="frame px-6 py-16 md:px-10">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <span className="text-meta uppercase tracking-wide text-pink">
            Featured
          </span>
          <h2 className="mt-2 text-subheading font-semibold text-white">
            Popular courses
          </h2>
        </div>
      </div>
      <Carousel>
        {courses.map((course) => (
          <StripCard key={course.slug} course={course} />
        ))}
      </Carousel>
    </section>
  );
}
