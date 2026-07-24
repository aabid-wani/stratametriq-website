export interface StratametriqProduct {
  id: string;                      // Unique slug: 'architecture-intelligence' | 'id-card-designer'
  name: string;                    // Product Display Name
  tagline: string;                 // Short 1-sentence value proposition
  description: string;             // Detailed 2-line explanation
  category: "DevSecOps & IDE" | "Turnkey UI & PDF" | "AI & Runtime" | "Upcoming Launches";
  status: "Live" | "Beta" | "Coming Soon";
  badge: string;                   // e.g. "v1.4.1", "v1.3.0", "New Launch"
  downloadsCount?: string;         // e.g. "2,500+", "2,000+"
  href: string;                    // Route: '/products/architecture-intelligence'
  iconName: "ShieldCheck" | "Layout" | "Cpu" | "Terminal" | "GitBranch" | "Zap";
  isFeatured: boolean;             // If true, appears prominently on the Home Page hero grid
  hasLiveDemo: boolean;            // If true, shows the [Try Interactive Demo] button
  installCommand?: string;         // e.g. "ext install stratametriq" or "npm i @stratametriq/id-card-designer"
  pricingSummary: {
    community: string;             // "Free MIT" or "Free VS Code VSIX"
    pro: string;                   // "$399 - $1,499 / Year"
    enterprise: string;            // "$3,499 / Year"
  };
}

export const STRATAMETRIQ_PRODUCTS: StratametriqProduct[] = [
  {
    id: "architecture-intelligence",
    name: "StrataMetriq Architecture Intelligence & DevSecOps",
    tagline: "Full-stack polyglot AST graphs, vertical API traces, and 13-point safety audits inside VS Code & CLI.",
    description: "Transforms technical debt into visual graphs across 11 languages (JS/TS, Python, Java, Go, C#, C++, Rust) with SARIF 2.1.0 export and zero cloud exfiltration.",
    category: "DevSecOps & IDE",
    status: "Live",
    badge: "v1.4.1",
    downloadsCount: "2,500+",
    href: "/products/architecture-intelligence",
    iconName: "ShieldCheck",
    isFeatured: true,
    hasLiveDemo: true,
    installCommand: "npx @stratametriq/cli scan . --fail-on-high",
    pricingSummary: { 
      community: "Free VS Code VSIX", 
      pro: "$1,499 / Year", 
      enterprise: "$3,499 / Year" 
    }
  },
  {
    id: "id-card-designer",
    name: "StrataMetriq ID Card Designer Studio",
    tagline: "Universal turnkey ID card designer, dashboard & A4 multi-page PDF cut-sheet rendering engine.",
    description: "Equipped with multi-department tabs, live sheet matrix math (3×3 = 9 cards/page), handlebars variable binding (`{{name}}`), and CSV import across React, Vue, Angular & Vanilla JS.",
    category: "Turnkey UI & PDF",
    status: "Live",
    badge: "v1.4.1",
    downloadsCount: "2,000+",
    href: "/products/id-card-designer",
    iconName: "Layout",
    isFeatured: true,
    hasLiveDemo: true,
    installCommand: "npm install @stratametriq/id-card-designer",
    pricingSummary: { 
      community: "Free MIT", 
      pro: "$49 - $149 / Perpetual", 
      enterprise: "$499 / Perpetual" 
    }
  },
  {
    id: "runtime-engine",
    name: "StrataMetriq Runtime Engine",
    tagline: "High-performance runtime telemetry and OpenTelemetry traffic bridge.",
    description: "Correlates static AST dependency nodes with live production request volume, latency, and error heatmaps (`> 8,000 requests/month`).",
    category: "AI & Runtime",
    status: "Beta",
    badge: "v1.4.1",
    href: "/products/runtime-engine",
    iconName: "Cpu",
    isFeatured: false,
    hasLiveDemo: false,
    installCommand: "npm install @stratametriq/runtime",
    pricingSummary: { 
      community: "Free MIT", 
      pro: "Coming Soon", 
      enterprise: "Contact Us" 
    }
  }
];
