import Image from 'next/image'
import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'
import { Check } from 'lucide-react'
import PrimaryButton from '../ui/PrimaryButton'
import Breadcrumb from '../ui/BreadCrumb'
import productsData from '@/data/ProductsData';
import ProductCard from './ProductCard'
function ProductDetail({ data }) {
 const relatedProducts = productsData
  .filter((item) => item.slug !== data.slug)
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);
    return (
        <section className='pt-25'>
            <div className="container px-4 lg:px-0 py-8 md:py-12 lg:py-16">
                <Breadcrumb productTitle={data.title}/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* product image */}
                    <div className='group relative aspect-[4/2.3] overflow-hidden rounded-lg'>
                        <Image
                            src={data?.image}
                            fill
                            alt='loading'
                            loading='lazy'
                            sizes="(max-width: 767px) 100vw, 50vw"
                            className='object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                    </div>

                    {/* product discribtion */}
                    <div>
                        <SectionEyebrow
                            label={"Presion machine"}
                            align={"left"}
                            className={"text-[#0778db]"}
                        />

                        <div>
                            <SecondHeading
                                children={data?.title}
                                align={"left"}
                            />
                        </div>

                        <div>
                            <p className='my-4 font-inter leading-7 text-black'>
                                {data.description}
                            </p>
                        </div>

                        <div className='key-highlights'>
                            <ul className='flex flex-col gap-2 font-inter'>
                                {data?.highlights && data.highlights.map((highlight) => (
                                    <li key={highlight} className='flex items-center gap-4 '>

                                        <div className='p-1 bg-blue-600 rounded-md overflow-hidden'>
                                            <Check
                                                width={15}
                                                height={15}
                                                className='text-white'
                                            />
                                        </div>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='btn-wraper w-fit flex flex-col md:flex-row md:items-center gap-4 mt-4'>
                            <div>
                                <PrimaryButton 
                                varient={"primary"}
                                btnText={"Request a Quote"}
                                href={"/contact"}
                                />
                            </div>

                            <div>
                                <PrimaryButton 
                                varient={"secondry"}
                                btnText={"Back to Products"}
                                href={"/products"}
                                className={"text-gray-600! border! border-blue-300! w-full! md:w-auto!"}
                                />
                            </div>
                        </div>
                    </div>
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

export default ProductDetail
