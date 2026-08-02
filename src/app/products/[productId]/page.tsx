"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { STRATAMETRIQ_PRODUCTS } from "@/config/products";
import ProductHero from "@/components/product-page/ProductHero";
import InstallTabBox from "@/components/product-page/InstallTabBox";
import ProductPricingCards from "@/components/product-page/ProductPricingCards";
import VsCodeSimulator from "@/components/interactive-demos/VsCodeSimulator";
import LiveIdCardStudio from "@/components/interactive-demos/LiveIdCardStudio";
import { ShieldCheck, CheckCircle2, Layers, Cpu, Lock, Zap, ArrowRight, BookOpen, Sparkles } from "lucide-react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default function ProductLandingPage({ params }: ProductPageProps) {
  const product = STRATAMETRIQ_PRODUCTS.find((p) => p.id === params.productId);

  if (!product) {
    return notFound();
  }

  const isVsix = product.id === "architecture-intelligence";
  const isIdCard = product.id === "id-card-designer";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-obsidian pb-20 transition-colors duration-300">
      {/* Hero Header Banner */}
      <ProductHero product={product} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        {/* Quick Install Command Box */}
        <div id="install">
          <InstallTabBox installCommand={product.installCommand} productName={product.name} isVsix={isVsix} />
          <div className="mt-6 flex justify-center">
            <Link 
              href={`/products/${product.id}/docs`} 
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-glass hover:bg-slate-50 dark:hover:bg-obsidian-800 hover:border-electric-500/50 dark:hover:border-electric-500/50 text-sm font-bold text-slate-700 dark:text-white shadow-sm dark:shadow-none transition-all group"
            >
              <BookOpen className="w-4 h-4 text-electric-600 dark:text-electric-400 group-hover:scale-110 transition-transform" />
              <span>Read Official Documentation</span>
              <ArrowRight className="w-4 h-4 text-slate-400 dark:text-gray-500 group-hover:text-electric-600 dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>

        {/* Live Interactive Simulator Section tailored for this product */}
        {product.hasLiveDemo && (
          <div id="demo" className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-glass pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-electric-600 dark:text-electric-400 block">
                  Interactive Browser Simulator
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {isVsix ? "Test 13-Point AST Pre-Commit Gating Live" : "Test A4 Cut-Sheet Matrix & Variable Binding Live"}
                </h2>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 border border-cyan-200 dark:bg-neon-cyan/10 dark:border-neon-cyan/30 dark:text-neon-cyan text-xs font-bold font-mono hidden sm:block">
                Zero-Install Sandbox
              </span>
            </div>

            <div className="pt-2">
              {isVsix && <VsCodeSimulator />}
              {isIdCard && <LiveIdCardStudio />}
            </div>
          </div>
        )}

        {/* Deep Dive Features Section */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Enterprise Architectural Specifications
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300">
              Built with zero cloud exfiltration, strict memory isolation, and turnkey cross-framework compatibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-white dark:bg-obsidian-800/60 border border-slate-200 dark:border-glass shadow-sm dark:shadow-none space-y-3">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200 dark:border-glass w-fit text-electric-600 dark:text-electric-400">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Zero Cloud Exfiltration</h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                {isVsix
                  ? "All AST parsing and polyglot dependency mapping executes 100% locally on your machine. No source code or proprietary API keys ever leave your corporate firewall."
                  : "PDF rendering runs directly inside the browser using client-side canvas and vector engines. Student or employee PII never passes through external third-party servers."}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-obsidian-800/60 border border-slate-200 dark:border-glass shadow-sm dark:shadow-none space-y-3">
              <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-obsidian-950 border border-cyan-200 dark:border-glass w-fit text-cyan-600 dark:text-neon-cyan">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isVsix ? "Polyglot Vertical Traces" : "A4 Multi-Page Cut-Sheet Math"}
              </h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                {isVsix
                  ? "Trace API requests from HTTP entrypoints across TypeScript, Python, and Go microservices right down to parameterized SQL database calls."
                  : "Automatically calculates exact sheet layouts (e.g., 3×3 = 9 cards per A4 page) with precise millimeter margins for high-speed corporate batch printing."}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-obsidian-800/60 border border-slate-200 dark:border-glass shadow-sm dark:shadow-none space-y-3">
              <div className="p-3 rounded-2xl bg-purple-50 dark:bg-obsidian-950 border border-purple-200 dark:border-glass w-fit text-purple-600 dark:text-neon-purple">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isVsix ? "Automated CI/CD Gating Rules" : "Handlebars Variable Binding"}
              </h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                {isVsix
                  ? "Execute `stratametriq audit --ci` inside GitHub Actions or GitLab CI to block unauthenticated endpoints or N+1 query patterns before code merges."
                  : "Bind live database records seamlessly using handlebars syntax (`{{studentName}}`, `{{badgeId}}`) with instant hot-reload and front/back flip views."}
              </p>
            </div>
          </div>
        </div>

        {/* Pricing & Commercial Section */}
        <div id="pricing">
          <ProductPricingCards product={product} />
        </div>
      </div>
    </div>
  );
}
