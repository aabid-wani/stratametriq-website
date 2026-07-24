import { STRATAMETRIQ_PRODUCTS } from "./products";

export interface NavItem {
  label: string;
  href: string;
  isMegaMenu?: boolean;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Products", href: "/products", isMegaMenu: true },
  { label: "Roadmap", href: "/roadmap", badge: "New Launches" },
  { label: "Enterprise", href: "/enterprise" },
];

export const FOOTER_NAVIGATION = {
  products: STRATAMETRIQ_PRODUCTS.map((prod) => ({
    name: prod.name,
    href: prod.href,
    badge: prod.badge,
  })),
  ecosystem: [
    { name: "All Products Hub", href: "/products" },
    { name: "Interactive Simulators", href: "/#demos" },
    { name: "VS Code Marketplace VSIX", href: "/products/architecture-intelligence" },
    { name: "NPM Registry Package", href: "/products/id-card-designer" },
  ],
  company: [
    { name: "About StrataMetriq", href: "/" },
    { name: "Roadmap & Releases", href: "/roadmap" },
    { name: "Enterprise Consulting & SLA", href: "/enterprise" },
    { name: "GitHub Organization", href: "https://github.com/stratametriq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/#privacy" },
    { name: "Terms of Service", href: "/#terms" },
    { name: "Software License Agreements", href: "/#license" },
  ],
};
