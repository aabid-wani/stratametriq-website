import type { Metadata } from "next";
import "@/styles/globals.css";
import BrandNavbar from "@/components/global/BrandNavbar";
import BrandFooter from "@/components/global/BrandFooter";

export const metadata: Metadata = {
  title: "StrataMetriq | Parent Brand & Multi-Product Launchpad Ecosystem",
  description:
    "Explore the StrataMetriq software ecosystem: Architecture Intelligence & DevSecOps inside VS Code/CLI, and ID Card Designer Studio multi-page A4 cut-sheet PDF rendering engines.",
  keywords: [
    "StrataMetriq",
    "Architecture Intelligence",
    "DevSecOps",
    "ID Card Designer",
    "VS Code Extension",
    "Multi-Page A4 PDF",
    "Developer Tools",
    "AST Graph"
  ],
  icons: {
    icon: "/logo.png",
  },
  verification: {
    google: "zkZJ4D7L6h15ZPC69ZVhzEe1A7GzNFdWlVs_h5fBn7c",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-obsidian text-foreground min-h-screen flex flex-col antialiased selection:bg-electric-600 selection:text-white">
        <BrandNavbar />
        <main className="flex-1 w-full">{children}</main>
        <BrandFooter />
      </body>
    </html>
  );
}
