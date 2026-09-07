import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="frame border-t border-border/60 px-6 py-20 md:px-10">
      <div className="flex flex-col items-start gap-6 rounded-card bg-gradient-to-br from-plum to-navy p-10 md:p-14">
        <h2 className="max-w-xl text-heading font-bold text-white">
          Applications for September 2026 are open.
        </h2>
        <p className="max-w-lg text-lead text-text/80">
          Places fill on a rolling basis. Explore the courses, then start
          your application when you&apos;re ready.
        </p>
        <Button href="/courses">Explore courses</Button>
      </div>
    </section>
  );
}
