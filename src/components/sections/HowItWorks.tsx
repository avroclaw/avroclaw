"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Rocket, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <MessageCircle size={20} />,
    title: "Kickoff Call",
    duration: "20–45 min",
    desc: "We discuss your goals, map your integrations, and plan your workflows. You walk us through how you work — we design the agent around it.",
    details: ["Goals & workflow planning", "Integration mapping", "Infrastructure recommendation"],
  },
  {
    number: "02",
    icon: <Rocket size={20} />,
    title: "Deploy & Harden",
    duration: "1–3 hours",
    desc: "We handle VPS or Mac Mini setup, OpenClaw installation, Composio configuration, Docker sandboxing, firewall rules, and cron jobs. You get a secured, production-ready agent.",
    details: ["VPS or Mac Mini provisioning", "Docker sandboxing + firewall rules", "Composio OAuth + cron jobs"],
  },
  {
    number: "03",
    icon: <Shield size={20} />,
    title: "14-Day Hypercare",
    duration: "14 days",
    desc: "We tune workflows, expand permissions gradually, and fix edge cases. You get a dedicated Slack support channel with direct access to our team throughout.",
    details: ["Dedicated Slack support channel", "Workflow tuning + edge cases", "Gradual permission expansion"],
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden border-t border-white/[0.04]">

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(74,222,128,0.15)] bg-[rgba(74,222,128,0.05)] px-3 py-1 text-xs font-medium text-[#4ADE80] mb-4">
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FAFAFA] tracking-tight leading-tight">
            From kickoff to{" "}
            <span className="text-gradient-emerald">live agent</span>
          </h2>
          <p className="mt-5 text-lg text-[#A1A1AA] leading-relaxed">
            Three steps. A kickoff call, a setup session, and 14 days of hands-on support.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6">

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="relative"
            >
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-7 h-full hover:border-[rgba(74,222,128,0.12)] hover:bg-[rgba(74,222,128,0.02)] transition-all duration-300">
                {/* Step indicator */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.08)] text-[#4ADE80]">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#4ADE80] mb-0.5">{step.number}</div>
                    <div className="text-xs text-[#71717A]">{step.duration}</div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-[#FAFAFA] mb-3">{step.title}</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-5">{step.desc}</p>

                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-[#71717A]">
                      <div className="h-1 w-1 rounded-full bg-[#4ADE80] flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
