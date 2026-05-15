import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Section";

type Props = {
  symptoms: { icon: any; title: string; description: string }[];
};

export function ServiceSymptoms({ symptoms }: Props) {
  return (
    <section className="py-24 bg-ice relative overflow-hidden">
      {/* Background soft teal gradient overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-sky-50/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-teal font-bold uppercase tracking-widest text-xs mb-4 block">Medical Indicators</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Common Symptoms</h2>
            <p className="text-muted-foreground text-lg">Recognizing these early signs can help you seek timely care and preserve your long-term vision health.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {symptoms.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-sky-100/50 rounded-[32px] p-8 group shadow-soft hover:shadow-card hover:shadow-teal-500/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-ice text-teal grid place-items-center mb-6 group-hover:bg-teal-500 group-hover:text-white group-hover:shadow-glow group-hover:shadow-teal-500/20 transition-all duration-300">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              
              <div className="mt-6 w-8 h-1 bg-teal-100 rounded-full group-hover:w-16 group-hover:bg-teal transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
