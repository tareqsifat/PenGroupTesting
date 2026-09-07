import type { Course } from "@/data/courses";
import { Carousel } from "@/components/ui/Carousel";
import { StripCard } from "@/components/courses/CourseCard";

interface CoursesGalleryStripProps {
  courses: Course[];
}

export function CoursesGalleryStrip({ courses }: CoursesGalleryStripProps) {
  return (
    <Carousel>
      {courses.map((course) => (
        <StripCard key={course.slug} course={course} />
      ))}
    </Carousel>
  );
}
