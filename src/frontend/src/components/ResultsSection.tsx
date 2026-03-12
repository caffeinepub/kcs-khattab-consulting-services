const results = [
  {
    metric: "340%",
    description:
      "Local retail brand grew revenue by 340% in just 8 months through strategic consulting and marketing.",
    tag: "Business Consulting",
    detail:
      "Complete business overhaul including positioning, pricing, and digital presence.",
  },
  {
    metric: "2K → 85K",
    description:
      "Instagram community grew from 2,000 to 85,000 followers within 6 months.",
    tag: "Social Media",
    detail:
      "Content strategy, consistent posting cadence, and targeted audience development.",
  },
  {
    metric: "5x Pricing",
    description:
      "Complete rebrand led to 5x premium pricing acceptance and a new market position.",
    tag: "Branding",
    detail:
      "Full brand identity redesign including logo, visual system, and brand narrative.",
  },
  {
    metric: "1,200+",
    description:
      "Generated over 1,200 qualified leads within 90 days for a B2B services company.",
    tag: "Lead Generation",
    detail:
      "Multi-channel funnel with paid ads, landing pages, and WhatsApp automation.",
  },
];

const tagColors: Record<string, string> = {
  "Business Consulting": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Social Media": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Branding: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Lead Generation": "bg-green-500/10 text-green-400 border-green-500/20",
};

export function ResultsSection() {
  return (
    <section id="results" className="py-24 lg:py-32 section-divider relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 60%, oklch(0.78 0.15 85 / 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal mb-4 inline-block">
            <span className="text-xs text-gold font-semibold tracking-widest uppercase border border-gold/30 px-3 py-1 rounded-full">
              Client Success Stories
            </span>
          </div>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-bold mb-4 delay-100">
            Real Results for{" "}
            <span className="gold-gradient-text">Real Businesses</span>
          </h2>
          <p className="reveal text-muted-foreground text-lg max-w-2xl mx-auto delay-200">
            Numbers don't lie. Here's what KCS has achieved for businesses just
            like yours.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, i) => (
            <div
              key={result.metric}
              data-ocid={`results.card.${i + 1}`}
              className={`reveal glass-card rounded-2xl p-7 hover:scale-[1.02] transition-all duration-300 flex flex-col delay-${(i + 1) * 100}`}
            >
              <div className="font-display text-5xl font-bold gold-gradient-text mb-4">
                {result.metric}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {result.description}
              </p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-muted-foreground mb-3">
                  {result.detail}
                </p>
                <span
                  className={`px-2.5 py-1 text-[11px] border rounded-full font-medium ${tagColors[result.tag]}`}
                >
                  {result.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
