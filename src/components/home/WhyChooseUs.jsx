import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'
import whyChooseUsData from '@/data/whyChooseUsData'
import Image from 'next/image'
function WhyChooseUs() {
    return (
        <section className='bg-[#011D40] py-8 md:py-12 lg:py-16'>
            <div className="container px-4 xl:px-0">
                <div className='overflow-hidden'>
                    <div className="heading" data-animate = "fade-up">
                    <SectionEyebrow label={"WHY CHOOSE US"} className={"text-white"} />
                    <SecondHeading children={"Precision You Can Trust"} className={"text-white"} />
                </div>
                </div>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {whyChooseUsData.map((item , i) => (
                        <article data-animate ="child-scale-in" key={i} className='px-3 py-5 border border-[#087ED5]/75 rounded-md flex flex-col gap-2 justify-center items-center'>
                            <div className="flex items-center justify-center size-16 rounded-full bg-blue-600/20">
                                <Image
                                    src={item.icon}
                                    alt={item.alt || item.title}
                                    width={40}
                                    height={40}
                                    aria-hidden="true"
                                />
                            </div>

                            <h3 className=" text-base font-semibold text-white">
                                {item.title}
                            </h3>

                            <p className="text-[14px] font-inter leading-5 text-white text-center">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
