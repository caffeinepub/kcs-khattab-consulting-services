import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const servicesList = [
  "Business Consulting",
  "Branding & Brand Identity",
  "Digital Marketing",
  "Social Media Management",
  "Lead Generation",
  "Website Development",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About KCS", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Client Results", href: "#results" },
  { label: "Contact Us", href: "#contact" },
];

const socials = [
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiFacebook, href: "#", label: "Facebook" },
  { icon: SiX, href: "#", label: "Twitter/X" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="section-divider py-16 relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, oklch(0.78 0.15 85 / 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="text-3xl font-display font-bold gold-gradient-text tracking-wider">
                KCS
              </div>
              <div className="text-[10px] text-muted-foreground tracking-widest uppercase">
                Khattab Consulting Services
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              A premium consulting and marketing agency dedicated to
              transforming businesses into powerful, scalable brands.
            </p>
            <div className="flex gap-3">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    data-ocid={`footer.link.${i + 1}`}
                    className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:text-gold hover:border-gold/40 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">
              Our Services
            </h4>
            <ul className="space-y-2">
              {servicesList.map((service, i) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#services")}
                    data-ocid={`footer.link.${5 + i}`}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    data-ocid={`footer.link.${11 + i}`}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">
              Connect With Us
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <div className="text-xs text-gold font-medium mb-0.5 uppercase tracking-wider">
                  Email
                </div>
                <div>info@kcs-consulting.com</div>
              </div>
              <div>
                <div className="text-xs text-gold font-medium mb-0.5 uppercase tracking-wider">
                  Phone
                </div>
                <div>+1 (555) 000-0000</div>
              </div>
              <div>
                <div className="text-xs text-gold font-medium mb-0.5 uppercase tracking-wider">
                  WhatsApp
                </div>
                <a
                  href="https://wa.me/placeholder"
                  className="hover:text-gold transition-colors"
                >
                  Chat with us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 section-divider flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} KCS &ndash; Khattab Consulting
            Services. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
