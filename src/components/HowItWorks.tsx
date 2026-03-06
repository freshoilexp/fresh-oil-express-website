import { CalendarCheck, Truck, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Book Online", desc: "Pick your service, date & time in seconds." },
  { icon: Truck, title: "We Come To You", desc: "Our technician arrives at your location." },
  { icon: Wrench, title: "We Get To Work", desc: "Professional oil change while you relax." },
  { icon: CheckCircle2, title: "All Done", desc: "Back on the road with fresh oil." },
];

const HowItWorks = () => (
  <section className="py-20 bg-foreground">
    <div className="container">
      <h2 className="text-4xl sm:text-5xl font-heading text-primary-foreground text-center mb-4">
        How It <span className="text-primary">Works</span>
      </h2>
      <p className="text-center text-primary-foreground/50 mb-12 max-w-md mx-auto">
        Four simple steps to fresh oil — no shop visit required.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="bg-card rounded-lg p-6 border border-border hover:border-primary/40 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon size={20} />
              </div>
              <span className="text-primary/40 font-heading text-2xl">0{i + 1}</span>
            </div>
            <h3 className="font-heading text-xl text-card-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
