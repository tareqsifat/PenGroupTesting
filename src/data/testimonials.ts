export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

/**
 * The design shows one sample testimonial (Daniel Karen) reused across three
 * sections. A carousel needs more than one slide to be meaningfully
 * interactive, so two further testimonials are modelled here in the same
 * voice — see README.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Our team at Victoria College of Arts and Design is passionate about creating innovative projects and generating new ideas. We work with a variety of experts and esteemed companies using a collaborative approach. Located in London's Design District, we have valuable connections within our industry.",
    name: "Daniel Karen",
    role: "Student of VCAD Borough campus",
    image: "/images/testimonial-1.png",
  },
  {
    quote:
      "The foundation year gave me space to actually find my practice before specialising. Tutors here still make their own work, so the feedback is always grounded in what actually happens in the industry.",
    name: "Amara Osei",
    role: "BA (Hons) Graphic Design, Canary Wharf campus",
    image: "/images/hero-molly.jpg",
  },
  {
    quote:
      "Live briefs with real partner companies changed how I think about my portfolio. I graduated with work I was genuinely proud to show at interviews.",
    name: "Josh Fenwick",
    role: "BA (Hons) Fashion Design, Canary Wharf campus",
    image: "/images/hero-ayo.jpg",
  },
];
