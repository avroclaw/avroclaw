"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Shield, Zap } from "lucide-react";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 overflow-hidden border-t border-white/[0.04]">
      {/* Strong emerald glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(74,222,128,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,222,128,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.06)] px-4 py-1.5 text-xs font-medium text-[#4ADE80] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]" />
            </span>
            Limited slots available
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAFAFA] tracking-tight leading-[1.05]">
            OpenClaw, done right.
          </h2>

          <p className="mt-6 text-xl text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto">
            Stop reading about AI agents. Get one running on your business — secure, hardened, and built for how you work.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cal.com/sanim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group inline-flex items-center gap-2.5 bg-[#4ADE80] text-[#09090B] font-semibold text-base px-9 py-4 rounded-xl hover:bg-[#86EFAC] transition-all duration-200 shadow-xl shadow-emerald-500/15">
                Book a Free Call
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#71717A]">
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-[#4ADE80]" />
              Security-hardened from day one
            </div>
            <div className="h-3 w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-[#4ADE80]" />
              14-day hypercare included
            </div>
            <div className="h-3 w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-[#4ADE80]" />
              No technical knowledge required
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
