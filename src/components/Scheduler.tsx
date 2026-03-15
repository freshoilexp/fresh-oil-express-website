import { Button } from "@/components/ui/button";
import { Shield, Clock, Star } from "lucide-react";
import BookingDialog from "@/components/BookingDialog";

const Scheduler = () => {

  return (
    <section id="scheduler" className="py-20 bg-foreground">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl font-heading text-primary-foreground text-center mb-12">
          Book Your <span className="text-primary">Oil Change</span>
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-heading text-3xl text-primary-foreground mb-4">
            Skip the shop.<br />We bring the shop to you.
          </h3>
          <p className="text-primary-foreground/50 mb-8 max-w-xl mx-auto">
            Certified technicians, premium oil, and zero hassle. Book in under 60 seconds and we'll handle the rest.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
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
          <BookingDialog
            trigger={
              <Button size="lg" className="font-heading text-lg tracking-wider px-8">
                Book Your Appointment
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Scheduler;
