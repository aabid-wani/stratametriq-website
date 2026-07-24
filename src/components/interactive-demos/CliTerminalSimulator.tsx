"use client";

import React, { useState } from "react";
import { Terminal, Play, RotateCcw, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CliTerminalSimulator() {
  const [command, setCommand] = useState("stratametriq audit --ci --exfiltration-check=strict");
  const [history, setHistory] = useState<Array<{ cmd: string; output: string[] }>>([
    {
      cmd: "stratametriq audit --ci --exfiltration-check=strict",
      output: [
        "\x1b[34m[INFO]\x1b[0m StrataMetriq CLI v1.4.4 — Architecture Intelligence & DevSecOps Suite",
        "\x1b[36m[AST]\x1b[0m Scanning local workspace... 1,420 files indexed.",
        "\x1b[36m[AST]\x1b[0m Polyglot graph established across TypeScript, Go, and Python layers.",
        "\x1b[32m[SECURITY]\x1b[0m Checking zero cloud exfiltration sockets... \x1b[1mVERIFIED (0 external calls)\x1b[0m.",
        "\x1b[33m[AUDIT]\x1b[0m Executing 13 pre-deployment safety rules...",
        "\x1b[32m[PASSED]\x1b[0m Rule #01: No unauthenticated external API calls.",
        "\x1b[32m[PASSED]\x1b[0m Rule #02: SQL queries bound with parameterized AST safely.",
        "\x1b[32m[PASSED]\x1b[0m Rule #03: JWT signature verification strictly local.",
        "\x1b[1;32m[SUCCESS]\x1b[0m CI/CD Pre-Commit Gate Passed! Ready for production deployment."
      ]
    }
  ]);

  const presetCommands = [
    "stratametriq audit --ci --exfiltration-check=strict",
    "stratametriq graph --trace=vertical --export=json",
    "stratametriq check-debt --report=detailed"
  ];

  const runCommand = (cmdToRun: string) => {
    let lines: string[] = [];
    if (cmdToRun.includes("graph")) {
      lines = [
        "\x1b[34m[INFO]\x1b[0m Generating vertical AST graph...",
        "\x1b[36m[AST]\x1b[0m Entrypoint: /src/app/api/checkout/route.ts",
        "\x1b[36m[AST]\x1b[0m -> Node #102: AuthService.verifyToken() [local-memory vault]",
        "\x1b[36m[AST]\x1b[0m -> Node #105: PaymentEngine.chargeCard() [PCI-isolated]",
        "\x1b[36m[AST]\x1b[0m -> Node #110: PostgresDB.query() [parameterized]",
        "\x1b[1;32m[SUCCESS]\x1b[0m Exported vertical graph trace to ./stratametriq-graph.json"
      ];
    } else if (cmdToRun.includes("debt")) {
      lines = [
        "\x1b[34m[INFO]\x1b[0m Architectural Debt Audit Report:",
        "\x1b[33m[WARN]\x1b[0m Low impact circular dependency in /utils/helpers.ts (Line 14)",
        "\x1b[32m[PASSED]\x1b[0m Clean layered boundary between /ui and /domain services.",
        "\x1b[1;32m[SUCCESS]\x1b[0m Overall Architectural Health Score: 98.4 / 100"
      ];
    } else {
      lines = [
        "\x1b[34m[INFO]\x1b[0m StrataMetriq CLI v1.4.4 — Architecture Intelligence",
        "\x1b[32m[SECURITY]\x1b[0m Zero exfiltration verified across 1,420 AST nodes.",
        "\x1b[1;32m[SUCCESS]\x1b[0m Pre-deployment gating check passed!"
      ];
    }

    setHistory((prev) => [...prev, { cmd: cmdToRun, output: lines }]);
  };

  const handleClear = () => {
    setHistory([]);
  };

  const parseAnsi = (text: string) => {
    // Simple mock ANSI text color mapping
    return text
      .replace(/\x1b\[34m(.*?)\x1b\[0m/g, '<span class="text-electric-400 font-bold">$1</span>')
      .replace(/\x1b\[36m(.*?)\x1b\[0m/g, '<span class="text-neon-cyan font-bold">$1</span>')
      .replace(/\x1b\[32m(.*?)\x1b\[0m/g, '<span class="text-neon-emerald font-bold">$1</span>')
      .replace(/\x1b\[33m(.*?)\x1b\[0m/g, '<span class="text-amber-400 font-bold">$1</span>')
      .replace(/\x1b\[1;32m(.*?)\x1b\[0m/g, '<span class="text-neon-emerald font-extrabold bg-neon-emerald/10 px-1 rounded">$1</span>')
      .replace(/\x1b\[1m(.*?)\x1b\[0m/g, '<span class="font-extrabold text-white">$1</span>');
  };

  return (
    <div className="w-full rounded-2xl border border-glass bg-obsidian-900 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-obsidian-800 border-b border-glass">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-3 text-gray-400 font-bold flex items-center">
            <Terminal className="w-3.5 h-3.5 mr-1.5 text-electric-400" /> stratametriq-cli — zsh — 80×24
          </span>
        </div>
        <button
          onClick={handleClear}
          className="px-2.5 py-1 rounded bg-obsidian-950 border border-glass text-gray-400 hover:text-white text-[10px] flex items-center space-x-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Clear</span>
        </button>
      </div>

      {/* Preset Command Buttons */}
      <div className="flex flex-wrap items-center gap-2 px-4 py-2 bg-obsidian-950/60 border-b border-glass text-[11px]">
        <span className="text-gray-400 font-semibold mr-1">Run Preset:</span>
        {presetCommands.map((preset) => (
          <button
            key={preset}
            onClick={() => {
              setCommand(preset);
              runCommand(preset);
            }}
            className="px-2.5 py-1 rounded bg-white/5 border border-glass hover:border-electric-400 text-gray-300 hover:text-white transition-all flex items-center space-x-1"
          >
            <Play className="w-3 h-3 text-neon-cyan" />
            <span className="truncate max-w-[220px]">{preset.replace("stratametriq ", "")}</span>
          </button>
        ))}
      </div>

      {/* Terminal Output Screen */}
      <div className="p-4 space-y-4 max-h-[340px] overflow-y-auto bg-obsidian-950/95 leading-relaxed">
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center text-gray-300">
              <span className="text-neon-cyan font-bold mr-2">➜</span>
              <span className="text-gray-400 mr-2">~/project</span>
              <span className="text-white font-bold">{entry.cmd}</span>
            </div>
            <div className="pl-4 border-l-2 border-glass space-y-1">
              {entry.output.map((line, lIdx) => (
                <div
                  key={lIdx}
                  dangerouslySetInnerHTML={{ __html: parseAnsi(line) }}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Current Command Prompt */}
        <div className="flex items-center pt-2">
          <span className="text-neon-cyan font-bold mr-2">➜</span>
          <span className="text-gray-400 mr-2">~/project</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && command) {
                runCommand(command);
              }
            }}
            className="flex-1 bg-transparent border-none outline-none text-white font-mono focus:ring-0"
          />
        </div>
      </div>
    </div>
  );
}
