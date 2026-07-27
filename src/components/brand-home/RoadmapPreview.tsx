"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Rocket, Sparkles, Send, CheckCircle2, ArrowRight, Clock, ShieldAlert, Cpu, Layers } from "lucide-react";

export default function RoadmapPreview() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const upcomingProducts = [
    {
      name: "StrataMetriq Form Builder & Governance Gateway",
      tagline: "Turnkey multi-step enterprise form studio & high-throughput API rate-limiting proxy.",
      status: "Q3 2026 Launch",
      category: "Turnkey UI & SaaS",
      icon: <Layers className="w-5 h-5 text-neon-cyan" />,
    },
    {
      name: "StrataMetriq OpenTelemetry Runtime Bridge",
      tagline: "Correlate static polyglot AST traces with live production traffic latency and error heatmaps.",
      status: "Beta Active",
      category: "AI & Runtime",
      icon: <Cpu className="w-5 h-5 text-neon-purple" />,
    },
    {
      name: "StrataMetriq AI SDK & Prompt Auditor",
      tagline: "Deterministic structured JSON guardrails and zero-exfiltration local LLM safety validator.",
      status: "Q4 2026 Launch",
      category: "DevSecOps & IDE",
      icon: <ShieldAlert className="w-5 h-5 text-electric-400" />,
    },
  ];

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-obsidian-900/60 border-t border-b border-glass relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-purple/20 border border-neon-purple/40 text-xs font-semibold text-neon-purple mb-3">
              <Rocket className="w-3.5 h-3.5" />
              <span>StrataMetriq Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What We Are Launching Next
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-2">
              Our engineering team continuously expands the StrataMetriq multi-product ecosystem. Get early beta access to our upcoming suites before public release.
            </p>
          </div>

          <Link
            href="/roadmap"
            className="px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-glass text-white text-sm font-bold flex items-center space-x-2 transition-all self-start md:self-auto"
          >
            <span>View Full 2026–2027 Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingProducts.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-obsidian-800/50 border border-glass hover:border-glass-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-obsidian-950 border border-glass">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold font-mono bg-white/5 text-gray-300 border border-glass flex items-center">
                    <Clock className="w-3 h-3 mr-1 text-neon-purple" />
                    {item.status}
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {item.tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-glass/60 flex items-center justify-between text-xs">
                <span className="text-gray-500">Access Tier: Early Beta</span>
                <Link
                  href="/roadmap"
                  className="text-electric-400 hover:text-electric-300 font-semibold flex items-center"
                >
                  <span>Request Invite</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Waitlist Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-obsidian-800 via-obsidian-800/80 to-obsidian-800 border border-glass p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-glass">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center lg:justify-start">
              <Sparkles className="w-6 h-6 mr-2 text-electric-400" /> Join 1,200+ Developers on the Priority Waitlist
            </h3>
            <p className="text-sm text-gray-300 max-w-xl">
              Be the first to test new VS Code extensions, turnkey UI studios, and OpenTelemetry runtime packages as they drop.
            </p>
          </div>

          <form action="https://formspree.io/f/mqerwrka" method="POST" className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
            <input
              type="email"
              name="email"
              required
              placeholder="developer@company.com"
              className="px-4 py-3.5 rounded-xl bg-obsidian-950 border border-glass text-white text-sm placeholder-gray-500 focus:outline-none focus:border-electric-400 min-w-[280px]"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-neon-cyan text-white font-bold text-sm rounded-xl shadow-glow-blue flex items-center justify-center space-x-2 transition-all"
            >
              <span>Join Priority List</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
