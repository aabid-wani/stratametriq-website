import { STRATAMETRIQ_PRODUCTS } from "@/config/products";
import React from "react";
import { Metadata } from 'next';

type Props = {
  params: { productId: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = STRATAMETRIQ_PRODUCTS.find((p) => p.id === params.productId);
  
  if (!product) {
    return { title: 'Product Not Found | StrataMetriq' };
  }

  let longTailKeywords: string[] = [];
  if (product.id === "architecture-intelligence") {
    longTailKeywords = [
      "vs code ast visualizer",
      "zero cloud exfiltration static analysis",
      "polyglot architectural debt analyzer",
      "sarif 2.1.0 export tool",
      "visualize vertical api traces",
      "local typescript and python ast trace",
      "devsecops ide extension"
    ];
  } else if (product.id === "id-card-designer") {
    longTailKeywords = [
      "turnkey id card designer for react",
      "multi page a4 cut sheet pdf generator",
      "handlebars variable binding id cards",
      "bulk employee id card software",
      "drag and drop school id portal",
      "turnkey ui pdf generation",
      "customizable id card canvas"
    ];
  }

  return {
    title: `${product.name} | StrataMetriq`,
    description: product.description,
    keywords: [
      product.name, 
      "React component", 
      "Developer tool", 
      product.category,
      "DevSecOps",
      "Architecture Intelligence",
      "ID Card Designer",
      ...longTailKeywords
    ]
  };
}

export function generateStaticParams() {
  return STRATAMETRIQ_PRODUCTS.map((product) => ({
    productId: product.id,
  }));
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
