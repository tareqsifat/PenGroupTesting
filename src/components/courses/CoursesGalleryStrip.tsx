import Image from "next/image";
import type { Course } from "@/data/courses";
import { Carousel } from "@/components/ui/Carousel";

interface CoursesGalleryStripProps {
  courses: Course[];
}

export function CoursesGalleryStrip({ courses }: CoursesGalleryStripProps) {
  return (
    <Carousel>
      {courses.map((course) => (
        <div
          key={course.slug}
          className="relative h-[320px] w-[310px] shrink-0 overflow-hidden rounded-card"
        >
          <Image
            src={course.visual.image}
            alt={course.visual.imageAlt}
            fill
            sizes="310px"
            className="object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
}
