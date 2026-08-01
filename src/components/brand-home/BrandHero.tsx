"use client";

import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Terminal, 
  Sparkles, 
  ArrowRight, 
  Download, 
  Layers, 
  Cpu, 
  Lock, 
  Zap, 
  CheckCircle2,
  Code2
} from "lucide-react";

export default function BrandHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-slate-50 dark:bg-obsidian bg-grid-pattern transition-colors duration-300">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-electric-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-obsidian-800/80 border border-slate-200 dark:border-glass shadow-sm dark:shadow-glass text-xs font-semibold text-slate-700 dark:text-gray-300 backdrop-blur-md animate-float">
            <span className="flex h-2 w-2 rounded-full bg-electric-600 dark:bg-neon-cyan animate-ping" />
            <span className="text-slate-900 dark:text-white font-bold">StrataMetriq Ecosystem v1.4.4</span>
            <span className="text-slate-300 dark:text-gray-500">|</span>
            <span className="text-electric-600 dark:text-electric-400 font-mono">Polyglot DevSecOps & A4 UI Engines</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Next-Generation Tooling for{" "}
            <span className="bg-gradient-to-r from-electric-600 via-blue-600 to-purple-600 dark:from-electric-400 dark:via-neon-cyan dark:to-neon-purple bg-clip-text text-transparent dark:text-glow-blue">
              Ambitious Engineering Teams.
            </span>
          </h1>

          {/* Value Prop Description */}
          <p className="text-base sm:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
            <span className="text-slate-900 dark:text-white font-semibold">StrataMetriq</span> engineers world-class developer suites. Deploy zero-exfiltration AST audits in VS Code, or integrate our turnkey multi-page A4 ID card engine directly via NPM.
          </p>

          {/* Action Call-to-Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#showcase"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-electric-600 via-electric-500 to-neon-cyan hover:from-electric-500 hover:to-electric-400 text-white font-bold text-sm sm:text-base rounded-2xl shadow-glow-blue flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Active Software Suites</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#demos"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 dark:bg-obsidian-800/80 dark:hover:bg-obsidian-800 dark:text-white font-bold text-sm sm:text-base rounded-2xl border border-slate-300 dark:border-glass hover:border-slate-400 dark:hover:border-glass-hover shadow-sm dark:shadow-glass flex items-center justify-center space-x-2 transition-all"
            >
              <Terminal className="w-5 h-5 text-electric-600 dark:text-neon-cyan" />
              <span>Test Interactive Web Simulators</span>
            </a>
          </div>

          {/* Trust & Highlights Ribbon */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white/50 dark:bg-obsidian-800/50 border border-slate-200 dark:border-glass backdrop-blur-md flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-electric-50 text-electric-600 border border-electric-200 dark:bg-electric-600/20 dark:text-electric-400 dark:border-electric-500/30">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900 dark:text-white block">Zero Exfiltration</span>
                <span className="text-xs text-slate-500 dark:text-gray-400">100% local AST parsing</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/50 dark:bg-obsidian-800/50 border border-slate-200 dark:border-glass backdrop-blur-md flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-200 dark:bg-neon-cyan/20 dark:text-neon-cyan dark:border-neon-cyan/30">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900 dark:text-white block">Polyglot Support</span>
                <span className="text-xs text-slate-500 dark:text-gray-400">11 languages & ORMs</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/50 dark:bg-obsidian-800/50 border border-slate-200 dark:border-glass backdrop-blur-md flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 dark:bg-neon-purple/20 dark:text-neon-purple dark:border-neon-purple/30">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900 dark:text-white block">Turnkey UI & PDF</span>
                <span className="text-xs text-slate-500 dark:text-gray-400">A4 multi-sheet matrix</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/50 dark:bg-obsidian-800/50 border border-slate-200 dark:border-glass backdrop-blur-md flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-neon-emerald/20 dark:text-neon-emerald dark:border-neon-emerald/30">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900 dark:text-white block">4,500+ Downloads</span>
                <span className="text-xs text-slate-500 dark:text-gray-400">Trusted across DevOps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
