import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

const serviceOptions = [
  "Business Consulting",
  "Branding & Brand Identity",
  "Digital Marketing",
  "Social Media Management",
  "Lead Generation",
  "Website Development",
];

export function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!actor) {
      setError("Not connected. Please try again.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await actor.submitContact(
        form.name,
        form.email,
        form.phone,
        form.service,
        form.message,
      );
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 section-divider relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, oklch(0.78 0.15 85 / 0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal mb-4 inline-block">
            <span className="text-xs text-gold font-semibold tracking-widest uppercase border border-gold/30 px-3 py-1 rounded-full">
              Get In Touch
            </span>
          </div>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-bold mb-4 delay-100">
            Let&apos;s Build Your Business Into a{" "}
            <span className="gold-gradient-text">Powerful Brand.</span>
          </h2>
          <p className="reveal text-muted-foreground text-lg max-w-2xl mx-auto delay-200">
            Ready to take your business to the next level? Get a free
            consultation with our expert team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="reveal glass-card rounded-2xl p-8">
            {success ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle className="w-16 h-16 text-gold mb-4" />
                <h3 className="font-display text-2xl font-bold mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. Our team will contact you within
                  24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-gold text-sm underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-sm text-muted-foreground mb-1.5 block"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      data-ocid="contact.input"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Ahmad Al-Rashid"
                      className="bg-white/5 border-white/10 focus:border-gold/50"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm text-muted-foreground mb-1.5 block"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-ocid="contact.email_input"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="ahmad@company.com"
                      className="bg-white/5 border-white/10 focus:border-gold/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="text-sm text-muted-foreground mb-1.5 block"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    data-ocid="contact.phone_input"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+1 (555) 000-0000"
                    className="bg-white/5 border-white/10 focus:border-gold/50"
                  />
                </div>

                <div>
                  <Label className="text-sm text-muted-foreground mb-1.5 block">
                    Service of Interest *
                  </Label>
                  <Select
                    value={form.service}
                    onValueChange={(val) => setForm({ ...form, service: val })}
                  >
                    <SelectTrigger
                      data-ocid="contact.select"
                      className="bg-white/5 border-white/10 focus:border-gold/50"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-sm text-muted-foreground mb-1.5 block"
                  >
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.textarea"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your business and what you want to achieve..."
                    rows={4}
                    className="bg-white/5 border-white/10 focus:border-gold/50 resize-none"
                    required
                  />
                </div>

                {error && (
                  <p
                    data-ocid="contact.error_state"
                    className="text-red-400 text-sm"
                  >
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={loading}
                  className="w-full bg-gold hover:bg-gold-light text-black font-bold py-3 rounded-xl text-base transition-all duration-300 hover:scale-[1.01]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Message & Get Free Consultation"
                  )}
                </Button>
              </form>
            )}
          </div>

          <div className="reveal space-y-5 delay-200">
            <a
              href="https://wa.me/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp_button"
              className="flex items-center gap-4 glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <div className="font-semibold text-sm mb-0.5">WhatsApp</div>
                <div className="text-muted-foreground text-sm">
                  Chat with us directly
                </div>
                <div className="text-green-400 text-xs mt-1 font-medium group-hover:underline">
                  Open WhatsApp &rarr;
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 glass-card rounded-2xl p-6">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-gold" />
              </div>
              <div>
                <div className="font-semibold text-sm mb-0.5">Email</div>
                <div className="text-muted-foreground text-sm">
                  info@kcs-consulting.com
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  We reply within 24 hours
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 glass-card rounded-2xl p-6">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-gold" />
              </div>
              <div>
                <div className="font-semibold text-sm mb-0.5">Phone</div>
                <div className="text-muted-foreground text-sm">
                  +1 (555) 000-0000
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Mon &ndash; Fri, 9AM &ndash; 6PM
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border-gold/30">
              <div className="text-center">
                <div className="font-display text-2xl font-bold gold-gradient-text mb-1">
                  Free Consultation
                </div>
                <p className="text-muted-foreground text-sm">
                  No commitment. No fees. Just a strategic conversation to see
                  how we can help your business grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
