import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Eye, Stethoscope, Microscope, HeartHandshake, Calendar, Phone,
  ShieldCheck, Sparkles, Award, Users, Star, ArrowRight, ChevronDown,
  Activity, Glasses, Baby, Sun, Droplets, Monitor,
} from "lucide-react";
import { useState } from "react";
import heroEye from "@/assets/hero-eye.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mulund Eye Care — Advanced Eye Care with Precision & Compassion" },
      { name: "description", content: "Expert ophthalmology, advanced diagnostics and personalized vision treatment at Mulund Eye Care, Mulund West, Mumbai." },
    ],
  }),
  component: HomePage,
});

const trustBadges = [
  { icon: Award, label: "Experienced Specialists" },
  { icon: Microscope, label: "Advanced Diagnostics" },
  { icon: HeartHandshake, label: "Personalized Care" },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "25k+", label: "Happy Patients" },
  { value: "10+", label: "Specialized Services" },
  { value: "98%", label: "Satisfaction Rate" },
];

const treatments = [
  { icon: Eye, title: "Comprehensive Eye Checkup", desc: "Full visual assessment with modern diagnostic precision." },
  { icon: Sun, title: "Cataract Evaluation", desc: "Detailed cataract assessment and treatment planning." },
  { icon: Activity, title: "Glaucoma Screening", desc: "Early detection of glaucoma for vision protection." },
  { icon: Droplets, title: "Dry Eye Treatment", desc: "Soothing therapies to relieve dryness and irritation." },
  { icon: Monitor, title: "Computer Vision Syndrome", desc: "Specialized care for digital eye strain and fatigue." },
  { icon: Baby, title: "Pediatric Eye Care", desc: "Gentle, child-friendly assessments and treatment." },
];

const testimonials = [
  { name: "Priya Sharma", role: "Patient", text: "The team at Mulund Eye Care made my cataract surgery effortless. Calm, modern, and incredibly thorough." },
  { name: "Rohit Mehta", role: "Patient", text: "Best diagnostic experience I've had. The doctors took time to explain everything in detail." },
  { name: "Anita Desai", role: "Patient", text: "From reception to consultation, every step felt premium and personal. Highly recommend." },
];

const faqs = [
  { q: "How often should I get an eye examination?", a: "We recommend a comprehensive eye exam every 1–2 years for healthy adults, and annually for those over 40 or with vision concerns." },
  { q: "Do you treat children?", a: "Yes. Our pediatric eye care is gentle, age-appropriate and focused on early visual development." },
  { q: "Is the clinic equipped for advanced diagnostics?", a: "Absolutely — we use modern equipment for retinal imaging, glaucoma screening, and dry-eye assessments." },
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Intro />
      <Stats />
      <Trust />
      <Treatments />
      <Testimonials />
      <FAQPreview />
      <CTABanner />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative -mt-24 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroEye} alt="Close-up of a healthy eye" className="w-full h-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      {/* Decorative blurs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-teal/40 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-royal/40 blur-3xl animate-blob" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 text-xs md:text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 text-teal" /> Premium Ophthalmology in Mulund West
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Advanced Eye Care with{" "}
            <span className="bg-gradient-to-r from-[oklch(0.85_0.10_185)] to-white bg-clip-text text-transparent">
              Precision & Compassion
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-white/85 max-w-xl leading-relaxed"
          >
            Expert vision care, advanced eye diagnostics and personalized treatment — delivered in a calm, modern clinic by specialists who truly listen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-sky-400 text-white px-6 py-3.5 text-sm font-medium shadow-elegant hover:bg-sky-500 hover:scale-[1.04] transition-all">
              <Calendar className="w-4 h-4" /> Book Appointment
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-sky-400 text-white px-6 py-3.5 text-sm font-medium shadow-elegant hover:bg-sky-500 hover:scale-[1.04] transition-all">
              <Phone className="w-4 h-4" /> Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Floating trust badges */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          {trustBadges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="glass rounded-2xl p-4 flex items-center gap-3 hover-lift"
            >
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-primary text-white">
                <b.icon className="w-5 h-5" />
              </span>
              <span className="text-sm font-semibold text-foreground">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <a href="#intro" className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white animate-float">
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
}

function Intro() {
  return (
    <section id="intro" className="py-20 md:py-28">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-soft rounded-3xl -z-10" />
            <img src={clinicInterior} alt="Modern ophthalmology clinic" loading="lazy" width={1600} height={1100} className="rounded-3xl shadow-elegant" />
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-card hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary grid place-items-center text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Certified</p>
                  <p className="text-sm font-semibold">Ophthalmology Practice</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <SectionHeader
            eyebrow="About the clinic"
            center={false}
            title="Compassionate, modern eye care for every stage of life."
            description="Mulund Eye Care brings together experienced specialists, advanced diagnostics and a warm, patient-first approach — so every visit feels reassuring, thorough and tailored to you."
          />
          <ul className="mt-8 space-y-4">
            {[
              { icon: Stethoscope, title: "Expert consultation", desc: "Doctors who take the time to explain and answer your questions." },
              { icon: Microscope, title: "Advanced diagnostics", desc: "Modern equipment for accurate detection and monitoring." },
              { icon: HeartHandshake, title: "Personalized treatment", desc: "Care plans built around your eyes, lifestyle and goals." },
            ].map((f) => (
              <li key={f.title} className="flex gap-4">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-mint text-teal shrink-0">
                  <f.icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold">{f.title}</p>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-gradient-primary p-8 md:p-12 shadow-elegant relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-teal/30 blur-3xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <p className="text-4xl md:text-5xl font-bold tracking-tight">{s.value}</p>
                <p className="mt-2 text-sm text-white/85">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { icon: Award, title: "Experienced Specialists", desc: "Years of focused ophthalmology expertise." },
    { icon: Microscope, title: "Modern Equipment", desc: "Latest diagnostic and treatment tools." },
    { icon: HeartHandshake, title: "Patient-First Approach", desc: "We listen, explain and personalize." },
    { icon: ShieldCheck, title: "Ethical Practice", desc: "Transparent advice and honest pricing." },
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Reveal><SectionHeader eyebrow="Why patients trust us" title="Care you can rely on, every visit." description="A combination of expertise, technology and genuine warmth that families across Mulund return to." /></Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="h-full bg-gradient-card border border-border rounded-3xl p-6 hover-lift">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary text-white grid place-items-center mb-4">
                  <it.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Treatments() {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <Reveal><SectionHeader eyebrow="Featured treatments" title="Comprehensive eye care, in one calm clinic." description="From routine checkups to specialized treatments, our services are designed around your comfort and clarity." /></Reveal>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {treatments.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06}>
              <div className="group relative h-full bg-white rounded-3xl p-6 border border-border shadow-soft hover-lift overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-mint opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
                <div className="relative w-12 h-12 rounded-2xl bg-mint text-teal grid place-items-center mb-4 group-hover:bg-gradient-primary group-hover:text-white transition-all">
                  <t.icon className="w-5 h-5" />
                </div>
                <h3 className="relative font-semibold text-lg">{t.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{t.desc}</p>
                <Link to="/services" className="relative mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-white px-6 py-3 text-sm font-medium shadow-soft hover:shadow-glow transition-all">
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Reveal><SectionHeader eyebrow="Patient stories" title="Loved by families across Mulund." /></Reveal>
        <div className="mt-12 max-w-3xl mx-auto">
          <Reveal>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="bg-gradient-card border border-border rounded-3xl p-8 md:p-10 shadow-card"
            >
              <div className="flex gap-1 text-teal">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="mt-5 text-lg md:text-xl leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-primary grid place-items-center text-white font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </Reveal>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`}
                className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gradient-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQPreview() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 max-w-3xl">
        <Reveal><SectionHeader eyebrow="Frequently asked" title="Answers to common questions." /></Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-border shadow-soft overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center text-left p-5 font-medium"
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-teal transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-primary p-10 md:p-16 text-white shadow-elegant">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-teal/40 blur-3xl animate-glow-pulse" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 glass-dark rounded-full px-3 py-1 text-xs font-medium">
              <Users className="w-4 h-4 text-teal" /> Join thousands of happy patients
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">Ready to see the world more clearly?</h2>
            <p className="mt-3 text-white/85">Book your appointment today and experience eye care that truly puts you first.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-sky-400 text-white px-6 py-3 text-sm font-semibold hover:bg-sky-500 hover:scale-[1.04] transition-all shadow-soft">
                <Calendar className="w-4 h-4" /> Book Appointment
              </Link>
              <a href="tel:07777066990" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 text-sm font-medium hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4" /> Call 077770 66990
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
