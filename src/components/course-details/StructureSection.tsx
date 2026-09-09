"use client";

import { useState } from "react";
import type { Course } from "@/data/courses";
import { Pill } from "@/components/ui/Pill";

interface StructureSectionProps {
  course: Course;
}

export function StructureSection({ course }: StructureSectionProps) {
  const [activeYear, setActiveYear] = useState(0);
  const [openModule, setOpenModule] = useState<number | null>(0);
  const yearGroup = course.yearGroups[activeYear];

  return (
    <section
      id="structure"
      className="scroll-mt-24 bg-base px-6 pb-8 pt-10 md:px-20 md:pb-12 md:pt-[60px]"
    >
      <div className="frame flex flex-col items-center gap-6 rounded-[32px] border-2 border-border p-6 md:p-12">
        <div className="no-scrollbar flex gap-2 overflow-x-auto rounded-pill border border-border bg-card p-2">
          {course.yearGroups.map((group, i) => (
            <Pill key={group.year} active={activeYear === i} onClick={() => setActiveYear(i)}>
              / {group.year}
            </Pill>
          ))}
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-body text-ice-blue">Modules may include</p>
          <p className="text-[28px] font-semibold tracking-[0.84px] text-ice-blue">
            Core Modules
          </p>
        </div>

        <div className="flex w-full flex-col">
          <div className="h-px w-full bg-border" />
          {yearGroup.modules.length === 0 ? (
            <p className="py-10 text-center text-body text-pale-blue">
              Module details for {yearGroup.year.toLowerCase()} are confirmed
              closer to enrolment.
            </p>
          ) : (
            yearGroup.modules.map((module, i) => {
              const isOpen = openModule === i;
              return (
                <div key={module.code} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpenModule(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex flex-wrap items-center gap-3 sm:gap-12">
                      <span className="text-[24px] font-bold uppercase text-text">
                        /{String(i + 1).padStart(2, "0")}/
                      </span>
                      <span className="flex flex-wrap items-center gap-[13px]">
                        <span className="text-[24px] font-medium text-ice-blue">
                          {module.title}
                        </span>
                        <span className="text-body text-text">
                          [ {module.code} • {module.credits} credits ]
                        </span>
                      </span>
                    </span>
                    <span
                      className={`flex size-[56px] shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen ? "bg-plum text-white" : "border border-border bg-card text-text"
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={isOpen ? "rotate-90" : ""}
                      >
                        <path
                          d="M9 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <p className="max-w-4xl pb-6 text-body leading-[1.6] text-ice-blue">
                      {module.description}
                    </p>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
