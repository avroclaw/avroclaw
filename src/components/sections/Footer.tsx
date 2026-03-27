"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group sm:flex-1">
            <div className="relative h-6 w-6">
              <div className="absolute inset-0 rounded-md bg-[#22C55E] opacity-90" />
              <svg
                viewBox="0 0 187 153"
                fill="none"
                className="relative z-10 h-6 w-6 p-1"
              >
                <path d="M67 66.5215L0 153V86.4785L67 0V66.5215ZM127 66.5215L60 153V86.4785L127 0V66.5215ZM187 66.5215L120 153V86.4785L187 0V66.5215Z" fill="white"/>
              </svg>
            </div>
            <span className="text-[#FAFAFA] font-semibold tracking-tight">
              Avro<span className="text-[#4ADE80]">Claw</span>
            </span>
          </a>

          {/* Nav links */}
          <nav className="flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-[#71717A] hover:text-[#A1A1AA] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-[#71717A] sm:flex-1 sm:text-right">
            &copy; 2026 AvroClaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
