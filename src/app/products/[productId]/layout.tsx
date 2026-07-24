import { STRATAMETRIQ_PRODUCTS } from "@/config/products";
import React from "react";

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
