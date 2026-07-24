"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Sparkles, ShieldCheck, Layout, Cpu, Download, ArrowRight, CheckCircle2 } from "lucide-react";
import { STRATAMETRIQ_PRODUCTS } from "@/config/products";
import { ProductFilterCategory } from "@/components/brand-home/CategoryFilterPills";

export default function AllProductsHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProductFilterCategory>("All");

  const categories: ProductFilterCategory[] = ["All", "DevSecOps & IDE", "Turnkey UI & PDF", "AI & Runtime"];

  const filteredProducts = STRATAMETRIQ_PRODUCTS.filter((prod) => {
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || prod.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-electric-400" />;
      case "Layout":
        return <Layout className="w-6 h-6 text-neon-cyan" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-neon-purple" />;
      default:
        return <Sparkles className="w-6 h-6 text-electric-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-obsidian py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-electric-600/20 border border-electric-500/30 text-xs font-bold text-electric-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>StrataMetriq Software Ecosystem Registry</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          All Software Suites & Engines
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Browse our entire catalog of polyglot AST analyzers, turnkey A4 PDF UI designers, and runtime bridges. Filter by category or search below.
        </p>
      </div>

      {/* Search & Filter Control Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-obsidian-800/80 p-4 rounded-3xl border border-glass shadow-glass">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products by name, keyword, or language..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-obsidian-950 border border-glass text-white text-xs placeholder-gray-500 focus:outline-none focus:border-electric-400 transition-colors"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-electric-600 text-white shadow-glow-blue"
                  : "bg-obsidian-950/60 text-gray-400 hover:text-white border border-glass"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-3xl p-7 bg-obsidian-800/60 hover:bg-obsidian-800/90 border border-glass hover:border-glass-hover shadow-glass transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-glass shadow-md group-hover:scale-110 transition-transform">
                  {getIcon(product.iconName)}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-white/5 text-gray-300 font-mono">
                    {product.badge}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase ${
                    product.status === "Live" ? "bg-neon-emerald/20 text-neon-emerald" : "bg-amber-500/20 text-amber-400"
                  }`}>
                    ● {product.status}
                  </span>
                </div>
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-electric-400 block mb-1">
                {product.category}
              </span>
              <Link href={product.href}>
                <h3 className="text-2xl font-extrabold text-white group-hover:text-electric-400 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm font-medium text-gray-300 mt-2 leading-relaxed">
                {product.tagline}
              </p>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-glass flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1 font-semibold">
                <span className="text-neon-emerald">{product.pricingSummary.community}</span>
              </div>
              <Link
                href={product.href}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold flex items-center space-x-1.5 transition-all"
              >
                <span>Explore Suite</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Overview Table */}
      <div className="pt-12 border-t border-glass">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-electric-400" /> Ecosystem Specifications Matrix
        </h2>
        <div className="overflow-x-auto rounded-3xl border border-glass bg-obsidian-800/40">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-glass bg-obsidian-900/80 text-gray-400 font-bold uppercase tracking-wider">
                <th className="p-4">Suite Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Primary Package / VSIX</th>
                <th className="p-4">Status & Version</th>
                <th className="p-4">Zero Exfiltration</th>
                <th className="p-4">License Options</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-glass text-gray-300">
              {STRATAMETRIQ_PRODUCTS.map((p) => (
                <tr key={p.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-white">
                    <Link href={p.href} className="hover:text-electric-400">
                      {p.name}
                    </Link>
                  </td>
                  <td className="p-4">{p.category}</td>
                  <td className="p-4 font-mono text-electric-400">{p.installCommand || "N/A"}</td>
                  <td className="p-4">
                    <span className="font-mono font-bold mr-1">{p.badge}</span>
                    <span className={p.status === "Live" ? "text-neon-emerald font-semibold" : "text-amber-400 font-semibold"}>
                      ({p.status})
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center text-neon-emerald font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> 100% On-Premise
                    </span>
                  </td>
                  <td className="p-4 font-semibold">{p.pricingSummary.community} / {p.pricingSummary.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
