import Image from 'next/image'
import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'
import { Settings  ,UsersRound , ShieldCheck , Van } from 'lucide-react';
const items = [
    {
      id: 1,
      icon: <Settings  className='w-8 h-8 md:w-12 md:h-12 text-[#0778db]'/>, // or "gear", "cog"
      title: "Advanced Machinery",
      description: "State-of-the-art CNC turning, VMC and machining centers for complex components."
    },
    {
      id: 2,
      icon: <UsersRound  className='w-8 h-8 md:w-12 md:h-12 text-[#0778db]'/>, // or "users", "people"
      title: "Skilled Engineering Team",
      description: "Experienced professionals delivering innovative solutions."
    },
    {
      id: 3,
      icon: <ShieldCheck  className='w-8 h-8 md:w-12 md:h-12 text-[#0778db]'/>, // or "check", "verified"
      title: "Strict Quality Control",
      description: "Comprehensive inspection and quality assurance at every stage."
    },
    {
      id: 4,
      icon: <Van  className='w-8 h-8 md:w-12 md:h-12 text-[#0778db]'/>, // or "truck", "logistics"
      title: "On-Time Delivery",
      description: "Streamlined processes to ensure timely and reliable delivery."
    }
  ]

function MenuFacturing() {
    return (
        <section className='py-8 md:py-12 lg:py-16'>
            <div className="container px-4 xl:px-0">
                <div className="grid grid-cols-12 gap-4">
                    <div className='col-span-12 lg:col-span-6 relative aspect-3/2 md:aspect-650/565 rounded-md overflow-hidden'>
                        <Image
                            src={"/about/about-us-image.jfif"}
                            width={600}
                            height={477}
                            className='w-full h-full object-cover md:object-center object-top'
                            alt='tech-image'
                        />
                    </div>

                    <div className='col-span-12 lg:col-span-6'>
                        <SectionEyebrow label={"MANUFACTURING EXCELLENCE"} align={"left"} className={"text-[#0778db]"}/>
                        <SecondHeading 
                        children={"From Capabilities to Real Results"} 
                        align={"left"}
                       
                        />
                        <p className='my-1 font-inter leading-6 text-black text-[14px] md:text-[16px]'>
                            Our advanced infrastructure and skilled team enable us to
                            deliver high-precision components with consistency and efficiency.
                        </p>

                        <div className='flex flex-col gap-2'>
                            {
                                items.map((itm)=>(
                                    <div key={itm.id} className='min-h-26 lg:min-h-22.5 h-full flex bg-white rounded-md overflow-hidden py-2 lg:py-1 px-4 items-center gap-4'>
                                          <div className='icon'>
                                            {itm.icon}
                                          </div>

                                          <div>
                                            <h3 className='text-[18px] font-semibold font-inter tracking-[1.1]'>{itm.title}</h3>
                                            <p className='font-inter leading-5 text-[14px] md:text-[16px]'>{itm.description}</p>
                                          </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MenuFacturing
