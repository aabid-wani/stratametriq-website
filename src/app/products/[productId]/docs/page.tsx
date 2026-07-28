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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <Link 
          href={`/products/${params.productId}`} 
          className="inline-flex items-center space-x-2 text-sm font-bold text-gray-400 hover:text-electric-400 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Overview</span>
        </Link>
        
        <header className="mb-14 border-b border-glass pb-10">
          <div className="flex items-center space-x-2 text-sm font-mono text-electric-400 mb-6 bg-obsidian-900 border border-glass w-fit px-3 py-1.5 rounded-full">
            <BookOpen className="w-4 h-4" />
            <span>Official Documentation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            {docData.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            {docData.description}
          </p>
        </header>

        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-electric-400 hover:prose-a:text-electric-300 prose-code:text-neon-cyan prose-code:bg-obsidian-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-pre:bg-obsidian-900 prose-pre:border prose-pre:border-glass prose-img:rounded-xl prose-img:border prose-img:border-glass"
          dangerouslySetInnerHTML={{ __html: docData.contentHtml }} 
        />
      </div>
    </div>
  )
}
