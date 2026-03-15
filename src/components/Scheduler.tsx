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

          {/* Right — Booking widget */}
          <div className="bg-card rounded-lg border border-border p-6 space-y-5">
            <Select>
              <SelectTrigger className="bg-foreground border-border text-primary-foreground">
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="conventional">Conventional — $105</SelectItem>
                <SelectItem value="synthetic">Full Synthetic — $125</SelectItem>
                <SelectItem value="diesel-conv">Diesel Conventional — $145</SelectItem>
                <SelectItem value="diesel-synth">Diesel Synthetic — $165</SelectItem>
              </SelectContent>
            </Select>

            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Full Name" className="bg-foreground border-border text-primary-foreground placeholder:text-muted-foreground" />
              <Input placeholder="Phone" className="bg-foreground border-border text-primary-foreground placeholder:text-muted-foreground" />
            </div>
            <Input placeholder="Vehicle (e.g. 2021 Honda Civic)" className="bg-foreground border-border text-primary-foreground placeholder:text-muted-foreground" />
            <Input placeholder="Service Address" className="bg-foreground border-border text-primary-foreground placeholder:text-muted-foreground" />

            {/* Mini calendar */}
            <div>
              <div className="text-sm text-primary-foreground/50 mb-2 font-heading tracking-wider">
                {monthNames[today.getMonth()]} {today.getFullYear()}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs mb-1">
                {["Su","Mo","Tu","We","Th","Fr","Sa"].map((d) => (
                  <span key={d} className="text-muted-foreground py-1">{d}</span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {days.map((d, i) => {
                  const dayNum = d.date.getDate();
                  const isCurrentMonth = d.date.getMonth() === today.getMonth();
                  const isSelected = selectedDate === i && !d.disabled;
                  return (
                    <button
                      key={i}
                      disabled={d.disabled || !isCurrentMonth}
                      onClick={() => setSelectedDate(i)}
                      className={`text-xs py-1.5 rounded transition-colors ${
                        !isCurrentMonth ? "text-muted-foreground/30" :
                        d.disabled ? "text-muted-foreground/40 cursor-not-allowed" :
                        isSelected ? "bg-primary text-primary-foreground" :
                        "text-primary-foreground/70 hover:bg-primary/20"
                      }`}
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time slots */}
            <div>
              <div className="text-sm text-primary-foreground/50 mb-2 font-heading tracking-wider">Select Time</div>
              <div className="grid grid-cols-5 gap-2">
                {timeSlots.map((s) => (
                  <button
                    key={s.time}
                    disabled={s.booked}
                    onClick={() => setSelectedTime(s.time)}
                    className={`text-xs py-2 rounded border transition-colors ${
                      s.booked
                        ? "border-border text-muted-foreground/40 cursor-not-allowed line-through"
                        : selectedTime === s.time
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-primary-foreground/70 hover:border-primary/50"
                    }`}
                  >
                    {s.time}
                  </button>
                ))}
              </div>
            </div>

            <Button className="w-full font-heading text-lg tracking-wider py-3">
              Confirm Booking
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <button className="block mx-auto text-xs text-muted-foreground hover:text-primary transition-colors">
                  Powered by Droptop — Full Booking Portal →
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl h-[80vh] bg-foreground border-border">
                <iframe
                  src="https://droptop-scheduler.com/rdDIZZK2rUaG2HMeUT11O5dwGFg9yC9s9IwubayO/U3DpAjla38"
                  className="w-full h-full rounded-md"
                  title="Droptop Booking Portal"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scheduler;
