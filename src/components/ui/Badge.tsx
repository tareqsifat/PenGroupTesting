import { cx } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-badge bg-white/10 px-3 py-1 text-meta uppercase tracking-wide text-text backdrop-blur-sm",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Chip({ children, className }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-chip bg-navy px-2 py-1 text-micro uppercase tracking-wider text-sky",
        className
      )}
    >
      {children}
    </span>
  );
}
