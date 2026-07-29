"use client";

import React, { useState } from "react";
import { History, Box, Send, FileCode2, ShieldCheck, Terminal } from "lucide-react";

export default function ChangelogPage() {
  const [filter, setFilter] = useState("All");

  const changelogData = [
    {
      version: "v1.4.1",
      date: "July 29, 2026",
      product: "Architecture Intelligence",
      icon: <ShieldCheck className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Added", text: "Full-Stack Enterprise Polyglot Support: Native AST parsing for Python, Java, Kotlin, Go, C#, and more." },
        { type: "Added", text: "Cross-Stack Vertical Flow Tracing: Traces frontend API calls directly into backend framework endpoints." },
        { type: "Changed", text: "Improved DFS cycle detection algorithm for circular dependency detection." },
        { type: "Fixed", text: "Resolved a false positive in the secret detection engine for variables ending in _URL." }
      ]
    },
    {
      version: "v1.5.0",
      date: "July 28, 2026",
      product: "ID Card Designer",
      icon: <Box className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Added", text: "Bulk CSV Import Dashboard: Click the 'Import CSV' button to automatically create a dedicated 'Imported Data' workspace tab." },
        { type: "Added", text: "Dynamic Field Definitions: Extracts column headers and generates dynamic text fields for the Property Inspector." },
        { type: "Added", text: "Advanced Paper Dimensions: Full mathematical rendering support for A3, A4, A5, US Letter, and US Legal paper sheets." },
        { type: "Fixed", text: "Landscape PDF Scaling Fix: Resolved jspdf engine bug where hardware crop marks lost landscape rotation constraints." }
      ]
    },
    {
      version: "v1.4.3",
      date: "July 25, 2026",
      product: "ID Card Designer",
      icon: <FileCode2 className="w-6 h-6 text-neon-cyan" />,
      features: [
        { type: "Added", text: "Initial documented release of the Turnkey Dashboard (<IdCardManager />)." },
        { type: "Added", text: "Core HTML2Canvas and jsPDF high-resolution rendering engine." }
      ]
    },
    {
      version: "v1.3.0",
      date: "June 15, 2026",
      product: "Architecture Intelligence",
      icon: <Terminal className="w-6 h-6 text-neon-cyan" />,
      features: [
        { type: "Added", text: "Interactive VS Code Extension: First release of the interactive developer UI with real-time editor sync." },
        { type: "Added", text: "13-Point Safety Audit: Shipped the automated DevSecOps pre-deployment audit engine." }
      ]
    }
  ];

  const filteredData = filter === "All" ? changelogData : changelogData.filter(item => item.product === filter);

  return (
    <div className="min-h-screen bg-obsidian py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neon-emerald/20 border border-neon-emerald/30 text-xs font-bold text-neon-emerald">
          <History className="w-3.5 h-3.5" />
          <span>Product Changelog</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          What's New
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Track our latest product updates, improvements, and bug fixes. We release updates continuously.
        </p>
      </div>

      {/* Filter Sidebar & Timeline Layout */}
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-4 p-5 rounded-2xl bg-obsidian-900 border border-glass">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Filter by Product</h3>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => setFilter("All")}
                className={`text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${filter === "All" ? "bg-electric-600/20 text-electric-400 border border-electric-500/30" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
              >
                All Updates
              </button>
              <button 
                onClick={() => setFilter("ID Card Designer")}
                className={`text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${filter === "ID Card Designer" ? "bg-electric-600/20 text-electric-400 border border-electric-500/30" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
              >
                ID Card Designer
              </button>
              <button 
                onClick={() => setFilter("Architecture Intelligence")}
                className={`text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${filter === "Architecture Intelligence" ? "bg-electric-600/20 text-electric-400 border border-electric-500/30" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
              >
                Architecture Intelligence
              </button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex-1 relative border-l-2 border-glass pl-8 space-y-16">
          {filteredData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline node */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-obsidian-950 border-2 border-electric-500 flex items-center justify-center text-xs font-bold text-white shadow-glow-blue group-hover:scale-125 transition-transform" />
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-2xl bg-obsidian-900 border border-glass shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-white">{item.version}</h3>
                    <span className="text-xs font-medium text-gray-400">{item.date}</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-electric-900/40 text-electric-300 border border-electric-500/30">
                  {item.product}
                </span>
              </div>

              <div className="space-y-3 mt-4">
                {item.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <span className={`mt-0.5 px-2 py-0.5 text-[10px] font-black uppercase rounded ${feature.type === 'Added' ? 'bg-neon-emerald/20 text-neon-emerald border border-neon-emerald/20' : 'bg-neon-purple/20 text-neon-purple border border-neon-purple/20'}`}>
                      {feature.type}
                    </span>
                    <p className="text-sm text-gray-300 leading-relaxed flex-1">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {filteredData.length === 0 && (
            <div className="text-gray-400 italic">No updates found for this product.</div>
          )}
        </div>
      </div>

      {/* Subscription Box */}
      <div className="mt-24 rounded-3xl bg-gradient-to-r from-obsidian-800 via-obsidian-800/80 to-obsidian-800 border border-glass p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-glass">
        <h2 className="text-2xl font-bold text-white">
          Get Notified About New Releases
        </h2>
        <p className="text-sm text-gray-300 max-w-xl mx-auto">
          Subscribe to our developer newsletter to get instantly notified when we drop massive new features or security updates.
        </p>

        <form action="https://formspree.io/f/mqerwrka" method="POST" className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
          <input
            type="email"
            name="email"
            required
            placeholder="developer@company.com"
            className="flex-1 px-4 py-3.5 rounded-xl bg-obsidian-950 border border-glass text-white text-sm placeholder-gray-500 focus:outline-none focus:border-electric-400"
          />
          <button
            type="submit"
            className="px-6 py-3.5 bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-neon-cyan text-white font-bold text-sm rounded-xl shadow-glow-blue flex items-center justify-center space-x-2 transition-all"
          >
            <span>Subscribe</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
