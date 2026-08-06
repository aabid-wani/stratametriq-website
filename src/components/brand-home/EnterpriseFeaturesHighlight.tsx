"use client";

import React from "react";
import { ShieldAlert, Code2, Network, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EnterpriseFeaturesHighlight() {
  return (
    <section className="py-24 bg-obsidian border-y border-glass relative overflow-hidden transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-electric-600/20 border border-electric-500/30 text-xs font-bold text-electric-400">
            <ShieldAlert className="w-4 h-4" />
            <span>Enterprise-Grade Governance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Stop Architectural Tech Debt at the Source.
          </h2>
          <p className="text-base sm:text-xl text-gray-300">
            StrataMetriq transforms from a local developer tool into a powerful governance gate. Enforce company-specific rules, block bad PRs, and give developers instant feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Custom Rules */}
          <div className="bg-obsidian-800/80 p-8 rounded-2xl border border-glass hover:border-electric-500/50 shadow-glass transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-electric-600/20 text-electric-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Network className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Custom Rules Engine</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Define your own architectural boundaries. Use <code className="text-electric-400 bg-electric-900/30 px-1.5 py-0.5 rounded text-sm">stratametriq.rules.yaml</code> to forbid specific cross-layer imports and enforce domain isolation.
            </p>
          </div>

          {/* Feature 2: CI/CD Quality Gates */}
          <div className="bg-obsidian-800/80 p-8 rounded-2xl border border-glass hover:border-neon-purple/50 shadow-glass transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-neon-purple/20 text-neon-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">CI/CD Quality Gates (SARIF)</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Natively integrate with GitHub Advanced Security or GitLab CI. Output standard SARIF 2.1.0 reports to automatically block Pull Requests that introduce critical structural flaws.
            </p>
          </div>

          {/* Feature 3: Live Editor Guardrails */}
          <div className="bg-obsidian-800/80 p-8 rounded-2xl border border-glass hover:border-neon-cyan/50 shadow-glass transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-neon-cyan/20 text-neon-cyan rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Live Editor Guardrails</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Provide instantaneous feedback. With live editor squiggles and intelligent Quick Fixes, developers are warned about architectural violations before they even commit.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
           <Link href="/enterprise" className="inline-flex items-center text-electric-400 font-semibold hover:text-white transition-colors">
             Explore Enterprise Solutions <ArrowRight className="w-4 h-4 ml-2" />
           </Link>
        </div>
      </div>
    </section>
  );
}
