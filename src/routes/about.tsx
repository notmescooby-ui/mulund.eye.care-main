import { createFileRoute } from "@tanstack/react-router";
import { Eye, Heart, Target, Microscope, Stethoscope, Award } from "lucide-react";
import doctor2 from "@/assets/doctor2.jpg";
import clinic from "@/assets/clinic-interior.jpg";
import exam from "@/assets/exam.jpg";
import heroEye from "@/assets/hero-eye.jpg";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mulund Eye Care" },
      { name: "description", content: "Learn about Mulund Eye Care: our mission, vision, patient-first approach and modern ophthalmology services." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-mint text-navy px-3 py-1 text-xs font-semibold uppercase tracking-wide">About us</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Compassionate care, <span className="text-gradient">modern ophthalmology</span>.
            </h1>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              Mulund Eye Care is built around one simple idea: every patient deserves attentive, expert eye care delivered in a calm, modern environment. We combine clinical excellence with warmth — so every visit feels reassuring and unhurried.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From early childhood eye development to advanced senior vision care, we partner with families across Mulund for healthier vision at every stage of life.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <img src={doctor2} alt="Lead ophthalmologist" loading="lazy" width={1200} height={1400} className="rounded-3xl shadow-elegant w-full" />
              <div className="absolute -bottom-5 -left-5 glass rounded-2xl p-4 shadow-card max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary grid place-items-center text-white"><Award className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-muted-foreground">Trusted by</p>
                    <p className="text-sm font-semibold">25,000+ patients</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Approach */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <Reveal><SectionHeader eyebrow="What drives us" title="Mission, vision and a patient-first approach." /></Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { icon: Target, title: "Our Mission", desc: "To deliver precise, compassionate ophthalmology that protects and improves vision for every patient we serve." },
              { icon: Eye, title: "Our Vision", desc: "To be Mulund's most trusted eye care destination — known for clinical excellence and genuine warmth." },
              { icon: Heart, title: "Patient-First Approach", desc: "We listen carefully, explain clearly and design treatment plans around your eyes, lifestyle and goals." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full bg-white rounded-3xl p-7 border border-border shadow-soft hover-lift">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary text-white grid place-items-center mb-5"><c.icon className="w-5 h-5" /></div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal><SectionHeader eyebrow="The Mulund Eye Care difference" title="Built for accuracy. Designed for comfort." /></Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { icon: Microscope, title: "Advanced Technology", desc: "Modern diagnostic and treatment equipment for accurate, efficient care." },
              { icon: Stethoscope, title: "Expert Consultation", desc: "Specialists who take the time to understand and explain." },
              { icon: Award, title: "Trusted Diagnosis", desc: "Honest assessments backed by careful clinical reasoning." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full bg-gradient-card rounded-3xl p-7 border border-border shadow-soft hover-lift">
                  <div className="w-12 h-12 rounded-2xl bg-mint text-teal grid place-items-center mb-5"><c.icon className="w-5 h-5" /></div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <Reveal><SectionHeader eyebrow="Inside the clinic" title="A calm, modern space designed for clarity." /></Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[clinic, exam, heroEye].map((src, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="overflow-hidden rounded-3xl shadow-card group">
                  <img src={src} alt={`Clinic ${i + 1}`} loading="lazy" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
