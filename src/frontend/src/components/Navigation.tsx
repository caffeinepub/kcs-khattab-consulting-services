import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex flex-col items-start"
          >
            <span className="text-2xl font-display font-bold gold-gradient-text tracking-wider">
              KCS
            </span>
            <span className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase -mt-1">
              Khattab Consulting Services
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                type="button"
                data-ocid={`nav.link.${i + 1}`}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-gold transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
            <Button
              type="button"
              data-ocid="nav.cta_button"
              onClick={() => handleNavClick("#contact")}
              className="ml-4 bg-gold text-black hover:bg-gold-light font-semibold px-5 py-2 text-sm"
            >
              Free Consultation
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-muted-foreground hover:text-gold"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-current transition-all" />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden pb-4 glass-nav rounded-b-xl">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                type="button"
                data-ocid={`nav.link.${i + 1}`}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-gold hover:bg-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                type="button"
                data-ocid="nav.cta_button"
                onClick={() => handleNavClick("#contact")}
                className="w-full bg-gold text-black hover:bg-gold-light font-semibold"
              >
                Free Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
