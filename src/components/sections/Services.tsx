"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Calendar, Check, ChevronDown, Cloud, Cpu } from "lucide-react";

const tiers = [
  {
    icon: <Cloud size={22} />,
    name: "Hosted Setup",
    price: "$3,000",
    tagline: "Production-ready in the cloud",
    desc: "We provision a managed cloud VPS, install and configure OpenClaw, connect your tools, and harden security. You get a 24/7 agent accessible via Telegram, Slack, or Discord.",
    highlights: ["Cloud VPS (~$5–10/mo after)", "Full security hardening", "14-day hypercare"],
    features: [
      "Cloud VPS provisioning (~$5–10/mo after)",
      "Security hardening (Docker, firewall, exec allowlists)",
      "Composio OAuth middleware setup",
      "Email and calendar integration",
      "Up to 3 custom workflows",
      "Full documentation",
      "14-day hypercare",
      "Dedicated Slack support channel",
    ],
    popular: true,
  },
  {
    icon: <Cpu size={22} />,
    name: "Mac Mini Setup",
    price: "$5,000",
    tagline: "Local hardware, iMessage-native",
    desc: "For teams that need iMessage integration or prefer local infrastructure. We configure your Mac Mini remotely — security hardened, sandboxed, and connected to your full stack.",
    highlights: ["iMessage integration", "Local hardware (you own it)", "Remote setup, no travel"],
    features: [
      "Mac Mini remote setup (hardware yours)",
      "iMessage integration",
      "Security hardening (Docker, firewall, exec allowlists)",
      "Composio OAuth middleware setup",
      "Email and calendar integration",
      "Up to 3 custom workflows",
      "Full documentation",
      "14-day hypercare",
      "Dedicated Slack support channel",
    ],
    popular: false,
  },
  {
    icon: <Calendar size={22} />,
    name: "Custom Build",
    price: "Book a Call",
    tagline: "Your business, fully automated",
    desc: "We architect a fully custom agent stack from scratch. Multi-agent setups, proprietary data sources, custom LLM routing, enterprise compliance requirements — no templates.",
    highlights: ["No templates", "Multi-agent architectures", "Enterprise-grade compliance"],
    features: [
      "Everything in Hosted or Mac Mini",
      "Multi-agent architectures",
      "Custom LLM routing & selection",
      "Proprietary data source integrations",
      "Enterprise security & compliance",
      "Custom tooling & workflows (unlimited)",
      "Extended hypercare available",
      "Ongoing managed care plans",
    ],
    popular: false,
    cta: "Book a call",
    custom: true,
  },
];

function TierCard({ tier, index, inView }: { tier: typeof tiers[0]; index: number; inView: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isGreen = tier.popular || hovered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-xl border transition-all duration-300 cursor-default ${
        isGreen
          ? "border-[rgba(74,222,128,0.25)] bg-[rgba(74,222,128,0.04)] shadow-lg shadow-emerald-500/5"
          : "border-white/[0.06] bg-white/[0.02]"
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="rounded-full border border-[rgba(74,222,128,0.3)] bg-[rgba(74,222,128,0.12)] px-3 py-1 text-xs font-semibold text-[#4ADE80]">
            Recommended
          </div>
        </div>
      )}

      <div className="p-6">
        <div
          className={`inline-flex items-center justify-center h-10 w-10 rounded-xl mb-5 border transition-all duration-300 ${
            isGreen
              ? "border-[rgba(74,222,128,0.25)] bg-[rgba(74,222,128,0.1)] text-[#4ADE80]"
              : "border-white/[0.08] bg-white/[0.04] text-[#A1A1AA]"
          }`}
        >
          {tier.icon}
        </div>

        <h3 className="text-lg font-semibold text-[#FAFAFA] mb-1">{tier.name}</h3>
        <p className="text-sm text-[#71717A] mb-4">{tier.tagline}</p>

        <div className="mb-5">
          {tier.custom ? (
            <span className="text-2xl font-semibold text-[#FAFAFA]">Book a Call</span>
          ) : (
            <span className="text-3xl font-bold text-[#FAFAFA]">{tier.price}</span>
          )}
        </div>

        <p className="text-sm text-[#A1A1AA] leading-relaxed mb-5">{tier.desc}</p>

        <ul className="space-y-2 mb-5">
          {tier.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-[#A1A1AA]">
              <Check size={14} className="text-[#4ADE80] flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* See what's included toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`flex items-center gap-1.5 text-sm font-medium mb-5 transition-colors duration-200 ${
            isGreen ? "text-[#4ADE80] hover:text-[#86EFAC]" : "text-[#71717A] hover:text-[#A1A1AA]"
          }`}
        >
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
          {expanded ? "Hide details" : "See what's included"}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden space-y-2 mb-5 border-t border-white/[0.05] pt-4"
            >
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[#71717A]">
                  <Check size={13} className="text-[#4ADE80] flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <a
          href="https://cal.com/sanim/avroclaw"
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            isGreen
              ? "bg-[#4ADE80] text-[#09090B] hover:bg-[#86EFAC] shadow-lg shadow-emerald-500/10"
              : "border border-white/10 text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/[0.04] hover:border-white/20"
          }`}
        >
          {tier.cta || "Book a Call"}
        </a>
      </div>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="relative py-28 overflow-hidden border-t border-white/[0.04]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(74,222,128,0.04) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(74,222,128,0.15)] bg-[rgba(74,222,128,0.05)] px-3 py-1 text-xs font-medium text-[#4ADE80] mb-4">
            Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FAFAFA] tracking-tight leading-tight">
            Three ways we{" "}
            <span className="text-gradient-emerald">deploy your agent</span>
          </h2>
          <p className="mt-5 text-lg text-[#A1A1AA] leading-relaxed">
            Every engagement includes full security hardening and 14-day hypercare. Pick the infrastructure that fits your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
