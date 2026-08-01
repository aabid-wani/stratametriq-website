"use client";

import React, { useState } from "react";
import { 
  Layout, 
  Printer, 
  FileSpreadsheet, 
  Eye, 
  RotateCcw, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Download, 
  Sliders, 
  BadgeCheck, 
  QrCode,
  ArrowRight
} from "lucide-react";

interface SampleRecord {
  id: string;
  name: string;
  role: string;
  department: string;
  badgeId: string;
  bloodGroup: string;
  avatar: string;
  status: "Active" | "Visitor";
}

export default function LiveIdCardStudio() {
  const [activeDept, setActiveDept] = useState<"student" | "staff" | "hospital">("student");
  const [selectedRecordIndex, setSelectedRecordIndex] = useState(0);
  const [orientation, setOrientation] = useState<"vertical" | "horizontal">("vertical");
  const [isFlipped, setIsFlipped] = useState(false);
  const [sheetColumns, setSheetColumns] = useState(3);
  const [sheetRows, setSheetRows] = useState(3);
  const [isExporting, setIsExporting] = useState(false);

  const departmentsData: Record<"student" | "staff" | "hospital", { title: string; records: SampleRecord[] }> = {
    student: {
      title: "Student Information System",
      records: [
        { id: "1", name: "Aarav Patel", role: "Computer Science (B.Tech)", department: "Engineering", badgeId: "ADM-2024-101", bloodGroup: "O+", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80", status: "Active" },
        { id: "2", name: "Ananya Sharma", role: "Biotechnology (M.Sc)", department: "Life Sciences", badgeId: "ADM-2024-102", bloodGroup: "B+", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80", status: "Active" },
        { id: "3", name: "Rohan Gupta", role: "Artificial Intelligence", department: "Engineering", badgeId: "ADM-2024-103", bloodGroup: "AB+", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80", status: "Active" },
      ]
    },
    staff: {
      title: "Corporate Faculty & Staff",
      records: [
        { id: "4", name: "Dr. Elena Rostova", role: "Professor & HOD", department: "Applied Physics", badgeId: "EMP-8042", bloodGroup: "A+", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80", status: "Active" },
        { id: "5", name: "Marcus Thorne", role: "Lead DevSecOps Architect", department: "IT & Infrastructure", badgeId: "EMP-8045", bloodGroup: "O-", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80", status: "Active" },
      ]
    },
    hospital: {
      title: "Hospital Medical Portal",
      records: [
        { id: "6", name: "Dr. Sarah Jenkins", role: "Senior Cardiologist", department: "ICU & Surgery", badgeId: "MED-ICU-09", bloodGroup: "O+", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80", status: "Active" },
        { id: "7", name: "David Miller", role: "Emergency Medical Tech", department: "Trauma Care", badgeId: "MED-EMT-14", bloodGroup: "A-", avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80", status: "Active" },
      ]
    }
  };

  const currentRecords = departmentsData[activeDept].records;
  const currentRecord = currentRecords[selectedRecordIndex] || currentRecords[0];
  const totalCardsPerPage = sheetColumns * sheetRows;

  const triggerExport = () => {
    setIsExporting(true);
    setTimeout(() => setIsExporting(false), 1500);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200 dark:border-glass bg-white dark:bg-obsidian-900 shadow-xl dark:shadow-2xl overflow-hidden font-sans">
      {/* Top Studio Control Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-4 bg-slate-100 dark:bg-obsidian-800/90 border-b border-slate-200 dark:border-glass gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-neon-cyan/20 border border-neon-cyan/40 flex items-center justify-center text-neon-cyan shadow-glow-cyan">
            <Layout className="w-5 h-5" />
          </div>
          <div>
            <span className="text-sm font-bold text-slate-900 dark:text-white block flex items-center">
              &lt;IdCardManager /&gt; Live Turnkey Studio
            </span>
            <span className="text-xs text-slate-500 dark:text-gray-400 font-mono">
              @stratametriq/id-card-designer v1.5.0 • Multi-Page A4 Engine
            </span>
          </div>
        </div>

        {/* Department Switcher Tabs */}
        <div className="flex items-center space-x-1.5 bg-slate-200 dark:bg-obsidian-950 p-1 rounded-xl border border-slate-300 dark:border-glass">
          {(["student", "staff", "hospital"] as const).map((dept) => (
            <button
              key={dept}
              onClick={() => {
                setActiveDept(dept);
                setSelectedRecordIndex(0);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                activeDept === dept
                  ? "bg-gradient-to-r from-electric-600 to-electric-500 text-white shadow-glow-blue"
                  : "text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              {dept === "student" ? "Student Portal" : dept === "staff" ? "Faculty & Staff" : "Medical Staff"}
            </button>
          ))}
        </div>
      </div>

      {/* Main Studio Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] bg-slate-50 dark:bg-obsidian-900/60">
        
        {/* Left Col: Live Sheet Matrix & Variable Binding Controls */}
        <div className="lg:col-span-5 p-6 border-r border-slate-200 dark:border-glass flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 flex items-center">
                <Sliders className="w-3.5 h-3.5 mr-1.5 text-electric-600 dark:text-electric-400" /> A4 Cut-Sheet Matrix Math
              </h4>
              <span className="text-xs font-mono font-bold text-neon-cyan bg-neon-cyan/10 px-2.5 py-0.5 rounded border border-neon-cyan/30">
                {sheetColumns} × {sheetRows} = {totalCardsPerPage} cards/page
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-white dark:bg-obsidian-950/80 p-4 rounded-xl border border-slate-200 dark:border-glass text-xs">
              <div>
                <label className="text-slate-600 dark:text-gray-400 font-semibold block mb-1">Sheet Columns:</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min={1}
                    max={4}
                    value={sheetColumns}
                    onChange={(e) => setSheetColumns(Number(e.target.value))}
                    className="w-full accent-electric-600 dark:accent-electric-500"
                  />
                  <span className="font-mono text-slate-900 dark:text-white font-bold">{sheetColumns}</span>
                </div>
              </div>
              <div>
                <label className="text-slate-600 dark:text-gray-400 font-semibold block mb-1">Sheet Rows:</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min={1}
                    max={5}
                    value={sheetRows}
                    onChange={(e) => setSheetRows(Number(e.target.value))}
                    className="w-full accent-electric-600 dark:accent-electric-500"
                  />
                  <span className="font-mono text-slate-900 dark:text-white font-bold">{sheetRows}</span>
                </div>
              </div>
            </div>

            {/* Handlebars Binding Selector */}
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 mt-6 mb-3 flex items-center">
              <Users className="w-3.5 h-3.5 mr-1.5 text-purple-600 dark:text-neon-purple" /> Live Database Record Selector
            </h4>
            <div className="space-y-2">
              {currentRecords.map((record, index) => (
                <button
                  key={record.id}
                  onClick={() => setSelectedRecordIndex(index)}
                  className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                    selectedRecordIndex === index
                      ? "bg-slate-100 dark:bg-white/[0.08] border-electric-500 text-slate-900 dark:text-white shadow-sm dark:shadow-glow-blue"
                      : "bg-white dark:bg-obsidian-800/50 border-slate-200 dark:border-glass text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-glass-hover"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img src={record.avatar} alt={record.name} className="w-8 h-8 rounded-full object-cover border border-slate-200 dark:border-glass" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">{record.name}</span>
                      <span className="text-[11px] text-slate-500 dark:text-gray-400">{record.role}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300">
                    {record.badgeId}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Export & Batch Actions */}
          <div className="pt-4 border-t border-slate-200 dark:border-glass flex items-center justify-between">
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-glass text-xs font-bold text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 flex items-center space-x-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Flip Front/Back</span>
            </button>
            <button
              onClick={triggerExport}
              disabled={isExporting}
              className="px-4 py-2 bg-gradient-to-r from-neon-emerald to-emerald-600 hover:from-emerald-500 hover:to-neon-emerald text-white text-xs font-bold rounded-xl shadow-lg flex items-center space-x-1.5 transition-all disabled:opacity-50"
            >
              <Printer className={`w-3.5 h-3.5 ${isExporting ? "animate-bounce" : ""}`} />
              <span>{isExporting ? "Rendering A4 PDF..." : "Batch Export A4 PDF"}</span>
            </button>
          </div>
        </div>

        {/* Right Col: Live Card Visualizer Canvas */}
        <div className="lg:col-span-7 p-6 bg-slate-100 dark:bg-obsidian-950 flex flex-col items-center justify-center relative overflow-hidden bg-dots-pattern">
          <div className="absolute top-4 right-4 flex items-center space-x-2 text-xs">
            <button
              onClick={() => setOrientation(orientation === "vertical" ? "horizontal" : "vertical")}
              className="px-3 py-1 rounded-lg bg-white dark:bg-obsidian-800 border border-slate-300 dark:border-glass text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white font-medium"
            >
              Toggle {orientation === "vertical" ? "Horizontal" : "Vertical"}
            </button>
          </div>

          {/* The Simulated Live Card Canvas */}
          <div className="my-auto perspective-1000">
            <div className={`transition-all duration-500 rounded-2xl p-6 shadow-2xl relative overflow-hidden border ${
              orientation === "vertical" ? "w-[270px] h-[430px]" : "w-[430px] h-[270px]"
            } ${
              activeDept === "student" 
                ? "bg-gradient-to-br from-obsidian-800 via-indigo-950 to-obsidian-900 border-electric-500/50" 
                : activeDept === "staff"
                ? "bg-gradient-to-br from-obsidian-800 via-slate-900 to-obsidian-900 border-neon-cyan/50"
                : "bg-gradient-to-br from-obsidian-800 via-emerald-950 to-obsidian-900 border-neon-emerald/50"
            }`}>
              
              {!isFlipped ? (
                /* Card Front Side */
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">
                      {departmentsData[activeDept].title}
                    </span>
                    <BadgeCheck className={`w-4 h-4 ${activeDept === "student" ? "text-electric-400" : activeDept === "staff" ? "text-neon-cyan" : "text-neon-emerald"}`} />
                  </div>

                  <div className="flex flex-col items-center text-center my-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg mb-3">
                      <img src={currentRecord.avatar} alt={currentRecord.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-base font-bold text-white">{currentRecord.name}</h3>
                    <p className="text-xs text-gray-300 font-medium mt-0.5">{currentRecord.role}</p>
                    <span className="mt-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-white/10 text-white border border-white/15">
                      {currentRecord.department}
                    </span>
                  </div>

                  <div className="border-t border-white/10 pt-3 flex items-center justify-between text-[11px] font-mono text-gray-300">
                    <div>
                      <span className="text-gray-400 block text-[9px]">ID NUMBER</span>
                      <span className="font-bold text-white">{currentRecord.badgeId}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[9px]">BLOOD</span>
                      <span className="font-bold text-white">{currentRecord.bloodGroup}</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Card Back Side */
                <div className="h-full flex flex-col justify-between relative z-10 text-center">
                  <div className="border-b border-white/10 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Official Identification Card
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center my-auto space-y-3">
                    <div className="p-3 bg-white rounded-xl shadow-lg">
                      <QrCode className="w-16 h-16 text-obsidian" />
                    </div>
                    <p className="text-[10px] text-gray-300 max-w-[200px] leading-relaxed">
                      This card is non-transferable. If found, please return to StrataMetriq Security Division.
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-2 text-[10px] font-mono text-gray-400">
                    VERIFIED HOLDER • ISSUED 2026
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-2 text-xs text-slate-500 dark:text-gray-400">
            <span className="px-2 py-0.5 rounded bg-white dark:bg-white/5 border border-slate-200 dark:border-glass font-mono">
              Handlebars: &#123;&#123;name&#125;&#125; bound to &quot;{currentRecord.name}&quot;
            </span>
          </div>
        </div>
      </div>

      {/* Studio Status Bar */}
      <div className="flex items-center justify-between px-6 py-2 bg-slate-100 dark:bg-obsidian-950 border-t border-slate-200 dark:border-glass text-xs text-slate-500 dark:text-gray-400 font-mono">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-cyan-600 dark:text-neon-cyan font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> A4 Rendering Engine Ready
          </span>
          <span>DPI: 300 (High-Resolution)</span>
          <span>Frameworks: React, Vue, Vanilla</span>
        </div>
        <div>
          <span>Install: npm i @stratametriq/id-card-designer</span>
        </div>
      </div>
    </div>
  );
}
