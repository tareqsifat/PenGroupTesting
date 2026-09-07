export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const accentStyles = {
  pink: {
    bg: "bg-pink",
    text: "text-pink",
    from: "from-pink",
    ring: "ring-pink",
    softBg: "bg-pink/15",
  },
  magenta: {
    bg: "bg-magenta",
    text: "text-magenta-light",
    from: "from-magenta",
    ring: "ring-magenta",
    softBg: "bg-magenta/15",
  },
  blue: {
    bg: "bg-blue",
    text: "text-blue",
    from: "from-blue",
    ring: "ring-blue",
    softBg: "bg-blue/15",
  },
  cyan: {
    bg: "bg-cyan",
    text: "text-cyan",
    from: "from-cyan",
    ring: "ring-cyan",
    softBg: "bg-cyan/15",
  },
  plum: {
    bg: "bg-plum",
    text: "text-magenta-light",
    from: "from-plum",
    ring: "ring-plum",
    softBg: "bg-plum/20",
  },
  sky: {
    bg: "bg-sky",
    text: "text-sky",
    from: "from-sky",
    ring: "ring-sky",
    softBg: "bg-sky/15",
  },
} as const;
