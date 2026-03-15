import { Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground border-t border-border py-10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-heading text-lg text-primary-foreground tracking-widest">
        FRESH OIL <span className="text-primary">EXPRESS</span>
      </span>
      <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/50">
        <a href="tel:8503820148" className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Phone size={14} /> (850) 382-0148
        </a>
        <a href="mailto:freshoilexp@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Mail size={14} /> freshoilexp@gmail.com
        </a>
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#coverage" className="hover:text-primary transition-colors">Coverage</a>
      </div>
      <span className="text-xs text-primary-foreground/30">
        © {new Date().getFullYear()} Fresh Oil Express. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
