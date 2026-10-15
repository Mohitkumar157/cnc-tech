import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'
import Image from 'next/image'
import { Check } from 'lucide-react'

function QualityAssourance() {
    return (
        <section className='py-8 md:py-12 lg:py-16'>
            <div className="container px-4 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left */}
                    <div>
                        <SectionEyebrow
                            label={"QUALITY FIRST, AT EVERY MICRO-INCH"}
                            className={"text-[#0778db]"}
                            align={"left"}
                        />
                        <SecondHeading
                            children={"Quality Assurance & Metrology"}
                            align={"left"}
                        />
                        <p className='font-inter mt-1'>
                            Rigorous incoming checks to deoclate
                            multi-axis inspections and o/automotive component.
                        </p>
                        <span className='font-inter'>
                            <strong>Multi-axis inspection –</strong>
                        </span>

                        <div className='w-fit'>
                            <Image
                                src={"/logos/Iso.png"}
                                width={150}
                                height={150}
                                alt='ISO logo'
                                className='object-cover max-w-37.5 h-auto'
                            />
                        </div>
                    </div>

                    {/* Right */}
                    <div>
                        <div className='relative aspect-4/2 rounded-lg overflow-hidden'>
                            <Image
                                src={"/menufacturing-hub/quality-asourance.png"}
                                fill
                                alt='Quality Assurance'
                                className='object-cover'
                            />
                        </div>
                        <p className='font-inter leading-6 mt-3 text-[18px]'>
                            Coordinate Measuring Machine (CMM)
                            and quality test scanner inspects finished
                            aerospace/automotive com.
                        </p>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QualityAssourance
