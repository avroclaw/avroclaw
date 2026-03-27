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
                viewBox="0 0 187 153"
                fill="none"
                className="relative z-10 h-7 w-7 p-1"
              >
                <path d="M67 66.5215L0 153V86.4785L67 0V66.5215ZM127 66.5215L60 153V86.4785L127 0V66.5215ZM187 66.5215L120 153V86.4785L187 0V66.5215Z" fill="white"/>
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
