import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'
import { Check, MoveRight } from "lucide-react";
import PrimaryButton from '../ui/PrimaryButton';
import Image from 'next/image';
const features = [
    "ISO Certified Company",
    "Advanced Machinery & Technology",
    "Skilled & Experienced Team",
    "On-time Delivery & Quality Assurance",
]

function AboutUs() {
    return (
        <section className='pb-8 md:pb-12 lg:pb-16'>
            <div className="container px-4 xl:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className=''>
                        <div>
                            <SectionEyebrow label={"About cnc tech"} align={"left"} className={"text-black ml-0.5"} />
                            <SecondHeading align={"left"}>
                                Delivering Precision. <br /> <span className='text-[#0778db]'>Bulding Trust.</span>
                            </SecondHeading>
                        </div>
                        <p className='font-inter my-4'>
                            Established in 2008, CNC Tech is a leading manufacturer
                            of <br /> precision turned parts, machined components,
                            molds, dies and <br /> industrial solutions. We combine
                            advanced technology, skilled <br /> engineers
                            and strict quality standards to deliver products
                            that <br />exceed expectations.
                        </p>

                        <div>
                            <ul className='mb-4 flex flex-col gap-1 font-inter'>
                                {
                                    features.map((item, i) => (
                                        <li key={i} className='flex items-center gap-4'>
                                            <Check className='text-white w-6 h-6 bg-[#0778db] p-1 rounded-full' />
                                            {item}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <PrimaryButton btnText={"Know More About Us"} varient={"primary"} />
                        </div>
                    </div>
                    <div className='relative rounded-xl h-fit flex justify-center flex-col'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className='rounded-xl overflow-hidden col-span-2 aspect-[3/1.2] relative'>
                                <Image
                                    src={"/home/cnc-factory-floor.webp"}
                                    alt='cnc-factory-floor'
                                    fill
                                    sizes='(max-width : 1440px) 40vw 100vw 100vw'
                                    className='w-full h-auto object-cover'
                                />
                            </div>
                            <div className='relative aspect-[3/1.8] rounded-xl overflow-hidden'>
                                <Image
                                    fill
                                    src={"/home/cnc-machining-process.webp"}
                                    alt='cnc-machining-process'
                                    sizes='(max-width : 1440px) 20vw 50vw 50vw'
                                    className='w-full h-auto object-cover'
                                />
                            </div>
                            <div className='relative aspect-[3/1.8] rounded-xl overflow-hidden'>
                                <Image
                                    fill
                                    src={"/home/cnc-precision-components.webp"}
                                    alt='cnc-machining-process'
                                    sizes='(max-width : 1440px) 20vw 50vw 50vw'
                                    className='w-full h-auto object-cover'
                                />
                            </div>
                        </div>
                          {/* 15 years of experance label */}
                        <div className='bg-linear-to-r from-[#003DA8] to-[#0878F9] absolute px-7 py-3 -left-4 top-1/2 -translate-y-1/2 z-30 bg-blue-500 rounded-xl text-white'>
                            <h3 className='text-[36px] font-semibold font-montserrat'>15+</h3>
                            <p className='font-inter leading-5 text-[14px]'>Years of <br />Excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
