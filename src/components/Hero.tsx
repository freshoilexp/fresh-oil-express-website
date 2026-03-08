import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const stats = [
  { value: "30", label: "Min Service" },
  { value: "5★", label: "Rated" },
  { value: "0", label: "Waiting Rooms" },
];

const Hero = () => (
  <section className="relative min-h-screen flex items-center bg-foreground grid-texture overflow-hidden pt-16">
    {/* Red glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full red-glow pointer-events-none" />

    {/* Oil drip lines */}
    <div className="absolute left-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent oil-drip" />
    <div className="absolute right-[30%] top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

    <div className="container relative z-10">
      <div className="max-w-3xl">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading text-primary-foreground leading-[0.95] mb-6">
          Fresh Oil.<br />
          <span className="text-primary">Your Driveway.</span>
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/60 max-w-lg mb-8">
          Professional mobile oil changes in Milton, Florida. We come to you — at home, at work, wherever your car is parked.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <Button size="lg" className="font-heading text-lg tracking-wider px-8" asChild>
            <a href="#scheduler">Book Now <ChevronRight className="ml-1 h-5 w-5" /></a>
          </Button>
          <Button size="lg" variant="outline" className="font-heading text-lg tracking-wider px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="#services">View Pricing</a>
          </Button>
        </div>

        <div className="flex gap-8 sm:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-heading text-primary">{s.value}</div>
              <div className="text-xs sm:text-sm text-primary-foreground/50 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
