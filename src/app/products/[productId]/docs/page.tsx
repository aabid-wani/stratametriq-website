import { getDocData } from '@/lib/docs'
import { Metadata } from 'next'
import { ArrowLeft, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { STRATAMETRIQ_PRODUCTS } from '@/config/products'
import ProductHero from "@/components/product-page/ProductHero"

type Props = {
  params: { productId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const docData = await getDocData(params.productId)
  
  if (!docData) {
    return { title: 'Documentation Not Found' }
  }

  return {
    title: `${docData.title} | StrataMetriq Documentation`,
    description: docData.description,
  }
}

export default async function ProductDocsPage({ params }: Props) {
  const docData = await getDocData(params.productId)
  
  if (!docData) {
    notFound()
  }

  const product = STRATAMETRIQ_PRODUCTS.find((p) => p.id === params.productId)
  
  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-obsidian pb-20">
      <ProductHero product={product} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Main Document Content */}
          <div className="flex-1 min-w-0 max-w-4xl">
            <Link 
          href={`/products/${params.productId}`} 
          className="inline-flex items-center space-x-2 text-sm font-bold text-gray-400 hover:text-electric-400 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Overview</span>
        </Link>
        
        <div className="mt-8 max-h-[75vh] overflow-y-auto custom-scrollbar pr-6 pb-10">
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-electric-400 hover:prose-a:text-electric-300 prose-code:text-neon-cyan prose-code:bg-obsidian-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-pre:bg-obsidian-900 prose-pre:border prose-pre:border-glass prose-img:rounded-xl prose-img:border prose-img:border-glass"
            dangerouslySetInnerHTML={{ __html: docData.contentHtml }} 
          />
        </div>
          </div>

          {/* Table of Contents Sidebar */}
          {docData.headings && docData.headings.length > 0 && (
            <aside className="hidden lg:block w-72 shrink-0 relative">
              <div className="sticky top-24 bg-obsidian-900/50 backdrop-blur-sm border border-glass rounded-2xl p-6 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center space-x-2">
                  <BookOpen className="w-3.5 h-3.5 text-electric-400" />
                  <span>On this page</span>
                </h3>
                <nav>
                  <ul className="space-y-3 text-sm">
                    {docData.headings.filter(h => h.level <= 3).map((heading) => (
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
    </div>
  )
}
