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
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 custom-scrollbar w-full border-b border-glass">
          {docs.map((doc, index) => (
            <button
              key={doc.id}
              onClick={() => setActiveTabIndex(index)}
              className={`px-4 py-2 rounded-t-xl text-sm font-bold whitespace-nowrap transition-all border-b-2 ${
                activeTabIndex === index
                  ? 'text-neon-cyan border-neon-cyan bg-white/5'
                  : 'text-gray-400 border-transparent hover:text-white hover:bg-white/5'
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
              className="prose prose-invert prose-lg max-w-none break-words prose-headings:text-white prose-a:text-electric-400 hover:prose-a:text-electric-300 prose-code:text-neon-cyan prose-code:bg-obsidian-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-pre:bg-obsidian-900 prose-pre:border prose-pre:border-glass prose-img:rounded-xl prose-img:border prose-img:border-glass"
              dangerouslySetInnerHTML={{ __html: activeDoc.contentHtml }} 
            />
          </div>
        </div>

        {/* Table of Contents Sidebar */}
        {activeDoc.headings && activeDoc.headings.length > 0 && (
          <aside className="hidden lg:block w-72 shrink-0 relative">
            <div className="sticky top-24 bg-obsidian-900/50 backdrop-blur-sm border border-glass rounded-2xl p-6 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center space-x-2">
                <BookOpen className="w-3.5 h-3.5 text-electric-400" />
                <span>On this page</span>
              </h3>
              <nav>
                <ul className="space-y-3 text-sm">
                  {activeDoc.headings.filter(h => h.level <= 3).map((heading) => (
                    <li 
                      key={heading.id} 
                      className={`${heading.level === 3 ? 'ml-4 border-l border-glass pl-3' : 'font-medium'}`}
                    >
                      <a 
                        href={`#${heading.id}`} 
                        className="text-gray-400 hover:text-electric-400 transition-colors block line-clamp-2 leading-snug"
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
