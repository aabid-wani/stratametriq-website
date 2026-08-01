"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Layout, 
  Cpu, 
  Terminal, 
  ArrowRight, 
  Copy, 
  Check, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Play,
  GitBranch,
  Zap
} from "lucide-react";
import { STRATAMETRIQ_PRODUCTS, StratametriqProduct } from "@/config/products";
import { ProductFilterCategory } from "./CategoryFilterPills";

interface ProductShowcaseGridProps {
  activeCategory: ProductFilterCategory;
  onOpenDemo?: (productId: string) => void;
}

export default function ProductShowcaseGrid({ activeCategory, onOpenDemo }: ProductShowcaseGridProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredProducts = activeCategory === "All"
    ? STRATAMETRIQ_PRODUCTS
    : STRATAMETRIQ_PRODUCTS.filter((p) => p.category === activeCategory);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-electric-400" />;
      case "Layout":
        return <Layout className="w-6 h-6 text-neon-cyan" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-neon-purple" />;
      default:
        return <Terminal className="w-6 h-6 text-electric-400" />;
    }
  };

  return (
    <div id="showcase" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 rounded-3xl bg-white border border-slate-200 dark:bg-obsidian-800/40 dark:border-glass shadow-sm dark:shadow-none">
          <Sparkles className="w-12 h-12 text-slate-400 dark:text-gray-500 mx-auto mb-4 animate-pulse" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">No Suites in this Category</h3>
          <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">Select another filter or view all software products.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                product.isFeatured
                  ? "bg-white border-2 border-electric-500/50 hover:border-electric-500 shadow-md dark:bg-gradient-to-b dark:from-obsidian-800/90 dark:to-obsidian-900/95 dark:border-electric-500/30 dark:hover:border-electric-400 dark:shadow-glass"
                  : "bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm dark:bg-obsidian-800/60 dark:hover:bg-obsidian-800/90 dark:border-glass dark:hover:border-glass-hover dark:shadow-glass"
              }`}
            >
              {/* Subtle top card glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-electric-500/10 via-transparent to-transparent pointer-events-none group-hover:from-electric-500/20 transition-all" />

              <div>
                {/* Header Row: Icon + Badges */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-obsidian-950 dark:border-glass shadow-sm dark:shadow-md group-hover:scale-110 transition-transform duration-300">
                    {getIcon(product.iconName)}
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200 dark:bg-white/5 dark:text-gray-300 dark:border-glass">
                        {product.badge}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        product.status === "Live"
                          ? "bg-neon-emerald/20 text-neon-emerald border border-neon-emerald/30"
                          : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                      }`}>
                        ● {product.status}
                      </span>
                    </div>
                    {product.downloadsCount && (
                      <span className="text-[11px] text-slate-500 dark:text-gray-400 flex items-center font-mono">
                        <Download className="w-3 h-3 mr-1 text-electric-600 dark:text-neon-cyan" />
                        {product.downloadsCount} installs
                      </span>
                    )}
                  </div>
                </div>

                {/* Category & Title */}
                <span className="text-xs font-semibold uppercase tracking-wider text-electric-400 block mb-1">
                  {product.category}
                </span>
                <Link href={product.href}>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-electric-600 dark:text-white dark:group-hover:text-electric-400 transition-colors leading-snug">
                    {product.name}
                  </h3>
                </Link>

                {/* Tagline & Description */}
                <p className="text-sm font-medium text-slate-700 dark:text-gray-300 mt-2.5 leading-relaxed">
                  {product.tagline}
                </p>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Install Command Pill Box */}
                {product.installCommand && (
                  <div className="mt-5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-obsidian-950/90 dark:border-glass flex items-center justify-between text-xs font-mono text-slate-700 dark:text-gray-300 group/cmd hover:border-slate-300 dark:hover:border-glass-hover transition-colors">
                    <div className="flex items-center space-x-2 overflow-hidden mr-2">
                      <Terminal className="w-3.5 h-3.5 text-electric-600 dark:text-electric-400 flex-shrink-0" />
                      <span className="truncate">{product.installCommand}</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(product.installCommand!, product.id)}
                      className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-900 dark:border-transparent dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-400 dark:hover:text-white transition-colors flex-shrink-0"
                      title="Copy install command"
                    >
                      {copiedId === product.id ? (
                        <Check className="w-3.5 h-3.5 text-neon-emerald" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom Footer Section: Pricing & Action Buttons */}
              <div className="mt-8 pt-5 border-t border-slate-200 dark:border-glass/60 flex flex-col space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-gray-400">License:</span>
                  <div className="flex items-center space-x-2 font-semibold">
                    <span className="text-emerald-600 dark:text-neon-emerald">{product.pricingSummary.community}</span>
                    <span className="text-slate-300 dark:text-gray-600">/</span>
                    <span className="text-slate-900 dark:text-white">Pro & Enterprise</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <Link
                    href={product.href}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 dark:border-glass dark:hover:border-glass-hover dark:bg-white/5 dark:hover:bg-white/10 dark:text-white text-xs font-bold text-center flex items-center justify-center space-x-1.5 transition-all"
                  >
                    <span>View Suite</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {product.hasLiveDemo ? (
                    <Link
                      href={`/products/${product.id}#demo`}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-neon-cyan text-white text-xs font-bold text-center flex items-center justify-center space-x-1 shadow-glow-blue transition-all"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>Live Demo</span>
                    </Link>
                  ) : (
                    <Link
                      href={product.href}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:bg-obsidian-950 dark:border-glass dark:text-gray-400 dark:hover:text-white text-xs font-bold text-center flex items-center justify-center transition-all"
                    >
                      <span>Learn More</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
