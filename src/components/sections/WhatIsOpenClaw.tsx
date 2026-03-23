"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, GitBranch, Globe, MessageSquare, Shield, Zap } from "lucide-react";

const stats = [
  { value: "247k", label: "GitHub Stars", suffix: "⭐" },
  { value: "60", label: "Days to reach it", suffix: "days" },
  { value: "24/7", label: "Always-on agent", suffix: "" },
];

const features = [
  {
    icon: <Bot size={18} />,
    title: "Connects to any LLM",
    desc: "Claude, GPT-4o, DeepSeek — your choice. Runs on dedicated infrastructure.",
  },
  {
    icon: <MessageSquare size={18} />,
    title: "Native on your channels",
    desc: "Telegram, WhatsApp, Slack, or Discord. Meets you where you already work.",
  },
  {
    icon: <Zap size={18} />,
    title: "Proactive automation",
    desc: "Doesn't wait for commands. Triages email, monitors Slack, drafts replies — autonomously.",
  },
  {
    icon: <Globe size={18} />,
    title: "Real software integrations",
    desc: "Calendar, email, CRMs, Notion, Linear — composable via Composio OAuth middleware.",
  },
  {
    icon: <Shield size={18} />,
    title: "Security-first architecture",
    desc: "Docker sandboxed. Firewall hardened. Exec allowlists. Read-only by default.",
  },
  {
    icon: <GitBranch size={18} />,
    title: "Open source & auditable",
    desc: "No black-box SaaS. Every workflow is transparent, auditable, and yours.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function WhatIsOpenClaw() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(74,222,128,0.15)] bg-[rgba(74,222,128,0.05)] px-3 py-1 text-xs font-medium text-[#4ADE80] mb-4">
            What is OpenClaw
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FAFAFA] tracking-tight leading-tight">
            The AI agent that runs your{" "}
            <span className="text-gradient-emerald">business in the background</span>
          </h2>
          <p className="mt-5 text-lg text-[#A1A1AA] leading-relaxed max-w-2xl">
            OpenClaw is open-source infrastructure that connects frontier LLMs to your real software.
            It doesn&apos;t just answer questions — it takes action. Proactively.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-6 mb-14"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-5 py-3"
            >
              <span className="text-2xl font-bold text-[#FAFAFA] tabular-nums">{stat.value}</span>
              <span className="text-sm text-[#71717A]">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-[rgba(74,222,128,0.15)] hover:bg-[rgba(74,222,128,0.03)] transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center h-9 w-9 rounded-lg border border-white/[0.08] bg-white/[0.04] text-[#4ADE80] group-hover:border-[rgba(74,222,128,0.2)] transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-[#FAFAFA] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
