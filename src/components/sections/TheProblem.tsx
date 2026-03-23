"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, Eye, KeyRound, Lock, Shield, Terminal } from "lucide-react";
import React from "react";

const painPoints: { icon: React.ReactNode; title: string; desc: string; severity: "critical" | "high" | "medium" }[] = [
  {
    icon: <KeyRound size={18} />,
    title: "Exposed credentials",
    desc: "Self-installers paste API keys directly into config files. No secrets manager, no rotation, no audit trail.",
    severity: "critical",
  },
  {
    icon: <Terminal size={18} />,
    title: "No sandboxing",
    desc: "Without Docker isolation, a compromised workflow has unrestricted access to your host system.",
    severity: "critical",
  },
  {
    icon: <Eye size={18} />,
    title: "No audit trail",
    desc: "You can't see what your agent did, when, or why. Debugging is guesswork. Compliance is impossible.",
    severity: "high",
  },
  {
    icon: <AlertTriangle size={18} />,
    title: "No exec allowlists",
    desc: "Unrestrained tool-use permissions mean your agent can write, delete, and execute anything it wants.",
    severity: "critical",
  },
  {
    icon: <Shield size={18} />,
    title: "No ongoing maintenance",
    desc: "OAuth tokens expire. OpenClaw releases updates monthly. One stale token breaks everything silently.",
    severity: "high",
  },
  {
    icon: <Lock size={18} />,
    title: "Custom integrations break",
    desc: "Composio middleware requires careful OAuth flows. Manual setups miss edge cases that silently corrupt data.",
    severity: "medium",
  },
];

const severityColor = {
  critical: "text-[#F6821F] bg-[#F6821F]/10 border-[#F6821F]/20",
  high: "text-[#F6821F] bg-[#F6821F]/10 border-[#F6821F]/20",
  medium: "text-[#F6821F] bg-[#F6821F]/10 border-[#F6821F]/20",
};

export function TheProblem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 20% 50%, rgba(246,130,31,0.04) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F6821F]/20 bg-[#F6821F]/[0.06] px-3 py-1 text-xs font-medium text-[#F6821F] mb-4">
                The problem with self-install
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#FAFAFA] tracking-tight leading-tight">
                Every self-install we&apos;ve seen
                <br />
                <span className="text-[#F6821F]">has security gaps</span>
              </h2>
              <p className="mt-5 text-lg text-[#A1A1AA] leading-relaxed">
                OpenClaw is self-installable. The documentation is thorough. But production-grade
                security requires expertise that goes well beyond the README.
              </p>
              <p className="mt-4 text-lg text-[#A1A1AA] leading-relaxed">
                We&apos;ve reviewed dozens of self-installs. The pattern is consistent: exposed
                credentials, no sandboxing, no audit trail. Not because the operators aren&apos;t smart —
                because hardening takes time they don&apos;t have.
              </p>

              <div className="mt-8 p-4 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                <blockquote className="text-sm text-[#A1A1AA] italic leading-relaxed">
                  &ldquo;I could have set it up myself, but every self-install I&apos;ve seen has security gaps.
                  The hardening alone was worth it.&rdquo;
                </blockquote>
                <p className="mt-2 text-xs text-[#4ADE80] font-medium">— Early-stage VC</p>
              </div>
            </motion.div>
          </div>

          {/* Right: pain points grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {painPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-lg border text-sm ${severityColor[point.severity]}`}
                    >
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#FAFAFA] mb-1">{point.title}</h3>
                      <p className="text-sm text-[#71717A] leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
