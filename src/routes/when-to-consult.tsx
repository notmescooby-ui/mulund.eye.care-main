import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Eye, AlertTriangle, ZapOff, Droplets, Monitor, Sun, Moon, Sparkles, Activity, AlertCircle, Calendar, Phone,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/when-to-consult")({
  head: () => ({
    meta: [
      { title: "When Should You Consult an Eye Doctor? — Mulund Eye Care" },
      { name: "description", content: "Recognize symptoms that need an eye specialist: blurry vision, headaches, redness, sudden vision loss and more. When to visit Mulund Eye Care." },
    ],
  }),
  component: WhenToConsultPage,
});

const symptoms = [
  { icon: Eye, title: "Blurry Vision", may: "May indicate LASIK eligibility, cataract or retinal issues.", why: "Early correction prevents strain and protects long-term vision." },
  { icon: AlertCircle, title: "Frequent Headaches", may: "Often linked to uncorrected vision or eye strain.", why: "A simple checkup can identify and resolve the underlying cause." },
  { icon: AlertTriangle, title: "Eye Redness", may: "Could indicate infection, allergy or inflammation.", why: "Prompt evaluation prevents complications and discomfort." },
  { icon: ZapOff, title: "Sudden Vision Loss", may: "May signal a serious retinal or neurological event.", why: "This is a medical emergency — seek immediate consultation.", urgent: true },
  { icon: Monitor, title: "Eye Strain from Screens", may: "Common with prolonged digital device use.", why: "Customized solutions can dramatically improve daily comfort." },
  { icon: Droplets, title: "Watering Eyes", may: "May indicate blocked tear ducts or surface irritation.", why: "Targeted treatment restores comfort and tear balance." },
  { icon: Sun, title: "Dryness or Irritation", may: "Often related to dry eye disease or environment.", why: "Modern dry-eye therapies can provide lasting relief." },
  { icon: Moon, title: "Difficulty Seeing at Night", may: "May suggest cataract or vitamin/retinal issues.", why: "Early evaluation improves safety and quality of life." },
  { icon: Sparkles, title: "Flashes or Floaters", may: "Sudden onset can indicate retinal tear or detachment.", why: "Urgent assessment is recommended to protect vision.", urgent: true },
  { icon: Activity, title: "Eye Pain or Swelling", may: "May indicate infection, injury or pressure changes.", why: "Timely diagnosis prevents serious complications.", urgent: true },
];

function WhenToConsultPage() {
  return (
    <SiteLayout>
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-mint text-navy px-3 py-1 text-xs font-semibold uppercase tracking-wide">Patient guide</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">When should you <span className="text-gradient">consult a doctor</span>?</h1>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">Some eye symptoms are subtle, others are urgent. Here's a guide to help you decide when it's time to visit an ophthalmologist.</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-5">
            {symptoms.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.05}>
                <div className={`h-full rounded-3xl p-7 border shadow-soft hover-lift ${s.urgent ? "bg-gradient-primary text-white border-transparent" : "bg-white border-border"}`}>
                  <div className={`w-12 h-12 rounded-2xl grid place-items-center mb-5 ${s.urgent ? "bg-white/15 text-white" : "bg-mint text-teal"}`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    {s.urgent && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/20 text-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                        <AlertTriangle className="w-3 h-3" /> Urgent
                      </span>
                    )}
                  </div>
                  <p className={`mt-3 text-sm leading-relaxed ${s.urgent ? "text-white/90" : "text-muted-foreground"}`}>
                    <strong className={s.urgent ? "text-white" : "text-foreground"}>What it may indicate: </strong>{s.may}
                  </p>
                  <p className={`mt-2 text-sm leading-relaxed ${s.urgent ? "text-white/90" : "text-muted-foreground"}`}>
                    <strong className={s.urgent ? "text-white" : "text-foreground"}>Why timely care matters: </strong>{s.why}
                  </p>
                  <p className={`mt-3 text-sm font-medium ${s.urgent ? "text-white" : "text-teal"}`}>
                    Recommendation: visit Mulund Eye Care for assessment.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-primary p-8 md:p-12 text-white shadow-elegant">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-teal/40 blur-3xl animate-glow-pulse" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <span className="inline-flex items-center gap-2 glass-dark rounded-full px-3 py-1 text-xs font-semibold">
                  <AlertTriangle className="w-4 h-4 text-teal" /> Urgent symptoms?
                </span>
                <h2 className="mt-3 text-2xl md:text-4xl font-bold leading-tight">Don't wait. Sudden vision changes deserve immediate attention.</h2>
                <p className="mt-2 text-white/85">If you're experiencing sudden vision loss, severe pain, flashes or floaters — contact us right away.</p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                <a href="tel:07777066990" className="inline-flex justify-center items-center gap-2 rounded-full bg-white text-navy px-6 py-3 text-sm font-semibold hover:bg-sky-50 transition-colors hover:scale-[1.04]">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <Link to="/contact" className="inline-flex justify-center items-center gap-2 rounded-full bg-sky-400 text-white px-6 py-3 text-sm font-medium hover:bg-sky-500 transition-colors">
                  <Calendar className="w-4 h-4" /> Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
