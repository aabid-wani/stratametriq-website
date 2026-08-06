"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Send, Package, Linkedin, ShoppingCart, Terminal, Heart, CheckCircle2, Puzzle } from "lucide-react";
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
    <footer className="w-full bg-white dark:bg-obsidian border-t border-slate-200 dark:border-glass relative overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Value Prop */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="StrataMetriq Logo" 
                className="w-9 h-9 rounded-xl shadow-glow-blue object-contain" 
              />
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                StrataMetriq
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-gray-400 max-w-sm leading-relaxed">
              The next-generation parent architecture brand & developer software suite. Empowering engineers across polyglot DevSecOps AST analysis, VS Code IDE tooling, and turnkey A4/Letter PDF rendering engines.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-slate-600 dark:text-gray-300 uppercase tracking-wider mb-2">
                Join 2,500+ Engineers on the Roadmap List
              </h4>
              <form action="https://formspree.io/f/mqerwrka" method="POST" className="flex max-w-sm space-x-2">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="developer@company.com"
                  className="flex-1 px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-electric-500 dark:bg-obsidian-800 dark:border-glass rounded-xl dark:text-white dark:placeholder-gray-500 dark:focus:border-electric-400 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-neon-cyan text-white text-xs font-semibold rounded-xl shadow-glow-blue transition-all flex items-center space-x-1"
                >
                  <span>Join</span>
                  <Send className="w-3.5 h-3.5 ml-1" />
                </button>
              </form>
            </div>
            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-3 text-slate-500 dark:text-gray-400">
              <a href="https://www.npmjs.com/package/@stratametriq/id-card-designer" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 hover:text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-white transition-colors" title="NPM Package">
                <Package className="w-4 h-4" />
              </a>
              <a href="https://waniabid.gumroad.com/l/id-card-designer-pro" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 hover:text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-white transition-colors" title="Buy Commercial License on Gumroad">
                <ShoppingCart className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/aabid-hussain-56b1b2191/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 hover:text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-white transition-colors" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://marketplace.visualstudio.com/items?itemName=StrataMetriq.stratametriq-extension&ssr=false#review-details" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 hover:text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-white transition-colors" title="Review on VS Code Marketplace">
                <Puzzle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Active Software Suites */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Software Suites
            </h3>
            <ul className="space-y-3">
              {FOOTER_NAVIGATION.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-500 hover:text-electric-600 dark:text-gray-400 dark:hover:text-electric-400 transition-colors flex items-center space-x-2"
                  >
                    <span className="truncate">{item.name.replace("StrataMetriq ", "")}</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-gray-300 font-mono">
                      {item.badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Ecosystem & Hub */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Ecosystem
            </h3>
            <ul className="space-y-3">
              {FOOTER_NAVIGATION.ecosystem.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company & Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_NAVIGATION.company.map((item) => {
                const isExternal = !item.href.startsWith("/");
                return (
                  <li key={item.name}>
                    {isExternal ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-xs text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-xs text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mt-6 mb-3">
              Legal & SLA
            </h3>
            <ul className="space-y-2">
              {FOOTER_NAVIGATION.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[11px] text-slate-400 hover:text-slate-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-glass flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} StrataMetriq Inc. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <span className="text-slate-500 dark:text-gray-500">Developed by</span>
            <a 
              href="https://www.linkedin.com/in/aabid-hussain-56b1b2191/" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-400 hover:bg-electric-500/20 hover:border-electric-400 transition-all shadow-[0_0_10px_rgba(14,165,233,0.2)] hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]"
            >
              <Terminal className="w-3.5 h-3.5 group-hover:text-electric-600 dark:group-hover:text-white transition-colors" />
              <span className="font-semibold tracking-wide group-hover:text-electric-600 dark:group-hover:text-white transition-colors">Aabid Hussain Wani</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
