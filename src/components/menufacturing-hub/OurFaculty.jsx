import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'
import { Check } from 'lucide-react';
import Image from 'next/image';
import PrimaryButton from '../ui/PrimaryButton';
const features = [
    {
        id: 1,
        title: "High-speed multi-axis CNC Milling",
    },
    {
        id: 2,
        title: "Tough metals & alloy fabrication",
    },
    {
        id: 3,
        title: "High-volume scalability",
    },
    {
        id: 4,
        title: "Strict material trace & testing",
    },
];
function OurFaculty() {
    return (
        <section className='py-8 md:py-12 lg:py-16'>
            <div className="container px-4 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* related content */}
                    <div className=''>
                        <SectionEyebrow
                            label={"OUR FACILITY"}
                            align={"left"}
                            className={"text-[#0778db]"}
                        />
                        <SecondHeading
                            children={"Where Precision Meets Scale"}
                            align={"left"}
                        />
                        <p className='font-inter my-2 leading-7'>
                            Powered by advanced CNC technology and high-volume production capabilities,
                            we transform your designs into precision-engineered metal components with
                            exceptional accuracy, consistent quality, and faster turnaround times.
                        </p>
                        <div>
                            <ul className='flex flex-col gap-2 font-inter'>
                                {
                                    features.map((feature) => (
                                        <li key={feature.id} className='flex items-center gap-4 '>

                                            <div className='p-1 bg-blue-600 rounded-md overflow-hidden'>
                                                <Check
                                                    width={15}
                                                    height={15}
                                                    className='text-white'
                                                />
                                            </div>
                                            {feature.title}

                                        </li>
                                    ))
                                }
                            </ul>
                            <PrimaryButton
                                btnText={"View Our Services"}
                                varient={"primary"}
                                className={"mt-5!"}
                                href={"/services"}
                            />
                        </div>
                    </div>

                    {/* right side images */}
                    <div>
                        <div className="grid grid-cols-1 gap-2 md:gap-4">
                            <div className='aspect-4/3 md:aspect-4/1.5 relative rounded-lg overflow-hidden'>
                                <Image
                                    src={"/menufacturing-hub/manufacturing-hub-hero-image.webp"}
                                    fill
                                    alt='menufacturing hub'
                                    className='object-cover'
                                />
                            </div>
                            <div className='grid grid-cols-2 gap-2 md:gap-4'>
                                <div className='aspect-4/3 md:aspect-4/2 relative rounded-lg overflow-hidden'>
                                    <Image
                                        src={"/menufacturing-hub/buldo.webp"}
                                        fill
                                        alt='menufacturing hub'
                                        className='object-cover'
                                    />
                                </div>
                                <div className='aspect-4/3 md:aspect-4/2 relative rounded-lg overflow-hidden'>
                                    <Image
                                        src={"/menufacturing-hub/men-with-machne.webp"}
                                        fill
                                        alt='menufacturing hub'
                                        className='object-cover object-top'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurFaculty
