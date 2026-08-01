"use client";

import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { DocData } from '@/lib/docs';

interface ProductDocsTabsProps {
  docs: DocData[];
}

export default function ProductDocsTabs({ docs }: ProductDocsTabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  if (!docs || docs.length === 0) {
    return null;
  }

  const activeDoc = docs[activeTabIndex];

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      {docs.length > 1 && (
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 custom-scrollbar w-full border-b border-slate-200 dark:border-glass">
          {docs.map((doc, index) => (
            <button
              key={doc.id}
              onClick={() => setActiveTabIndex(index)}
              className={`px-4 py-2 rounded-t-xl text-sm font-bold whitespace-nowrap transition-all border-b-2 ${
                activeTabIndex === index
                  ? 'text-electric-600 border-electric-600 bg-slate-100 dark:text-neon-cyan dark:border-neon-cyan dark:bg-white/5'
                  : 'text-slate-500 border-transparent hover:text-slate-900 hover:bg-slate-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5'
              }`}
            >
              {doc.title || doc.id}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start w-full">
        {/* Main Document Content */}
        <div className="flex-1 min-w-0 max-w-4xl w-full">
          <div className="lg:max-h-[75vh] lg:overflow-y-auto custom-scrollbar lg:pr-6 pb-10 w-full overflow-x-hidden lg:overflow-x-visible">
            <div 
              className="prose prose-slate prose-lg max-w-none break-words dark:prose-invert prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-electric-600 hover:prose-a:text-electric-500 dark:prose-a:text-electric-400 dark:hover:prose-a:text-electric-300 prose-code:text-electric-600 prose-code:bg-slate-100 dark:prose-code:text-neon-cyan dark:prose-code:bg-obsidian-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-pre:bg-slate-50 dark:prose-pre:bg-obsidian-900 prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-glass prose-img:rounded-xl prose-img:border prose-img:border-slate-200 dark:prose-img:border-glass"
              dangerouslySetInnerHTML={{ __html: activeDoc.contentHtml }} 
            />
          </div>
        </div>

        {/* Table of Contents Sidebar */}
        {activeDoc.headings && activeDoc.headings.length > 0 && (
          <aside className="hidden lg:block w-72 shrink-0 relative">
            <div className="sticky top-24 bg-white/80 dark:bg-obsidian-900/50 backdrop-blur-sm border border-slate-200 dark:border-glass rounded-2xl p-6 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar shadow-sm dark:shadow-none">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-4 flex items-center space-x-2">
                <BookOpen className="w-3.5 h-3.5 text-electric-600 dark:text-electric-400" />
                <span>On this page</span>
              </h3>
              <nav>
                <ul className="space-y-3 text-sm">
                  {activeDoc.headings.filter(h => h.level <= 3).map((heading) => (
                    <li 
                      key={heading.id} 
                      className={`${heading.level === 3 ? 'ml-4 border-l border-slate-200 dark:border-glass pl-3' : 'font-medium'}`}
                    >
                      <a 
                        href={`#${heading.id}`} 
                        className="text-slate-600 hover:text-electric-600 dark:text-gray-400 dark:hover:text-electric-400 transition-colors block line-clamp-2 leading-snug"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
