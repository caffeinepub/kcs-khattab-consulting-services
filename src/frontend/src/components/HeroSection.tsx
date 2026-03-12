import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

const particles = [
  { left: "10%", top: "20%", delay: "0s", duration: "3s", size: "3px" },
  { left: "25%", top: "45%", delay: "0.5s", duration: "3.7s", size: "2px" },
  { left: "40%", top: "20%", delay: "1s", duration: "4.4s", size: "4px" },
  { left: "55%", top: "45%", delay: "1.5s", duration: "5.1s", size: "3px" },
  { left: "70%", top: "20%", delay: "2s", duration: "5.8s", size: "2px" },
  { left: "85%", top: "45%", delay: "2.5s", duration: "6.5s", size: "4px" },
];

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroRef.current) {
        const els = heroRef.current.querySelectorAll(".hero-reveal");
        els.forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 150);
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-team.dim_1200x700.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, oklch(0.78 0.15 85 / 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.left}
            className="absolute rounded-full animate-float"
            style={{
              width: p.size,
              height: p.size,
              background: "oklch(0.78 0.15 85 / 0.4)",
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <div className="hero-reveal reveal mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs text-gold-light font-medium tracking-widest uppercase">
              Premium Business Consulting & Marketing
            </span>
          </div>

          <h1 className="hero-reveal reveal font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 delay-100">
            Helping Businesses{" "}
            <span className="gold-gradient-text">Grow, Scale</span> and Dominate
            Their Market.
          </h1>

          <p className="hero-reveal reveal text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl delay-200">
            KCS is a professional consulting and digital growth agency that
            helps brands grow through strategic marketing, branding, automation
            and expert consulting.
          </p>

          <div className="hero-reveal reveal flex flex-col sm:flex-row gap-4 delay-300">
            <Button
              type="button"
              data-ocid="hero.primary_button"
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gold hover:bg-gold-light text-black font-bold px-8 py-4 text-base rounded-full group transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              type="button"
              data-ocid="hero.secondary_button"
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold px-8 py-4 text-base rounded-full transition-all duration-300"
            >
              Our Services
            </Button>
          </div>

          <div className="hero-reveal reveal flex gap-8 mt-12 delay-400">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "200+", label: "Clients Served" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold gold-gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
