/**
 * Purely decorative circular arrow badge shown on course cards — the whole
 * card is already the clickable link (`CourseGrid`), so this mirrors the
 * design without being a nested interactive control.
 *
 * 78px, pinned flush into the card's bottom-right corner, default
 * #051251 / #384584 turning fuchsia (#912491) on hover — the fuchsia card in
 * the design is that hover state, not a second variant.
 *
 * The card has a circle punched out around this badge: a 102px hole centred on
 * it, leaving a 12px gap of page background around the button. That hole is a
 * mask on the card itself (`CORNER_CUT` in CourseGrid), so this badge only
 * needs to sit in it.
 */
export function CircularArrowButton() {
  return (
    <span
      aria-hidden
      className="absolute -bottom-[12px] -right-[12px] z-10 flex size-[102px] items-center justify-center rounded-full"
    >
      <span className="flex size-[78px] items-center justify-center rounded-full border border-border bg-card text-white transition-colors group-hover:border-plum group-hover:bg-plum">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );
}
