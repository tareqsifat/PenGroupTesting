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
        "rounded-pill border px-5 py-2 text-default transition-colors",
        active
          ? "border-pink bg-pink text-white"
          : "border-border bg-transparent text-text/70 hover:border-text/50 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}
