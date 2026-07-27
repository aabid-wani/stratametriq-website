import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Governance & Custom SLAs | StrataMetriq",
  description: "Empower your organization with dedicated AST ruleset parsers, white-label UI engines, and priority architecture support.",
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
