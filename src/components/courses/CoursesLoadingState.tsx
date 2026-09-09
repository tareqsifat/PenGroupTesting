function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-card bg-white/5 ${className}`} />;
}

export function CoursesLoadingState() {
  return (
    <div aria-live="polite" aria-busy="true" className="flex flex-col gap-20">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
        <Skeleton className="h-64 flex-1 lg:h-[720px]" />
        <div className="flex flex-1 flex-col gap-6">
          <Skeleton className="h-40 lg:h-[343px]" />
          <Skeleton className="h-40 lg:h-[343px]" />
        </div>
        <Skeleton className="h-64 flex-1 lg:h-[720px]" />
      </div>
      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-[320px] w-[310px] shrink-0" />
        ))}
      </div>
    </div>
  );
}
