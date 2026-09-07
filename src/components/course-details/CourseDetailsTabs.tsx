"use client";

import { useState } from "react";
import type { Course } from "@/data/courses";
import { Pill } from "@/components/ui/Pill";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";

interface CourseDetailsTabsProps {
  course: Course;
}

const TABS = ["Overview", "Curriculum", "Entry Requirements", "Careers"] as const;

export function CourseDetailsTabs({ course }: CourseDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>(
    "Overview"
  );

  return (
    <div className="flex flex-col gap-8">
      <div
        role="tablist"
        aria-label="Course details"
        className="no-scrollbar flex gap-3 overflow-x-auto pb-2"
      >
        {TABS.map((tab) => (
          <Pill
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Pill>
        ))}
      </div>

      {activeTab === "Overview" && (
        <div className="flex flex-col gap-6">
          <p className="max-w-3xl text-body text-text/80">
            {course.description}
          </p>

          <dl className="grid gap-4 rounded-card border border-border bg-card p-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-meta uppercase tracking-wide text-text/50">
                Awarding body
              </dt>
              <dd className="mt-1 text-default text-white">
                {course.awardingBody}
              </dd>
            </div>
            <div>
              <dt className="text-meta uppercase tracking-wide text-text/50">
                Tuition
              </dt>
              <dd className="mt-1 text-default text-white">
                {course.tuitionFee}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-meta uppercase tracking-wide text-text/50">
                Campuses
              </dt>
              <dd className="mt-1 text-default text-white">
                {course.campuses.join(" · ")}
              </dd>
            </div>
          </dl>

          <div>
            <h3 className="mb-3 text-cardtitle font-semibold text-white">
              Highlights
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {course.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-card border border-border bg-card px-4 py-3 text-default text-text/80"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-cardtitle font-semibold text-white">
              Start dates
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.startDates.map((date) => (
                <Badge key={date}>{date}</Badge>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "Curriculum" && (
        <div className="max-w-3xl">
          <Accordion
            items={course.modules.map((m) => ({
              title: m.title,
              description: m.description,
              meta: `${m.code} · ${m.credits} credits`,
            }))}
          />
        </div>
      )}

      {activeTab === "Entry Requirements" && (
        <ul className="flex max-w-2xl flex-col gap-3">
          {course.entryRequirements.map((requirement) => (
            <li
              key={requirement}
              className="rounded-card border border-border bg-card px-4 py-3 text-default text-text/80"
            >
              {requirement}
            </li>
          ))}
        </ul>
      )}

      {activeTab === "Careers" && (
        <div className="flex flex-wrap gap-3">
          {course.careers.map((career) => (
            <span
              key={career}
              className="rounded-badge border border-border bg-card px-4 py-2 text-default text-text/80"
            >
              {career}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
