export type AccentColor = "pink" | "magenta" | "blue" | "cyan" | "plum" | "sky";

export interface CourseModule {
  title: string;
  code: string;
  credits: number;
  description: string;
}

export interface CourseYearGroup {
  /** e.g. "Foundation Year", "First Year", "Second Year", "Third Year" */
  year: string;
  modules: CourseModule[];
}

export interface AdmissionsRoute {
  title: string;
  body: string[];
}

export interface CourseVisual {
  /** Public path to the photo used as this course's card/hero image. */
  image: string;
  imageAlt: string;
}

export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  school: string;
  level: string;
  duration: string;
  studyMode: string;
  accent: AccentColor;
  visual: CourseVisual;
  /** Two extra photos for the hero's 3-photo row, alongside `visual`. */
  heroGallery?: CourseVisual[];
  campuses: string[];
  awardingBody: string;
  tuitionFee: string;
  summary: string;
  description: string;
  highlights: string[];
  /** Flat list, used on the courses grid / overview tab. */
  entryRequirements: string[];
  /** Full admissions breakdown, used on the course details "Admissions & Key Details" tab. */
  admissionsRoutes: AdmissionsRoute[];
  englishRequirements: string[];
  /** Curriculum grouped by year, used on the "Course Structure & Details" tab. */
  yearGroups: CourseYearGroup[];
  careers: string[];
  startDates: string[];
  featured?: boolean;
}

const standardPortfolioRoute: AdmissionsRoute = {
  title: "Standard Academic Route",
  body: [
    "72 UCAS tariff points (or above) or a 60-credit Ofqual qualification at Level 3.",
    "For international qualifications, ECCTIS (formerly NARIC) is used to establish equivalence to their comparable level in the UK.",
    "All applicants must submit a personal portfolio, using any one of the following formats:",
    "A video or audio recording — using speech, animation, images, or any other appropriate content. Between one and two minutes in length.",
    "A digital portfolio of images and writing using Word, Canva, PowerPoint or any other suitable software.",
    "In the portfolio, applicants should clearly evidence and explain why they wish to study their chosen subject and how they believe their studies can positively impact their lives in the future.",
  ],
};

const nonStandardRoute: AdmissionsRoute = {
  title: "Non-standard Academic Route",
  body: [
    "Applicants without standard qualifications are considered individually via an admissions interview.",
    "Relevant work experience, a mature-student personal statement, or portfolio evidence can all support an application.",
  ],
};

const documentsRequired: AdmissionsRoute = {
  title: "Documents Required",
  body: [
    "A completed application form and personal statement.",
    "Proof of identity (passport or national ID) and, for international applicants, proof of right to study in the UK.",
    "Academic transcripts or certificates for all qualifications listed on the application.",
  ],
};

const additionalAdmissionsInfo: AdmissionsRoute = {
  title: "Additional Info",
  body: [
    "Offers are made on a rolling basis — applying early is recommended as places are limited per intake.",
    "Applicants may be invited to an informal interview or portfolio review as part of the decision process.",
  ],
};

const standardEnglishRequirements = [
  "IELTS 6.0 overall, with no component below 5.5, or an equivalent Secure English Language Test.",
  "Applicants who completed a prior qualification taught and assessed in English may be exempt — evidence is assessed case by case.",
];

const foundationYearModules: CourseModule[] = [
  {
    title: "Fundamentals",
    code: "FD01",
    credits: 30,
    description:
      "Core creative, academic and professional skills that underpin the rest of the course.",
  },
  {
    title: "Thinking Through Making",
    code: "FD02",
    credits: 30,
    description:
      "Developing ideas through hands-on making and iterative practice.",
  },
  {
    title: "Developing Specialist Practice",
    code: "FD03",
    credits: 30,
    description:
      "Building subject-specific methods and a personal design practice.",
  },
  {
    title: "Specialist Project",
    code: "FD04",
    credits: 30,
    description:
      "A self-initiated project encouraging autonomy and creative authorship.",
  },
];

/**
 * The design only details the foundation year of the curriculum (modules
 * FD01–FD04) plus a "First / Second / Third Year" tab strip with no content
 * behind it. Rather than invent specific module titles for years the design
 * doesn't specify, later years show a short "confirmed closer to enrolment"
 * placeholder — see README for this call.
 */
function yearGroupsFor(foundationModules: CourseModule[]): CourseYearGroup[] {
  return [
    { year: "Foundation Year", modules: foundationModules },
    { year: "First Year", modules: [] },
    { year: "Second Year", modules: [] },
    { year: "Third Year", modules: [] },
  ];
}

/**
 * Modelled on VCAD's real course offering (vcad.ac.uk/study-with-us),
 * since the design carried no course content of its own. Course
 * copy is paraphrased from the public course pages; module codes and
 * credit values are quoted directly. See README.
 */
export const courses: Course[] = [
  {
    slug: "graphic-design",
    title: "BA (Hons) Graphic Design with Foundation Year",
    shortTitle: "Graphic Design",
    tagline: "Foundation-year entry into a creative, technical design practice.",
    school: "Graphic Design",
    level: "BA (Hons)",
    duration: "4 Years",
    studyMode: "Full Time",
    accent: "pink",
    featured: true,
    visual: { image: "/images/course-2.jpg", imageAlt: "Graphic design students reviewing layouts together" },
    heroGallery: [
      { image: "/images/hero-ahmed.jpg", imageAlt: "Graphic design student at work" },
      { image: "/images/gallery-2.png", imageAlt: "Student reading a design reference book" },
    ],
    campuses: ["London — Canary Wharf", "Manchester — International House"],
    awardingBody: "Arts University Plymouth",
    tuitionFee: "£9,790",
    summary:
      "A foundation-year route into graphic design, building academic and professional skills before specialising into self-initiated project work.",
    description:
      "The course integrates theoretical, practical and technical elements, starting with foundational skills and subject-specific methodologies before students advance into specialisation with self-initiated projects that encourage autonomy and creative authorship.",
    highlights: [
      "Foundation year designed for students without a traditional portfolio route",
      "Progresses into self-initiated, specialist project work",
      "Awarded by Arts University Plymouth",
    ],
    entryRequirements: standardPortfolioRoute.body.slice(0, 3),
    admissionsRoutes: [standardPortfolioRoute, nonStandardRoute, documentsRequired, additionalAdmissionsInfo],
    englishRequirements: standardEnglishRequirements,
    yearGroups: yearGroupsFor(foundationYearModules),
    careers: ["Graphic Designer", "Brand Designer", "Art Director", "Digital Designer"],
    startDates: ["November", "February"],
  },
  {
    slug: "fashion-design",
    title: "BA (Hons) Fashion Design with Foundation Year",
    shortTitle: "Fashion Design",
    tagline: "Creative practice in fashion, from foundation to specialist project.",
    school: "Fashion",
    level: "BA (Hons)",
    duration: "4 Years",
    studyMode: "Full Time",
    accent: "magenta",
    featured: true,
    visual: { image: "/images/hero-kelly.jpg", imageAlt: "Fashion design student with a striking silhouette" },
    heroGallery: [
      { image: "/images/gallery-2.png", imageAlt: "Fashion student reading a design reference book" },
      { image: "/images/hero-ayo.jpg", imageAlt: "Fashion design student at work" },
    ],
    campuses: ["London — Canary Wharf"],
    awardingBody: "Arts University Plymouth",
    tuitionFee: "£9,790",
    summary:
      "Introduces creative fashion practice through theoretical, practical and technical work, building toward independent, self-directed projects.",
    description:
      "Students progress through stages that build foundational skills, subject methodologies, specialisation and independent learning, with a particular focus on analytical and academic writing alongside project management skills needed in professional fashion practice.",
    highlights: [
      "Foundation year with no traditional portfolio required to apply",
      "Strong focus on project management alongside design practice",
      "Awarded by Arts University Plymouth",
    ],
    entryRequirements: standardPortfolioRoute.body.slice(0, 3),
    admissionsRoutes: [standardPortfolioRoute, nonStandardRoute, documentsRequired, additionalAdmissionsInfo],
    englishRequirements: standardEnglishRequirements,
    yearGroups: yearGroupsFor(foundationYearModules),
    careers: ["Fashion Designer", "Garment Technologist", "Stylist", "Design Assistant"],
    startDates: ["November", "February"],
  },
  {
    slug: "fashion-media-and-marketing",
    title: "BA (Hons) Fashion Media and Marketing with Foundation Year",
    shortTitle: "Fashion Media & Marketing",
    tagline: "Where fashion creative practice meets media and marketing.",
    school: "Fashion",
    level: "BA (Hons)",
    duration: "4 Years",
    studyMode: "Full Time",
    accent: "plum",
    featured: true,
    visual: { image: "/images/course-1.jpg", imageAlt: "Fashion media and marketing students at a photoshoot" },
    heroGallery: [
      { image: "/images/hero-molly.jpg", imageAlt: "Fashion media student at work" },
      { image: "/images/gallery-4.png", imageAlt: "Students reviewing marketing materials together" },
    ],
    campuses: ["London — Canary Wharf", "Manchester — International House"],
    awardingBody: "Arts University Plymouth",
    tuitionFee: "£9,790",
    summary:
      "A foundation in creative practice that integrates theory, practice and technical skill, preparing students for professional media and marketing roles in fashion.",
    description:
      "The curriculum emphasises reflection, creative thinking and technical skills across foundation, specialist and advanced units, preparing students for professional practice across fashion media and marketing.",
    highlights: [
      "Combines fashion practice with media and marketing skill-building",
      "Portfolio optional at application — but strengthens your case",
      "Three intakes a year, across two campuses",
    ],
    entryRequirements: standardPortfolioRoute.body.slice(0, 3),
    admissionsRoutes: [standardPortfolioRoute, nonStandardRoute, documentsRequired, additionalAdmissionsInfo],
    englishRequirements: standardEnglishRequirements,
    yearGroups: yearGroupsFor(foundationYearModules),
    careers: ["Fashion Marketer", "Brand Communications", "Content Producer", "PR Assistant"],
    startDates: ["November", "February", "June"],
  },
  {
    slug: "business-management-for-creatives",
    title: "CertHE Business & Management for Creatives",
    shortTitle: "Business & Management (CertHE)",
    tagline: "A one-year, practical introduction to business for creative industries.",
    school: "Business & Management",
    level: "CertHE",
    duration: "1 Year",
    studyMode: "Full Time",
    accent: "blue",
    featured: true,
    visual: { image: "/images/course-3.jpg", imageAlt: "Business and management students in discussion" },
    heroGallery: [
      { image: "/images/courses-classroom.png", imageAlt: "Business students in a classroom session" },
      { image: "/images/gallery-5.png", imageAlt: "Students presenting a business proposal" },
    ],
    campuses: ["London — Canary Wharf", "Manchester — International House"],
    awardingBody: "Arts University Plymouth",
    tuitionFee: "£9,790",
    summary:
      "A practical introduction to business principles tailored for the creative industries, ending with your own creative business proposal.",
    description:
      "Across four core modules students build essential business knowledge — finance, legal frameworks, ethics, operations and marketing — before applying it all to a self-developed creative business concept.",
    highlights: [
      "Built specifically for creative-industry students, not generic business",
      "Culminates in a real business proposal, not just theory",
      "Direct progression route into the BA (Hons) top-up",
    ],
    entryRequirements: [
      "72 UCAS tariff points or above, or a 120-credit Ofqual Level 3 qualification",
      "International qualifications assessed via ENIC to UK Level 3 equivalence",
    ],
    admissionsRoutes: [
      {
        title: "Standard Academic Route",
        body: [
          "72 UCAS tariff points or above, or a 120-credit Ofqual Level 3 qualification.",
          "International qualifications are assessed via ENIC to UK Level 3 equivalence.",
        ],
      },
      nonStandardRoute,
      documentsRequired,
      additionalAdmissionsInfo,
    ],
    englishRequirements: standardEnglishRequirements,
    yearGroups: [
      {
        year: "Foundation Year",
        modules: [
          { title: "Business Essentials for Creatives", code: "401", credits: 30, description: "Foundations in finance, legal frameworks and ethics for creative businesses." },
          { title: "Managing Your Business", code: "402", credits: 30, description: "Resource management and the operational skills a small creative business needs." },
          { title: "Marketing, Brand & Identity", code: "403", credits: 30, description: "Audience engagement and brand communication for creative ventures." },
          { title: "Your Business Project", code: "404", credits: 30, description: "A capstone project applying everything learned to a viable business proposal." },
        ],
      },
      { year: "First Year", modules: [] },
      { year: "Second Year", modules: [] },
      { year: "Third Year", modules: [] },
    ],
    careers: ["Creative Entrepreneur", "Studio Manager", "Marketing Assistant", "Production Coordinator"],
    startDates: ["November", "February", "June"],
  },
  {
    slug: "business-and-management-for-creatives",
    title: "BA (Hons) Business and Management for Creatives",
    shortTitle: "Business & Management (BA)",
    tagline: "The top-up degree for creative entrepreneurs and managers.",
    school: "Business & Management",
    level: "BA (Hons)",
    duration: "2 Years",
    studyMode: "Full Time",
    accent: "cyan",
    visual: { image: "/images/course-4.jpg", imageAlt: "Business management graduate presenting a proposal" },
    heroGallery: [
      { image: "/images/explore-hero-2.png", imageAlt: "Business management student at work" },
      { image: "/images/hero-ahmed.jpg", imageAlt: "Business management student at work" },
    ],
    campuses: ["London — Canary Wharf", "Manchester — International House"],
    awardingBody: "Arts University Plymouth",
    tuitionFee: "£9,790",
    summary:
      "Develops business and management knowledge for creative and professional contexts, combining theory with live project work.",
    description:
      "The degree combines foundational business principles with creative, practical and live project work, emphasising entrepreneurial capability and management skills built for the creative industries specifically.",
    highlights: [
      "Direct progression from the CertHE Business & Management for Creatives",
      "Live project work throughout, not just case studies",
      "Level 5 modules build straight into an Entrepreneurship capstone",
    ],
    entryRequirements: [
      "A CertHE Business and Management for Creatives from VCAD, or",
      "An equivalent CertHE / Level 4 qualification in a related subject from a recognised HEI",
    ],
    admissionsRoutes: [
      {
        title: "Standard Academic Route",
        body: [
          "A CertHE Business and Management for Creatives from VCAD, or an equivalent CertHE / Level 4 qualification in a related subject from a recognised HEI.",
        ],
      },
      nonStandardRoute,
      documentsRequired,
      additionalAdmissionsInfo,
    ],
    englishRequirements: standardEnglishRequirements,
    yearGroups: [
      {
        year: "Foundation Year",
        modules: [
          { title: "The Creative Industries: Contexts & Frameworks", code: "L5-01", credits: 30, description: "Situating creative practice within the wider industry and economic context." },
          { title: "Business Operations & Challenges", code: "L5-02", credits: 30, description: "Running the operational side of a creative business." },
          { title: "Advanced Marketing", code: "L5-03", credits: 30, description: "Deeper marketing strategy building on CertHE-level foundations." },
          { title: "Entrepreneurship in the Creative Industries", code: "L5-04", credits: 30, description: "Developing an entrepreneurial venture within a creative context." },
        ],
      },
      { year: "First Year", modules: [] },
      { year: "Second Year", modules: [] },
      { year: "Third Year", modules: [] },
    ],
    careers: ["Business Manager", "Creative Producer", "Studio Founder", "Marketing Manager"],
    startDates: ["November", "February", "June"],
  },
];

export function getFeaturedCourses(): Course[] {
  return courses.filter((c) => c.featured);
}

export function getAllCourses(): Course[] {
  return courses;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getSchools(): string[] {
  return Array.from(new Set(courses.map((c) => c.school)));
}
