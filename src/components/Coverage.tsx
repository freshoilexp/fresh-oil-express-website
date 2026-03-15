const Coverage = () => (
  <section id="coverage" className="py-20 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        {/* Animated map placeholder */}
        <div className="relative flex items-center justify-center aspect-square max-w-md mx-auto w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border-2 border-primary/30 ripple-ring" />
            <div className="absolute w-40 h-40 rounded-full border-2 border-primary/20 ripple-ring-delay" />
            <div className="absolute w-40 h-40 rounded-full border-2 border-primary/10 ripple-ring-delay-2" />
          </div>
          <div className="relative z-10 w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
            <span className="font-heading text-primary text-lg">BTR</span>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-foreground/40 font-heading tracking-widest">
            MILTON, FL AREA
          </div>
        </div>

        {/* Copy */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-heading text-foreground mb-4">
            Coverage <span className="text-primary">Area</span>
          </h2>
          <p className="text-foreground/50 mb-6">
             We proudly serve the greater Milton, Florida area including Pace, Navarre, Gulf Breeze, and Pensacola. If you're within 20 miles, we've got you covered.
           </p>
           <div className="space-y-3">
             {["Milton", "Pace", "Navarre", "Gulf Breeze", "Pensacola", "Crestview"].map((area) => (
              <div key={area} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground/70">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Coverage;
