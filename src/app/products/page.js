import OurProducts from '@/components/products/OurProducts'
import ProductsHero from '@/components/products/ProductsHero'
import QuoteRequestSection from '@/components/products/QuoteRequestSection'
import React from 'react'

function page() {
  return (
    <>
      <ProductsHero />
      <OurProducts />
      <QuoteRequestSection />
    </>
  )
}

export default page
