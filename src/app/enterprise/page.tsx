"use client";

import React, { useState } from "react";
import { ShieldCheck, CheckCircle2, Send, Building2, Lock, Users, Zap, Award } from "lucide-react";

export default function EnterpriseConsultingPage() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", message: "", plan: "pro" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-obsidian py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-electric-600/20 border border-electric-500/30 text-xs font-bold text-electric-400">
          <Building2 className="w-3.5 h-3.5" />
          <span>StrataMetriq Enterprise & Procurement Portal</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Enterprise Governance & Custom SLAs
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Empower your entire organization with dedicated AST ruleset parsers, white-label turnkey UI engines, custom SLA agreements, and 24/7 priority architecture support.
        </p>
      </div>

      {/* Enterprise Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-obsidian-800/60 border border-glass space-y-4">
          <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-glass w-fit text-electric-400 shadow-md">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Custom AST & Policy Parsers</h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Need pre-deployment zero-exfiltration safety audits for proprietary internal frameworks, Java Spring Boot, or legacy C++? Our engineering team builds custom AST plugins tailored to your exact stack.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-obsidian-800/60 border border-glass space-y-4">
          <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-glass w-fit text-neon-cyan shadow-md">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Turnkey UI & PDF White-Labeling</h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Embed our multi-page A4 cut-sheet (`@stratametriq/id-card-designer`) engine into your proprietary ERP, Hospital Access Portal, or SIS with zero branding, custom barcodes, and specialized barcode encoding math.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-obsidian-800/60 border border-glass space-y-4">
          <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-glass w-fit text-neon-emerald shadow-md">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">24/7 SLA & Procurement Indemnification</h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Direct access to dedicated Solutions Architects with guaranteed response times under 2 hours, custom MSA/legal indemnification, and SOC-2 supply chain safety certificates.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-glass">
        <div className="lg:col-span-5 space-y-6 self-center">
          <h2 className="text-3xl font-extrabold text-white">
            Speak with an Architecture Specialist
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Fill out the form to schedule an architecture consultation or request custom commercial licensing quotes for your engineering team.
          </p>
          <div className="space-y-4 pt-4 text-xs text-gray-300">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-4 h-4 text-neon-emerald" />
              <span>Direct communication with senior StrataMetriq engineers</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-4 h-4 text-neon-emerald" />
              <span>Custom seat bundles & multi-year enterprise pricing</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-4 h-4 text-neon-emerald" />
              <span>SLA response guarantee within 2 business hours</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 rounded-3xl bg-obsidian-800/80 border border-glass p-8 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-neon-emerald mx-auto animate-bounce" />
              <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                Thank you, {formData.name}. Our executive consulting team will review your requirements for {formData.company} and respond within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-bold text-gray-300 mb-2 uppercase tracking-wider">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Marcus Thorne"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-glass text-white placeholder-gray-500 focus:outline-none focus:border-electric-400"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-300 mb-2 uppercase tracking-wider">Company / Organization</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="StrataCorp Engineering"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-glass text-white placeholder-gray-500 focus:outline-none focus:border-electric-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-bold text-gray-300 mb-2 uppercase tracking-wider">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="m.thorne@stratacorp.com"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-glass text-white placeholder-gray-500 focus:outline-none focus:border-electric-400"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-300 mb-2 uppercase tracking-wider">Inquiry Topic</label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-glass text-white focus:outline-none focus:border-electric-400"
                  >
                    <option value="pro">Pro Commercial License Inquiry</option>
                    <option value="enterprise">Enterprise Seat Bundle & Custom SLA</option>
                    <option value="custom_ast">Custom Polyglot AST Rule Extension</option>
                    <option value="whitelabel">Turnkey UI & PDF Engine White-Labeling</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-300 mb-2 uppercase tracking-wider">Message / Project Requirements</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your architecture stack, team size, or turnkey UI deployment goals..."
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-glass text-white placeholder-gray-500 focus:outline-none focus:border-electric-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-electric-600 via-electric-500 to-neon-cyan hover:from-electric-500 hover:to-neon-cyan text-white text-sm font-bold rounded-xl shadow-glow-blue flex items-center justify-center space-x-2 transition-all"
              >
                <span>Submit Enterprise Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
