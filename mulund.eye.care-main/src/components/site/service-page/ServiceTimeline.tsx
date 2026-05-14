import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/site/Section";

type Props = {
  steps: { title: string; description: string }[];
};

export function ServiceTimeline({ steps }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-sky-500 font-bold uppercase tracking-widest text-xs mb-4 block">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Your Journey to Recovery</h2>
            <p className="text-muted-foreground">We guide you through every step of your treatment with care and transparency.</p>
          </div>
        </Reveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[2px] bg-sky-100 -translate-x-1/2 hidden md:block">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="w-full h-full bg-sky-400 origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute left-[21px] md:left-1/2 top-0 md:top-1/2 w-10 h-10 rounded-full bg-white border-4 border-sky-400 z-10 -translate-x-1/2 md:-translate-y-1/2 shadow-glow hidden md:grid place-items-center font-bold text-sky-500"
                >
                  {i + 1}
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full md:w-[45%] p-8 rounded-[32px] bg-ice border border-sky-100 shadow-soft hover:shadow-card transition-shadow ${i % 2 === 1 ? "md:text-right" : ""}`}
                >
                  <h3 className="text-2xl font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
                
                {/* Spacer for other side */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
