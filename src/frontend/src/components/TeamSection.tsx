import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Ahmad Khattab",
    title: "CEO & Lead Business Consultant",
    image: "/assets/generated/team-1.dim_400x400.jpg",
    tags: ["Business Strategy", "Consulting", "Leadership"],
    bio: "Visionary entrepreneur with 10+ years transforming businesses across multiple industries.",
  },
  {
    name: "Sarah Mitchell",
    title: "Marketing Director",
    image: "/assets/generated/team-2.dim_400x400.jpg",
    tags: ["Digital Marketing", "Growth", "Analytics"],
    bio: "Award-winning marketer who has driven 10x growth for brands across digital channels.",
  },
  {
    name: "Omar Hassan",
    title: "Brand Strategist & Creative Director",
    image: "/assets/generated/team-3.dim_400x400.jpg",
    tags: ["Branding", "Design", "Creative"],
    bio: "Creative visionary behind premium brand identities for 100+ successful businesses.",
  },
  {
    name: "Layla Chen",
    title: "Digital Growth & Technology Expert",
    image: "/assets/generated/team-4.dim_400x400.jpg",
    tags: ["Technology", "Automation", "Data"],
    bio: "Tech innovator specializing in automation systems and data-driven digital growth strategies.",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 section-divider relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, oklch(0.78 0.15 85 / 0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal mb-4 inline-block">
            <span className="text-xs text-gold font-semibold tracking-widest uppercase border border-gold/30 px-3 py-1 rounded-full">
              The KCS Team
            </span>
          </div>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-bold mb-4 delay-100">
            Meet Our <span className="gold-gradient-text">Expert Team</span>
          </h2>
          <p className="reveal text-muted-foreground text-lg max-w-2xl mx-auto delay-200">
            A powerhouse team of specialists dedicated to delivering
            extraordinary results for every client.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={member.name}
              data-ocid={`team.card.${i + 1}`}
              className={`reveal glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group delay-${(i + 1) * 100}`}
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {/* Social icons on hover */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-black/60 border border-gold/30 flex items-center justify-center">
                    <Linkedin className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black/60 border border-gold/30 flex items-center justify-center">
                    <Twitter className="w-3.5 h-3.5 text-gold" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-base">{member.name}</h3>
                <p className="text-gold text-xs mt-0.5 mb-3">{member.title}</p>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-1">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] bg-gold/10 border border-gold/20 text-gold-light rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
