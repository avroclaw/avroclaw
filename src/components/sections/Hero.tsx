"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(74,222,128,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-24">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="flex items-center gap-2 rounded-full border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.06)] px-4 py-1.5 text-xs font-medium text-[#4ADE80]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]" />
            </span>
            Now accepting new clients
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#FAFAFA] leading-[1.05]"
        >
          OpenClaw,
          <br />
          <span className="text-gradient-emerald">Done for You.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed"
        >
          We handle the setup, security hardening, and maintenance — so you never touch a terminal. You just message your bot.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="https://cal.com/sanim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#4ADE80] text-[#09090B] font-semibold hover:bg-[#86EFAC] h-12 px-8 rounded-lg shadow-lg shadow-emerald-500/15 transition-all duration-200 group"
            >
              Book a Free Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </a>
          <a href="#pricing">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 border-white/10 text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/[0.04] hover:border-white/20 rounded-lg transition-all duration-200"
            >
              View Pricing
            </Button>
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-[#71717A]"
        >
          <div className="flex items-center gap-2">
            <Sparkles size={13} className="text-[#4ADE80]" />
            14-day hypercare included
          </div>
          <div className="h-3 w-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Zap size={13} className="text-[#4ADE80]" />
            Security-hardened from day one
          </div>
          <div className="h-3 w-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Zap size={13} className="text-[#4ADE80]" />
            No technical knowledge required
          </div>
        </motion.div>

        {/* Hero visual — abstract geometric */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-20 relative mx-auto max-w-3xl"
        >
          <div
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-px overflow-hidden"
            style={{
              boxShadow: "0 0 80px rgba(74,222,128,0.05), 0 1px 0 rgba(255,255,255,0.06) inset",
            }}
          >
            <div className="rounded-xl overflow-hidden bg-[#0D0D10] p-6">
              {/* Mock terminal / chat interface */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 h-5 rounded bg-white/[0.04] flex items-center justify-center">
                  <span className="text-[10px] text-[#71717A]">telegram — AvroClaw Agent</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    sender: "you",
                    text: "Summarize my emails from today and flag anything urgent.",
                    delay: 0,
                  },
                  {
                    sender: "agent",
                    text: "✓ Scanned 47 emails. 3 flagged as urgent: investor follow-up from Sequoia (2h ago), contract renewal from Stripe (due tomorrow), intro request from YC partner. Drafts ready for your review.",
                    delay: 0.6,
                  },
                  {
                    sender: "you",
                    text: "Schedule the Sequoia follow-up for tomorrow 10am.",
                    delay: 1.2,
                  },
                  {
                    sender: "agent",
                    text: "✓ Invite sent. Added to your calendar with context notes and briefing doc attached.",
                    delay: 1.8,
                  },
                ].map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + msg.delay, duration: 0.4 }}
                    className={`flex ${msg.sender === "you" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3.5 py-2.5 text-xs leading-relaxed ${
                        msg.sender === "you"
                          ? "bg-white/[0.06] text-[#FAFAFA]"
                          : "bg-[rgba(74,222,128,0.08)] border border-[rgba(74,222,128,0.12)] text-[#A1A1AA]"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <div className="flex-1 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3.5 py-2.5 text-xs text-[#3F3F46]">
                  Message your agent...
                </div>
                <div className="rounded-lg bg-[#4ADE80]/10 border border-[rgba(74,222,128,0.2)] px-3 flex items-center">
                  <ArrowRight size={14} className="text-[#4ADE80]" />
                </div>
              </div>
            </div>
          </div>

          {/* Glow underneath card */}
          <div
            aria-hidden
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-20 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(74,222,128,0.1) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
