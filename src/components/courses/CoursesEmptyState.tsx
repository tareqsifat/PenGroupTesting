import { Button } from "@/components/ui/Button";

interface CoursesEmptyStateProps {
  onReset: () => void;
}

export function CoursesEmptyState({ onReset }: CoursesEmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-card border border-dashed border-border bg-card/40 px-6 py-20 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-heading text-text/40">
        ?
      </span>
      <h3 className="text-cardtitle font-semibold text-white">
        No courses match that filter
      </h3>
      <p className="max-w-sm text-default text-text/70">
        Try a different school, or clear the filter to see everything VCAD
        offers.
      </p>
      <Button variant="secondary" onClick={onReset}>
        Clear filter
      </Button>
    </div>
  );
}
