import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MoveRight } from 'lucide-react';

function ProductCard({ cardData }) {
    console.log("card data", cardData);

    return (
        <article className='bg-gray-200 rounded-xl overflow-hidden'>
            <div className='blog-card overflow-hidden group'>
                <div className={`top relative overflow-hidden aspect-4/3`}>
                    <Image
                        src={cardData?.image}
                        alt={cardData.alt}
                        fill
                        loading='lazy'
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className='object-cover object-top  group-hover:scale-110 transition-all duration-500'
                    />
                    <div className='absolute h-10 w-[200%] bg-[#f1f1f1] top-[50%] opacity-0 -rotate-45 right-[200%] group-hover:right-[-200%] group-hover:opacity-50 transition-all duration-900'></div>
                </div>

                <div className="bottom p-4 pb-8">

                    

                    <h3 className='text-[16px] md:text-[18px] my-1 font-semibold'>
                        {cardData?.title}
                    </h3>

                    <Link href={`/products/${cardData.slug}`}
                        className='flex items-center gap-4 text-blue-600 group'
                    >
                        View Details
                        <MoveRight className='group-hover:translate-x-1 transition-all duration-300'/>
                    </Link>

                    <div className='border-div relative h-px w-full bg-[#0003] mt-4'>
                        <div className='absolute h-px rounded-full w-0 bg-black left-0 group-hover:w-full transition-all duration-500'></div>
                    </div>

                </div>
            </div>
        </article>
    )
}

export default ProductCard
