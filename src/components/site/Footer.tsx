import { Link } from "@tanstack/react-router";
import { Eye, Phone, MapPin, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 text-white" style={{ backgroundColor: "oklch(0.22 0.06 250)" }}>
      <div className="absolute inset-x-0 -top-12 h-12 bg-gradient-to-b from-transparent to-[oklch(0.22_0.06_250)] pointer-events-none" />
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-primary shadow-glow">
                <Eye className="w-5 h-5" />
              </span>
              <span className="font-display font-semibold text-lg">Mulund Eye Care</span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Advanced ophthalmology services delivered with precision, compassion, and a commitment to lifelong vision health.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-teal hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-teal">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li><Link to="/" className="hover:text-teal transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-teal transition-colors">Services</Link></li>
              <li><Link to="/why-us" className="hover:text-teal transition-colors">Why Us</Link></li>
              <li><Link to="/when-to-consult" className="hover:text-teal transition-colors">When to Consult</Link></li>
              <li><Link to="/contact" className="hover:text-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-teal">Services</h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>Comprehensive Eye Checkup</li>
              <li>Cataract Evaluation</li>
              <li>Glaucoma Screening</li>
              <li>Diabetic Eye Examination</li>
              <li>Dry Eye Treatment</li>
              <li>Pediatric Eye Care</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-teal">Contact</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-teal shrink-0" />
                <span>Shop No 6, Morphosis Adagio, Dindayal Upadhyay Marg, Mulund West, Mumbai 400080</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-teal shrink-0" />
                <a href="tel:07777066990" className="hover:text-teal">077770 66990</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-teal shrink-0" />
                <a href="mailto:care@mulundeyecare.in" className="hover:text-teal">care@mulundeyecare.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-white/60">
          <p>© {new Date().getFullYear()} Mulund Eye Care. All rights reserved.</p>
          <p>Crafted with care for healthier vision.</p>
        </div>
      </div>
    </footer>
  );
}
