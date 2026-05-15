import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Eye, Sun, Activity, Droplets, Monitor, Baby, Glasses, Stethoscope, Sparkles, Lightbulb, ChevronDown, Calendar,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Section";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Mulund Eye Care" },
      { name: "description", content: "Comprehensive ophthalmology services: cataract, glaucoma, diabetic eye care, dry eye, pediatric and more at Mulund Eye Care." },
    ],
  }),
  component: ServicesIndexPage,
});

const services = [
  { id: "comprehensive-checkup", icon: Eye, title: "Comprehensive Eye Checkup", desc: "Full visual assessment, refraction and ocular health evaluation in one visit.", more: "Includes visual acuity, intraocular pressure, retinal examination and lifestyle-based recommendations." },
  { id: "cataract", icon: Sun, title: "Cataract Evaluation", desc: "Detailed lens assessment, planning and pre-surgical guidance.", more: "Modern biometry, lens-option counseling and personalized care pathways for cataract surgery." },
  { id: "glaucoma", icon: Activity, title: "Glaucoma Screening", desc: "Early detection and ongoing monitoring to protect your vision.", more: "IOP measurement, optic nerve evaluation and visual field testing for at-risk patients." },
  { id: "diabetic-eye", icon: Stethoscope, title: "Diabetic Eye Examination", desc: "Specialized retinal evaluation for patients living with diabetes.", more: "Annual or biannual screening for diabetic retinopathy with dilated fundus examination." },
  { id: "dry-eye", icon: Droplets, title: "Dry Eye Treatment", desc: "Assessment and soothing therapies for chronic dryness and irritation.", more: "Tear-film analysis, lifestyle guidance, lubricants and advanced therapies as needed." },
  { id: "computer-vision", icon: Monitor, title: "Computer Vision Syndrome", desc: "Care for digital eye strain, fatigue, headaches and discomfort.", more: "Screen ergonomics, customized lenses and targeted relief strategies." },
  { id: "pediatric", icon: Baby, title: "Pediatric Eye Care", desc: "Gentle, child-friendly assessments and visual development support.", more: "Vision screening, amblyopia management, pediatric refraction and visual therapy." },
  { id: "contact-lens", icon: Glasses, title: "Contact Lens Consultation", desc: "Fittings, trials and care guidance for safe, comfortable lens wear.", more: "Soft, toric and specialty contact lens evaluations with follow-up support." },
  { id: "lasik-evaluation", icon: Sparkles, title: "LASIK Evaluation Service", desc: "Expert assessment to determine your candidacy for permanent vision correction.", more: "Includes corneal mapping, thickness checks and personalized consultation for laser vision correction." },
  { id: "vision-therapy", icon: Lightbulb, title: "Vision Therapy", desc: "Targeted exercises to improve visual function and comfort.", more: "Customized programs for binocular vision issues, focusing problems and more." },
];

function ServicesIndexPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-mint text-navy px-3 py-1 text-xs font-semibold uppercase tracking-wide">Services</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Specialized eye care, <span className="text-gradient">tailored to you</span>.</h1>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">A full range of ophthalmology services delivered with modern equipment, careful diagnosis and a calm, patient-friendly experience.</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={s.title} delay={(i % 3) * 0.05}>
                  <div className="group relative h-full bg-white rounded-3xl p-6 border border-border shadow-soft hover-lift overflow-hidden flex flex-col">
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-mint opacity-0 group-hover:opacity-100 blur-2xl transition-opacity" />
                    <div className="relative w-12 h-12 rounded-2xl bg-mint text-teal grid place-items-center mb-4 group-hover:bg-sky-400 group-hover:text-white transition-all">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <h3 className="relative font-semibold text-lg">{s.title}</h3>
                    <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed flex-grow">{s.desc}</p>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <Link 
                        to="/services/$serviceId" 
                        params={{ serviceId: s.id }}
                        className="relative inline-flex items-center gap-1 text-sm font-bold text-sky-500 hover:text-sky-600 transition-colors"
                      >
                        Explore Page →
                      </Link>
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="relative inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-all"
                      >
                        {isOpen ? "Hide info" : "Quick info"}
                        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>

                    {isOpen && (
                      <Reveal delay={0}>
                        <p className="relative mt-4 text-sm text-foreground/80 leading-relaxed bg-ice rounded-xl p-3 border border-border animate-in zoom-in-95 duration-200">
                          {s.more}
                        </p>
                      </Reveal>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-sky-400 text-white px-7 py-3.5 text-sm font-medium shadow-elegant hover:bg-sky-500 hover:scale-[1.04] transition-all">
              <Calendar className="w-4 h-4" /> Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
