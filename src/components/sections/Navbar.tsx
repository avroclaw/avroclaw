"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-[#09090B]/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative h-7 w-7">
              <div className="absolute inset-0 rounded-md bg-[#22C55E] opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 rounded-md bg-[#22C55E] blur-sm opacity-40 group-hover:opacity-60 transition-opacity" />
              <svg
                viewBox="0 0 206 184"
                fill="none"
                className="relative z-10 h-7 w-7 p-1"
              >
                <path d="M155.413 148.628C184.613 125.428 192.246 98.2943 192.413 87.6276C218.413 129.228 197.579 168.628 183.913 183.128C183.913 183.128 146.246 174.128 138.913 174.628C148.913 167.428 154.079 154.294 155.413 148.628Z" fill="white" stroke="white" />
                <path d="M158.913 134.628C179.313 119.028 185.746 90.1276 186.413 77.6276C170.013 45.2276 142.913 25.1276 131.413 19.1276C122.613 65.1276 103.079 77.2943 94.4127 77.6276C102.813 118.028 140.913 132.461 158.913 134.628Z" fill="white" stroke="white" />
                <path d="M96.4127 70.6276C120.013 55.0276 124.913 27.1276 124.413 15.1276C109.613 4.72761 86.5794 1.12761 76.9127 0.627603C27.3127 -1.7724 5.57941 30.2943 0.912734 46.6276C-0.287266 51.4276 1.41273 51.6276 2.41273 51.1276C30.8127 29.9276 41.5794 36.2943 43.4127 42.1276C42.6127 49.3276 48.7461 48.1276 51.9127 46.6276C63.1127 39.4276 68.9127 46.6276 70.4127 51.1276C70.8127 61.9276 74.9127 61.6276 76.9127 60.1276C82.1127 51.7276 92.0794 63.6276 96.4127 70.6276Z" fill="white" stroke="white" />
                <path d="M145.913 146.628C52.3127 145.028 11.2461 88.2943 2.41273 60.1276C33.2127 85.7276 41.5794 81.1276 41.9127 75.6276C44.3127 68.4276 48.5794 69.2943 50.4127 70.6276C56.8127 91.4276 76.7461 81.2943 85.9127 73.6276C93.1127 117.228 133.246 136.128 152.413 140.128L145.913 146.628Z" fill="white" stroke="white" />
              </svg>
            </div>
            <span className="text-[#FAFAFA] font-semibold tracking-tight text-lg">
              Avro<span className="text-[#4ADE80]">Claw</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors rounded-lg hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://cal.com/sanim/avroclaw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-[#4ADE80] text-[#09090B] font-semibold hover:bg-[#86EFAC] h-9 px-5 rounded-lg shadow-lg shadow-emerald-500/10 transition-all duration-200">
                Book a Call
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden border-t border-white/[0.06] bg-[#09090B]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors rounded-lg hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/[0.06] mt-2">
                <a
                  href="https://cal.com/sanim/avroclaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-[#4ADE80] text-[#09090B] font-semibold hover:bg-[#86EFAC]">
                    Book a Call
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
