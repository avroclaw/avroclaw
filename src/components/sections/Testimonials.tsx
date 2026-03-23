"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const featured = {
  quote: "Genuinely the most incredible sci-fi takeoff-adjacent thing I have seen recently.",
  author: "Andrej Karpathy",
  role: "Founding Member, OpenAI · Former Director of AI, Tesla",
};

const quotes = [
  {
    quote: "It's running my company.",
    author: "@therno",
    role: "OpenClaw user",
  },
  {
    quote: "This is the first time I have felt like I am living in the future since ChatGPT's launch.",
    author: "Dave Morin",
    role: "Co-founder, Path",
  },
  {
    quote: "AI as teammate, not tool. The endgame of digital employees is here.",
    author: "@lycfyi",
    role: "OpenClaw user",
  },
  {
    quote: "It is now the largest, most popular, most successful open-source project in the history of humanity.",
    author: "Jensen Huang",
    role: "CEO, Nvidia",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden border-t border-white/[0.04]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(74,222,128,0.03) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(74,222,128,0.15)] bg-[rgba(74,222,128,0.05)] px-3 py-1 text-xs font-medium text-[#4ADE80] mb-4">
            What people say about OpenClaw
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FAFAFA] tracking-tight leading-tight">
            The world is{" "}
            <span className="text-gradient-emerald">paying attention</span>
          </h2>
        </motion.div>

        {/* Featured quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative rounded-xl border border-[rgba(74,222,128,0.15)] bg-[rgba(74,222,128,0.04)] p-8 sm:p-10 overflow-hidden">
            <div
              aria-hidden
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{
                background: "radial-gradient(circle at top right, rgba(74,222,128,0.05) 0%, transparent 60%)",
              }}
            />
            <Quote size={28} className="text-[#4ADE80] mb-5 opacity-60" />
            <blockquote className="text-2xl sm:text-3xl font-medium text-[#FAFAFA] leading-snug max-w-3xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.08)] flex items-center justify-center text-sm font-semibold text-[#4ADE80]">
                {featured.author[0]}
              </div>
              <div>
                <div className="text-sm font-semibold text-[#FAFAFA]">{featured.author}</div>
                <div className="text-sm text-[#71717A]">{featured.role}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-[rgba(74,222,128,0.1)] hover:bg-[rgba(74,222,128,0.02)] transition-all duration-300 flex flex-col"
            >
              <Quote size={16} className="text-[#4ADE80] opacity-50 mb-4" />
              <blockquote className="text-sm text-[#A1A1AA] leading-relaxed">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <div className="mt-auto pt-4 flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-full border border-white/[0.08] bg-white/[0.04] flex items-center justify-center text-xs font-semibold text-[#A1A1AA]">
                  {q.author[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#FAFAFA]">{q.author}</div>
                  <div className="text-xs text-[#71717A]">{q.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
