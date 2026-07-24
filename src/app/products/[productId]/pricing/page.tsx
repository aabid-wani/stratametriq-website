"use client";

import React from "react";
import { notFound } from "next/navigation";
import { STRATAMETRIQ_PRODUCTS } from "@/config/products";
import ProductHero from "@/components/product-page/ProductHero";
import ProductPricingCards from "@/components/product-page/ProductPricingCards";
import { HelpCircle } from "lucide-react";

interface PricingPageProps {
  params: {
    productId: string;
  };
}

export default function ProductPricingPage({ params }: PricingPageProps) {
  const product = STRATAMETRIQ_PRODUCTS.find((p) => p.id === params.productId);

  if (!product) {
    return notFound();
  }

  const faqs = [
    {
      q: "Can I use the Community Open License in a commercial company?",
      a: "Yes! The Community VSIX and MIT licenses allow developers to use the software in their daily development workflows. However, for proprietary corporate ERP distribution, white-labeling, or automated CI/CD gating pipelines, the Pro Commercial License is required."
    },
    {
      q: "How does seat-based licensing work for engineering teams?",
      a: "A developer seat is required for each active engineering contributor committing code that runs pre-deployment AST gating or modifying turnkey ID card studio layouts. We offer flexible annual billing or unlimited enterprise seat agreements."
    },
    {
      q: "Do you offer custom SLA agreements and priority architectural consulting?",
      a: "Absolutely. Under the Enterprise tier, our Solutions Architects provide custom AST rule parser generation, 24/7 priority support (< 2 hour response), and custom procurement/indemnification terms."
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian pb-20">
      <ProductHero product={product} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <ProductPricingCards product={product} />

        {/* Commercial FAQ Section */}
        <div className="mt-16 pt-12 border-t border-glass max-w-4xl mx-auto space-y-8">
          <h3 className="text-2xl font-extrabold text-white text-center flex items-center justify-center">
            <HelpCircle className="w-6 h-6 mr-2 text-electric-400" /> Frequently Asked Licensing Questions
          </h3>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-obsidian-800/50 border border-glass space-y-2">
                <h4 className="text-base font-bold text-white">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
