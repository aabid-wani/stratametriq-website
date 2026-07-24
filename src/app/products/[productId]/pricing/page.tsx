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

  let faqs = [
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

  if (product.id === "id-card-designer") {
    faqs = [
      {
        q: "Why should my company use this instead of a design tool like Canva?",
        a: "Canva is a manual design tool; our software is an automation pipeline. If a school has 1,000 students, using a consumer design app requires HR to manually type 1,000 names, crop 1,000 photos, generate 1,000 QR codes, and manually align them on A4 paper (80+ hours of work). By embedding @stratametriq/id-card-designer directly into your ERP, your users click one 'Batch Print' button. Our engine pulls the data from your database, maps the variables, generates 1,000 QR codes, calculates the A4 cut-sheet math, and spits out a 112-page PDF in exactly 3 seconds."
      },
      {
        q: "Our non-technical HR team doesn't know how to code. How do they use this?",
        a: "They will never see a single line of code! Your engineering team installs our NPM package into your codebase just once. From that point on, your non-technical users get a beautiful, intuitive visual dashboard inside your app to drag-and-drop elements and manage batches."
      },
      {
        q: "Is our sensitive employee data sent to your servers?",
        a: "No. Our library runs 100% Client-Side in the browser. When your users generate ID cards, the data never leaves their local machine, ensuring full GDPR and data privacy compliance."
      },
      {
        q: "Is it white-labeled?",
        a: "Yes, the Commercial Enterprise license allows you to completely remove all Stratametriq branding. Your customers will assume you built this incredible feature from scratch!"
      },
      {
        q: "How do I know this NPM package isn't malware that will hack our ERP?",
        a: "Our codebase is 100% unminified and transparent. Your security engineers can read every line of code. Furthermore, our engine makes zero network requests (no 'phone home' APIs) and runs entirely client-side. It has no access to your backend servers, database, or environment variables, making data exfiltration impossible."
      },
      {
        q: "What does my engineering team need in order to install this?",
        a: "The prerequisites are simple: A Node.js environment, a modern package manager (npm, yarn, pnpm), and a frontend application running React 17/18 or Next.js (Vue/Angular require a React adapter)."
      }
    ];
  }

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
