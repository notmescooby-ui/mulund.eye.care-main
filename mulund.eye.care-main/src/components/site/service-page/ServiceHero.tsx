import { motion } from "framer-motion";
import { Calendar, Phone, ShieldCheck, Users, Award, Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import eyeCheck from "@/assets/eye-check.png";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  icon: any;
};

export function ServiceHero({ title, subtitle, description, icon: Icon }: Props) {
  const doctorFeatures = [
    { icon: Award, title: "Experienced Ophthalmologist", text: "Expert surgical precision & care." },
    { icon: Heart, title: "Personalized Patient Care", text: "Care plans tailored to your eyes." },
    { icon: ShieldCheck, title: "Modern Eye Diagnostics", text: "Advanced diagnostic equipment." },
    { icon: Users, title: "Trusted Vision Expertise", text: "Over 25,000+ happy patients." },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Faded Background Image */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <img 
          src={eyeCheck} 
          alt="Medical Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          {/* Left Side: Informational Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 text-white grid place-items-center mb-8 shadow-glow shadow-teal-500/20">
              <Icon className="w-8 h-8" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-navy leading-[1.05] mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-teal mb-6 leading-tight">
              {subtitle}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 text-white px-8 py-4 text-base font-bold shadow-soft hover:bg-sky-600 hover:scale-[1.03] transition-all"
              >
                <Calendar className="w-5 h-5" /> Book Consultation
              </Link>
              <a
                href="tel:07777066990"
                className="inline-flex items-center gap-2 rounded-full border-2 border-sky-100 bg-white text-navy px-8 py-4 text-base font-bold hover:bg-sky-50 hover:border-sky-200 transition-all"
              >
                <Phone className="w-5 h-5" /> Call Clinic
              </a>
            </div>
          </motion.div>

          {/* Right Side: Doctor Feature Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-[40px] p-8 md:p-10 border border-white/60 shadow-elegant relative overflow-hidden"
            >
              {/* Soft decorative background for panel */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50/50 blur-3xl rounded-full" />
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
                  Why Dr. Shailendra Nanaware?
                  <span className="w-2 h-2 rounded-full bg-teal" />
                </h3>

                <div className="grid gap-4">
                  {doctorFeatures.map((f, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                      className="group flex gap-5 items-start p-5 rounded-[24px] bg-white/30 border border-white/40 transition-all duration-300 hover:shadow-soft"
                    >
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal grid place-items-center shrink-0 group-hover:bg-teal group-hover:text-white transition-all">
                        <f.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-0.5">{f.title}</h4>
                        <p className="text-sm text-muted-foreground">{f.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
