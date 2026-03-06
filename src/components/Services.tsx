import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Conventional",
    price: 49,
    features: ["Up to 5 quarts conventional oil", "New oil filter", "Fluid top-off", "Tire pressure check", "21-point inspection"],
    featured: false,
  },
  {
    name: "Synthetic Blend",
    price: 69,
    features: ["Up to 5 quarts synthetic blend", "Premium oil filter", "Fluid top-off", "Tire pressure check", "21-point inspection", "Exterior wipe-down"],
    featured: true,
  },
  {
    name: "Full Synthetic",
    price: 89,
    features: ["Up to 5 quarts full synthetic", "Premium oil filter", "All fluids topped", "Tire pressure check", "21-point inspection", "Exterior wipe-down", "Air filter check"],
    featured: false,
  },
];

const Services = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container">
      <h2 className="text-4xl sm:text-5xl font-heading text-foreground text-center mb-4">
        Our <span className="text-primary">Services</span>
      </h2>
      <p className="text-center text-foreground/50 mb-12 max-w-md mx-auto">
        Transparent pricing. No hidden fees. No upsells.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-lg p-6 border transition-transform hover:-translate-y-1 ${
              p.featured
                ? "bg-foreground border-primary shadow-lg shadow-primary/10 scale-[1.03]"
                : "bg-foreground border-border"
            }`}
          >
            {p.featured && (
              <span className="inline-block bg-primary text-primary-foreground text-xs font-heading tracking-wider px-3 py-1 rounded-sm mb-4">
                MOST POPULAR
              </span>
            )}
            <h3 className="font-heading text-2xl text-primary-foreground">{p.name}</h3>
            <div className="flex items-baseline gap-1 my-4">
              <span className="text-4xl font-heading text-primary">${p.price}</span>
              <span className="text-primary-foreground/40 text-sm">/service</span>
            </div>
            <ul className="space-y-3 mb-6">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-primary-foreground/70">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button className={`w-full font-heading tracking-wider ${p.featured ? "" : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"}`} asChild>
              <a href="#scheduler">Book Now</a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
