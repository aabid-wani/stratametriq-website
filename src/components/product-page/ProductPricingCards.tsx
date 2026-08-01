"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Zap, Shield, Sparkles, ArrowRight, HelpCircle } from "lucide-react";
import { StratametriqProduct } from "@/config/products";

interface ProductPricingCardsProps {
  product: StratametriqProduct;
}

export default function ProductPricingCards({ product }: ProductPricingCardsProps) {
  const isVsix = product.category === "DevSecOps & IDE";

  const tiers = [
    {
      name: "Community Open License",
      price: product.pricingSummary.community,
      description: isVsix
        ? "Complete pre-deployment AST graph traces & 13-point security checks right inside VS Code."
        : "Full drag-and-drop ID card canvas & multi-page A4 cut-sheet PDF export engine.",
      badge: "Free Forever",
      highlighted: false,
      features: isVsix
        ? [
            "Local zero-exfiltration AST memory scanner",
            "Support for TypeScript, Python, and Go",
            "13-point pre-deployment safety audit",
            "Interactive vertical API call graph",
            "Community Discord support"
          ]
        : [
            "Full <IdCardManager /> turnkey dashboard",
            "Multi-page A4 cut-sheet matrix calculation",
            "Handlebars dynamic variable binding",
            "Client-side 300 DPI high-res PDF rendering",
            "MIT License for non-commercial & standard apps"
          ],
      cta: "Install Free Version",
      href: `/products/${product.id}#install`,
    },
    {
      name: "Pro Commercial License",
      price: product.pricingSummary.pro,
      description: isVsix 
        ? "Recommended for commercial SaaS teams, proprietary ERP products, and automated CI/CD gating pipelines." 
        : "Recommended for School ERPs, SaaS teams, and internal HR portals needing batch generation.",
      badge: "Most Popular",
      highlighted: true,
      features: isVsix
        ? [
            "Everything in Community Free VSIX",
            "Automated CI/CD pre-commit gating rules (`audit --ci`)",
            "Custom organizational AST ruleset definitions",
            "Export vertical graphs to JSON / PDF audit trails",
            "Priority developer support & SLA guarantee",
            "Commercial perpetual license per developer seat"
          ]
        : [
            "Everything in Community MIT",
            "Commercial license for proprietary ERPs & internal portals",
            "Batch CSV import of 10,000+ employee/student records",
            "Custom fonts & barcode / QR code security engines",
            "White-label branding (Remove StrataMetriq watermarks)",
            "Priority engineering email support & bug fixes"
          ],
      cta: product.id === "id-card-designer" ? "Buy Commercial License" : "Get Pro Commercial License",
      href: product.id === "id-card-designer" ? "https://waniabid.gumroad.com/l/id-card-designer-pro" : "/enterprise?plan=pro",
    },
    {
      name: isVsix ? "Enterprise Architecture & SLA" : "Enterprise Suite",
      price: product.pricingSummary.enterprise,
      description: isVsix 
        ? "Dedicated architecture audits, custom AST rule extensions, and enterprise-wide deployment agreements."
        : "For large corporate conglomerates requiring custom feature consulting and priority integration.",
      badge: isVsix ? "Custom Governance" : "Enterprise Grade",
      highlighted: false,
      features: isVsix
        ? [
            "Unlimited developer seats across your entire organization",
            "Custom AST polyglot parser development (Java, C++, Rust)",
            "Turnkey UI custom engine modifications & white-labeling",
            "Dedicated Solutions Architect & quarterly reviews",
            "24/7 Priority SLA response time (< 2 hours)",
            "Custom procurement & legal indemnification agreement"
          ]
        : [
            "Unlimited developer seats across your entire organization",
            "Custom PDF layout generation & barcode consulting",
            "Turnkey UI custom engine modifications & white-labeling",
            "Dedicated Solutions Architect & quarterly reviews",
            "24/7 Priority SLA response time (< 2 hours)",
            "Custom procurement & legal indemnification agreement"
          ],
      cta: product.id === "id-card-designer" ? "Buy Enterprise Suite" : "Contact Enterprise Sales",
      href: product.id === "id-card-designer" ? "https://waniabid.gumroad.com/l/id-card-designer-pro" : "/enterprise?plan=enterprise",
    }
  ];

  return (
    <div className="py-10 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Transparent Commercial Licensing for {product.name}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300">
          Whether you are an individual developer, a fast-growing startup, or an enterprise engineering team, pick the license option that fits your deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
              tier.highlighted
                ? "bg-white border-2 border-electric-500 shadow-md dark:bg-gradient-to-b dark:from-obsidian-800 dark:to-obsidian-900 dark:shadow-glow-blue scale-105 z-10"
                : "bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm dark:bg-obsidian-800/60 dark:border-glass dark:hover:border-glass-hover dark:shadow-glass"
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-electric-600 to-neon-cyan text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                {tier.badge}
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">
                  {tier.name}
                </span>
                {!tier.highlighted && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-200 text-slate-700 border border-slate-300 dark:bg-white/5 dark:text-gray-300 dark:border-glass">
                    {tier.badge}
                  </span>
                )}
              </div>

              <div className="my-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {tier.price}
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed min-h-[40px]">
                {tier.description}
              </p>

              <div className="my-6 border-t border-slate-200 dark:border-glass pt-6 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block mb-2">
                  What is included:
                </span>
                {tier.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-2.5 text-xs text-slate-700 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-neon-emerald flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={tier.href}
              className={`mt-8 w-full py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-center flex items-center justify-center space-x-2 transition-all ${
                tier.highlighted
                  ? "bg-gradient-to-r from-electric-600 via-electric-500 to-neon-cyan text-white shadow-glow-blue hover:scale-102"
                  : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white dark:border-glass"
              }`}
            >
              <span>{tier.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
