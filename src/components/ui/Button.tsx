import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants = {
  primary: "bg-pink text-white hover:bg-magenta",
  secondary:
    "bg-transparent text-text border border-border hover:border-text",
  ghost: "bg-white/5 text-text hover:bg-white/10",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cx(
    "inline-flex items-center justify-center gap-2 rounded-badge px-6 py-3 text-default font-medium transition-colors",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
