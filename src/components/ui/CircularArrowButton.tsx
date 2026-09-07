import { cx } from "@/lib/utils";

interface CircularArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
  label: string;
}

export function CircularArrowButton({
  direction,
  onClick,
  disabled,
  label,
}: CircularArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cx(
        "flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-text transition-colors",
        "hover:border-pink hover:text-pink disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text"
      )}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={direction === "left" ? "rotate-180" : ""}
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
