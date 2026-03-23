"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  {
    name: "MacStories",
    quote: "Like hiring an employee, not opening another chat window.",
    icon: (
      <svg viewBox="0 0 80 20" className="h-5 w-auto fill-current">
        <text x="0" y="15" fontSize="14" fontWeight="600" fontFamily="Georgia, serif">
          MacStories
        </text>
      </svg>
    ),
  },
  {
    name: "GitHub",
    stat: "247k ⭐",
    label: "in 60 days",
  },
  {
    name: "OpenAI",
    label: "Backed by OpenAI",
  },
  {
    name: "Andrej Karpathy",
    quote: "The most incredible sci-fi takeoff-adjacent thing I have seen.",
    label: "Former Director of AI, Tesla",
  },
];

export function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-12 border-y border-white/[0.04] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.02) 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs text-[#71717A] uppercase tracking-widest mb-10 font-medium"
        >
          OpenClaw is trusted by
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.04] rounded-xl overflow-hidden border border-white/[0.04]">
          {/* MacStories */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group flex flex-col items-center justify-center gap-1.5 bg-[#09090B] px-6 py-8 text-center transition-all duration-300 hover:bg-[rgba(74,222,128,0.04)] cursor-default"
          >
            <div className="text-xl font-bold text-[#A1A1AA] tracking-tight group-hover:text-[#4ADE80] transition-colors duration-300">MacStories</div>
            <div className="text-xs text-[#71717A] group-hover:text-[#A1A1AA] transition-colors duration-300">Featured coverage</div>
          </motion.div>

          {/* GitHub stars */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group flex flex-col items-center justify-center gap-1.5 bg-[#09090B] px-6 py-8 text-center transition-all duration-300 hover:bg-[rgba(74,222,128,0.04)] cursor-default"
          >
            <div className="text-xl font-bold text-[#A1A1AA] tabular-nums group-hover:text-[#4ADE80] transition-colors duration-300">247k+</div>
            <div className="text-xs text-[#71717A] group-hover:text-[#A1A1AA] transition-colors duration-300">GitHub stars in 60 days</div>
          </motion.div>

          {/* OpenAI */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group flex flex-col items-center justify-center gap-1.5 bg-[#09090B] px-6 py-8 text-center transition-all duration-300 hover:bg-[rgba(74,222,128,0.04)] cursor-default"
          >
            <div className="text-xl font-bold text-[#A1A1AA] group-hover:text-[#4ADE80] transition-colors duration-300">OpenAI</div>
            <div className="text-xs text-[#71717A] group-hover:text-[#A1A1AA] transition-colors duration-300">Backed &amp; acquired</div>
          </motion.div>

          {/* Karpathy */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group flex flex-col items-center justify-center gap-1.5 bg-[#09090B] px-6 py-8 text-center transition-all duration-300 hover:bg-[rgba(74,222,128,0.04)] cursor-default"
          >
            <div className="text-xl font-bold text-[#A1A1AA] group-hover:text-[#4ADE80] transition-colors duration-300">Andrej Karpathy</div>
            <div className="text-xs text-[#71717A] group-hover:text-[#A1A1AA] transition-colors duration-300">Former Director of AI, Tesla</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
