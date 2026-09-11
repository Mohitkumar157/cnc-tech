import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'
import servicesData from '@/data/servicesData'
import ServiceCard from './ServiceCard'
function OurServices() {
    return (
        <section className='py-8 md:py-12 lg:py-16 bg-[linear-gradient(180deg,#F9FAFB_0%,#F4F7FA_55%,#F3F5F9_100%)]'>
            <div className="container px-4 xl:px-0">
                <SectionEyebrow label={"Our services"} className={"text-[#0778db] "} />
                <SecondHeading children={"End to End Manufacturing Solutions"} className={"my-2"}/>
                <p className='text-center font-inter'>
                    We offer a wide range of CNC machining
                    and manufacturing services to meet the diverse
                    needs of industries.
                </p>

                <div className='mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                     {servicesData.map((serviceItem)=>(
                        <ServiceCard key={serviceItem.title} {...serviceItem}/>
                     ))}
                </div>
            </div>
        </section>
    )
}

export default OurServices
