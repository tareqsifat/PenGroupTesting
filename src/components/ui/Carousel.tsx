"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { CircularArrowButton } from "@/components/ui/CircularArrowButton";

interface CarouselProps {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  showArrows?: boolean;
}

export function Carousel({
  children,
  className,
  showArrows = true,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    const observer = new ResizeObserver(updateArrows);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      observer.disconnect();
    };
  }, [updateArrows]);

  const scrollByAmount = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const el = trackRef.current;
    if (!el) return;
    const delta = e.clientX - dragStart.current.x;
    el.scrollLeft = dragStart.current.scrollLeft - delta;
  };

  const endDrag = () => {
    isDragging.current = false;
  };

  return (
    <div className={className}>
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="no-scrollbar flex cursor-grab gap-6 overflow-x-auto scroll-smooth active:cursor-grabbing"
      >
        {children}
      </div>

      {showArrows && (
        <div className="mt-6 flex items-center gap-[5px]">
          <CircularArrowButton
            direction="left"
            label="Scroll left"
            onClick={() => scrollByAmount(-1)}
            disabled={!canScrollLeft}
          />
          <CircularArrowButton
            direction="right"
            label="Scroll right"
            onClick={() => scrollByAmount(1)}
            disabled={!canScrollRight}
          />
        </div>
      )}
    </div>
  );
}
