import { motion } from "framer-motion";
import { Calendar, Phone, ShieldCheck, Users, Award, Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import eyeCheck from "@/assets/eye-check.png";
import cataractBg from "@/assets/cataract-bg.png";
import computerVisionBg from "@/assets/computer-vision-bg.png";
import diabeticBg from "@/assets/diabetic-bg.png";
import dryEyeBg from "@/assets/dry-eye-bg.png";
import glaucomaBg from "@/assets/glaucoma-bg.png";
import lensConsultationBg from "@/assets/lens-consultation-bg.png";
import pediatricBg from "@/assets/pediatric-bg.png";
import refractiveBg from "@/assets/refractive-bg.png";
import visionTherapyBg from "@/assets/vision therapy-bg.jpg";

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

  const backgroundImages: Record<string, string> = {
    "Cataract Evaluation & Surgery": cataractBg,
    "Computer Vision Syndrome": computerVisionBg,
    "Diabetic Eye Care": diabeticBg,
    "Dry Eye Diagnosis & Therapy": dryEyeBg,
    "Glaucoma Screening & Management": glaucomaBg,
    "Contact Lens Consultation": lensConsultationBg,
    "Pediatric Eye Care": pediatricBg,
    "Refractive Error Testing": refractiveBg,
    "Vision Therapy": visionTherapyBg,
    "Comprehensive Eye Checkup": eyeCheck,
  };

  const backgroundImage = backgroundImages[title];
  const isCinematic = !!backgroundImage;

  return (
    <section className={`relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden ${isCinematic ? "bg-slate-950/10 text-white" : "bg-white"}`}>
      {/* Cinematic hero background */}
      {isCinematic ? (
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.img
            src={backgroundImage}
            alt={`${title} background`}
            className="absolute inset-0 w-full h-full object-cover object-center saturate-90 opacity-90"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 0.2, 0], filter: ["saturate(0.9)", "saturate(0.85)", "saturate(0.9)"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Left-to-right cascading white fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/30 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/60 via-slate-50/20 to-transparent opacity-70" />

          {/* Soft blue-teal translucent overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/20 to-transparent opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/15 to-slate-950/50 opacity-50" />

          {/* Floating glow blobs */}
          <motion.div
            className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"
            animate={{ x: [0, 18, 0], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-6 top-24 h-72 w-72 rounded-full bg-teal-300/15 blur-3xl"
            animate={{ y: [0, -12, 0], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/2 bottom-14 h-56 w-56 -translate-x-1/2 rounded-full bg-sky-400/15 blur-3xl"
            animate={{ x: [-14, 14, -14], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Soft edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white/40 to-transparent opacity-80 blur-sm" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-slate-950 to-transparent opacity-70" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />

          {/* Subtle grain texture */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 25%), radial-gradient(circle at bottom right, rgba(56,189,248,0.05), transparent 30%)",
            }}
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0 z-0 bg-slate-50" />
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          {/* Left Side: Informational Layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 text-white grid place-items-center mb-8 shadow-glow shadow-teal-500/20">
              <Icon className="w-8 h-8" />
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold leading-[1.05] mb-4 tracking-tight ${isCinematic ? "text-white" : "text-navy"}`}>
              {title}
            </h1>
            <p className={`text-xl md:text-2xl font-semibold mb-6 leading-tight ${isCinematic ? "text-cyan-200" : "text-teal"}`}>
              {subtitle}
            </p>
            <p className={`text-lg leading-relaxed max-w-xl mb-10 ${isCinematic ? "text-slate-100/90" : "text-muted-foreground"}`}>
              {description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold transition-all ${isCinematic ? "bg-cyan-400 text-slate-950 shadow-[0_20px_50px_-30px_rgba(56,189,248,0.8)] hover:bg-cyan-500" : "bg-sky-500 text-white shadow-soft hover:bg-sky-600"}`}
              >
                <Calendar className="w-5 h-5" /> Book Consultation
              </Link>
              <a
                href="tel:07777066990"
                className={`inline-flex items-center gap-2 rounded-full border-2 px-8 py-4 text-base font-bold transition-all ${isCinematic ? "border-white/25 bg-white/15 text-white hover:bg-white/20" : "border-sky-100 bg-white text-navy hover:bg-sky-50 hover:border-sky-200"}`}
              >
                <Phone className="w-5 h-5" /> Call Clinic
              </a>
            </div>
          </motion.div>

          {/* Right Side: Doctor Feature Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className={`rounded-[40px] p-8 md:p-10 border border-white/20 ${isCinematic ? "bg-white/15 shadow-[0_40px_120px_-70px_rgba(8,30,60,0.65)] backdrop-blur-3xl" : "glass border-white/60 shadow-elegant"} relative overflow-hidden`}
            >
              {/* Soft decorative background for panel */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200/20 blur-3xl rounded-full" />
              
              <div className="relative">
                <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isCinematic ? "text-slate-100" : "text-navy"}`}>
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
