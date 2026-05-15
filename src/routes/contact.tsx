import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import {
  Phone, MessageCircle, Mail, MapPin, Send, Clock, Navigation, AlertCircle,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Appointment — Mulund Eye Care" },
      { name: "description", content: "Book an appointment at Mulund Eye Care. Call, WhatsApp or visit our clinic in Mulund West, Mumbai." },
    ],
  }),
  component: ContactPage,
});

const WHATSAPP_NUMBER = "917777066990"; // international format for wa.me

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  department: z.string().trim().min(2, "Select a service").max(80),
  message: z.string().trim().max(500).optional().default(""),
});

const services = [
  "Comprehensive Eye Checkup",
  "Cataract Evaluation",
  "Glaucoma Screening",
  "Diabetic Eye Examination",
  "Dry Eye Treatment",
  "Computer Vision Syndrome",
  "Pediatric Eye Care",
  "Contact Lens Consultation",
  "Refractive Error Testing",
  "Vision Therapy",
];

function ContactPage() {
  return (
    <SiteLayout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-mint text-navy px-3 py-1 text-xs font-semibold uppercase tracking-wide">Contact</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Let's <span className="text-gradient">connect</span>.</h1>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">Fill out the form and we'll respond on WhatsApp shortly — or reach us directly using the options on the right.</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
            <Reveal>
              <BookingForm />
            </Reveal>
            <Reveal delay={0.1}>
              <ContactCards />
            </Reveal>
          </div>
        </div>
      </section>

      <MapSection />

      <section className="pb-12">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="rounded-3xl bg-gradient-card border border-border p-6 md:p-8 shadow-soft flex flex-col md:flex-row md:items-center gap-4 justify-between">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 grid place-items-center rounded-2xl bg-gradient-primary text-white"><Clock className="w-5 h-5" /></span>
                <div>
                  <p className="text-sm text-muted-foreground">Clinic working hours</p>
                  <p className="font-semibold">Mon – Sat: 9:00 AM – 8:00 PM</p>
                </div>
              </div>
              <a href="tel:07777066990" className="inline-flex items-center gap-2 rounded-full bg-sky-400 text-white px-5 py-2.5 text-sm font-medium shadow-soft hover:bg-sky-500 transition-all">
                <Phone className="w-4 h-4" /> Call Clinic
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function BookingForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", department: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as string;
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      toast.error("Please correct the highlighted fields.");
      return;
    }
    setErrors({});
    const data = result.data;
    const message =
      `Hi Mulund Eye Care, I'd like to book an appointment.\n\n` +
      `Name: ${data.name}\n` +
      `Phone: ${data.phone}\n` +
      `Email: ${data.email}\n` +
      `Department: ${data.department}\n` +
      `Message: ${data.message || "—"}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your appointment request…");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-border rounded-3xl p-6 md:p-10 shadow-elegant">
      <div className="flex items-center gap-3">
        <span className="w-12 h-12 grid place-items-center rounded-2xl bg-sky-400 text-white shadow-glow">
          <MessageCircle className="w-5 h-5" />
        </span>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Book an Appointment</h2>
          <p className="text-sm text-muted-foreground">Fill in the details and we'll connect with you on WhatsApp shortly.</p>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <Field label="Full Name" error={errors.name}>
          <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className="input" />
        </Field>
        <Field label="Phone Number" error={errors.phone}>
          <input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 9XXXX XXXXX" className="input" />
        </Field>
        <Field label="Email" error={errors.email}>
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className="input" />
        </Field>
        <Field label="Department / Service Needed" error={errors.department}>
          <select value={form.department} onChange={(e) => update("department", e.target.value)} className="input">
            <option value="">Select a service</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
        <div className="md:col-span-2">
          <Field label="Message" error={errors.message}>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={4}
              placeholder="Briefly describe your concern (optional)"
              className="input resize-none"
              maxLength={500}
            />
          </Field>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-sky-400 text-white px-7 py-3.5 text-sm font-medium shadow-elegant hover:bg-sky-500 hover:scale-[1.04] transition-all">
          Send Request <Send className="w-4 h-4" />
        </button>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: var(--ice);
          border: 1px solid var(--input);
          border-radius: 14px;
          padding: 12px 14px;
          font-size: 0.9rem;
          color: var(--foreground);
          transition: all .2s ease;
          outline: none;
        }
        .input:focus {
          border-color: var(--teal);
          box-shadow: 0 0 0 4px oklch(0.66 0.11 185 / 0.15);
          background: white;
        }
      `}</style>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wide">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && (
        <span className="mt-1 inline-flex items-center gap-1 text-xs text-destructive">
          <AlertCircle className="w-3 h-3" /> {error}
        </span>
      )}
    </label>
  );
}

function ContactCards() {
  const cards = [
    {
      icon: Phone,
      title: "Emergency / Appointment",
      lines: ["077770 66990", "Reach us anytime for urgent eye concerns."],
      href: "tel:07777066990",
      highlight: true,
      cta: "Call Now",
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: ["077770 66990", "Tap to open your phone dialer instantly."],
      href: "tel:07777066990",
      cta: "Open Dialer",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      lines: ["Quick replies, easy booking", "Chat with our team on WhatsApp."],
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      cta: "Open Chat",
      whatsapp: true,
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["care@mulundeyecare.in", "We'll respond within one business day."],
      href: "mailto:care@mulundeyecare.in",
      cta: "Send Email",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      lines: ["Shop No. 6, Morphosis Adagio,", "Next to Gala Company, Mulund West, Mumbai 400080"],
      href: "https://www.google.com/maps/place/MULUND+EYE+CARE",
      cta: "Get Directions",
      external: true,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {cards.map((c, i) => (
        <a
          key={i}
          href={c.href}
          target={c.external || c.whatsapp ? "_blank" : undefined}
          rel="noreferrer"
          className={`group block rounded-3xl p-6 border shadow-soft hover-lift transition-all ${c.highlight
              ? "text-white border-transparent bg-sky-400 shadow-elegant"
              : c.whatsapp
                ? "text-white border-transparent"
                : "bg-white border-border"
            }`}
          style={c.whatsapp ? { background: "linear-gradient(135deg, oklch(0.55 0.13 168), oklch(0.66 0.11 185))" } : undefined}
        >
          <div className="flex items-start gap-4">
            <span className={`w-12 h-12 grid place-items-center rounded-2xl shrink-0 transition-transform group-hover:scale-110 ${c.highlight || c.whatsapp ? "bg-white/20 text-white" : "bg-mint text-teal"
              }`}>
              <c.icon className="w-5 h-5" />
            </span>
            <div className="flex-1">
              <p className={`font-semibold ${c.highlight || c.whatsapp ? "text-white" : "text-foreground"}`}>{c.title}</p>
              {c.lines.map((l, k) => (
                <p key={k} className={`text-sm ${k === 0 ? "font-medium" : ""} ${c.highlight || c.whatsapp ? "text-white/90" : k === 0 ? "text-foreground" : "text-muted-foreground"}`}>{l}</p>
              ))}
              <span className={`mt-3 inline-flex items-center gap-1 text-xs font-semibold ${c.highlight || c.whatsapp ? "text-white" : "text-teal"}`}>
                {c.cta} →
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function MapSection() {
  const mapsLink = "https://www.google.com/maps/place/MULUND+EYE+CARE/@19.1678255,72.9363574,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b8f9e6e8e8e7:0x8e8e8e8e8e8e8e8e!8m2!3d19.1678255!4d72.9389323!16s%2Fg%2F11jg9z_x_y"; // This is a placeholder for the actual place ID link
  const embedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15074.200414427098!2d72.94148490186639!3d19.171160912847004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b864f08216a9%3A0x99635ae881062b0c!2sMULUND%20EYE%20CARE!5e0!3m2!1sen!2sin!4v1778805436183!5m2!1sen!2sin";
  return (
    <section className="pt-10 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-mint text-navy px-3 py-1 text-xs font-semibold tracking-wide uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" /> Find us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Visit our clinic in Mulund West.</h2>
          <div className="bg-ice border border-sky-100 rounded-3xl p-6 md:p-8 shadow-soft inline-block max-w-2xl">
            <div className="flex flex-col md:flex-row items-center gap-4 text-left">
              <span className="w-12 h-12 shrink-0 grid place-items-center rounded-2xl bg-teal text-white">
                <MapPin className="w-6 h-6" />
              </span>
              <p className="text-lg md:text-xl font-bold text-navy leading-relaxed">
                Shop No. 6, Morphosis Adagio, Dindayal Upadhyay Marg, Next to Gala Company, BJ Nagar, Siddharth Nagar, Mulund West, Mumbai 400080
              </p>
            </div>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 relative group rounded-3xl overflow-hidden border border-border shadow-elegant">
            <a href={mapsLink} target="_blank" rel="noreferrer" className="block">
              <div className="relative aspect-[21/9] w-full bg-mint">
                <iframe
                  title="Mulund Eye Care location"
                  src={embedSrc}
                  className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/30" />
              </div>
            </a>

            <a
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              className="absolute top-5 right-5 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur text-navy px-4 py-2.5 text-sm font-semibold shadow-card hover:scale-[1.04] transition-transform"
            >
              <Navigation className="w-4 h-4 text-teal" /> Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
