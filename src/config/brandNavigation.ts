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
  { label: "Changelog", href: "/changelog" },
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
    { name: "ID Card Designer (NPM)", href: "https://www.npmjs.com/package/@stratametriq/id-card-designer" },
    { name: "Buy Commercial License", href: "https://waniabid.gumroad.com/l/id-card-designer-pro" },
    { name: "Interactive Simulators", href: "/#demos" },
  ],
  company: [
    { name: "About StrataMetriq", href: "/about" },
    { name: "Roadmap & Releases", href: "/roadmap" },
    { name: "Changelog", href: "/changelog" },
    { name: "Enterprise Consulting & SLA", href: "/enterprise" },
    { name: "WhatsApp Connect", href: "https://wa.me/917889877624" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Software License Agreements", href: "/license" },
  ],
};
