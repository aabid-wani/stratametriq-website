"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Terminal, 
  GitBranch, 
  CheckCircle2, 
  AlertTriangle, 
  Play, 
  RefreshCw, 
  Code2, 
  Layers, 
  FileCode, 
  Lock, 
  Zap,
  ChevronRight
} from "lucide-react";

interface AuditResult {
  id: number;
  check: string;
  category: "Security" | "Performance" | "AST Trace";
  status: "Passed" | "Warning" | "Gated";
  details: string;
  line: string;
}

export default function VsCodeSimulator() {
  const [selectedLanguage, setSelectedLanguage] = useState<"typescript" | "python" | "go">("typescript");
  const [activeTab, setActiveTab] = useState<"ast" | "audit" | "ci">("ast");
  const [isAuditing, setIsAuditing] = useState(false);
  const [ciGatingStatus, setCiGatingStatus] = useState<"passed" | "blocked" | "running">("passed");

  const codeSnippets = {
    typescript: `// Polyglot AST Trace: API Gateway -> Auth Service -> Postgres ORM
import { StrataAST } from '@stratametriq/ast-engine';
import { db } from './db/postgres';

export async function processPaymentRoute(req: Request) {
  const token = req.headers.get('Authorization');
  // [AST Check] Verified JWT signature against zero-exfiltration local vault
  const user = await StrataAST.verifyZeroCloudExfiltration(token);
  
  if (!user.isAuthorized) {
    throw new StrataAST.SecurityGatingError("Blocked: High risk API trace.");
  }

  // [AST Graph node #104] Vertical trace confirmed down to SQL AST layer
  return db.query("UPDATE accounts SET balance = balance - $1 WHERE id = $2", [req.body.amount, user.id]);
}`,
    python: `# Polyglot AST Trace: FastAPI -> PyTorch Runtime Engine -> Redis Cache
from stratametriq.ast import audit_trace, ZeroCloudPolicy
from models import get_redis_client

@audit_trace(policy=ZeroCloudPolicy.STRICT)
async def infer_customer_score(customer_id: str):
    # Verified vertical trace without external data exfiltration
    cache = get_redis_client()
    cached_score = await cache.get(f"score:{customer_id}")
    if cached_score:
        return {"score": float(cached_score), "source": "AST_VERIFIED_CACHE"}
    return {"score": 0.982, "source": "LOCAL_MODEL"}`,
    go: `// Polyglot AST Trace: Go Microservice -> gRPC Broker -> CockroachDB
package main

import (
	"context"
	"github.com/stratametriq/ast/tracer"
)

func ExecuteFinancialOrder(ctx context.Context, orderID string) error {
	// Pre-deployment safety audit checkpoint
	span, _ := tracer.StartVerticalGraph(ctx, "OrderExecutionGraph")
	defer span.End()

	// 13-point local security verification pass
	return tracer.AuditZeroExfiltration(span, orderID)
}`
  };

  const auditChecklist: AuditResult[] = [
    { id: 1, check: "Zero Cloud Exfiltration Policy", category: "Security", status: "Passed", details: "All AST analysis executed locally in memory. No code transmitted outside local machine.", line: "AST Policy #001" },
    { id: 2, check: "Vertical API Graph Depth", category: "AST Trace", status: "Passed", details: "Traced 7 downstream service calls down to SQL database layer.", line: "Node #104-111" },
    { id: 3, check: "Pre-deployment CI/CD Gating Rule", category: "Security", status: "Passed", details: "Zero unauthenticated endpoints detected across polyglot AST map.", line: "CI Gate Policy" },
    { id: 4, check: "N+1 Database Query Pattern Audit", category: "Performance", status: "Warning", details: "Potential N+1 loop detected in secondary helper function (non-blocking).", line: "Line #42" },
    { id: 5, check: "13-Point Polyglot Syntax Compliance", category: "AST Trace", status: "Passed", details: "Passed TypeScript 5.x strict AST check without runtime heap leaks.", line: "Full Tree" },
  ];

  const triggerAudit = () => {
    setIsAuditing(true);
    setCiGatingStatus("running");
    setTimeout(() => {
      setIsAuditing(false);
      setCiGatingStatus("passed");
    }, 1200);
  };

  return (
    <div className="w-full rounded-2xl border border-glass bg-obsidian-900 shadow-2xl overflow-hidden font-sans">
      {/* VS Code Window Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-obsidian-800/90 border-b border-glass">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-3 text-xs font-mono text-gray-400 flex items-center">
            <Code2 className="w-3.5 h-3.5 mr-1.5 text-electric-400" />
            stratametriq-ast-workspace / {selectedLanguage}.{selectedLanguage === "typescript" ? "ts" : selectedLanguage === "python" ? "py" : "go"} — [StrataMetriq VSIX v1.4.4]
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={triggerAudit}
            disabled={isAuditing}
            className="px-3 py-1 bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-neon-cyan text-white text-xs font-bold rounded-lg shadow-glow-blue flex items-center space-x-1.5 transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isAuditing ? "animate-spin" : ""}`} />
            <span>{isAuditing ? "Auditing Graph..." : "Run 13-Point Audit"}</span>
          </button>
        </div>
      </div>

      {/* Language Selector & Sub-Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-obsidian-900/50 px-4 py-2 border-b border-glass text-xs">
        <div className="flex items-center space-x-1 mb-2 sm:mb-0">
          <span className="text-gray-400 mr-2 font-semibold">Language AST:</span>
          {(["typescript", "python", "go"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-3 py-1 rounded-md capitalize font-mono transition-colors ${
                selectedLanguage === lang
                  ? "bg-electric-600/20 text-electric-400 border border-electric-500/30 font-bold"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          {(["ast", "audit", "ci"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-md font-medium uppercase text-[11px] tracking-wider transition-colors flex items-center space-x-1 ${
                activeTab === tab
                  ? "bg-white/10 text-white border border-glass"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab === "ast" && <Layers className="w-3 h-3 text-neon-cyan" />}
              {tab === "audit" && <ShieldCheck className="w-3 h-3 text-electric-400" />}
              {tab === "ci" && <GitBranch className="w-3 h-3 text-neon-purple" />}
              <span>{tab === "ast" ? "AST Graph Trace" : tab === "audit" ? "13-Point Audit Report" : "CI/CD Gate Status"}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] bg-obsidian-900/60">
        
        {/* Left/Main Code & Graph Viewer */}
        <div className={`${activeTab === "ast" ? "lg:col-span-7" : "lg:col-span-12"} p-4 overflow-x-auto border-r border-glass font-mono text-xs leading-relaxed`}>
          {activeTab === "ast" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] text-gray-400 pb-2 border-b border-glass">
                <span className="flex items-center text-neon-cyan font-semibold">
                  <FileCode className="w-3.5 h-3.5 mr-1" /> Polyglot Vertical Trace Active
                </span>
                <span className="text-neon-emerald bg-neon-emerald/10 px-2 py-0.5 rounded border border-neon-emerald/30">
                  Zero Cloud Exfiltration Verified
                </span>
              </div>
              <pre className="text-gray-300 overflow-x-auto p-2 rounded bg-obsidian-950/80 border border-glass/50">
                <code>{codeSnippets[selectedLanguage]}</code>
              </pre>
            </div>
          )}

          {activeTab === "audit" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-glass">
                <h4 className="text-sm font-bold text-white flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-2 text-electric-400" /> Pre-deployment Security & AST Audit Report
                </h4>
                <span className="text-xs text-gray-400">13 checks executed locally in 48ms</span>
              </div>
              <div className="space-y-2.5">
                {auditChecklist.map((item) => (
                  <div key={item.id} className="p-3 rounded-xl bg-obsidian-800/80 border border-glass flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5">
                        {item.status === "Passed" ? (
                          <CheckCircle2 className="w-4 h-4 text-neon-emerald" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-amber-400" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-white">{item.check}</span>
                          <span className="px-1.5 py-0.5 text-[9px] uppercase rounded bg-white/5 text-gray-400 font-mono">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs mt-1">{item.details}</p>
                      </div>
                    </div>
                    <span className="text-gray-500 font-mono text-[10px] flex-shrink-0">{item.line}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "ci" && (
            <div className="space-y-4 p-2 font-mono text-xs">
              <div className="p-4 rounded-xl bg-obsidian-950 border border-glass">
                <div className="flex items-center justify-between text-gray-400 pb-3 border-b border-glass mb-3">
                  <span className="flex items-center text-white font-bold">
                    <Terminal className="w-4 h-4 mr-2 text-electric-400" /> Local CI/CD Pre-Commit Audit Pipeline
                  </span>
                  <span className={`px-2 py-0.5 rounded font-bold uppercase ${
                    ciGatingStatus === "passed" ? "bg-neon-emerald/20 text-neon-emerald border border-neon-emerald/30" : "bg-amber-500/20 text-amber-400"
                  }`}>
                    Gate Status: {ciGatingStatus.toUpperCase()}
                  </span>
                </div>
                <div className="space-y-1.5 text-gray-300">
                  <p className="text-gray-500">$ stratametriq audit --polyglot-graph --check-exfiltration=strict</p>
                  <p className="text-electric-400">[info] Initializing polyglot AST parser across 11 supported runtimes...</p>
                  <p className="text-gray-300">[ast] Built vertical trace tree: 142 functions, 388 variable definitions.</p>
                  <p className="text-gray-300">[security] Running zero cloud exfiltration scanner... <span className="text-neon-emerald">PASSED (0 external sockets)</span></p>
                  <p className="text-gray-300">[audit] Executing 13-point architectural debt & security ruleset...</p>
                  <p className="text-neon-emerald font-bold">[success] Pre-deployment gating passed! Safe to merge branch into main.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side Graph Visualizer (Only visible in AST Tab) */}
        {activeTab === "ast" && (
          <div className="lg:col-span-5 p-4 bg-obsidian-950/90 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center">
                <Layers className="w-3.5 h-3.5 mr-1.5 text-neon-purple" /> Live Vertical Graph Map
              </h4>

              <div className="space-y-2 relative before:absolute before:left-3 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-electric-500 before:to-neon-purple">
                <div className="flex items-center space-x-3 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-electric-600 flex items-center justify-center text-white font-bold text-[10px] shadow-glow-blue">
                    1
                  </div>
                  <div className="p-2 rounded-lg bg-obsidian-800 border border-glass flex-1">
                    <span className="text-white font-bold text-xs block">HTTP Route Entrypoint</span>
                    <span className="text-gray-400 text-[10px]">AST Node #104 (Authenticated)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-neon-cyan flex items-center justify-center text-obsidian font-bold text-[10px]">
                    2
                  </div>
                  <div className="p-2 rounded-lg bg-obsidian-800 border border-glass flex-1">
                    <span className="text-white font-bold text-xs block">Zero-Exfiltration Auth Vault</span>
                    <span className="text-neon-emerald text-[10px] flex items-center">
                      <Lock className="w-2.5 h-2.5 mr-1" /> Local Memory Check Verified
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-neon-purple flex items-center justify-center text-white font-bold text-[10px]">
                    3
                  </div>
                  <div className="p-2 rounded-lg bg-obsidian-800 border border-glass flex-1">
                    <span className="text-white font-bold text-xs block">Downstream Database ORM</span>
                    <span className="text-gray-400 text-[10px]">Postgres / Redis Parameterized AST</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-glass/60 text-[11px] text-gray-400 flex items-center justify-between">
              <span className="flex items-center">
                <Zap className="w-3.5 h-3.5 text-amber-400 mr-1" /> AST engine latency: 12ms
              </span>
              <span className="text-electric-400 font-semibold">100% On-Premise</span>
            </div>
          </div>
        )}
      </div>

      {/* VS Code Footer Status Bar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-obsidian-950 border-t border-glass text-[11px] font-mono text-gray-400">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-electric-400 font-bold">
            <ShieldCheck className="w-3 h-3 mr-1" /> Pre-Commit Gate: Active
          </span>
          <span>AST Node Count: 388</span>
          <span>Exfiltration Risk: 0.00%</span>
        </div>
        <div className="flex items-center space-x-3">
          <span>UTF-8</span>
          <span>VSIX v1.4.4</span>
        </div>
      </div>
    </div>
  );
}
