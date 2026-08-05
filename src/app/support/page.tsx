import { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, Mail, Github, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Support | StrataMetriq",
  description: "Get support for StrataMetriq products, VS Code extensions, and NPM packages.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-obsidian py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            How can we help you?
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Whether you are building with our VS Code Extension, using our NPM packages, or looking for enterprise solutions, our team is here to support your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* VS Code Extension Support */}
          <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700/50 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              VS Code Extension
            </h2>
            <p className="text-slate-600 dark:text-gray-400 mb-6">
              Found a bug or have a feature request for the StrataMetriq VS Code Extension? We actively monitor our issue tracker on GitHub.
            </p>
            <Link
              href="https://github.com/aabid-wani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-electric-600 dark:text-electric-400 font-semibold hover:text-electric-700 dark:hover:text-electric-300"
            >
              <Github className="w-4 h-4 mr-2" />
              Report an Issue
            </Link>
          </div>

          {/* Documentation */}
          <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700/50 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Documentation
            </h2>
            <p className="text-slate-600 dark:text-gray-400 mb-6">
              Explore our comprehensive guides, API references, and tutorials to get the most out of our tools.
            </p>
            <Link
              href="/products/architecture-intelligence/docs/"
              className="inline-flex items-center text-electric-600 dark:text-electric-400 font-semibold hover:text-electric-700 dark:hover:text-electric-300"
            >
              Browse Documentation &rarr;
            </Link>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-br from-electric-600 to-purple-600 dark:from-electric-900/40 dark:to-purple-900/40 dark:border dark:border-electric-500/20 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 dark:bg-electric-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Need Direct Assistance?</h2>
            <p className="text-electric-100 dark:text-gray-300 mb-8 max-w-xl text-lg">
              For general inquiries, account assistance, or Enterprise SLA support, please reach out to our team directly. We typically respond within 24 hours.
            </p>
            <a
              href="mailto:info.stratamatriq@gmail.com"
              className="inline-flex items-center bg-white dark:bg-electric-600 text-electric-700 dark:text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-electric-500 transition-colors shadow-lg hover:shadow-xl dark:shadow-none"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Support Team
            </a>
          </div>
        </div>

        <div className="mt-16 text-center text-slate-500 dark:text-slate-400">
          <p>
            For legal and terms inquiries, please review our{" "}
            <Link href="/terms" className="text-electric-600 dark:text-electric-400 hover:underline">
              Terms of Service
            </Link>
            {" "}and{" "}
            <Link href="/privacy" className="text-electric-600 dark:text-electric-400 hover:underline">
              Privacy Policy
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
