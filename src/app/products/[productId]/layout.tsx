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
      "ID Card Designer"
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
