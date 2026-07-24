"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Rocket, Sparkles, Clock, CheckCircle2, Send, Layers, Cpu, ShieldAlert, ArrowRight } from "lucide-react";

export default function BrandRoadmapPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const timelineMilestones = [
    {
      quarter: "Q3 2026",
      title: "StrataMetriq Form Builder & Governance Gateway",
      description: "Turnkey multi-step enterprise form studio (`<StrataFormManager />`) with built-in high-throughput API rate-limiting and field-level validation schemas.",
      badge: "Beta Invites Open",
      icon: <Layers className="w-6 h-6 text-neon-cyan" />,
      highlights: ["Drag & drop multi-page form builder", "OpenAPI spec automatic form generation", "Zero cloud exfiltration local validation"]
    },
    {
      quarter: "Q4 2026",
      title: "StrataMetriq OpenTelemetry Runtime Bridge (v2.0)",
      description: "Directly correlate static polyglot AST dependency nodes inside VS Code with live production request latency, traffic volume, and error heatmaps.",
      badge: "Alpha Active",
      icon: <Cpu className="w-6 h-6 text-neon-purple" />,
      highlights: ["Live production latency overlay in editor", "Automatic bottleneck detection", "OpenTelemetry collector integration"]
    },
    {
      quarter: "Q1 2027",
      title: "StrataMetriq AI SDK & Prompt Auditor",
      description: "Deterministic structured JSON guardrails and local safety checks preventing LLM hallucination and prompt injection before API dispatch.",
      badge: "Planned",
      icon: <ShieldAlert className="w-6 h-6 text-electric-400" />,
      highlights: ["Deterministic JSON schema enforcer", "Local token cost estimation", "Prompt injection attack vector audit"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-obsidian py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neon-purple/20 border border-neon-purple/30 text-xs font-bold text-neon-purple">
          <Rocket className="w-3.5 h-3.5" />
          <span>StrataMetriq Product Launch Roadmap</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Engineering the Future
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          We are building a unified ecosystem of developer tools. Here is what is on our engineering radar for 2026 and beyond.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-2 border-glass ml-4 md:ml-32 pl-8 space-y-14">
        {timelineMilestones.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline node badge */}
            <div className="absolute -left-[45px] top-1 w-7 h-7 rounded-full bg-obsidian-950 border-2 border-electric-500 flex items-center justify-center text-xs font-bold text-white shadow-glow-blue group-hover:scale-125 transition-transform" />
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-3">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-obsidian-900 border border-glass shadow-md">
                  {item.icon}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-electric-400 block">{item.quarter} Milestone</span>
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-electric-400 transition-colors">{item.title}</h3>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 text-gray-300 border border-glass flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-neon-cyan" />
                {item.badge}
              </span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
              {item.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {item.highlights.map((h, hIdx) => (
                <span key={hIdx} className="px-3 py-1 rounded-xl bg-obsidian-900 border border-glass text-xs text-gray-400 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-neon-emerald" />
                  {h}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Early Access Waitlist Box */}
      <div className="rounded-3xl bg-gradient-to-r from-obsidian-800 via-obsidian-800/80 to-obsidian-800 border border-glass p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-glass">
        <Sparkles className="w-10 h-10 text-electric-400 mx-auto animate-pulse" />
        <h2 className="text-3xl font-bold text-white">
          Want Early Beta Access Before Public Drop?
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
          Join our priority engineering waitlist to receive private beta NPM tokens and VS Code VSIX prerelease installers right in your inbox.
        </p>

        {submitted ? (
          <div className="max-w-md mx-auto p-4 rounded-2xl bg-neon-emerald/10 border border-neon-emerald/30 text-neon-emerald font-bold text-sm flex items-center justify-center space-x-2">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>You have been added to the priority beta waitlist!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="developer@company.com"
              className="flex-1 px-4 py-3.5 rounded-xl bg-obsidian-950 border border-glass text-white text-sm placeholder-gray-500 focus:outline-none focus:border-electric-400"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-neon-cyan text-white font-bold text-sm rounded-xl shadow-glow-blue flex items-center justify-center space-x-2 transition-all"
            >
              <span>Join Waitlist</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
