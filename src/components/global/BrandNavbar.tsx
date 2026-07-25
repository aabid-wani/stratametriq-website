"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ShieldCheck, 
  Layout, 
  Cpu, 
  ChevronDown, 
  ExternalLink, 
  Terminal, 
  Menu, 
  X, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { STRATAMETRIQ_PRODUCTS } from "@/config/products";
import { MAIN_NAV_ITEMS } from "@/config/brandNavigation";

export default function BrandNavbar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-electric-400" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-neon-cyan" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-neon-purple" />;
      default:
        return <Terminal className="w-5 h-5 text-electric-400" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-obsidian-900/85 border-b border-glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="StrataMetriq Logo" 
              className="w-10 h-10 rounded-xl shadow-glow-blue transition-transform group-hover:scale-105 object-contain" 
            />
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-100 to-electric-400 bg-clip-text text-transparent">
                StrataMetriq
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-semibold -mt-1">
                Launchpad & Ecosystem
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              if (item.isMegaMenu) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <button
                      onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive || megaMenuOpen
                          ? "text-white bg-white/10 border border-glass"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`ml-1.5 w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? "rotate-180 text-electric-400" : ""}`} />
                    </button>

                    {/* Mega-Menu Dropdown */}
                    {megaMenuOpen && (
                      <div className="absolute left-0 mt-2 w-[620px] rounded-2xl backdrop-blur-2xl bg-obsidian-900/95 border border-glass shadow-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        <div className="col-span-full pb-2 mb-2 border-b border-glass flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center">
                            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-electric-400" /> Active Software Suites
                          </span>
                          <Link
                            href="/products"
                            className="text-xs text-electric-400 hover:text-electric-300 flex items-center font-medium"
                          >
                            View All Hub <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </Link>
                        </div>

                        {STRATAMETRIQ_PRODUCTS.map((prod) => (
                          <Link
                            key={prod.id}
                            href={prod.href}
                            onClick={() => setMegaMenuOpen(false)}
                            className="group p-3.5 rounded-xl border border-transparent hover:border-glass hover:bg-white/[0.04] transition-all flex items-start space-x-3.5"
                          >
                            <div className="p-2.5 rounded-lg bg-obsidian-800 border border-glass shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
                              {getIcon(prod.iconName)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-bold text-white group-hover:text-electric-400 transition-colors truncate">
                                  {prod.name.replace("StrataMetriq ", "")}
                                </span>
                                <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-electric-600/20 text-electric-400 border border-electric-500/30">
                                  {prod.badge}
                                </span>
                              </div>
                              <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                                {prod.tagline}
                              </p>
                              <div className="mt-2 flex items-center text-[11px] text-gray-500 group-hover:text-gray-300 transition-colors font-medium">
                                <span>{prod.category}</span>
                                <span className="mx-1.5">•</span>
                                <span className={prod.status === "Live" ? "text-neon-emerald" : "text-amber-400"}>
                                  ● {prod.status}
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}

                        <div className="col-span-full mt-2 pt-3 border-t border-glass bg-gradient-to-r from-electric-600/10 via-transparent to-neon-purple/10 rounded-xl p-3 flex items-center justify-between">
                          <div className="text-xs text-gray-300">
                            <span className="font-semibold text-white">Need Custom Enterprise UI or Audit?</span> Check out SLA & architecture consulting.
                          </div>
                          <Link
                            href="/enterprise"
                            onClick={() => setMegaMenuOpen(false)}
                            className="px-3 py-1 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white border border-glass transition-colors"
                          >
                            Enterprise Portal
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-white bg-white/10 border border-glass"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold uppercase rounded-full bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30 animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/products"
              className="px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white border border-glass hover:border-glass-hover rounded-xl transition-all"
            >
              All Suites Hub
            </Link>
            <Link
              href="/products/architecture-intelligence"
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-neon-cyan rounded-xl shadow-glow-blue transition-all flex items-center space-x-1.5"
            >
              <span>Install VSIX / NPM</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-glass text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-glass bg-obsidian-900/95 backdrop-blur-2xl px-4 pt-4 pb-6 space-y-4">
          <div className="space-y-1">
            {MAIN_NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-200 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-glass pt-4">
            <span className="text-xs font-bold uppercase text-gray-400 block px-3 mb-2">Suites</span>
            {STRATAMETRIQ_PRODUCTS.map((prod) => (
              <Link
                key={prod.id}
                href={prod.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                {getIcon(prod.iconName)}
                <span>{prod.name}</span>
              </Link>
            ))}
          </div>

          <div className="border-t border-glass pt-4 flex flex-col space-y-2.5">
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold rounded-xl border border-glass text-white bg-white/5"
            >
              All Suites Hub
            </Link>
            <Link
              href="/products/architecture-intelligence"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-bold rounded-xl bg-electric-600 text-white shadow-glow-blue"
            >
              Install VSIX / NPM
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
