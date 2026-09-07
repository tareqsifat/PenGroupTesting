"use client";

import { useState } from "react";
import { cx } from "@/lib/utils";

interface AccordionItem {
  title: string;
  description: string;
  meta?: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.title}
            className="overflow-hidden rounded-card border border-border bg-card"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
            >
              <span className="flex flex-col gap-0.5">
                <span className="text-default font-semibold text-white">
                  {item.title}
                </span>
                {item.meta && (
                  <span className="text-meta text-text/50">{item.meta}</span>
                )}
              </span>
              <span
                className={cx(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-text/70 transition-transform",
                  isOpen && "rotate-45 border-pink text-pink"
                )}
              >
                +
              </span>
            </button>
            <div
              className={cx(
                "grid transition-all duration-200",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-default text-text/70">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
