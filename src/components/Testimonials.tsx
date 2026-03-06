import { Star } from "lucide-react";

const reviews = [
  { name: "Marcus T.", text: "They came to my office parking lot during lunch. 30 minutes later I had fresh oil and didn't miss a meeting.", rating: 5 },
  { name: "Jennifer L.", text: "Best oil change experience ever. No waiting rooms, no magazines from 2015. Just quick, professional service at my house.", rating: 5 },
  { name: "David R.", text: "I've been going to shops for 20 years. Fresh Oil Express converted me — I'm never going back to a shop.", rating: 5 },
];

const Testimonials = () => (
  <section className="py-20 bg-foreground">
    <div className="container">
      <h2 className="text-4xl sm:text-5xl font-heading text-primary-foreground text-center mb-12">
        What Customers <span className="text-primary">Say</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors">
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-primary-foreground/70 mb-4 italic">"{r.text}"</p>
            <span className="text-xs font-heading text-primary tracking-wider">{r.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
