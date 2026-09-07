"use client";

import { useEffect, useMemo, useState } from "react";
import type { Course } from "@/data/courses";
import { Pill } from "@/components/ui/Pill";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { CoursesGalleryStrip } from "@/components/courses/CoursesGalleryStrip";
import { CoursesLoadingState } from "@/components/courses/CoursesLoadingState";
import { CoursesEmptyState } from "@/components/courses/CoursesEmptyState";

interface ExploreCoursesClientProps {
  courses: Course[];
  schools: string[];
}

const ALL = "All schools";

export function ExploreCoursesClient({
  courses,
  schools,
}: ExploreCoursesClientProps) {
  const [activeSchool, setActiveSchoolState] = useState(ALL);
  const [isLoading, setIsLoading] = useState(false);

  function setActiveSchool(school: string) {
    setIsLoading(true);
    setActiveSchoolState(school);
  }

  // The designs don't show a loading state. Course data is local here,
  // but in production this filter would hit an API, so we simulate that
  // latency briefly on every filter change and render skeletons for it.
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [activeSchool]);

  const filtered = useMemo(() => {
    if (activeSchool === ALL) return courses;
    return courses.filter((c) => c.school === activeSchool);
  }, [courses, activeSchool]);

  return (
    <div className="flex flex-col gap-10">
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
        <Pill active={activeSchool === ALL} onClick={() => setActiveSchool(ALL)}>
          {ALL}
        </Pill>
        {schools.map((school) => (
          <Pill
            key={school}
            active={activeSchool === school}
            onClick={() => setActiveSchool(school)}
          >
            {school}
          </Pill>
        ))}
      </div>

      {isLoading ? (
        <CoursesLoadingState />
      ) : filtered.length === 0 ? (
        <CoursesEmptyState onReset={() => setActiveSchool(ALL)} />
      ) : (
        <div className="flex flex-col gap-16">
          <CourseGrid courses={filtered} />

          <div>
            <h2 className="mb-6 text-subheading font-semibold text-white">
              All courses
            </h2>
            <CoursesGalleryStrip courses={filtered} />
          </div>
        </div>
      )}
    </div>
  );
}
