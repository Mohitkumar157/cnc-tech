import ProductDetail from '@/components/products/ProductDetail'
import React from 'react'
import productDetailsData from "../../../data/productDetailData";
import { notFound } from 'next/navigation';
import MicroScopeGrid from '@/components/products/MicroScopeGrid';
async function page({params}) {
  const {slug} = await params;
  console.log(slug);
  
  const detailPageData = productDetailsData.find((data)=> data.slug === slug);
  console.log(detailPageData);
  
   if (!detailPageData) {
    notFound();
  }
   if(detailPageData.images) {
    return <MicroScopeGrid data={detailPageData}/>
   }

  
  return (
     <ProductDetail data = {detailPageData}/>
  )
}

export default page;
