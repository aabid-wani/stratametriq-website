"use client";

import React, { useState } from "react";
import { History, Box, Send, FileCode2, ShieldCheck, Terminal } from "lucide-react";

export default function ChangelogPage() {
  const [filter, setFilter] = useState("All");

  const changelogData = [
    {
      version: "v1.8.0",
      date: "August 15, 2026",
      product: "ID Card Designer",
      icon: <Box className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Added", text: "Canva-Style Smart Alignment Guides: Magnetically snap elements to the center of the card or align them perfectly with other elements using color-coded visual guides (Purple for center, Red for edges)." },
        { type: "Added", text: "High-Res ZIP Export: Batch export individual ID cards as high-resolution (300 DPI) PNG files neatly packaged in a single ZIP archive." },
        { type: "Added", text: "Thermal PVC Printer Support: Native support for exporting a perfectly dimensioned CR80 layout (1 card per page) specifically optimized for Zebra, Fargo, and Magicard thermal printers." },
        { type: "Added", text: "Dynamic Image Fallbacks: Beautifully generated initial-based avatars with consistent gradient backgrounds are automatically inserted if a profile photo is missing." },
        { type: "Added", text: "Curved Typography: Advanced SVG text rendering to wrap and curve text along circular paths." }
      ]
    },
    {
      version: "v1.7.1",
      date: "August 13, 2026",
      product: "ID Card Designer",
      icon: <Box className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Changed", text: "Licensing & Metadata: Updated package metadata (homepage, engines) and finalized the internal licensing documentation for the StrataMetriq release. No functional code changes." }
      ]
    },
    {
      version: "v1.7.0",
      date: "August 12, 2026",
      product: "ID Card Designer",
      icon: <Box className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Added", text: "Excel & ZIP Bulk Import: Upload `.xlsx`, `.xls`, or `.zip` archives. Automatically binds images to rows using fuzzy matching." },
        { type: "Added", text: "Full Workspace Persistence (IndexedDB): The dashboard automatically saves the entire workspace state (data, templates, active tabs) offline." },
        { type: "Added", text: "Offline Project Backup (.stmq): Serialize the entire workspace state into a `.stmq` file for offline, air-gapped portability." }
      ]
    },
    {
      version: "v1.6.1",
      date: "August 10, 2026",
      product: "ID Card Designer",
      icon: <Box className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Fixed", text: "CSV Data Mapping UX: Built a 'fuzzy mapper' that automatically aliases variations in CSV column headers to preset template bindings." },
        { type: "Fixed", text: "Image CORS Blockers: Removed strict crossOrigin requirement, fixing broken images for non-CORS compliant URLs." },
        { type: "Changed", text: "Studio Property Editor UX: Reorganized Inspector layout to prioritize 'Text Content & Binding'." },
        { type: "Fixed", text: "Excel Output Fix: Importer now correctly ignores empty rows padded with hidden quote marks from .xlsx conversions." }
      ]
    },
    {
      version: "v1.6.0",
      date: "August 4, 2026",
      product: "ID Card Designer",
      icon: <Box className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Added", text: "Dynamic Expression Engine: Text elements now support Javascript expressions and conditional rendering logic." },
        { type: "Added", text: "Double-Sided ID Cards: Native support for designing both Front and Back of ID cards with a side-toggle UI." },
        { type: "Added", text: "Advanced Batch Export Options: PDF engine now supports Front Only, Interleaved Pages, and A4 Mirrored Grids." },
        { type: "Added", text: "Hardware Printer Calibration: Manual X and Y offset controls to compensate for mechanical print drift in PVC printers." }
      ]
    },
    {
      version: "v1.5.3",
      date: "August 9, 2026",
      product: "Architecture Intelligence",
      icon: <ShieldCheck className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Fixed", text: "API Flow Mapping: Added support for dynamic template routes (e.g., fetch(`/api/${id}`))." },
        { type: "Fixed", text: "Pre-Deployment Safety: Refined debug code detection to eliminate false positives in strings." },
        { type: "Fixed", text: "Circular Dependencies: Fixed edge resolution for missing extensions and absolute paths." },
        { type: "Fixed", text: "Duplicate Logic: Increased scan limits to properly analyze large codebases." }
      ]
    },
    {
      version: "v1.5.2",
      date: "August 9, 2026",
      product: "Architecture Intelligence",
      icon: <ShieldCheck className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Added", text: "API Flow Mapping: Traces every step of API workflows from start to finish." },
        { type: "Added", text: "Duplicate Logic Detection: Identify repetitive code structures like duplicate logins." },
        { type: "Changed", text: "Migrated issue tracking to a public repository to enhance community support." },
        { type: "Changed", text: "Optimized marketplace SEO keywords for better visibility among full-stack developers." }
      ]
    },
    {
      version: "v1.4.9",
      date: "August 6, 2026",
      product: "Architecture Intelligence",
      icon: <ShieldCheck className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Added", text: "Custom Architecture Governance Rules Engine via stratametriq.rules.yaml." },
        { type: "Added", text: "SARIF integration in @stratametriq/cli for GitHub Advanced Security and GitLab CI gates." },
        { type: "Added", text: "Live VS Code squiggles (Diagnostics) for instant architectural rule violation feedback." },
        { type: "Added", text: "Native VS Code integrations including Explorer Context Menus and Configuration Settings." },
        { type: "Changed", text: "Aggressive architectural caching for massively improved scan performance." }
      ]
    },
    {
      version: "v1.4.4",
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
      version: "v1.5.1",
      date: "August 3, 2026",
      product: "ID Card Designer",
      icon: <Box className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Added", text: "Live Demo: Added an interactive StackBlitz live demo link to the Quick Start section." },
        { type: "Added", text: "API Documentation: Documented the standalone <IdCardDesigner /> props and all available lifecycle events." },
        { type: "Added", text: "Market Comparisons: Expanded the FAQ section to include direct capability comparisons against Canva and enterprise desktop software." },
        { type: "Changed", text: "Added repository and bugs tracking links to package.json for better NPM discoverability." }
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
      version: "v1.4.2",
      date: "July 20, 2026",
      product: "ID Card Designer",
      icon: <Box className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Added", text: "Drag-and-Drop Bounding Boxes: Introduced visual snapping handles for resizing elements on the canvas." },
        { type: "Fixed", text: "Resolved a custom Google Font loading timeout that caused text rendering glitches on slow networks." }
      ]
    },
    {
      version: "v1.4.1",
      date: "July 12, 2026",
      product: "ID Card Designer",
      icon: <Box className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Added", text: "Undo / Redo History Stack: Full tracking of canvas actions using Ctrl+Z and Ctrl+Y shortcuts." },
        { type: "Added", text: "Keyboard Nudging: Use arrow keys for 1px precise element alignment (Hold Shift for 5px jumps)." }
      ]
    },
    {
      version: "v1.4.0",
      date: "July 5, 2026",
      product: "ID Card Designer",
      icon: <Box className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Added", text: "Dedicated Image Property Inspector: New controls for Object Fit (cover, contain, scale-down)." },
        { type: "Added", text: "Avatar Styling: Instant Corner Radius toggles for Circular vs Square profile photos with custom CSS borders." }
      ]
    },
    {
      version: "v1.2.0",
      date: "June 25, 2026",
      product: "ID Card Designer",
      icon: <Box className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Added", text: "Grid Snapping & Alignment Guides: Toggleable millimeter measurement rulers (0mm - 86mm)." },
        { type: "Added", text: "Radial Grid Overlay: Snap-to-grid accuracy for 1mm or 5mm intervals." }
      ]
    },
    {
      version: "v1.1.0",
      date: "June 10, 2026",
      product: "ID Card Designer",
      icon: <Box className="w-6 h-6 text-neon-emerald" />,
      features: [
        { type: "Added", text: "QR Code & Barcode Generation: Built-in deterministic vector 1D Barcode and 2D QR Code generation." },
        { type: "Added", text: "Live Data Binding: Bind QR codes directly to database keys like {{admissionNo}}." }
      ]
    },
    {
      version: "v1.0.0",
      date: "May 20, 2026",
      product: "ID Card Designer",
      icon: <FileCode2 className="w-6 h-6 text-neon-cyan" />,
      features: [
        { type: "Added", text: "Initial Public Release: The core <IdCardPreview /> component and atomic rendering engine." },
        { type: "Added", text: "Variable Placeholders: Introduced handlebar syntax ({{name}}) for text interpolation." }
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
    <div className="min-h-screen bg-slate-50 dark:bg-obsidian py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neon-emerald/20 border border-neon-emerald/30 text-xs font-bold text-neon-emerald">
          <History className="w-3.5 h-3.5" />
          <span>Product Changelog</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          What's New
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300">
          Track our latest product updates, improvements, and bug fixes. We release updates continuously.
        </p>
      </div>

      {/* Filter Sidebar & Timeline Layout */}
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-4 p-5 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-glass shadow-sm dark:shadow-none">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Filter by Product</h3>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => setFilter("All")}
                className={`text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${filter === "All" ? "bg-electric-50 text-electric-600 border border-electric-200 dark:bg-electric-600/20 dark:text-electric-400 dark:border-electric-500/30" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5"}`}
              >
                All Updates
              </button>
              <button 
                onClick={() => setFilter("ID Card Designer")}
                className={`text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${filter === "ID Card Designer" ? "bg-electric-50 text-electric-600 border border-electric-200 dark:bg-electric-600/20 dark:text-electric-400 dark:border-electric-500/30" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5"}`}
              >
                ID Card Designer
              </button>
              <button 
                onClick={() => setFilter("Architecture Intelligence")}
                className={`text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${filter === "Architecture Intelligence" ? "bg-electric-50 text-electric-600 border border-electric-200 dark:bg-electric-600/20 dark:text-electric-400 dark:border-electric-500/30" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5"}`}
              >
                Architecture Intelligence
              </button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex-1 relative border-l-2 border-slate-200 dark:border-glass pl-8 space-y-16">
          {filteredData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline node */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white dark:bg-obsidian-950 border-2 border-electric-500 flex items-center justify-center text-xs font-bold text-white shadow-sm dark:shadow-glow-blue group-hover:scale-125 transition-transform" />
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-2xl bg-white dark:bg-obsidian-900 border border-slate-200 dark:border-glass shadow-sm dark:shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">{item.version}</h3>
                    <span className="text-xs font-medium text-slate-500 dark:text-gray-400">{item.date}</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-electric-50 text-electric-600 border border-electric-200 dark:bg-electric-900/40 dark:text-electric-300 dark:border-electric-500/30">
                  {item.product}
                </span>
              </div>

              <div className="space-y-3 mt-4">
                {item.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <span className={`mt-0.5 px-2 py-0.5 text-[10px] font-black uppercase rounded ${feature.type === 'Added' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-neon-emerald/20 dark:text-neon-emerald dark:border-neon-emerald/20' : 'bg-purple-50 text-purple-600 border border-purple-200 dark:bg-neon-purple/20 dark:text-neon-purple dark:border-neon-purple/20'}`}>
                      {feature.type}
                    </span>
                    <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed flex-1">
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
      <div className="mt-24 rounded-3xl bg-white dark:bg-gradient-to-r dark:from-obsidian-800 dark:via-obsidian-800/80 dark:to-obsidian-800 border border-slate-200 dark:border-glass p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-sm dark:shadow-glass">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Get Notified About New Releases
        </h2>
        <p className="text-sm text-slate-600 dark:text-gray-300 max-w-xl mx-auto">
          Subscribe to our developer newsletter to get instantly notified when we drop massive new features or security updates.
        </p>

        <form action="https://formspree.io/f/mqerwrka" method="POST" className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
          <input
            type="email"
            name="email"
            required
            placeholder="developer@company.com"
            className="flex-1 px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-obsidian-950 border border-slate-200 dark:border-glass text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-electric-500 dark:focus:border-electric-400"
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
