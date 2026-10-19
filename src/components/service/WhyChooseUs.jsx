import Image from 'next/image'
import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'
import { Check } from 'lucide-react';
import Link from 'next/link';
import PrimaryButton from '../ui/PrimaryButton';
const features = [
    "Advanced CNC machines & technology",
    "Skilled and experienced team",
    "Timely delivery",
    "Competitive pricing",
    "Strict quality control",
    "Customized manufacturing solutions",
];
function WhyChooseUs() {
    return (
        <section className='pb-8 md:pb-12 lg:pb-16'>
            <div className="container px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    <div className='aspect-4/2.5 relative rounded-lg overflow-hidden'>
                        <Image
                            src={"/ourServices/service-image.webp"}
                            alt='our services'
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className='w-full object-cover object-center'
                        />
                    </div>
                    <div>
                        <SectionEyebrow
                            label={"WHY CHOOSE US"}
                            align={"left"}
                            className={"text-[#0778db]"}
                        />
                        <SecondHeading
                            children={"Precision Quality Reliability"}
                            align={"left"}
                        />
                        <p className='mt-2 font-inter leading-6 text-black text-[16px]'>
                            We are committed to delivering top-notch
                            manufacturing solutions with unmatched accuracy
                            and on-time delivery.
                        </p>

                        <div className='flex flex-col gap-2 my-4'>
                            {
                                features.map((feature, i) => (
                                    <div key={i} className='flex items-center gap-4 '>
                                        <div className='p-1 bg-[#0778db] rounded-md overflow-hidden'>
                                            <Check
                                                width={15}
                                                height={15}
                                                className='text-white'
                                            />
                                        </div>
                                        <p className='font-inter'>{feature}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <PrimaryButton
                            btnText={"Learn More About Us"}
                            varient="primary"
                            href={"/about-us"}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
