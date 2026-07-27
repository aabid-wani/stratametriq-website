import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Launch Roadmap | StrataMetriq",
  description: "View our engineering radar for 2026 and beyond. Get early beta access to upcoming DevSecOps and AI guardrail tools.",
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
