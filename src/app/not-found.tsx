import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
        <h1 className="text-heading font-bold text-white">Page not found</h1>
        <p className="max-w-sm text-default text-text/70">
          That course or page doesn&apos;t exist. Head back to explore what VCAD
          offers.
        </p>
        <Button href="/courses">Explore courses</Button>
      </main>
      <Footer />
    </>
  );
}
