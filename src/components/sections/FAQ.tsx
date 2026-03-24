"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is OpenClaw?",
    a: "OpenClaw is an open-source AI assistant running 24/7 on dedicated infrastructure. It triages email, schedules meetings, drafts replies, monitors Slack channels, and automates workflows across your tools — all proactively. You interact with it through a simple messaging interface like Telegram, Slack, WhatsApp, or Discord. No app installs, no dashboards.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "Not at all. Our customers don't touch terminals or write code. Many non-technical founders and executives use this service. Post-setup, all communication with your agent happens via Telegram, Slack, or WhatsApp in plain language.",
  },
  {
    q: "What's included in the implementation?",
    a: "Every engagement includes: VPS or Mac Mini provisioning, security hardening (Docker sandbox, firewall, exec allowlists), Composio OAuth middleware setup, email and calendar integration, up to 3 custom workflows, full documentation, and a 14-day hypercare period with a dedicated Slack support channel.",
  },
  {
    q: "What happens after I purchase?",
    a: "Within 48 hours, our team reaches out to schedule a kickoff call. The kickoff is 20–45 minutes — we map your tools, goals, and workflows. Then comes the setup session (1–3 hours), after which your bot goes live on Telegram same day.",
  },
  {
    q: "Is it safe? What about security?",
    a: "Security is core to how we work. We use Composio as OAuth middleware — raw credentials are never exposed to the bot. Everything runs inside a Docker sandbox with firewall hardening and exec allowlists. Your agent starts read-only by default. We gradually expand permissions as trust builds during the hypercare period. This setup is designed to pass CISO security reviews.",
  },
  {
    q: "What about the bot going rogue?",
    a: "Your agent starts with minimal permissions — read-only email, no send capability initially. The Docker sandbox prevents arbitrary code execution. Composio provides an instant revoke switch for every integration. We expand access gradually as trust builds.",
  },
  {
    q: "VPS or Mac Mini — which should I choose?",
    a: "Most clients use cloud VPS ($5–10/month ongoing) — it's more secure, easier to maintain, and remote setup is simple. Mac Mini is specifically for teams that need iMessage integration or prefer local hardware ownership. We'll help you decide on the kickoff call.",
  },
  {
    q: "Can I deploy multiple agents?",
    a: "Yes, and it's the standard setup for teams of 4–50 employees. Common setups include dedicated agents for the CEO inbox, CFO, Head of Sales, and a shared EA role. We'll help you figure out which roles need dedicated agents vs. shared workflows.",
  },
  {
    q: "What about maintenance after the setup?",
    a: "OAuth tokens expire, OpenClaw releases updates monthly, and integrations can drift over time. The implementation includes 14-day hypercare for the critical post-launch period. Ongoing support beyond that requires a separate Managed Care plan.",
  },
  {
    q: "Does the OpenAI acquisition affect anything?",
    a: "OpenClaw remains fully open-source. The acquisition validates the technology. The core innovations — always-on agents, heartbeats, cron jobs — are now industry table stakes. We continue supporting OpenClaw and any successor frameworks.",
  },
];

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="relative py-28 overflow-hidden border-t border-white/[0.04]">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 self-start"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(74,222,128,0.15)] bg-[rgba(74,222,128,0.05)] px-3 py-1 text-xs font-medium text-[#4ADE80] mb-4">
              FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#FAFAFA] tracking-tight leading-tight">
              Questions you
              <br />
              <span className="text-gradient-emerald">probably have</span>
            </h2>
            <p className="mt-5 text-lg text-[#A1A1AA] leading-relaxed">
              Everything you need to know before booking a call.
            </p>
            <div className="mt-8 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Still have questions? Book a no-pressure 20-minute call and we&apos;ll answer everything live.
              </p>
              <a
                href="https://cal.com/sanim/avroclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-[#4ADE80] hover:text-[#86EFAC] transition-colors"
              >
                Book a free call
                <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor">
                  <path d="M2.5 9.5l7-7M9.5 2.5H4M9.5 2.5v5.5" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-base py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
