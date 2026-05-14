import { Link } from "@tanstack/react-router";
import { Menu, X, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-us", label: "Why Us" },
  { to: "/when-to-consult", label: "When to Consult" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-3"
        }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`glass rounded-2xl flex items-center justify-between px-4 md:px-6 py-3 transition-shadow ${scrolled ? "shadow-card" : ""
            }`}
        >
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src={logo}
              alt="Mulund Eye Care Logo"
              className="w-25 h-25 md:w-20 md:h-20 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl md:text-2xl leading-none text-black tracking-tight uppercase">
                Mulund Eye Care
              </span>
              <span className="text-[10px] md:text-xs font-medium text-foreground/60 tracking-widest uppercase mt-1">
                See the World Better
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground transition-colors data-[status=active]:bg-mint data-[status=active]:text-navy"
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-400 text-white px-5 py-2.5 text-sm font-medium shadow-soft hover:shadow-glow hover:bg-sky-500 hover:scale-[1.03] transition-all"
            >
              <Calendar className="w-4 h-4" /> Book Appointment
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 shadow-card animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-medium hover:bg-mint data-[status=active]:bg-mint data-[status=active]:text-navy"
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-full justify-center items-center gap-2 rounded-xl bg-sky-400 text-white px-5 py-3 text-sm font-medium hover:bg-sky-500 transition-colors"
                >
                  <Calendar className="w-4 h-4" /> Book Appointment
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
