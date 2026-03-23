"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, BookOpen, Check, GitMerge, Headphones, Key, Mail, Server, Shield } from "lucide-react";

const includedItems = [
  { icon: <Server size={15} />, text: "VPS or Mac Mini provisioning" },
  { icon: <Shield size={15} />, text: "Security hardening (Docker, firewall, exec allowlists)" },
  { icon: <Key size={15} />, text: "Composio OAuth middleware setup" },
  { icon: <Mail size={15} />, text: "Email and calendar integration" },
  { icon: <GitMerge size={15} />, text: "Up to 3 custom workflows" },
  { icon: <BookOpen size={15} />, text: "Full documentation" },
  { icon: <Headphones size={15} />, text: "14-day hypercare with dedicated Slack channel" },
  { icon: <Shield size={15} />, text: "Enterprise-grade security from day one" },
];

const plans = [
  {
    name: "Hosted Setup",
    price: "$3,000",
    priceNote: "one-time",
    desc: "Managed cloud VPS deployment with full security hardening and 14-day hypercare.",
    features: [
      "Cloud VPS provisioning (~$5–10/mo after)",
      "Security hardening (Docker, firewall)",
      "Composio OAuth middleware",
      "Email & calendar integration",
      "Up to 3 custom workflows",
      "Full documentation",
      "14-day hypercare",
      "Dedicated Slack support channel",
    ],
    cta: "Book a Call",
    popular: false,
  },
  {
    name: "Mac Mini Setup",
    price: "$5,000",
    priceNote: "one-time",
    desc: "iMessage integration, local hardware setup, remote configuration and hardening.",
    features: [
      "Mac Mini remote setup (hardware yours)",
      "iMessage integration",
      "Security hardening (Docker, firewall)",
      "Composio OAuth middleware",
      "Email & calendar integration",
      "Up to 3 custom workflows",
      "Full documentation",
      "14-day hypercare",
      "Dedicated Slack support channel",
    ],
    cta: "Book a Call",
    popular: true,
  },
  {
    name: "Custom Build",
    price: "Book a Call",
    priceNote: "scoped per project",
    desc: "Fully custom agent stack architected around your business. No templates. No limits.",
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
    cta: "Book a Call",
    popular: false,
    custom: true,
  },
];

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="relative py-28 overflow-hidden border-t border-white/[0.04]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(74,222,128,0.04) 0%, transparent 60%)",
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
            Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FAFAFA] tracking-tight leading-tight">
            Transparent pricing.
            <br />
            <span className="text-gradient-emerald">No surprises.</span>
          </h2>
          <p className="mt-5 text-lg text-[#A1A1AA] leading-relaxed">
            One-time setup fee. Includes everything you need to go live with a production-grade AI agent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={`relative rounded-xl p-7 transition-all duration-300 ${
                plan.popular
                  ? "border border-[rgba(74,222,128,0.25)] bg-[rgba(74,222,128,0.04)] shadow-2xl shadow-emerald-500/5 scale-[1.02]"
                  : "border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-[#4ADE80] px-4 py-1 text-xs font-semibold text-[#09090B]">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#FAFAFA] mb-1">{plan.name}</h3>
                <p className="text-xs text-[#71717A] leading-snug">{plan.desc}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-white/[0.06]">
                {plan.custom ? (
                  <div className="text-2xl font-bold text-[#FAFAFA]">Book a Call</div>
                ) : (
                  <>
                    <div className="text-4xl font-bold text-[#FAFAFA] tabular-nums">{plan.price}</div>
                    <div className="text-xs text-[#71717A] mt-1">{plan.priceNote}</div>
                  </>
                )}
              </div>

              <ul className="space-y-3 mb-7">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${plan.popular ? "text-[#4ADE80]" : "text-[#71717A]"}`}
                    />
                    <span className={plan.popular ? "text-[#A1A1AA]" : "text-[#71717A]"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://cal.com/sanim"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 group ${
                  plan.popular
                    ? "bg-[#4ADE80] text-[#09090B] hover:bg-[#86EFAC] shadow-lg shadow-emerald-500/10"
                    : "border border-white/10 text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/[0.04] hover:border-white/20"
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* What's included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-sm font-medium text-[#71717A] uppercase tracking-wider mb-6 text-center">
            Included in every engagement
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {includedItems.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.04 }}
                className="flex items-start gap-3 rounded-lg border border-white/[0.04] bg-white/[0.015] px-4 py-3"
              >
                <div className="mt-0.5 text-[#4ADE80] flex-shrink-0">{item.icon}</div>
                <span className="text-sm text-[#A1A1AA] leading-snug">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
