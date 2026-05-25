import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Section";
import { ShieldCheck, Users, Award, Heart } from "lucide-react";

type Props = {
  stats: { label: string; value: string }[];
};

export function ServiceTrust({ stats }: Props) {
  const trustCards = [
    { icon: ShieldCheck, title: "Modern Technology", desc: "Advanced diagnostics for every case." },
    { icon: Users, title: "Specialist Care", desc: "Consultations with senior ophthalmologists." },
    { icon: Award, title: "Premium Experience", desc: "Calm clinic environment and unhurried visits." },
    { icon: Heart, title: "Family Focused", desc: "Care for patients of all ages, from kids to seniors." },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                Why trust <span className="text-gradient">Mulund Eye Care</span>?
              </h2>
              <div className="space-y-8">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-end gap-4">
                    <span className="text-5xl md:text-6xl font-bold text-sky-500">{stat.value}</span>
                    <span className="text-muted-foreground font-medium mb-2">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {trustCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[32px] bg-ice border border-sky-100 hover:bg-white hover:shadow-card transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white text-sky-500 grid place-items-center mb-6 shadow-soft group-hover:scale-110 transition-transform">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
