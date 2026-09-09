import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "solid" | "ghost";
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "border border-text bg-card text-text hover:border-plum hover:text-white",
  solid: "bg-plum text-white hover:bg-magenta",
  ghost: "bg-white/10 text-text hover:bg-white/20",
};

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  showArrow = true,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cx(
    "inline-flex items-center justify-between gap-7 p-4 text-default font-medium transition-colors",
    variants[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowIcon />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
