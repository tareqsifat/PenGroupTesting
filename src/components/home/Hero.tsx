import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-deep">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,55,158,0.18),_transparent_45%),radial-gradient(circle_at_80%_0%,_rgba(0,255,210,0.12),_transparent_40%)]" />

      <div className="frame relative flex flex-col gap-8 px-6 py-20 md:px-10 md:py-28">
        <Badge className="w-fit">Planet Education Networks / PEN Group</Badge>
        <h1 className="max-w-3xl text-hero font-bold text-white">
          Make the work that gets you noticed.
        </h1>
        <p className="max-w-xl text-lead text-text/70">
          VCAD is Victoria College of Arts and Design — creative education
          across fashion, graphic design and business for creatives, taught
          by people who still make the work themselves.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="/courses">Explore courses</Button>
          <Button href="/courses" variant="secondary">
            Book an open day
          </Button>
        </div>
      </div>
    </section>
  );
}
