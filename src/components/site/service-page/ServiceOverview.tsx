import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Section";

type Props = {
  explanation: string;
  image: string;
};

export function ServiceOverview({ explanation, image }: Props) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <span className="text-sky-500 font-bold uppercase tracking-widest text-xs mb-4 block">Medical Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Understanding the <span className="text-gradient">Condition</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {explanation}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-ice border border-sky-100">
                  <h4 className="font-bold text-navy mb-2">Expert Diagnosis</h4>
                  <p className="text-sm text-muted-foreground">Using modern tools for pinpoint accuracy in every assessment.</p>
                </div>
                <div className="p-5 rounded-2xl bg-mint/30 border border-teal-100">
                  <h4 className="font-bold text-navy mb-2">Patient Focused</h4>
                  <p className="text-sm text-muted-foreground">Tailored treatment plans that respect your lifestyle and goals.</p>
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-[40px] overflow-hidden shadow-elegant group"
            >
              <img
                src={image}
                alt="Medical Illustration"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sky-400/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
