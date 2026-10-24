import React from 'react'
import Breadcrumb from '../ui/BreadCrumb'
import Image from 'next/image'
import productsData from '@/data/ProductsData';
import ProductCard from './ProductCard';

function MicroScopeGrid({ data }) {
    console.log("Data", data);
    const relatedProducts = productsData
  .filter((item) => item.slug !== data.slug)
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);
    return (
        <section className='pt-25'>
            <div className="container px-4 lg:px-0 py-8 md:py-12 lg:py-16">
                <Breadcrumb productTitle={data.title} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {data.images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative aspect-square overflow-hidden rounded-lg
  shadow-md shadow-black/10
  hover:shadow-xl hover:shadow-black/20
  hover:-translate-y-1
  transition-all duration-500"
                        >
                            <Image
                                src={image.src}
                                alt="Microscope image"
                                fill
                                loading="lazy"
                                sizes="(max-width: 767px) 100vw, 50vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>

                <div className='bottom text pt-8 md:pt-12 lg:pt-16'>
                    <h3 className='font-inter font-semibold text-start md:text-center text-[20px] md:text-[28px]'>Built for Precision. Made to Perform.</h3>
                    <p className='text-start md:text-center font-inter leading-7 text-black'>
                        We manufacture turned components to your exact drawings and specifications, <br className='hidden md:block'/>
                        ensuring the highest standards of quality, accuracy and reliability.
                    </p>
                </div>
            </div>

            {/* suggestion of projects */}
                <div className='py-8 md:py-12 lg:py-16 bg-[linear-gradient(180deg,#F9FAFB_0%,#F4F7FA_55%,#F3F5F9_100%)]'>
                    <div className="container px-4 lg:px-0">
                        <h3 className='mb-4 font-inter font-semibold text-start text-[20px] md:text-[28px]'>Explore Related Products</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {relatedProducts.map((item)=> (
                        <ProductCard
                         key={item.title}
                          cardData={item}
                         />
                    ))}
                </div>
                    </div>
                </div> 
        </section>
    )
}

export default MicroScopeGrid;
