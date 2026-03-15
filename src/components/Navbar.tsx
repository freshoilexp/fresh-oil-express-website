import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingDialog from "@/components/BookingDialog";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Fresh Oil Express" className="h-12" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:8503820148" className="flex items-center gap-1.5 text-sm text-primary-foreground/70 hover:text-primary transition-colors">
            <Phone size={14} /> (850) 382-0148
          </a>
          <a href="mailto:freshoilexp@gmail.com" className="flex items-center gap-1.5 text-sm text-primary-foreground/70 hover:text-primary transition-colors">
            <Mail size={14} /> freshoilexp@gmail.com
          </a>
          <a href="#services" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">Services</a>
          <a href="#coverage" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">Coverage</a>
          <BookingDialog
            trigger={
              <Button size="sm" className="font-heading text-base tracking-wider px-6">
                Schedule
              </Button>
            }
          />
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-foreground border-t border-border px-6 pb-6 pt-2 space-y-4">
          <a href="#services" onClick={() => setOpen(false)} className="block text-primary-foreground/70 hover:text-primary">Services</a>
          <a href="#coverage" onClick={() => setOpen(false)} className="block text-primary-foreground/70 hover:text-primary">Coverage</a>
          <BookingDialog
            trigger={
              <Button className="w-full font-heading text-base tracking-wider">
                Schedule
              </Button>
            }
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
