const steps = [
  {
    number: "01",
    title: "Business Analysis",
    description:
      "Deep dive into your current business model, market position, competition, and untapped opportunities.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "Build a custom growth strategy tailored to your goals, target audience, and competitive landscape.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Execute the strategy with precision — from brand development and marketing campaigns to automation systems.",
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "Monitor performance, analyze data, and continuously refine every element for maximum ROI.",
  },
  {
    number: "05",
    title: "Growth Scaling",
    description:
      "Scale winning strategies, expand to new markets, and build systems that compound growth over time.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 section-divider relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, oklch(0.78 0.15 85 / 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal mb-4 inline-block">
            <span className="text-xs text-gold font-semibold tracking-widest uppercase border border-gold/30 px-3 py-1 rounded-full">
              How We Work
            </span>
          </div>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-bold mb-4 delay-100">
            Our Proven{" "}
            <span className="gold-gradient-text">Growth Process</span>
          </h2>
          <p className="reveal text-muted-foreground text-lg max-w-2xl mx-auto delay-200">
            A structured, results-driven approach that takes your business from
            where it is to where it deserves to be.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.78 0.15 85 / 0.3), oklch(0.78 0.15 85 / 0.6), oklch(0.78 0.15 85 / 0.3), transparent)",
            }}
          />

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal flex flex-col items-center text-center delay-${(i + 1) * 100}`}
              >
                {/* Step circle */}
                <div className="relative w-24 h-24 mb-6">
                  <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center border-gold animate-pulse-gold">
                    <span className="font-display text-2xl font-bold gold-gradient-text">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
