import Link from 'next/link'
import { getSortedPostsData } from '@/lib/markdown'
import { BookOpen, Sparkles, ArrowRight, CalendarDays } from 'lucide-react'

export const metadata = {
  title: 'Blog & Documentation | StrataMetriq',
  description: 'Technical articles, DevSecOps tutorials, and engineering documentation for the StrataMetriq ecosystem.',
}

export default function BlogIndex() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-obsidian py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 transition-colors duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-electric-600/10 dark:bg-electric-600/20 border border-electric-500/20 dark:border-electric-500/30 text-xs font-bold text-electric-600 dark:text-electric-400">
          <BookOpen className="w-3.5 h-3.5" />
          <span>StrataMetriq Developer Blog</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Engineering Insights
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300">
          Technical deep-dives, DevSecOps tutorials, and architecture guides from the StrataMetriq core team.
        </p>
      </div>

      {/* Blog Posts Grid */}
      {allPostsData.length === 0 ? (
        <div className="text-center py-20 border border-slate-200 dark:border-glass rounded-3xl bg-white dark:bg-obsidian-900/50 shadow-sm dark:shadow-none">
          <Sparkles className="w-8 h-8 text-electric-600 dark:text-electric-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No articles yet</h3>
          <p className="text-slate-500 dark:text-gray-400">Check back soon for our first technical deep-dive!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData.map(({ id, date, title, description }) => (
            <Link href={`/blog/${id}`} key={id}>
              <div className="rounded-3xl p-7 bg-white dark:bg-obsidian-800/60 hover:bg-slate-50 dark:hover:bg-obsidian-800/90 border border-slate-200 dark:border-glass hover:border-electric-500/50 dark:hover:border-electric-500/50 shadow-sm dark:shadow-glass transition-all h-full flex flex-col group cursor-pointer">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-mono text-electric-600 dark:text-electric-400">
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>{date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-electric-600 dark:group-hover:text-electric-400 transition-colors line-clamp-2">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-glass flex items-center text-xs font-bold text-slate-900 dark:text-white group-hover:text-electric-600 dark:group-hover:text-electric-400 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
