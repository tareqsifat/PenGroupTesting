function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-card bg-white/5 ${className}`} />;
}

export function CoursesLoadingState() {
  return (
    <div aria-live="polite" aria-busy="true" className="flex flex-col gap-10">
      <div className="grid gap-6 lg:grid-cols-3">
        <Skeleton className="h-96" />
        <div className="flex flex-col gap-6">
          <Skeleton className="h-[9.5rem]" />
          <Skeleton className="h-[9.5rem]" />
        </div>
        <Skeleton className="h-96" />
      </div>
      <div className="flex gap-6 overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-64 w-64 shrink-0" />
        ))}
      </div>
    </div>
  );
}
