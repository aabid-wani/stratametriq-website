"use client";

import React from "react";
import { Filter, Sparkles, ShieldCheck, Layout, Cpu, Clock } from "lucide-react";

export type ProductFilterCategory = "All" | "DevSecOps & IDE" | "Turnkey UI & PDF" | "AI & Runtime" | "Upcoming Launches";

interface CategoryFilterPillsProps {
  activeCategory: ProductFilterCategory;
  onSelectCategory: (category: ProductFilterCategory) => void;
}

export default function CategoryFilterPills({ activeCategory, onSelectCategory }: CategoryFilterPillsProps) {
  const categories: Array<{ label: ProductFilterCategory; icon: React.ReactNode; count: number }> = [
    { label: "All", icon: <Sparkles className="w-3.5 h-3.5" />, count: 3 },
    { label: "DevSecOps & IDE", icon: <ShieldCheck className="w-3.5 h-3.5" />, count: 1 },
    { label: "Turnkey UI & PDF", icon: <Layout className="w-3.5 h-3.5" />, count: 1 },
    { label: "AI & Runtime", icon: <Cpu className="w-3.5 h-3.5" />, count: 1 },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-6">
      <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-obsidian-800/80 border border-glass text-xs font-semibold text-gray-400 mr-2">
        <Filter className="w-3.5 h-3.5 text-electric-400" />
        <span>Filter Suites:</span>
      </div>

      {categories.map((cat) => {
        const isActive = activeCategory === cat.label;
        return (
          <button
            key={cat.label}
            onClick={() => onSelectCategory(cat.label)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              isActive
                ? "bg-gradient-to-r from-electric-600 to-electric-500 text-white shadow-glow-blue border border-electric-400/50 scale-105"
                : "bg-obsidian-800/60 hover:bg-obsidian-800 text-gray-300 hover:text-white border border-glass"
            }`}
          >
            {cat.icon}
            <span>{cat.label}</span>
            <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
              isActive ? "bg-white/20 text-white" : "bg-white/5 text-gray-400"
            }`}>
              {cat.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
