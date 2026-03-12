const expertiseTags = [
  "Marketing Strategy",
  "Branding",
  "Business Consulting",
  "Digital Growth",
  "Sales Systems",
  "Automation",
  "Lead Generation",
  "Market Expansion",
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "200+", label: "Clients Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Industries Covered" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Background texture */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, oklch(0.78 0.15 85 / 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <div className="reveal mb-4 inline-block">
              <span className="text-xs text-gold font-semibold tracking-widest uppercase border border-gold/30 px-3 py-1 rounded-full">
                About KCS
              </span>
            </div>
            <h2 className="reveal font-display text-4xl lg:text-5xl font-bold mb-6 delay-100">
              A Premium Agency Built for{" "}
              <span className="gold-gradient-text">Real Results</span>
            </h2>
            <p className="reveal text-muted-foreground text-lg leading-relaxed mb-6 delay-200">
              KCS (Khattab Consulting Services) is a professional consulting and
              marketing agency that helps businesses build strong brands,
              generate consistent leads, and increase revenue sustainably.
            </p>
            <p className="reveal text-muted-foreground leading-relaxed mb-8 delay-300">
              Our team consists of experts across marketing strategy, branding,
              business consulting, digital growth, sales systems, and
              automation. We work with startups, local businesses, and growing
              companies to help them scale faster and operate professionally.
            </p>

            {/* Mission */}
            <div className="reveal glass-card rounded-2xl p-6 mb-8 delay-400">
              <div className="flex items-start gap-3">
                <div className="w-1 h-full min-h-[40px] rounded bg-gold flex-shrink-0" />
                <p className="text-lg font-medium italic text-foreground">
                  "Our mission is to transform ordinary businesses into powerful
                  brands."
                </p>
              </div>
            </div>

            {/* Expertise tags */}
            <div className="reveal flex flex-wrap gap-2 delay-500">
              {expertiseTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm bg-gold/10 border border-gold/20 text-gold-light rounded-full hover:bg-gold/20 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Stats */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`reveal glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 delay-${(i + 1) * 100}`}
                >
                  <div className="font-display text-5xl font-bold gold-gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="reveal mt-4 glass-card rounded-2xl p-6 delay-500">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-xl">✦</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">
                    Trusted by businesses worldwide
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    From local startups to growing enterprises
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
