import { getMultiDocData } from '@/lib/docs'
import { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { STRATAMETRIQ_PRODUCTS } from '@/config/products'
import ProductHero from "@/components/product-page/ProductHero"
import ProductDocsTabs from "@/components/product-page/ProductDocsTabs"

type Props = {
  params: { productId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const docsData = await getMultiDocData(params.productId)
  
  if (!docsData || docsData.length === 0) {
    return { title: 'Documentation Not Found' }
  }

  return {
    title: `${docsData[0].title} | StrataMetriq Documentation`,
    description: docsData[0].description,
  }
}

export default async function ProductDocsPage({ params }: Props) {
  const docsData = await getMultiDocData(params.productId)
  
  if (!docsData || docsData.length === 0) {
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
        <Link 
          href={`/products/${params.productId}`} 
          className="inline-flex items-center space-x-2 text-sm font-bold text-gray-400 hover:text-electric-400 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Overview</span>
        </Link>
        
        <ProductDocsTabs docs={docsData} />
      </div>
    </div>
  )
}
