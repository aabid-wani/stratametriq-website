import { getPostData, getSortedPostsData } from '@/lib/markdown'
import { Metadata } from 'next'
import { CalendarDays, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData = await getPostData(params.slug)
  return {
    title: `${postData.title} | StrataMetriq Blog`,
    description: postData.description,
    openGraph: {
      title: postData.title,
      description: postData.description,
      type: 'article',
      publishedTime: postData.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.description,
    }
  }
}

export default async function BlogPost({ params }: Props) {
  const postData = await getPostData(params.slug)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-obsidian py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <article className="max-w-4xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center space-x-2 text-sm font-bold text-slate-500 hover:text-electric-600 dark:text-gray-400 dark:hover:text-electric-400 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all articles</span>
        </Link>
        
        <header className="mb-14 border-b border-slate-200 dark:border-glass pb-10">
          <div className="flex items-center space-x-2 text-sm font-mono text-electric-600 dark:text-electric-400 mb-6">
            <CalendarDays className="w-4 h-4" />
            <time dateTime={postData.date}>{postData.date}</time>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            {postData.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
            {postData.description}
          </p>
        </header>

        <div 
          className="prose prose-slate dark:prose-invert prose-lg max-w-none dark:prose-headings:text-white prose-a:text-electric-600 dark:prose-a:text-electric-400 hover:prose-a:text-electric-500 dark:hover:prose-a:text-electric-300 prose-code:text-electric-600 dark:prose-code:text-neon-cyan prose-code:bg-slate-100 dark:prose-code:bg-obsidian-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-pre:bg-slate-900 dark:prose-pre:bg-obsidian-900 prose-pre:border prose-pre:border-slate-800 dark:prose-pre:border-glass"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </article>
    </div>
  )
}
