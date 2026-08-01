"use client";

import React, { useState } from "react";
import BrandHero from "@/components/brand-home/BrandHero";
import CategoryFilterPills, { ProductFilterCategory } from "@/components/brand-home/CategoryFilterPills";
import ProductShowcaseGrid from "@/components/brand-home/ProductShowcaseGrid";
import RoadmapPreview from "@/components/brand-home/RoadmapPreview";
import VsCodeSimulator from "@/components/interactive-demos/VsCodeSimulator";
import LiveIdCardStudio from "@/components/interactive-demos/LiveIdCardStudio";
import CliTerminalSimulator from "@/components/interactive-demos/CliTerminalSimulator";
import { Terminal, ShieldCheck, Layout, Sparkles } from "lucide-react";

export default function BrandHome() {
  const [activeCategory, setActiveCategory] = useState<ProductFilterCategory>("All");
  const [activeDemo, setActiveDemo] = useState<"vscode" | "idcard" | "cli">("vscode");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-obsidian transition-colors duration-300">
      {/* Brand Hero Banner */}
      <BrandHero />

      {/* Interactive Category Filter Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-6 z-20 relative">
        <CategoryFilterPills
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </div>

      {/* Dynamic Product Showcase Grid */}
      <ProductShowcaseGrid activeCategory={activeCategory} />

      {/* Interactive Web Simulators Section */}
      <section id="demos" className="py-20 bg-slate-100/50 dark:bg-obsidian-900/40 border-t border-slate-200 dark:border-glass relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-electric-600/20 border border-electric-500/30 text-xs font-bold text-electric-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero-Install Web Simulators</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Test Our Software Suites Live in Your Browser
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300">
              Experience StrataMetriq developer tools without leaving the page. Switch simulators below to test AST pre-deployment safety audits or turnkey A4 PDF sheet rendering.
            </p>

            {/* Demo Switcher Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setActiveDemo("vscode")}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all ${
                  activeDemo === "vscode"
                    ? "bg-gradient-to-r from-electric-600 to-electric-500 text-white shadow-glow-blue scale-105"
                    : "bg-white border-slate-300 text-slate-500 hover:text-slate-900 hover:bg-slate-50 dark:bg-obsidian-800/80 dark:border-glass dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-electric-400" />
                <span>Architecture Intelligence (VS Code)</span>
              </button>

              <button
                onClick={() => setActiveDemo("idcard")}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all ${
                  activeDemo === "idcard"
                    ? "bg-gradient-to-r from-neon-cyan to-blue-600 text-white dark:text-obsidian shadow-glow-cyan scale-105"
                    : "bg-white border-slate-300 text-slate-500 hover:text-slate-900 hover:bg-slate-50 dark:bg-obsidian-800/80 dark:border-glass dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                <Layout className="w-4 h-4 text-neon-cyan" />
                <span>ID Card Studio (@npm)</span>
              </button>

              <button
                onClick={() => setActiveDemo("cli")}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all ${
                  activeDemo === "cli"
                    ? "bg-gradient-to-r from-neon-purple to-purple-600 text-white shadow-glow-purple scale-105"
                    : "bg-white border-slate-300 text-slate-500 hover:text-slate-900 hover:bg-slate-50 dark:bg-obsidian-800/80 dark:border-glass dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                <Terminal className="w-4 h-4 text-neon-purple" />
                <span>Polyglot CLI Audit Terminal</span>
              </button>
            </div>
          </div>

          {/* Render Active Simulator */}
          <div className="mt-8 transition-all duration-300">
            {activeDemo === "vscode" && <VsCodeSimulator />}
            {activeDemo === "idcard" && <LiveIdCardStudio />}
            {activeDemo === "cli" && <CliTerminalSimulator />}
          </div>
        </div>
      </section>

      {/* Roadmap & Upcoming Launches Teaser */}
      <RoadmapPreview />
    </div>
  );
}
