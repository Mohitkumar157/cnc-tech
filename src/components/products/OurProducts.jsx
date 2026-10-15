import React from 'react'
import CustomSelect from './CustomSelect';
import { Search } from 'lucide-react';
import productsData from '@/data/ProductsData';
import ProductCard from './ProductCard';
function OurProducts() {
    return (
        <section className='py-8 md:py-12 lg:py-16'>
            <div className="container px-4 md:px-0">
                <div className="search-filter flex flex-col gap-4 sm:flex-row md:flex-row items-center justify-between">
                    <div className='filter w-full'>
                        <CustomSelect />
                    </div>

                    <div className="search relative w-full sm:max-w-sm md:max-w-sm">
                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-4 pr-10 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                        />

                        {/* Search Icon */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <Search className='text-gray-400'/>
                        </div>
                    </div>
                </div>

                {/* All Products */}

                <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                   {
                    productsData.map((productData)=>(
                        <ProductCard  
                        key={productData.id}
                        cardData ={productData}
                        />
                    ))
                   }
                </div>
            </div>
        </section>
    )
}

export default OurProducts;
