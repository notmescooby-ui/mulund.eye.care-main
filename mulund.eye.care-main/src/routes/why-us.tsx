import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award, HeartHandshake, Microscope, Sofa, Target, Users, ShieldCheck, Calendar,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Mulund Eye Care — Our Difference" },
      { name: "description", content: "Discover why families across Mulund choose us: experienced specialists, modern diagnostics, comfortable consultations and ethical care." },
    ],
  }),
  component: WhyUsPage,
});

const reasons = [
  { icon: Award, title: "Experienced Eye Specialists", desc: "Years of focused ophthalmology expertise behind every diagnosis and treatment." },
  { icon: HeartHandshake, title: "Personalized Patient Care", desc: "Care plans designed around your eyes, lifestyle and personal goals." },
  { icon: Microscope, title: "Modern Diagnostic Equipment", desc: "Advanced tools for retinal imaging, glaucoma screening and dry-eye analysis." },
  { icon: Sofa, title: "Comfortable Consultation Experience", desc: "A calm, premium clinic environment designed for unhurried conversations." },
  { icon: Target, title: "Accurate Vision Assessment", desc: "Precise refraction and ocular health checks for confident prescriptions." },
  { icon: Users, title: "Trusted by Families", desc: "From children's first checkups to senior vision care — for the whole family." },
  { icon: ShieldCheck, title: "Ethical & Transparent Treatment", desc: "Honest advice, clear pricing and no unnecessary procedures — ever." },
];

function WhyUsPage() {
  return (
    <SiteLayout>
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-mint text-navy px-3 py-1 text-xs font-semibold uppercase tracking-wide">Why us</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Why patients choose <span className="text-gradient">Mulund Eye Care</span>.</h1>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">A combination of expertise, technology and warmth that makes every visit feel reassuring and worthwhile.</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 0.05}>
                <div className="group h-full bg-gradient-card rounded-3xl p-7 border border-border shadow-soft hover-lift">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary text-white grid place-items-center mb-5 shadow-glow group-hover:scale-110 transition-transform">
                    <r.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-primary p-10 md:p-16 text-white shadow-elegant">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-teal/40 blur-3xl animate-glow-pulse" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Experience the difference yourself.</h2>
              <p className="mt-3 text-white/85">Book your appointment and meet the team that genuinely cares about your vision.</p>
              <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-sky-400 text-white px-6 py-3 text-sm font-semibold hover:bg-sky-500 hover:scale-[1.04] transition-all shadow-soft">
                <Calendar className="w-4 h-4" /> Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
