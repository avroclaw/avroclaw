"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Briefcase, ShoppingBag, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: <Briefcase size={22} />,
    title: "Founders & CEOs",
    desc: "Your agent handles email triage, scheduling, and investor updates — so you stay focused on what only you can do.",
    useCases: ["Email triage & draft replies", "Scheduling & meeting prep", "Investor update drafts"],
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Exec Teams",
    desc: "CFO, Head of Sales, EA — each gets a dedicated agent configured for their role. Separate inboxes, separate workflows, no shared noise.",
    useCases: ["Role-specific agent configs", "Slack monitoring & summaries", "Report generation & distribution"],
  },
  {
    icon: <ShoppingBag size={22} />,
    title: "Agencies & Studios",
    desc: "Client workflows, project management, and reporting — all automated. Your agent keeps Slack updated and surfaces issues before clients do.",
    useCases: ["Client workflow automation", "Project status updates", "KPI reporting & alerts"],
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Investors & VCs",
    desc: "Deal flow tracking, portfolio updates, LP communications. Your agent monitors news, tracks portfolio companies, and drafts LP updates on schedule.",
    useCases: ["Deal flow monitoring", "Portfolio company tracking", "LP communication drafts"],
  },
];

export function ForWho() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 overflow-hidden border-t border-white/[0.04]">
      <div
        aria-hidden
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 40% 40% at 50% 80%, rgba(74,222,128,0.04) 0%, transparent 60%)",
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
            Who It&apos;s For
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FAFAFA] tracking-tight leading-tight">
            Built for people who{" "}
            <span className="text-gradient-emerald">move fast</span>
          </h2>
          <p className="mt-5 text-lg text-[#A1A1AA] leading-relaxed">
            Standard for teams of 4–50. Every role gets an agent tuned to their workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-7 hover:border-[rgba(74,222,128,0.15)] hover:bg-[rgba(74,222,128,0.03)] transition-all duration-300 overflow-hidden"
            >
              {/* Background glow on hover */}
              <div
                aria-hidden
                className="absolute -right-16 -top-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)",
                }}
              />

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-xl border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.08)] text-[#4ADE80] group-hover:border-[rgba(74,222,128,0.3)] transition-colors">
                  {audience.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2">{audience.title}</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-5">{audience.desc}</p>
                  <ul className="space-y-1.5">
                    {audience.useCases.map((uc) => (
                      <li key={uc} className="flex items-center gap-2 text-sm text-[#71717A]">
                        <div className="h-1 w-1 rounded-full bg-[#4ADE80] flex-shrink-0" />
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
