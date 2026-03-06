const Footer = () => (
  <footer className="bg-foreground border-t border-border py-10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-heading text-lg text-primary-foreground tracking-widest">
        FRESH OIL <span className="text-primary">EXPRESS</span>
      </span>
      <div className="flex gap-6 text-sm text-primary-foreground/50">
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#scheduler" className="hover:text-primary transition-colors">Book Now</a>
        <a href="#coverage" className="hover:text-primary transition-colors">Coverage</a>
      </div>
      <span className="text-xs text-primary-foreground/30">
        © {new Date().getFullYear()} Fresh Oil Express. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
