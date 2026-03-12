import {
  BarChart2,
  Globe,
  Palette,
  Share2,
  Target,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: BarChart2,
    title: "Business Consulting",
    description:
      "We analyze your business model, market competition, and target audience to create a comprehensive strategic growth plan.",
    bullets: [
      "Business positioning & revenue model",
      "Market competition analysis",
      "Market expansion strategy",
      "Brand value creation",
    ],
  },
  {
    icon: Palette,
    title: "Branding & Brand Identity",
    description:
      "We build a strong, professional brand image that builds trust and makes your business look premium in every touchpoint.",
    bullets: [
      "Logo design & visual identity",
      "Brand color palette & guidelines",
      "Packaging & product branding",
      "Brand strategy & positioning",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "We help businesses acquire customers online through proven digital channels that drive real revenue growth.",
    bullets: [
      "Social media & Instagram growth",
      "Facebook & Google Ads",
      "Content marketing strategy",
      "Lead generation campaigns",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "We manage your entire social media presence to build a powerful online brand that attracts and engages your audience.",
    bullets: [
      "Content planning & post design",
      "Reel creation & video content",
      "Page growth & follower acquisition",
      "Audience engagement & community",
    ],
  },
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "We create systematic lead generation engines that deliver consistent, qualified prospects to your business every month.",
    bullets: [
      "Paid ads strategy & management",
      "Landing pages & funnel systems",
      "WhatsApp automation setup",
      "CRM & follow-up systems",
    ],
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "We build modern, high-converting websites that represent your brand professionally and drive measurable business results.",
    bullets: [
      "Business & brand websites",
      "High-converting landing pages",
      "E-commerce solutions",
      "Mobile-responsive & SEO optimized",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 section-divider relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, oklch(0.78 0.15 85 / 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal mb-4 inline-block">
            <span className="text-xs text-gold font-semibold tracking-widest uppercase border border-gold/30 px-3 py-1 rounded-full">
              What We Offer
            </span>
          </div>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-bold mb-4 delay-100">
            Our Expert <span className="gold-gradient-text">Services</span>
          </h2>
          <p className="reveal text-muted-foreground text-lg max-w-2xl mx-auto delay-200">
            Comprehensive solutions designed to transform your business and
            accelerate sustainable growth.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                data-ocid={`services.card.${i + 1}`}
                className={`reveal glass-card rounded-2xl p-7 hover:scale-[1.02] transition-all duration-300 cursor-default delay-${((i % 3) + 1) * 100}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/20">
                  <Icon className="w-6 h-6 text-gold" />
                </div>

                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="space-y-1.5">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
