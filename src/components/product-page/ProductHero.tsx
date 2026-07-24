"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ShieldCheck, 
  Layout, 
  Cpu, 
  Terminal, 
  Download, 
  Layers, 
  BookOpen, 
  DollarSign, 
  Play, 
  Sparkles,
  ArrowLeft
} from "lucide-react";
import { StratametriqProduct } from "@/config/products";

interface ProductHeroProps {
  product: StratametriqProduct;
}

export default function ProductHero({ product }: ProductHeroProps) {
  const pathname = usePathname();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-electric-400" />;
      case "Layout":
        return <Layout className="w-8 h-8 text-neon-cyan" />;
      case "Cpu":
        return <Cpu className="w-8 h-8 text-neon-purple" />;
      default:
        return <Terminal className="w-8 h-8 text-electric-400" />;
    }
  };

  const basePath = `/products/${product.id}`;
  const isDocs = pathname.endsWith("/docs");
  const isPricing = pathname.endsWith("/pricing");
  const isOverview = !isDocs && !isPricing;

  return (
    <div className="bg-obsidian-900/90 border-b border-glass relative overflow-hidden pt-8 pb-6 bg-grid-pattern">
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-electric-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link
          href="/products"
          className="inline-flex items-center text-xs text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to All Suites Hub
        </Link>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6">
          <div className="flex items-start space-x-5">
            <div className="p-4 rounded-3xl bg-obsidian-950 border border-glass shadow-glass flex-shrink-0">
              {getIcon(product.iconName)}
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-electric-600/20 text-electric-400 border border-electric-500/30">
                  {product.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-white/10 text-white border border-glass">
                  {product.badge}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${
                  product.status === "Live" ? "bg-neon-emerald/20 text-neon-emerald" : "bg-amber-500/20 text-amber-400"
                }`}>
                  ● {product.status}
                </span>
                {product.downloadsCount && (
                  <span className="text-xs font-mono text-gray-400 flex items-center">
                    <Download className="w-3.5 h-3.5 mr-1 text-neon-cyan" />
                    {product.downloadsCount} installations
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-3xl font-medium leading-relaxed">
                {product.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex items-center space-x-2 pt-4 border-t border-glass">
          <Link
            href={basePath}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all ${
              isOverview
                ? "bg-white/10 text-white border border-glass shadow-sm"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Play className="w-3.5 h-3.5 text-neon-cyan" />
            <span>Overview & Live Demo</span>
          </Link>

          <Link
            href={`${basePath}/docs`}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all ${
              isDocs
                ? "bg-white/10 text-white border border-glass shadow-sm"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-electric-400" />
            <span>Documentation & Setup</span>
          </Link>

          <Link
            href={`${basePath}/pricing`}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all ${
              isPricing
                ? "bg-white/10 text-white border border-glass shadow-sm"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <DollarSign className="w-3.5 h-3.5 text-neon-emerald" />
            <span>Commercial Pricing</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
