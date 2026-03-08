import { Shield, Clock, Star } from "lucide-react";

const Scheduler = () => {
  return (
    <section id="scheduler" className="py-20 bg-foreground">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl font-heading text-primary-foreground text-center mb-12">
          Book Your <span className="text-primary">Oil Change</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — Trust copy */}
          <div className="flex flex-col justify-center">
            <h3 className="font-heading text-3xl text-primary-foreground mb-4">
              Skip the shop.<br />We bring the shop to you.
            </h3>
            <p className="text-primary-foreground/50 mb-8">
              Certified technicians, premium oil, and zero hassle. Book in under 60 seconds and we'll handle the rest.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Shield, label: "Insured & Certified" },
                { icon: Clock, label: "30-Min Average" },
                { icon: Star, label: "5-Star Rated" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 bg-card rounded-md px-4 py-2 border border-border">
                  <b.icon size={16} className="text-primary" />
                  <span className="text-sm text-primary-foreground/70">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Droptop Scheduler Embed */}
          <div className="bg-card rounded-lg border border-border overflow-hidden" style={{ minHeight: "600px" }}>
            <iframe
              src="https://droptop-scheduler.com/rdDIZZK2rUaG2HMeUT11O5dwGFg9yC9s9IwubayO/U3DpAjla38"
              className="w-full h-full min-h-[600px] rounded-md"
              title="Droptop Booking Portal"
            />
            <p className="text-center text-xs text-muted-foreground py-2">
              Powered by Droptop
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scheduler;
