"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Send, Github, Twitter, Linkedin, Terminal, Heart, CheckCircle2 } from "lucide-react";
import { FOOTER_NAVIGATION } from "@/config/brandNavigation";

export default function BrandFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-obsidian border-t border-glass relative overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Value Prop */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-600 to-neon-cyan p-0.5 shadow-glow-blue flex items-center justify-center">
                <div className="w-full h-full bg-obsidian rounded-[10px] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-electric-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                StrataMetriq
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              The next-generation parent architecture brand & developer software suite. Empowering engineers across polyglot DevSecOps AST analysis, VS Code IDE tooling, and turnkey A4/Letter PDF rendering engines.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Join 2,500+ Engineers on the Roadmap List
              </h4>
              {subscribed ? (
                <div className="flex items-center space-x-2 text-xs text-neon-emerald bg-neon-emerald/10 border border-neon-emerald/30 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>You have been subscribed to early access roadmap updates!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm space-x-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="developer@company.com"
                    className="flex-1 px-3.5 py-2 text-xs bg-obsidian-800 border border-glass rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-electric-400 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-neon-cyan text-white text-xs font-semibold rounded-xl shadow-glow-blue transition-all flex items-center space-x-1"
                  >
                    <span>Join</span>
                    <Send className="w-3.5 h-3.5 ml-1" />
                  </button>
                </form>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-3 text-gray-400">
              <a href="https://github.com/aabid-wani" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/aabid_wani" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/aabidhussainwani/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Active Software Suites */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Software Suites
            </h3>
            <ul className="space-y-3">
              {FOOTER_NAVIGATION.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-gray-400 hover:text-electric-400 transition-colors flex items-center space-x-2"
                  >
                    <span className="truncate">{item.name.replace("StrataMetriq ", "")}</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-gray-300 font-mono">
                      {item.badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ecosystem & Hub */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Ecosystem
            </h3>
            <ul className="space-y-3">
              {FOOTER_NAVIGATION.ecosystem.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company & Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_NAVIGATION.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mt-6 mb-3">
              Legal & SLA
            </h3>
            <ul className="space-y-2">
              {FOOTER_NAVIGATION.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[11px] text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-glass flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} StrataMetriq Inc. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0 font-mono text-[11px]">
            <Terminal className="w-3.5 h-3.5 text-electric-400" />
            <span>Developed by Aabid Hussain Wani</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
