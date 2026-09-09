import Image from "next/image";
import type { Course } from "@/data/courses";

interface CourseStatsProps {
  course: Course;
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex h-[250px] flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card-alt px-6 text-center">
      <Image src={icon} alt="" width={32} height={32} aria-hidden />
      <span className="text-[20px] font-semibold text-white">{label}</span>
      <span className="text-[14px] text-pale-blue-2">{value}</span>
    </div>
  );
}

export function CourseStats({ course }: CourseStatsProps) {
  const stats = [
    { icon: "/svg/icon-calendar.svg", label: "Start Date", value: course.startDates.join(", ") },
    { icon: "/svg/icon-clock.svg", label: "Duration", value: course.duration },
    { icon: "/svg/icon-clock.svg", label: "Study Mode", value: course.studyMode },
    { icon: "/svg/icon-calendar.svg", label: "Locations", value: course.campuses[0] ?? "—" },
    { icon: "/svg/icon-clock.svg", label: "Tuition Fee (UK)", value: course.tuitionFee },
    { icon: "/svg/icon-clock.svg", label: "Awarding Body", value: course.awardingBody },
  ];

  return (
    <section className="bg-base px-6 pb-16 md:px-20">
      <div className="frame flex flex-col items-center gap-3 text-center">
        <p className="text-[32px] font-semibold leading-[40px] text-white">
          Course Information
        </p>
        <p className="mb-6 text-lead text-ice-blue">
          Everything you need to know about this course at a glance
        </p>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
