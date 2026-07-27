import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | StrataMetriq",
  description: "StrataMetriq Privacy Policy and data handling procedures.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-obsidian py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-12 font-mono">Last Updated: July 2026</p>
        
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-electric-400">
          <p>
            At StrataMetriq ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy will inform you as to how we look after your personal data when you visit our website 
            or use our software suites.
          </p>

          <h2>1. Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data:</strong> telemetry data regarding how you use our VS Code extensions and NPM packages. (Note: Our ID Card Studio operates strictly with Zero Server Exfiltration).</li>
          </ul>

          <h2>2. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., Enterprise SLAs).</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h2>4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, including any requests to exercise your legal rights, please contact us at:
            <br />
            <strong>Email:</strong> <a href="mailto:info.stratamatriq@gmail.com">info.stratamatriq@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
