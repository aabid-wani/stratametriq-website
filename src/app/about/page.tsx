import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | StrataMetriq",
  description: "Learn more about StrataMetriq's mission to empower engineers with next-generation architecture tooling.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-obsidian py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          About StrataMetriq
        </h1>
        
        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none dark:prose-headings:text-white prose-a:text-electric-600 dark:prose-a:text-electric-400 hover:prose-a:text-electric-500 dark:hover:prose-a:text-electric-300">
          <p>
            StrataMetriq is the next-generation parent architecture brand and developer software suite. 
            Our mission is to empower software engineers, DevOps teams, and enterprise architects with 
            uncompromising tools designed for modern, high-throughput environments.
          </p>

          <h2>Our Ecosystem</h2>
          <p>
            We are building a comprehensive ecosystem of developer tools that bridge the gap between 
            complex architecture and intuitive developer experience. Our flagship products include:
          </p>
          <ul>
            <li><strong>Architecture Intelligence:</strong> Polyglot DevSecOps AST analysis and CI/CD governance.</li>
            <li><strong>ID Card Designer Studio:</strong> Turnkey A4/Letter cut-sheet PDF rendering engines running entirely in the browser (Zero Server Exfiltration).</li>
            <li><strong>Runtime Engine:</strong> OpenTelemetry-based API rate-limiting proxies and execution engines.</li>
          </ul>

          <h2>Built for the Open Source Community</h2>
          <p>
            We believe in giving back. Many of our core engines are available as open-source NPM packages 
            and VS Code VSIX installers. For enterprises requiring dedicated SLAs, custom integrations, 
            and white-labeling, our Enterprise Consulting team provides white-glove architecture reviews.
          </p>
          
          <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-obsidian-800 border border-slate-200 dark:border-glass shadow-sm dark:shadow-none">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0">Contact Our Team</h3>
            <p className="mb-0 text-slate-600 dark:text-gray-300">
              For general inquiries or enterprise consultation, reach out to us directly at:
              <br />
              <a href="mailto:info.stratamatriq@gmail.com" className="font-mono text-electric-600 dark:text-neon-cyan mt-2 block">
                info.stratamatriq@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
