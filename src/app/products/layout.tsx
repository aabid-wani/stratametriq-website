import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products & Software Suites | StrataMetriq",
  description: "Browse our entire catalog of polyglot AST analyzers, turnkey A4 PDF UI designers, and runtime bridges.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
