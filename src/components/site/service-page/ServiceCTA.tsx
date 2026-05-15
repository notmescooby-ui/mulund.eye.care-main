import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Calendar } from "lucide-react";

export function ServiceCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[48px] overflow-hidden bg-navy p-12 md:p-20 text-center shadow-elegant">
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-teal/30 blur-[120px]"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-sky-500/20 blur-[120px]"
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Protect Your <span className="text-sky-400">Vision</span> Today
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Experience eye care that puts you first. Book your consultation at Mulund Eye Care and see the world better.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 text-white px-10 py-5 text-lg font-bold shadow-glow hover:bg-sky-500 hover:scale-105 transition-all"
              >
                <Calendar className="w-5 h-5" /> Book Appointment
              </Link>
              <a
                href="tel:07777066990"
                className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-10 py-5 text-lg font-bold hover:bg-white/10 transition-all"
              >
                Call Clinic
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
