import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | StrataMetriq",
  description: "Terms and conditions for using StrataMetriq software suites.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-obsidian py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-400 mb-12 font-mono">Last Updated: July 2026</p>
        
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-electric-400">
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the 
            StrataMetriq website, NPM packages, VS Code extensions, or Enterprise Consulting services 
            (the "Service") operated by StrataMetriq ("us", "we", or "our").
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree 
            with any part of the terms then you may not access the Service.
          </p>

          <h2>2. Use License</h2>
          <p>
            Unless otherwise stated (such as in an open-source MIT license attached to specific NPM packages), 
            the proprietary software suites, documentation, and architecture designs provided by StrataMetriq 
            are protected by copyright and intellectual property laws.
          </p>
          <ul>
            <li>You may not modify or copy our proprietary source code without an Enterprise SLA.</li>
            <li>You may not attempt to decompile or reverse engineer any compiled software contained on StrataMetriq's website.</li>
            <li>You may not transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on StrataMetriq's website and software suites are provided on an 'as is' basis. 
            StrataMetriq makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
            including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
            or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall StrataMetriq or its suppliers be liable for any damages (including, without limitation, 
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
            to use the materials on StrataMetriq's website, even if StrataMetriq or a StrataMetriq authorized 
            representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2>5. Contact Information</h2>
          <p>
            Questions about the Terms of Service should be sent to us at:
            <br />
            <strong>Email:</strong> <a href="mailto:info.stratamatriq@gmail.com">info.stratamatriq@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
