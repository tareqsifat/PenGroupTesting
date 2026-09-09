import { cx } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function Pill({ children, active, onClick }: PillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cx(
        "rounded-pill border px-5 py-3 text-lead transition-colors",
        active
          ? "border-transparent bg-plum text-white"
          : "border-transparent bg-transparent text-text/80 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}
