"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import { STRATAMETRIQ_PRODUCTS } from "@/config/products";
import ProductHero from "@/components/product-page/ProductHero";
import { 
  BookOpen, Terminal, Code2, Check, Copy, ShieldCheck, Layers, 
  FileCode, Cpu, AlertTriangle, Zap, CheckCircle2, GitBranch, 
  Settings, Database, Layout, Sparkles, Server, ShieldAlert 
} from "lucide-react";

interface DocsPageProps {
  params: {
    productId: string;
  };
}

export default function ProductDocsPage({ params }: DocsPageProps) {
  const product = STRATAMETRIQ_PRODUCTS.find((p) => p.id === params.productId);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!product) {
    return notFound();
  }

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const isVsix = product.id === "architecture-intelligence";
  const isIdCard = product.id === "id-card-designer";
  const isRuntime = product.id === "runtime-engine";

  // Code Snippets for Architecture Intelligence
  const cliScanSnippet = `# Interactive setup: create a default .stratametriqrc.json configuration file
npx @stratametriq/cli init

# Scan the current directory locally
npx @stratametriq/cli scan .

# Run downstream BFS impact analysis on a specific file ("what breaks if I edit this?")
npx @stratametriq/cli impact src/services/UserService.ts

# Git PR Mode: Scan only modified files in your branch/PR against origin/main
npx @stratametriq/cli scan . --diff origin/main --fail-on-high

# Dead code & dependency pruning: Report unused npm packages and orphaned modules
npx @stratametriq/cli scan . --prune

# Standalone interactive offline HTML dashboard report
npx @stratametriq/cli scan . --html architecture-report.html

# Live watch mode for local development (automatically re-scans on file save)
npx @stratametriq/cli scan . --watch`;

  const customConfigYml = `version: 1
rules:
  - name: "UI layer cannot import Database layer directly"
    source: "src/ui/**"
    forbiddenTarget: "src/db/**"
    severity: "HIGH"
    message: "UI components must go through src/services/ or API endpoints."
  - name: "Domain models must remain framework agnostic"
    source: "src/domain/**"
    forbiddenTarget: "src/infrastructure/**"
    severity: "HIGH"
    message: "Domain entities cannot depend on database or HTTP adapters."`;

  const buildSourceSnippet = `# 1. Install dependencies across all monorepo packages
npm install

# 2. Build the AST scanner engine
cd scanner && npm run build

# 3. Build the Vite React dashboard webview bundle
cd ../dashboard && npm run build

# 4. Compile the extension backend and package the VSIX bundle
cd ../extension && npm run build
# Output: stratametriq-extension-1.3.0.vsix inside extension/`;

  // Code Snippets for ID Card Designer
  const idCardTurnkeySnippet = `import React, { useState, useEffect } from 'react';
import { IdCardManager } from '@stratametriq/id-card-designer';
import '@stratametriq/id-card-designer/dist/index.css';

export default function SchoolPortal() {
  const [dbRecords, setDbRecords] = useState({ student: [], staff: [] });

  // 1. Fetch real students/employees from your backend (Node.js, Laravel, Supabase, etc.)
  useEffect(() => {
    fetch('https://api.yourschool.com/students')
      .then(res => res.json())
      .then(data => setDbRecords({ student: data }));
  }, []);

  // 2. Pass your live data right into <IdCardManager />!
  return (
    <IdCardManager
      sampleRecords={dbRecords}
      onSaveCategoryTemplate={(category, templateSchema) => {
        console.log(\`Saving \${category} template to DB:\`, templateSchema);
      }}
      onBatchExportComplete={(category, exportedRecords) => {
        console.log(\`Generated A4 PDF for \${exportedRecords.length} records!\`);
      }}
    />
  );
}`;

  const idCardVueAngularMountSnippet = `<!-- Inside index.html or your Vue/Angular/Svelte component template -->
<div id="id-card-manager-root"></div>

<script type="module">
  import React from 'react';
  import { createRoot } from 'react-dom/client';
  import { IdCardManager } from '@stratametriq/id-card-designer';
  import '@stratametriq/id-card-designer/dist/index.css';

  // Mount the visual ID Card Dashboard cleanly inside any HTML div
  const rootElement = document.getElementById('id-card-manager-root');
  const root = createRoot(rootElement);
  
  root.render(React.createElement(IdCardManager, {
    onBatchExportComplete: (category, records) => {
      console.log(\`Exported \${records.length} cards in \${category}\`);
    }
  }));
</script>`;

  const idCardGeneratePdfSnippet = `import { generateIdCardsPdf } from "@stratametriq/id-card-designer";

// Works natively across Vue, Angular, Svelte, Next.js, and Vanilla JS!
await generateIdCardsPdf({
  records: selectedStudentsArray,             // Array of data records to render
  templateSchema: activeTemplateJson,         // JSON template schema object
  orientation: "vertical",                    // "vertical" | "horizontal"
  fileName: "Student_Cards_Batch_Output.pdf", // Name of the downloaded file
  pageOptions: {
    format: "a4",                             // Paper size ("a4" | "letter")
    scale: 2,                                 // Resolution scale (2 = High DPI 300 DPI)
    marginMm: 10,                             // Top/side page margins in mm
    spacingMm: 10,                            // Gap between cards in mm
    showCropMarks: true,                      // Add corner crosshair cut guides
    showCutOutline: true,                     // Add faint card perimeter borders
    showHeader: true                          // Add technical registration header
  },
  onProgress: (current, total) => {
    console.log(\`Rendered page \${current} of \${total}\`);
  }
});`;

  const idCardTemplateJsonSnippet = `{
  "id": "tpl_school_vertical_01",
  "name": "Classic Vertical ID",
  "orientation": "vertical",
  "width": 54,
  "height": 86,
  "background": {
    "color": "#ffffff",
    "image": "https://myportal.com/assets/card-bg-watermark.png",
    "size": "cover"
  },
  "elements": [
    {
      "id": "el_header_box",
      "type": "shape",
      "label": "Top Header Box",
      "x": 0, "y": 0, "width": 54, "height": 14,
      "backgroundColor": "#0d6efd",
      "zIndex": 1
    },
    {
      "id": "el_photo_slot",
      "type": "image",
      "subtype": "photo",
      "fieldKey": "profilePhoto",
      "label": "Student Photo",
      "x": 14, "y": 18, "width": 26, "height": 28,
      "borderWidth": 1.5, "borderColor": "#0d6efd", "borderRadius": 4,
      "zIndex": 3
    },
    {
      "id": "el_student_name",
      "type": "field",
      "fieldKey": "studentName",
      "label": "Student Name",
      "x": 2, "y": 48, "width": 50, "height": 7,
      "fontFamily": "Inter, sans-serif",
      "fontSize": 11, "fontWeight": "bold", "color": "#111111",
      "textAlign": "center", "textTransform": "uppercase",
      "zIndex": 4
    }
  ]
}`;

  return (
    <div className="min-h-screen bg-obsidian pb-24">
      <ProductHero product={product} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sidebar Table of Contents */}
          <div className="lg:col-span-3 space-y-4 sticky top-28 self-start">
            <div className="p-5 rounded-2xl bg-obsidian-800/80 border border-glass space-y-3 text-xs shadow-glass">
              <span className="font-bold text-white uppercase tracking-wider block border-b border-glass pb-2 flex items-center">
                <BookOpen className="w-3.5 h-3.5 mr-1.5 text-electric-400" /> Documentation Topics
              </span>
              <ul className="space-y-2 text-gray-400">
                {isVsix && (
                  <>
                    <li><a href="#polyglot" className="hover:text-electric-400 transition-colors block">1. Polyglot Language & AST Support</a></li>
                    <li><a href="#audit-13" className="hover:text-electric-400 transition-colors block">2. 13-Point Pre-Deployment Safety Audit</a></li>
                    <li><a href="#api-lifecycle" className="hover:text-electric-400 transition-colors block">3. Dynamic API Request Lifecycle Trace</a></li>
                    <li><a href="#impact-analysis" className="hover:text-electric-400 transition-colors block">4. Ripple Impact & Complexity Ranking</a></li>
                    <li><a href="#dependency-tree" className="hover:text-electric-400 transition-colors block">5. Interactive Dependency Tree & Loops</a></li>
                    <li><a href="#cli-gate" className="hover:text-electric-400 transition-colors block">6. Headless CLI & CI/CD Pipeline Gates</a></li>
                    <li><a href="#governance" className="hover:text-electric-400 transition-colors block">7. Custom Governance & OpenTelemetry</a></li>
                    <li><a href="#comparison" className="hover:text-electric-400 transition-colors block">8. Market Comparison vs Legacy Tools</a></li>
                    <li><a href="#installation" className="hover:text-electric-400 transition-colors block">9. Installation & Building From Source</a></li>
                  </>
                )}

                {isIdCard && (
                  <>
                    <li><a href="#turnkey-dashboard" className="hover:text-electric-400 transition-colors block">1. Turnkey Dashboard & 4-Step Workflow</a></li>
                    <li><a href="#auto-discovery" className="hover:text-electric-400 transition-colors block">2. Zero-Config Field Discovery (`sampleRecords`)</a></li>
                    <li><a href="#modular-components" className="hover:text-electric-400 transition-colors block">3. Standalone Studio (`&lt;IdCardDesignerModal /&gt;`)</a></li>
                    <li><a href="#batch-print-engine" className="hover:text-electric-400 transition-colors block">4. Batch A4 PDF Engine (`generateIdCardsPdf`)</a></li>
                    <li><a href="#json-schema" className="hover:text-electric-400 transition-colors block">5. JSON Template Schema (`templateSchema`)</a></li>
                    <li><a href="#multi-framework" className="hover:text-electric-400 transition-colors block">6. Vue, Angular & Vanilla JS Mounting</a></li>
                    <li><a href="#dictionary-pattern" className="hover:text-electric-400 transition-colors block">7. Multi-Department Dictionary & App Structure</a></li>
                  </>
                )}

                {isRuntime && (
                  <>
                    <li><a href="#otel-bridge" className="hover:text-electric-400 transition-colors block">1. OpenTelemetry Runtime Traffic Bridge</a></li>
                    <li><a href="#hotspot-heatmaps" className="hover:text-electric-400 transition-colors block">2. Production Hotspot Heatmaps</a></li>
                    <li><a href="#dead-api" className="hover:text-electric-400 transition-colors block">3. Dead API Deprecation Engine</a></li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Main Documentation Area */}
          <div className="lg:col-span-9 space-y-16 text-sm text-gray-300 leading-relaxed">

            {/* ========================================== */}
            {/* ARCHITECTURE INTELLIGENCE SPECIFICATIONS   */}
            {/* ========================================== */}
            {isVsix && (
              <>
                {/* Section 1: Polyglot Support */}
                <div id="polyglot" className="space-y-4 scroll-mt-28">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-600/20 text-electric-400 text-xs font-bold border border-electric-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>v1.4.1 Enterprise Specification</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    1. Full-Stack Enterprise Polyglot Architecture Support
                  </h2>
                  <p>
                    StrataMetriq natively parses ASTs (Abstract Syntax Trees) and framework semantics across modern multi-language enterprise repositories without requiring external interpreters, running backend servers, or heavy IDE plugins.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="p-6 rounded-2xl bg-obsidian-800/60 border border-glass space-y-3">
                      <h3 className="font-bold text-white flex items-center text-base">
                        <Code2 className="w-4 h-4 mr-2 text-electric-400" /> Supported Languages (11+)
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Full tokenization and syntax diagnosis across <strong className="text-white">Python (`.py`)</strong>, <strong className="text-white">Java (`.java`)</strong>, <strong className="text-white">Kotlin (`.kt`)</strong>, <strong className="text-white">Go (`.go`)</strong>, <strong className="text-white">C# (`.cs`)</strong>, <strong className="text-white">JavaScript/TypeScript (`.js, .ts, .jsx, .tsx`)</strong>, <strong className="text-white">Ruby (`.rb`)</strong>, <strong className="text-white">PHP (`.php`)</strong>, <strong className="text-white">Rust (`.rs`)</strong>, <strong className="text-white">C++ (`.cpp`)</strong>, and <strong className="text-white">C (`.c`)</strong>.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-obsidian-800/60 border border-glass space-y-3">
                      <h3 className="font-bold text-white flex items-center text-base">
                        <Server className="w-4 h-4 mr-2 text-neon-cyan" /> Enterprise Backend Frameworks
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Natively detects API routes and ORM entities across <strong className="text-white">Python FastAPI / Django</strong>, <strong className="text-white">Java & Kotlin Spring Boot / JPA</strong>, <strong className="text-white">C# ASP.NET Core / Entity Framework</strong>, and <strong className="text-white">Go Gin / Echo / GORM</strong>. Traces frontend calls directly into backend decorators (`@GetMapping(...)`, `@app.get(...)`, `r.GET(...)`).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2: 13-Point Audit */}
                <div id="audit-13" className="space-y-6 scroll-mt-28 pt-6 border-t border-glass">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center">
                    <ShieldCheck className="w-6 h-6 mr-2 text-neon-emerald" /> 2. Automated 13-Point Pre-Deployment DevSecOps Safety Audit
                  </h2>
                  <p>
                    Before deploying your application, StrataMetriq scans 100% of your codebase in seconds to ensure no debugging artifacts, credentials, or insecure patterns leak into production. Displays a glowing <strong className="text-neon-emerald">✅ Ready for Production</strong> badge or a high-alert <strong className="text-amber-400">⛔ DO NOT DEPLOY</strong> banner.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-obsidian-900 border border-glass space-y-1">
                      <div className="font-bold text-white flex items-center">
                        <span className="w-2 h-2 rounded-full bg-amber-400 mr-2" /> 🔑 Hardcoded Secrets & Credentials
                      </div>
                      <p className="text-gray-400">Detects API keys, JWT tokens, AWS secrets, passwords, and hardcoded connection strings with Zero False-Positive precision.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-obsidian-900 border border-glass space-y-1">
                      <div className="font-bold text-white flex items-center">
                        <span className="w-2 h-2 rounded-full bg-amber-400 mr-2" /> 💉 SQL Injection & Raw Concatenation
                      </div>
                      <p className="text-gray-400">Identifies dangerous raw SQL string concatenation (`query = "SELECT * FROM users WHERE id = " + userId`) inside database queries.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-obsidian-900 border border-glass space-y-1">
                      <div className="font-bold text-white flex items-center">
                        <span className="w-2 h-2 rounded-full bg-amber-400 mr-2" /> 🔓 Insecure Cryptography
                      </div>
                      <p className="text-gray-400">Flags usage of obsolete hashing algorithms (`MD5`, `SHA1`) and recommends modern `SHA-256 / Argon2` implementations.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-obsidian-900 border border-glass space-y-1">
                      <div className="font-bold text-white flex items-center">
                        <span className="w-2 h-2 rounded-full bg-amber-400 mr-2" /> 🐞 Active Debug Statements
                      </div>
                      <p className="text-gray-400">Identifies active `console.log`, `print()`, `System.out.println()`, `fmt.Println()`, `debugger;`, and `alert()` statements before merge.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-obsidian-900 border border-glass space-y-1">
                      <div className="font-bold text-white flex items-center">
                        <span className="w-2 h-2 rounded-full bg-neon-cyan mr-2" /> 🚧 Temporary Code & TODO Notes
                      </div>
                      <p className="text-gray-400">Highlights developer hack annotations (`// WIP`, `// HACK`, `// TEMP`, `TODO`, `FIXME`) across your workspace.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-obsidian-900 border border-glass space-y-1">
                      <div className="font-bold text-white flex items-center">
                        <span className="w-2 h-2 rounded-full bg-neon-cyan mr-2" /> 💬 Large Commented Code Blocks
                      </div>
                      <p className="text-gray-400">Flags commented-out logic blocks (reported as informational without penalizing your Project Health Score).</p>
                    </div>

                    <div className="p-4 rounded-xl bg-obsidian-900 border border-glass space-y-1 md:col-span-2">
                      <div className="font-bold text-white flex items-center">
                        <span className="w-2 h-2 rounded-full bg-neon-purple mr-2" /> ⚰️ Dead Code & Unused Imports + SARIF 2.1.0 Export
                      </div>
                      <p className="text-gray-400">Flags unreachable statements after return/throw, dead branches, and unused development dependencies. Outputs standard OASIS SARIF 2.1.0 reports (`--sarif results.sarif`) so your security team can ingest architectural risks directly into GitHub Advanced Security or GitLab Security Center PR tabs.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Dynamic API Lifecycle Visualizer */}
                <div id="api-lifecycle" className="space-y-6 scroll-mt-28 pt-6 border-t border-glass">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center">
                    <Layers className="w-6 h-6 mr-2 text-electric-400" /> 3. Dynamic API Request Lifecycle Visualizer
                  </h2>
                  <p>
                    Click any API endpoint in your project (e.g., `GET /role/:name`, `GET /vendors`, or `POST /api/users`) to generate an instant vertical trace of the request flow across your full-stack architecture. Powered by our <strong className="text-white">Dynamic Entity Keyword Matching Engine</strong> (`role`, `vendor`) to prevent false-positive utility matches:
                  </p>

                  <div className="p-6 rounded-3xl bg-obsidian-800/80 border border-glass font-mono text-xs space-y-3">
                    <div className="flex items-center space-x-3 text-white font-bold">
                      <span className="px-2 py-0.5 rounded bg-electric-600">1</span>
                      <span>React Component: UI component triggering the call (e.g., RoleList.jsx)</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300 pl-4">
                      <span className="px-2 py-0.5 rounded bg-obsidian-950 border border-glass">2</span>
                      <span>HTTP Request: Network layer (Axios or fetch)</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300 pl-8">
                      <span className="px-2 py-0.5 rounded bg-obsidian-950 border border-glass">3</span>
                      <span>Route Handler: Express or Next.js API Router endpoint</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300 pl-12">
                      <span className="px-2 py-0.5 rounded bg-obsidian-950 border border-glass">4</span>
                      <span>Controller: Request validation & routing (RoleController.js)</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300 pl-16">
                      <span className="px-2 py-0.5 rounded bg-obsidian-950 border border-glass">5</span>
                      <span>Middleware: Security, CORS & auth verifiers (authMiddleware)</span>
                    </div>
                    <div className="flex items-center space-x-3 text-neon-cyan font-bold pl-20">
                      <span className="px-2 py-0.5 rounded bg-neon-cyan/20 border border-neon-cyan/40">6</span>
                      <span>Service Layer: Core business logic execution (RoleService.js)</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300 pl-24">
                      <span className="px-2 py-0.5 rounded bg-obsidian-950 border border-glass">7</span>
                      <span>Repository Layer: ORM queries & data access (RoleRepository.js)</span>
                    </div>
                    <div className="flex items-center space-x-3 text-neon-emerald font-bold pl-28">
                      <span className="px-2 py-0.5 rounded bg-neon-emerald/20 border border-neon-emerald/40">8</span>
                      <span>Database Table: SQL / NoSQL storage table (🛢️ roles_table)</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300 pl-32">
                      <span className="px-2 py-0.5 rounded bg-obsidian-950 border border-glass">9</span>
                      <span>HTTP Response: JSON payload serialization (200 OK)</span>
                    </div>
                    <div className="flex items-center space-x-3 text-electric-400 font-bold pl-36">
                      <span className="px-2 py-0.5 rounded bg-electric-600/30 border border-electric-500/40">10</span>
                      <span>React UI Update: DOM mutation and state re-rendering</span>
                    </div>
                  </div>
                </div>

                {/* Section 4 & 5: Ripple Impact Analysis & Dependency Explorer */}
                <div id="impact-analysis" className="space-y-6 scroll-mt-28 pt-6 border-t border-glass">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center">
                    <GitBranch className="w-6 h-6 mr-2 text-neon-purple" /> 4. Most Complex Modules & Intelligent Ripple Impact Analysis
                  </h2>
                  <p>
                    StrataMetriq automatically evaluates code complexity (`cyclomatic complexity`, `nested conditional depth`, `AST token density`) and ranks source files to highlight tight coupling. When modifying existing code, our <strong className="text-white">"Why & How Are These Affected?"</strong> guide categorizes risk:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                    <div className="p-5 rounded-2xl bg-obsidian-800/50 border border-glass space-y-2">
                      <span className="px-2 py-0.5 rounded bg-electric-600/20 text-electric-400 font-bold font-mono">[Direct Importer]</span>
                      <h4 className="font-bold text-white text-sm">Direct Importers vs Transitive</h4>
                      <p className="text-gray-400">Distinguishes files that directly import your module from downstream files further away in the ripple chain (`[Transitive]` badge).</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-obsidian-800/50 border border-glass space-y-2">
                      <span className="px-2 py-0.5 rounded bg-neon-cyan/20 text-neon-cyan font-bold font-mono">[API Contract & UI Tree]</span>
                      <h4 className="font-bold text-white text-sm">Contract & UI Re-Renders</h4>
                      <p className="text-gray-400">Identifies backend endpoints coupled to the file and warns against breaking response schemas or causing unexpected React hook re-renders.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-obsidian-800/50 border border-glass space-y-2">
                      <span className="px-2 py-0.5 rounded bg-neon-emerald/20 text-neon-emerald font-bold font-mono">[Adding vs Modifying]</span>
                      <h4 className="font-bold text-white text-sm">Adding vs Modifying Rule</h4>
                      <p className="text-gray-400">Adding new endpoints or functions carries <strong className="text-neon-emerald">0 ripple risk</strong> (non-breaking), whereas modifying existing signatures carries high ripple risk.</p>
                    </div>
                  </div>
                </div>

                {/* Section 6: Headless CLI & CI/CD Gates */}
                <div id="cli-gate" className="space-y-6 scroll-mt-28 pt-6 border-t border-glass">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center">
                    <Terminal className="w-6 h-6 mr-2 text-electric-400" /> 6. Headless CLI & CI/CD Pipeline Gates (`@stratametriq/cli`)
                  </h2>
                  <p>
                    Run StrataMetriq directly in your terminal, Docker container, or CI/CD workflow (GitHub Actions, GitLab CI, Jenkins) to automatically block pull requests containing high-severity security vulnerabilities (`--fail-on-high`) or circular loops (`--fail-on-circular`).
                  </p>

                  {/* Terminal snippet box */}
                  <div className="rounded-2xl border border-glass bg-obsidian-950 overflow-hidden font-mono text-xs">
                    <div className="flex items-center justify-between px-4 py-2 bg-obsidian-800 border-b border-glass text-gray-400">
                      <span>Bash / Terminal Commands</span>
                      <button
                        onClick={() => copyCode(cliScanSnippet, "cli")}
                        className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white flex items-center space-x-1"
                      >
                        {copiedSection === "cli" ? <Check className="w-3.5 h-3.5 text-neon-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedSection === "cli" ? "Copied" : "Copy Commands"}</span>
                      </button>
                    </div>
                    <pre className="p-4 text-gray-200 overflow-x-auto leading-relaxed">
                      <code>{cliScanSnippet}</code>
                    </pre>
                  </div>

                  {/* CLI Flags Table */}
                  <h3 className="text-lg font-bold text-white pt-4">🚦 Available CLI Flags & Quality Gates</h3>
                  <div className="overflow-x-auto rounded-2xl border border-glass bg-obsidian-800/40">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-glass bg-obsidian-900 text-gray-400 font-bold uppercase tracking-wider">
                          <th className="p-3.5">Flag</th>
                          <th className="p-3.5">Description</th>
                          <th className="p-3.5">CI/CD & Pipeline Behavior</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-glass text-gray-300 font-mono">
                        <tr>
                          <td className="p-3.5 font-bold text-electric-400">init</td>
                          <td className="p-3.5 font-sans">Creates default `.stratametriqrc.json` configuration file.</td>
                          <td className="p-3.5 font-sans">Configures ignore rules, custom risk thresholds, and default report paths.</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 font-bold text-electric-400">scan [dir]</td>
                          <td className="p-3.5 font-sans">Target directory to scan (defaults to current directory).</td>
                          <td className="p-3.5 font-sans">Outputs colored ANSI tables of stats & risks.</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 font-bold text-electric-400">impact &lt;file&gt;</td>
                          <td className="p-3.5 font-sans">Runs downstream BFS ripple analysis on a specific target file.</td>
                          <td className="p-3.5 font-sans">Categorizes downstream affected files, API routes, database tables, and UI widgets.</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 font-bold text-electric-400">--diff &lt;ref&gt;</td>
                          <td className="p-3.5 font-sans">Git PR mode: Compares against Git branch or commit reference.</td>
                          <td className="p-3.5 font-sans">Evaluates security risks and circular loops strictly within modified files.</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 font-bold text-electric-400">--prune</td>
                          <td className="p-3.5 font-sans">Dead code and dependency cleanup report.</td>
                          <td className="p-3.5 font-sans">Identifies unreferenced `package.json` dependencies and orphaned module code.</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 font-bold text-neon-emerald">--fail-on-high</td>
                          <td className="p-3.5 font-sans">Enforces DevSecOps quality gate.</td>
                          <td className="p-3.5 font-sans">Exits with Exit Code 1 (fails pipeline) if any HIGH severity risk is detected.</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 font-bold text-neon-emerald">--fail-on-circular</td>
                          <td className="p-3.5 font-sans">Enforces architectural health gate.</td>
                          <td className="p-3.5 font-sans">Exits with Exit Code 1 if any circular dependency loops are detected.</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 font-bold text-neon-purple">--sarif / --json / --md</td>
                          <td className="p-3.5 font-sans">Export formats for executive audits.</td>
                          <td className="p-3.5 font-sans">OASIS SARIF 2.1.0 for GitHub Security, JSON for SBOMs, Markdown for `gh pr comment`.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 7: Enterprise Custom Governance */}
                <div id="governance" className="space-y-6 scroll-mt-28 pt-6 border-t border-glass">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center">
                    <Settings className="w-6 h-6 mr-2 text-neon-cyan" /> 7. Enterprise Custom Governance (`stratametriq.config.yml`)
                  </h2>
                  <p>
                    Enforce organizational architecture standards across your monorepo or layered application. Define forbidden import boundaries in a root `stratametriq.config.yml` file. Any violation is automatically flagged with red diagnostic squiggles in VS Code and breaks CI/CD gating:
                  </p>

                  <div className="rounded-2xl border border-glass bg-obsidian-950 overflow-hidden font-mono text-xs">
                    <div className="flex items-center justify-between px-4 py-2 bg-obsidian-800 border-b border-glass text-gray-400">
                      <span>stratametriq.config.yml</span>
                      <button
                        onClick={() => copyCode(customConfigYml, "yml")}
                        className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white flex items-center space-x-1"
                      >
                        {copiedSection === "yml" ? <Check className="w-3.5 h-3.5 text-neon-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedSection === "yml" ? "Copied" : "Copy YAML"}</span>
                      </button>
                    </div>
                    <pre className="p-4 text-gray-200 overflow-x-auto leading-relaxed">
                      <code>{customConfigYml}</code>
                    </pre>
                  </div>
                </div>

                {/* Section 8: Market Comparison */}
                <div id="comparison" className="space-y-6 scroll-mt-28 pt-6 border-t border-glass">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center">
                    <Sparkles className="w-6 h-6 mr-2 text-electric-400" /> 8. Market Comparison: Why StrataMetriq?
                  </h2>
                  <p>
                    In a typical engineering organization, developers must piece together 3 to 4 separate, expensive tools (`Datadog`, `CodeScene`, `GitGuardian`, `Madge`) to get what StrataMetriq delivers natively out of the box inside your IDE:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-glass bg-obsidian-800/40">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-glass bg-obsidian-900 text-gray-400 font-bold uppercase tracking-wider">
                          <th className="p-4">Feature Domain</th>
                          <th className="p-4">Standard VS Code</th>
                          <th className="p-4">Traditional Market Tools</th>
                          <th className="p-4 text-electric-400">StrataMetriq (Our USP)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-glass text-gray-300">
                        <tr>
                          <td className="p-4 font-bold text-white">Pre-Deployment Audits</td>
                          <td className="p-4 text-amber-400">❌ None. Allows deploying debug code & secrets.</td>
                          <td className="p-4">GitGuardian / TruffleHog / SonarLint: Fragmented per-file checks.</td>
                          <td className="p-4 font-bold text-neon-emerald">✅ All-in-One 13-Point Audit with instant line jumping & zero false positives.</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-white">API Lifecycle Tracing</td>
                          <td className="p-4 text-amber-400">❌ Manual file hunting across layers.</td>
                          <td className="p-4">Datadog / Dynatrace / New Relic: Expensive runtime APM ($100+/mo).</td>
                          <td className="p-4 font-bold text-neon-emerald">✅ Static Pre-Deployment API Tracing right inside your IDE before deployment.</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-white">Dependency Graphs</td>
                          <td className="p-4 text-amber-400">❌ No visual tree graph view.</td>
                          <td className="p-4">Madge / Dependency-Cruiser: Static SVG image exports via terminal.</td>
                          <td className="p-4 font-bold text-neon-emerald">✅ Interactive Glassmorphic Webview synced right with open editor tabs (`[Open]`).</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-white">Risk Impact Analysis</td>
                          <td className="p-4 text-amber-400">❌ Flat text via "Find All References".</td>
                          <td className="p-4">CodeScene / Understand: Desktop software ($1,000+/year per seat).</td>
                          <td className="p-4 font-bold text-neon-emerald">✅ Instant Downstream Ripple Analysis across APIs, controllers, and tables.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 9: Installation & Building From Source */}
                <div id="installation" className="space-y-6 scroll-mt-28 pt-6 border-t border-glass">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center">
                    <FileCode className="w-6 h-6 mr-2 text-neon-purple" /> 9. Building From Monorepo Source (`extension/`, `dashboard/`, `scanner/`, `cli/`)
                  </h2>
                  <p>
                    To compile and package the `stratametriq-extension-1.3.0.vsix` bundle directly from source:
                  </p>

                  <div className="rounded-2xl border border-glass bg-obsidian-950 overflow-hidden font-mono text-xs">
                    <div className="flex items-center justify-between px-4 py-2 bg-obsidian-800 border-b border-glass text-gray-400">
                      <span>Monorepo Build Script</span>
                      <button
                        onClick={() => copyCode(buildSourceSnippet, "src_build")}
                        className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white flex items-center space-x-1"
                      >
                        {copiedSection === "src_build" ? <Check className="w-3.5 h-3.5 text-neon-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedSection === "src_build" ? "Copied" : "Copy Build Script"}</span>
                      </button>
                    </div>
                    <pre className="p-4 text-gray-200 overflow-x-auto leading-relaxed">
                      <code>{buildSourceSnippet}</code>
                    </pre>
                  </div>
                </div>
              </>
            )}

            {/* ========================================== */}
            {/* ID CARD DESIGNER SPECIFICATIONS            */}
            {/* ========================================== */}
            {isIdCard && (
              <>
                {/* Section 1: Turnkey Dashboard & 4-Step Workflow */}
                <div id="turnkey-dashboard" className="space-y-6 scroll-mt-28">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs font-bold border border-neon-cyan/30">
                    <Layout className="w-3.5 h-3.5" />
                    <span>v1.3.0 Turnkey UI & A4 Sheet Engine</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    1. Turnkey All-In-One Dashboard (`&lt;IdCardManager /&gt;`) & 4-Step Master Workflow
                  </h2>
                  <p>
                    Drop in a complete, ready-to-use workspace containing department tabs, live vector stage, batch A4 print setup, and roster selection table. We engineered a clean, full-width unified layout broken into four logical steps:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                    <div className="p-5 rounded-2xl bg-obsidian-800/60 border border-glass space-y-2">
                      <span className="px-2.5 py-0.5 rounded bg-electric-600 font-bold text-white">Step 1</span>
                      <h4 className="font-bold text-white text-sm">Department Category Grid</h4>
                      <p className="text-gray-400">4-card header grid showing your categories (`Student IDs`, `Faculty & Admin`, `Corporate HR`, `Hospital Portal`). Displays bound field counts and active templates.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-obsidian-800/60 border border-glass space-y-2">
                      <span className="px-2.5 py-0.5 rounded bg-neon-cyan text-obsidian font-bold">Step 2</span>
                      <h4 className="font-bold text-white text-sm">Live Stage & Studio Launcher</h4>
                      <p className="text-gray-400">High-resolution vector preview with Zoom (`80%-150%`), toggleable grid/ruler (`0-80mm`), and Studio Launcher modal opening our drag-and-drop designer.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-obsidian-800/60 border border-glass space-y-2">
                      <span className="px-2.5 py-0.5 rounded bg-neon-emerald text-obsidian font-bold">Step 3</span>
                      <h4 className="font-bold text-white text-sm">Batch A4 Print Engine (`⚡ Live Matrix`)</h4>
                      <p className="text-gray-400">Dynamically computes physical sheet mathematics! When you toggle `A4` vs `US Letter` or cut sizes (`86×54mm ID-1`, `90×50mm`), it calculates exact grid capacity (`3×3 = 9 cards/page`) and hardware crosshair cut marks (`0.35mm`).</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-obsidian-800/60 border border-glass space-y-2">
                      <span className="px-2.5 py-0.5 rounded bg-neon-purple text-white font-bold">Step 4</span>
                      <h4 className="font-bold text-white text-sm">Live Roster Directory Table & Instant Search</h4>
                      <p className="text-gray-400">Interactive roster table with instant search across names/departments, quick filter pills (`All | Selected | Unselected`), and smart batch selection.</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-glass bg-obsidian-950 overflow-hidden font-mono text-xs pt-4">
                    <div className="flex items-center justify-between px-4 py-2 bg-obsidian-800 border-b border-glass text-gray-400">
                      <span>src/components/SchoolPortal.jsx (`&lt;IdCardManager /&gt;` Quickstart)</span>
                      <button
                        onClick={() => copyCode(idCardTurnkeySnippet, "idcard_turnkey")}
                        className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white flex items-center space-x-1"
                      >
                        {copiedSection === "idcard_turnkey" ? <Check className="w-3.5 h-3.5 text-neon-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedSection === "idcard_turnkey" ? "Copied" : "Copy Code"}</span>
                      </button>
                    </div>
                    <pre className="p-4 text-gray-200 overflow-x-auto leading-relaxed">
                      <code>{idCardTurnkeySnippet}</code>
                    </pre>
                  </div>
                </div>

                {/* Section 2: Zero-Config Automatic Field Discovery */}
                <div id="auto-discovery" className="space-y-6 scroll-mt-28 pt-6 border-t border-glass">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center">
                    <Sparkles className="w-6 h-6 mr-2 text-electric-400" /> 2. Zero-Configuration Automatic Field Discovery
                  </h2>
                  <p>
                    You never have to worry about missing fields. If your database or user records contain custom columns (`bloodGroup`, `busRouteNo`, `emergencyPhone`, `allergyAlert`) that are not explicitly defined in `fieldDefinitions`, `&lt;IdCardManager /&gt;` handles them automatically:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                    <div className="p-5 rounded-2xl bg-obsidian-800/50 border border-glass space-y-2">
                      <span className="text-neon-cyan font-bold block">1. Auto-Discovery Scan</span>
                      <p className="text-gray-400">When opening the Studio Canvas, our property engine scans `Object.keys(sampleData[0])` directly from your passed records.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-obsidian-800/50 border border-glass space-y-2">
                      <span className="text-neon-cyan font-bold block">2. Auto-Formatting</span>
                      <p className="text-gray-400">Raw keys like `busRouteNo` are automatically transformed into clean titles like <strong className="text-white">"Bus Route No (`busRouteNo`)"</strong>.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-obsidian-800/50 border border-glass space-y-2">
                      <span className="text-neon-cyan font-bold block">3. Instant Data Binding</span>
                      <p className="text-gray-400">Every discovered key merges into the `Data Field Key` dropdown. Operators can click `+ Add Element` ➡️ `Dynamic Field` and bind it instantly without writing code!</p>
                    </div>
                  </div>
                </div>

                {/* Section 4: Batch A4 PDF Export Utility */}
                <div id="batch-print-engine" className="space-y-6 scroll-mt-28 pt-6 border-t border-glass">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center">
                    <Terminal className="w-6 h-6 mr-2 text-neon-emerald" /> 4. Framework-Agnostic Batch A4 PDF Engine (`generateIdCardsPdf`)
                  </h2>
                  <p>
                    The core multi-page A4 and US Letter PDF rendering engine is completely framework-agnostic! Whether you are writing pure TypeScript, Node/Express frontend scripts, Vue, or Angular, you can import and run `generateIdCardsPdf()` directly without mounting any React UI components:
                  </p>

                  <div className="rounded-2xl border border-glass bg-obsidian-950 overflow-hidden font-mono text-xs">
                    <div className="flex items-center justify-between px-4 py-2 bg-obsidian-800 border-b border-glass text-gray-400">
                      <span>Pure JS / TS Batch Export Snippet</span>
                      <button
                        onClick={() => copyCode(idCardGeneratePdfSnippet, "pdf_gen")}
                        className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white flex items-center space-x-1"
                      >
                        {copiedSection === "pdf_gen" ? <Check className="w-3.5 h-3.5 text-neon-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedSection === "pdf_gen" ? "Copied" : "Copy Utility Code"}</span>
                      </button>
                    </div>
                    <pre className="p-4 text-gray-200 overflow-x-auto leading-relaxed">
                      <code>{idCardGeneratePdfSnippet}</code>
                    </pre>
                  </div>
                </div>

                {/* Section 5: JSON Template Schema */}
                <div id="json-schema" className="space-y-6 scroll-mt-28 pt-6 border-t border-glass">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center">
                    <FileCode className="w-6 h-6 mr-2 text-neon-purple" /> 5. JSON Template Schema Structure (`templateSchema`)
                  </h2>
                  <p>
                    Every design created in `&lt;IdCardDesignerModal /&gt;` is stored and exported as a clean, serializable JSON schema suitable for saving in MongoDB, Postgres, or local storage:
                  </p>

                  <div className="rounded-2xl border border-glass bg-obsidian-950 overflow-hidden font-mono text-xs">
                    <div className="flex items-center justify-between px-4 py-2 bg-obsidian-800 border-b border-glass text-gray-400">
                      <span>templateSchema.json</span>
                      <button
                        onClick={() => copyCode(idCardTemplateJsonSnippet, "json_schema")}
                        className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white flex items-center space-x-1"
                      >
                        {copiedSection === "json_schema" ? <Check className="w-3.5 h-3.5 text-neon-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedSection === "json_schema" ? "Copied" : "Copy Schema JSON"}</span>
                      </button>
                    </div>
                    <pre className="p-4 text-gray-200 overflow-x-auto leading-relaxed max-h-80">
                      <code>{idCardTemplateJsonSnippet}</code>
                    </pre>
                  </div>
                </div>

                {/* Section 6: Multi-Framework Mounting */}
                <div id="multi-framework" className="space-y-6 scroll-mt-28 pt-6 border-t border-glass">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center">
                    <Code2 className="w-6 h-6 mr-2 text-electric-400" /> 6. Multi-Framework Mounting (`Vue`, `Angular`, `Svelte` & `Vanilla HTML`)
                  </h2>
                  <p>
                    If your application is built with Vue.js, Angular, Svelte, or plain HTML/JS, you can easily mount the turnkey `&lt;IdCardManager /&gt;` dashboard into any DOM element using `createRoot` in just a few lines of code:
                  </p>

                  <div className="rounded-2xl border border-glass bg-obsidian-950 overflow-hidden font-mono text-xs">
                    <div className="flex items-center justify-between px-4 py-2 bg-obsidian-800 border-b border-glass text-gray-400">
                      <span>index.html (Micro-Frontend Mounting)</span>
                      <button
                        onClick={() => copyCode(idCardVueAngularMountSnippet, "mount_snippet")}
                        className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white flex items-center space-x-1"
                      >
                        {copiedSection === "mount_snippet" ? <Check className="w-3.5 h-3.5 text-neon-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedSection === "mount_snippet" ? "Copied" : "Copy Mounting Code"}</span>
                      </button>
                    </div>
                    <pre className="p-4 text-gray-200 overflow-x-auto leading-relaxed">
                      <code>{idCardVueAngularMountSnippet}</code>
                    </pre>
                  </div>
                </div>
              </>
            )}

            {/* ========================================== */}
            {/* RUNTIME ENGINE SPECIFICATIONS              */}
            {/* ========================================== */}
            {isRuntime && (
              <div id="otel-bridge" className="space-y-6">
                <h2 className="text-2xl font-extrabold text-white flex items-center">
                  <Cpu className="w-6 h-6 mr-2 text-neon-purple" /> OpenTelemetry Runtime Traffic Bridge
                </h2>
                <p>
                  Correlates static AST dependency nodes directly with live production traffic latency, error rates, and request volumes using `stratametriq.otel.json`. Features automatic dead API elimination (`0 requests in 30 days`) and glowing production hotspot heatmaps.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
