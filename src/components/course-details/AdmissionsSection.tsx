"use client";

import { useState } from "react";
import type { Course } from "@/data/courses";

interface AdmissionsSectionProps {
  course: Course;
}

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {!open && (
        <path
          d="M12 5v14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function RouteAccordion({ course }: { course: Course }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-1 flex-col gap-2">
      {course.admissionsRoutes.map((route, i) => {
        const isOpen = open === i;
        return (
          <div key={route.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-4 px-6 py-6 text-left text-lead font-semibold text-ice-blue ${
                isOpen ? "bg-card-alt" : "bg-card-alt/60"
              }`}
            >
              <span>{route.title}</span>
              <PlusMinusIcon open={isOpen} />
            </button>
            {isOpen && (
              <div className="flex flex-col gap-5 bg-card px-9 py-6 text-body leading-[1.6] text-ice-blue">
                {route.body.map((line, j) =>
                  j === 2 && route.body.length > 3 ? (
                    <p key={j} className="font-semibold">
                      {line}
                    </p>
                  ) : (
                    <p key={j}>{line}</p>
                  )
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function KeyDetailsAccordion({ course }: { course: Course }) {
  const items = [
    { title: "/ Entry Requirements", body: course.entryRequirements },
    { title: "/ English Language Requirements", body: course.englishRequirements },
    { title: "/ Additional Info", body: ["Contact admissions for anything not covered here — enquiry_office@vcad.co.uk."] },
  ];
  const [open, setOpen] = useState(0);

  return (
    <div className="flex w-full flex-col gap-[8px] lg:w-[319px]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-2 px-4 py-6 text-left text-lead text-white ${
                isOpen ? "bg-plum" : "bg-card-alt"
              }`}
            >
              <span>{item.title}</span>
            </button>
            {isOpen && (
              <ul className="flex flex-col gap-3 bg-card px-6 py-5 text-default text-ice-blue">
                {item.body.map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function AdmissionsSection({ course }: AdmissionsSectionProps) {
  return (
    <section
      id="admissions"
      className="scroll-mt-24 bg-base px-6 pb-16 pt-8 md:px-20 md:pb-[100px] md:pt-12"
    >
      <div className="frame flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-[32px] font-semibold leading-[40px] text-white">
            Admissions & Key Details
          </p>
          <p className="text-lead text-ice-blue">
            Everything you need to know about applying and studying
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
          <RouteAccordion course={course} />
          <KeyDetailsAccordion course={course} />
        </div>
      </div>
    </section>
  );
}
