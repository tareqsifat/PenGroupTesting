import Image from "next/image";
import Link from "next/link";
import { SectionGridLines } from "@/components/layout/SectionGridLines";
import { SOCIAL_ICON_PATHS } from "@/components/layout/socialIconPaths";

const NAV_COLUMNS = [
  ["ABOUT VCAD", "OUR STORY", "CAMPUSES", "POLICIES"],
  ["CAREER", "OUR PARTNERS", "COOKIES POLICY", "FAQS"],
];

const SOCIALS = [
  { name: "Facebook", key: "facebook" },
  { name: "Twitter / X", key: "twitter" },
  { name: "LinkedIn", key: "linkedin" },
  { name: "Instagram", key: "instagram" },
  { name: "YouTube", key: "youtube" },
  { name: "TikTok", key: "tiktok" },
];

const ACCREDITATIONS = [
  { name: "AdvanceHE Affiliate Member", icon: "/images/accred-advancehe.png", w: 116, h: 56 },
  { name: "QAA Member", icon: "/images/accred-qaa.png", w: 50, h: 56 },
  { name: "Cyber Essentials Certified", icon: "/images/accred-cyber.png", w: 49, h: 56 },
];

interface FooterProps {
  /**
   * The courses page's footer differs from the homepage's: 68px headline,
   * links prefixed with "/", no accreditation badges, and its own arc
   * placement.
   */
  variant?: "home" | "courses";
}

export function Footer({ variant = "home" }: FooterProps) {
  const isCourses = variant === "courses";

  return (
    <footer className="relative overflow-hidden bg-deep px-6 py-[60px] md:px-20">
      <SectionGridLines />

      {/* The arcs again at 72.95% scale (675.965 x 430.16), rotated 131.19deg
          and flipped on Y. Rotated bbox 768.857 x 791.977 at
          calc(66.67% - 28.44px), -192.97 -> centre calc(66.67% + 355.99px),
          203.02, at 0.12 opacity. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/circles-footer.svg"
        alt=""
        aria-hidden
        className={
          isCourses
            ? // Courses variant — 528.943 x 336.6, bbox 601.63 x 619.721 at
              // calc(66.67% + 22.31px), -116.06 -> centre 1283.18, 193.8.
              "pointer-events-none absolute left-[calc(66.67vw+322.51px)] top-[193.8px] hidden h-[336.6px] w-[528.943px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[131.19deg] -scale-y-100 lg:block"
            : "pointer-events-none absolute left-[calc(66.67vw+355.99px)] top-[203.02px] hidden h-[430.16px] w-[675.965px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[131.19deg] -scale-y-100 lg:block"
        }
      />
      <div className="frame relative flex flex-col gap-11">
        <div className="flex flex-col gap-6">
          <Image
            src="/svg/logo-mark.svg"
            alt="VCAD"
            width={103}
            height={102}
            className="h-[70px] w-[71px] md:h-[102px] md:w-[103px]"
          />

          <div className="flex flex-col gap-10">
            <p
              className={`max-w-4xl text-[32px] font-bold leading-[1.1] text-text ${
                isCourses
                  ? "md:text-[68px] md:leading-[74px]"
                  : "md:text-[64px] md:leading-[70px]"
              }`}
            >
              Get creative and{" "}
              <span className="text-magenta">turn your passion</span> for the
              Arts into a rewarding career.
            </p>
            <div className="h-px w-full bg-border" />
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="flex flex-col gap-11">
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="flex size-10 items-center justify-center rounded-pill border-x-0 border-y border-white/40 bg-white/10 text-[#ebedee] transition-colors hover:border hover:border-[#fafdff] hover:bg-white hover:text-[#033d61]"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    {SOCIAL_ICON_PATHS[s.key].map((d) => (
                      <path key={d.slice(0, 24)} d={d} />
                    ))}
                  </svg>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-6 text-default font-medium text-text sm:flex-row sm:gap-14">
              {NAV_COLUMNS.map((col, i) => (
                <ul key={i} className="flex flex-col gap-6">
                  {col.map((label) => (
                    <li key={label}>
                      <Link href="/" className="hover:text-pink">
                        {isCourses ? `/ ${label}` : label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <a
              href="mailto:enquiry_office@vcad.co.uk"
              className="text-[28px] font-semibold leading-[1.1] text-[#f0f2f4] hover:text-pink md:text-[36px] md:leading-[40px]"
            >
              enquiry_office@vcad.co.uk
            </a>
            <a href="tel:02032789857" className="text-lead font-medium text-text hover:text-pink">
              020 3278 9857
            </a>
            <div className={`items-center gap-3 ${isCourses ? "hidden" : "flex"}`}>
              {ACCREDITATIONS.map((a) => (
                <Image
                  key={a.name}
                  src={a.icon}
                  alt={a.name}
                  width={a.w}
                  height={a.h}
                  className="h-[56px] w-auto"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-border" />

        <div className="flex flex-col gap-2 text-default text-text sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Victoria College of Arts and Design.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
