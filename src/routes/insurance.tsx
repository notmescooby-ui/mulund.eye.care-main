import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Building2, Clock, HeartHandshake, ShieldCheck, Wallet } from "lucide-react";
import { Reveal } from "@/components/site/Section";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Insurance & Cashless Eye Care in Mulund | Mulund Eye Care" },
      { name: "description", content: "Cashless insurance at Mulund Eye Care with Mediassist, Tata AIG, Bajaj Allianz, ACKO, Care Health, Heritage and more." },
      { property: "og:title", content: "Insurance Partners — Mulund Eye Care" },
      { property: "og:description", content: "Cashless treatment, faster admission and stress-free claims with our insurance network." },
    ],
    links: [{ rel: "canonical", href: "https://www.mulundeyecare.com/insurance" }],
  }),
  component: InsurancePage,
});

const BENEFITS = [
  { icon: Wallet, title: "Cashless treatment", body: "Get treated without paying upfront. We coordinate directly with your insurer for approvals." },
  { icon: Clock, title: "Faster admission", body: "Pre-authorisation handled by our dedicated TPA desk for quick, smooth admission." },
  { icon: HeartHandshake, title: "Less financial stress", body: "Focus on recovery while we manage paperwork, follow-ups and claim documentation." },
  { icon: ShieldCheck, title: "Emergency coverage", body: "24×7 ICU and emergency care with insurance support, even at odd hours." },
  { icon: Building2, title: "Better accessibility", body: "Accessible quality healthcare for working families and senior citizens alike." },
  { icon: BadgeCheck, title: "Network expertise", body: "Years of experience working with leading insurers to ensure smooth approvals." },
];

export const INSURERS = [
  { name: "Mediassist", domain: "mediassist.in" },
  { name: "Tata AIG", domain: "tataaig.com" },
  { name: "ACKO", domain: "acko.com" },
  { name: "Bajaj Allianz", domain: "bajajallianz.com" },
  { name: "Health Insurance", domain: "starhealth.in" },
  { name: "Care Health", domain: "careinsurance.com" },
  { name: "Heritage", domain: "heritagehealthtpa.com" },
  { name: "MJPJAY & AB-PMJAY", domain: "pmjay.gov.in" },
];

function InsurancePage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-soft">
        <div className="container-px mx-auto max-w-7xl py-16 lg:py-24 text-center space-y-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-xs font-semibold text-teal">Insurance & Cashless</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Quality care, <span className="text-gradient">stress-free billing</span>.</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">We're empanelled with India's leading health insurers and TPAs to bring you genuine cashless treatment.</p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold">Our insurance partners</h2>
          <p className="text-muted-foreground">Some of the leading providers we work with for cashless and reimbursement claims.</p>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {INSURERS.map((insurer, i) => (
            <Reveal key={insurer.name} delay={(i % 4) * 0.07}>
              <div className="group rounded-2xl border bg-card p-6 text-center shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-soft opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="grid place-items-center mx-auto size-14 rounded-2xl bg-mint text-teal group-hover:bg-gradient-primary group-hover:text-white transition-all mb-3">
                    <ShieldCheck className="size-6" />
                  </div>
                  <div className="font-semibold">{insurer.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">Cashless approved</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-gradient-soft py-20">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="text-center mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-navy text-xs font-semibold">Patient Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-bold">Why use insurance at Mulund Eye Care?</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="grid place-items-center size-12 rounded-xl bg-gradient-primary text-white shadow-soft mb-4"><b.icon className="size-5" /></div>
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="rounded-3xl bg-gradient-primary p-10 sm:p-14 text-white text-center shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative space-y-5">
            <h2 className="text-3xl sm:text-4xl font-bold">Need help with your claim?</h2>
            <p className="opacity-90 max-w-xl mx-auto">Our TPA desk will guide you through the process — from pre-authorisation to final settlement.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-teal px-6 py-3 rounded-2xl font-semibold shadow-soft hover:scale-105 transition">Contact our TPA desk <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
