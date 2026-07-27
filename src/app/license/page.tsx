import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software License Agreements | StrataMetriq",
  description: "Licensing information for StrataMetriq open-source and commercial software.",
};

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-obsidian py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          Software License Agreements
        </h1>
        <p className="text-sm text-gray-400 mb-12 font-mono">Last Updated: July 2026</p>
        
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-electric-400">
          <p>
            StrataMetriq operates a dual-licensing model to support both the open-source community 
            and enterprise organizations requiring commercial guarantees.
          </p>

          <h2>1. Open Source Licenses (MIT / Apache 2.0)</h2>
          <p>
            Many of our fundamental libraries and NPM packages are released under permissive open-source 
            licenses, typically MIT or Apache 2.0. These licenses grant you the freedom to use, modify, 
            and distribute the software in both personal and commercial projects without purchasing a license.
          </p>
          <p>
            Please check the <code>LICENSE</code> file in the root of the respective GitHub repository or NPM package 
            to verify its specific open-source license.
          </p>

          <h2>2. Commercial / Pro Licenses</h2>
          <p>
            Certain advanced products (such as the <strong>ID Card Designer Pro</strong>) are proprietary 
            and require a commercial license for use. Purchasing a commercial license grants you:
          </p>
          <ul>
            <li>The right to use the software in commercial, revenue-generating applications.</li>
            <li>Access to premium features, UI components, and advanced export capabilities.</li>
            <li>Removal of any required attribution or watermark requirements.</li>
            <li>Direct technical support and SLA guarantees (depending on your tier).</li>
          </ul>
          
          <h2>3. Enterprise Service Level Agreements (SLA)</h2>
          <p>
            For organizations requiring custom architecture integration, guaranteed uptime, or dedicated 
            engineering support, we offer bespoke Enterprise SLAs. These agreements supersede standard 
            commercial licenses and are negotiated on a per-client basis.
          </p>
          <p>
            To discuss an Enterprise SLA or purchase a commercial license, please contact our architecture team:
            <br />
            <strong>Email:</strong> <a href="mailto:info.stratamatriq@gmail.com">info.stratamatriq@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
