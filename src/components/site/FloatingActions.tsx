import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/917777066990"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 grid place-items-center rounded-full text-white shadow-elegant hover:scale-110 transition-transform animate-glow-pulse"
        style={{ background: "linear-gradient(135deg, oklch(0.62 0.13 165), oklch(0.66 0.11 185))" }}
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="tel:07777066990"
        aria-label="Call"
        className="w-14 h-14 grid place-items-center rounded-full bg-sky-400 text-white shadow-elegant hover:scale-110 hover:bg-sky-500 transition-all"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
