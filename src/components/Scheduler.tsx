import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Clock, Star } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const generateDays = () => {
  const today = new Date();
  const days: { date: Date; disabled: boolean }[] = [];
  // Show current month grid
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1);
  const startPad = firstDay.getDay();
  
  for (let i = 0; i < startPad; i++) {
    days.push({ date: new Date(year, month, -(startPad - 1 - i)), disabled: true });
  }
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const isPast = date < new Date(year, today.getMonth(), today.getDate());
    const isSunday = date.getDay() === 0;
    days.push({ date, disabled: isPast || isSunday });
  }
  return days;
};

const timeSlots = [
  { time: "8:00 AM", booked: false },
  { time: "9:00 AM", booked: false },
  { time: "10:00 AM", booked: true },
  { time: "11:00 AM", booked: false },
  { time: "12:00 PM", booked: false },
  { time: "1:00 PM", booked: true },
  { time: "2:00 PM", booked: false },
  { time: "3:00 PM", booked: false },
  { time: "4:00 PM", booked: false },
  { time: "5:00 PM", booked: true },
];

const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const days = generateDays();
  const today = new Date();

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
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <p>Droptop booking portal iframe placeholder</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scheduler;
