"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, ExternalLink, ShieldCheck } from "lucide-react";

interface InstallTabBoxProps {
  installCommand?: string;
  productName: string;
  isVsix?: boolean;
}

export default function InstallTabBox({ installCommand, productName, isVsix = false }: InstallTabBoxProps) {
  const [copied, setCopied] = useState(false);
  const [packageManager, setPackageManager] = useState<"npm" | "yarn" | "pnpm" | "vsix">("npm");

  if (!installCommand) return null;

  const getCommand = () => {
    if (isVsix) return installCommand;
    if (packageManager === "yarn") return installCommand.replace("npm install", "yarn add");
    if (packageManager === "pnpm") return installCommand.replace("npm install", "pnpm add");
    return installCommand;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCommand());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-glass bg-white dark:bg-obsidian-900 overflow-hidden shadow-sm dark:shadow-glass my-6">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-obsidian-800 border-b border-slate-200 dark:border-glass text-xs">
        <span className="font-bold text-slate-700 dark:text-gray-300 flex items-center">
          <Terminal className="w-3.5 h-3.5 mr-1.5 text-electric-600 dark:text-electric-400" /> Install {productName}
        </span>
        
        {!isVsix && (
          <div className="flex items-center space-x-1 font-mono">
            {(["npm", "yarn", "pnpm"] as const).map((pm) => (
              <button
                key={pm}
                onClick={() => setPackageManager(pm)}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  packageManager === pm
                    ? "bg-slate-200 text-slate-900 font-bold border border-slate-300 dark:bg-white/10 dark:text-white dark:border-glass"
                    : "text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {pm}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-100 dark:bg-obsidian-950 flex items-center justify-between font-mono text-sm text-slate-700 dark:text-gray-200 border-b border-slate-200 dark:border-glass">
        <div className="flex items-center space-x-3 overflow-hidden mr-4">
          <span className="text-electric-600 dark:text-neon-cyan font-bold select-none">$</span>
          <span className="truncate">{getCommand()}</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-slate-900 dark:bg-white/10 dark:hover:bg-white/15 dark:border-glass dark:text-white text-xs font-bold flex items-center space-x-1.5 transition-all flex-shrink-0"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-neon-emerald" />
              <span className="text-neon-emerald">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {isVsix && (
        <div className="bg-slate-50 dark:bg-obsidian-900 px-4 py-3 text-xs text-slate-600 dark:text-gray-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-electric-600 dark:text-electric-400 flex-shrink-0" />
            <span>Available on the VS Code Marketplace. Install it directly into your editor.</span>
          </div>
          <a 
            href="https://marketplace.visualstudio.com/items?itemName=StrataMetriq.stratametriq-extension" 
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-electric-600 hover:bg-electric-500 text-white font-bold flex items-center space-x-1.5 transition-colors whitespace-nowrap w-full sm:w-auto justify-center sm:justify-start"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View on Marketplace</span>
          </a>
        </div>
      )}
    </div>
  );
}
