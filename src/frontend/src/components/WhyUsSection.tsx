import { Brush, LineChart, Rocket, Settings, Users } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Experienced Team of Experts",
    description:
      "Our team brings years of hands-on experience across consulting, marketing, branding, and technology to deliver exceptional results.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Strategies",
    description:
      "Every decision is backed by research, analytics, and proven frameworks. We don't guess — we measure, optimize, and scale.",
  },
  {
    icon: Brush,
    title: "Professional Branding Approach",
    description:
      "We treat your brand as an asset. From visual identity to brand voice, every element is crafted to convey premium value.",
  },
  {
    icon: Rocket,
    title: "Focus on Real Business Growth",
    description:
      "We measure success by your revenue growth, lead volume, and market presence — not vanity metrics or empty promises.",
  },
  {
    icon: Settings,
    title: "Customized Solutions for Each Client",
    description:
      "No cookie-cutter approaches. Every strategy is built from scratch based on your unique business goals and market position.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 lg:py-32 section-divider relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 70%, oklch(0.78 0.15 85 / 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal mb-4 inline-block">
            <span className="text-xs text-gold font-semibold tracking-widest uppercase border border-gold/30 px-3 py-1 rounded-full">
              Our Advantages
            </span>
          </div>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-bold mb-4 delay-100">
            Why Businesses <span className="gold-gradient-text">Trust KCS</span>
          </h2>
          <p className="reveal text-muted-foreground text-lg max-w-2xl mx-auto delay-200">
            We combine expertise, strategy, and dedication to deliver results
            that matter to your bottom line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`reveal glass-card rounded-2xl p-7 hover:scale-[1.02] transition-all duration-300 delay-${((i % 3) + 1) * 100}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 animate-pulse-gold">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
          <div className="reveal glass-card rounded-2xl p-7 border-gold/40 flex flex-col justify-between delay-300">
            <div>
              <div className="text-4xl mb-4">✦</div>
              <h3 className="font-display text-xl font-bold mb-3 gold-gradient-text">
                Ready to transform your business?
              </h3>
              <p className="text-muted-foreground text-sm">
                Join 200+ businesses that trusted KCS to take them to the next
                level.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-6 w-full py-3 bg-gold hover:bg-gold-light text-black font-semibold rounded-xl transition-all duration-300 text-sm"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
