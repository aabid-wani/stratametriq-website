"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, ExternalLink, ShieldCheck } from "lucide-react";

interface InstallTabBoxProps {
  installCommand?: string;
  productName: string;
}

export default function InstallTabBox({ installCommand, productName }: InstallTabBoxProps) {
  const [copied, setCopied] = useState(false);
  const [packageManager, setPackageManager] = useState<"npm" | "yarn" | "pnpm" | "vsix">("npm");

  if (!installCommand) return null;

  const isVsix = installCommand.includes("ext install");

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
    <div className="rounded-2xl border border-glass bg-obsidian-900 overflow-hidden shadow-glass my-6">
      <div className="flex items-center justify-between px-4 py-2.5 bg-obsidian-800 border-b border-glass text-xs">
        <span className="font-bold text-gray-300 flex items-center">
          <Terminal className="w-3.5 h-3.5 mr-1.5 text-electric-400" /> Install {productName}
        </span>
        
        {!isVsix && (
          <div className="flex items-center space-x-1 font-mono">
            {(["npm", "yarn", "pnpm"] as const).map((pm) => (
              <button
                key={pm}
                onClick={() => setPackageManager(pm)}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  packageManager === pm
                    ? "bg-white/10 text-white font-bold border border-glass"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {pm}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 bg-obsidian-950 flex items-center justify-between font-mono text-sm text-gray-200">
        <div className="flex items-center space-x-3 overflow-hidden mr-4">
          <span className="text-neon-cyan font-bold select-none">$</span>
          <span className="truncate">{getCommand()}</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-glass text-white text-xs font-bold flex items-center space-x-1.5 transition-all flex-shrink-0"
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
    </div>
  );
}
