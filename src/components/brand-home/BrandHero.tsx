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
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-obsidian bg-grid-pattern">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-electric-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-obsidian-800/80 border border-glass shadow-glass text-xs font-semibold text-gray-300 backdrop-blur-md animate-float">
            <span className="flex h-2 w-2 rounded-full bg-neon-cyan animate-ping" />
            <span className="text-white font-bold">StrataMetriq Ecosystem v1.4.4</span>
            <span className="text-gray-500">|</span>
            <span className="text-electric-400 font-mono">Polyglot DevSecOps & A4 UI Engines</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Next-Generation Tooling for{" "}
            <span className="bg-gradient-to-r from-electric-400 via-neon-cyan to-neon-purple bg-clip-text text-transparent text-glow-blue">
              Ambitious Engineering Teams.
            </span>
          </h1>

          {/* Value Prop Description */}
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
            <span className="text-white font-semibold">StrataMetriq</span> engineers world-class developer suites. Deploy zero-exfiltration AST audits in VS Code, or integrate our turnkey multi-page A4 ID card engine directly via NPM.
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
              className="w-full sm:w-auto px-8 py-4 bg-obsidian-800/80 hover:bg-obsidian-800 text-white font-bold text-sm sm:text-base rounded-2xl border border-glass hover:border-glass-hover shadow-glass flex items-center justify-center space-x-2 transition-all"
            >
              <Terminal className="w-5 h-5 text-neon-cyan" />
              <span>Test Interactive Web Simulators</span>
            </a>
          </div>

          {/* Trust & Highlights Ribbon */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-obsidian-800/50 border border-glass backdrop-blur-md flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-electric-600/20 text-electric-400 border border-electric-500/30">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">Zero Exfiltration</span>
                <span className="text-xs text-gray-400">100% local AST parsing</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-800/50 border border-glass backdrop-blur-md flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">Polyglot Support</span>
                <span className="text-xs text-gray-400">11 languages & ORMs</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-800/50 border border-glass backdrop-blur-md flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-neon-purple/20 text-neon-purple border border-neon-purple/30">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">Turnkey UI & PDF</span>
                <span className="text-xs text-gray-400">A4 multi-sheet matrix</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-obsidian-800/50 border border-glass backdrop-blur-md flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-neon-emerald/20 text-neon-emerald border border-neon-emerald/30">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">4,500+ Downloads</span>
                <span className="text-xs text-gray-400">Trusted across DevOps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
