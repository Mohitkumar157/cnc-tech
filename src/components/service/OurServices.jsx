import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'
import ServiceCard from './ServiceCard'
import { Cog, Box, CircleStar, Settings, MonitorCloud, InspectionPanel } from 'lucide-react';
const services = [
  {
    title: "CNC Turning",
    description:
      "High precision turned components with tight tolerances.",
    linkText: "Learn More",
    link: "#",
    icon: <Cog className='w-12 h-12 text-[#0778db]' strokeWidth={1.4} />
  },
  {
    title: "VMC Machining",
    description:
      "Complex parts with high accuracy using VMC machines.",
    linkText: "Learn More",
    link: "#",
    icon: <Box className='w-12 h-12 text-[#0778db]' strokeWidth={1.4} />
  },
  {
    title: "Mold & Die Manufacturing",
    description:
      "Precision molds and dies for plastic & metal forming.",
    linkText: "Learn More",
    link: "#",
    icon: <CircleStar className='w-12 h-12 text-[#0778db]' strokeWidth={1.4} />
  },
  {
    title: "Precision Components",
    description:
      "High-quality precision components for critical applications.",
    linkText: "Learn More",
    link: "#",
    icon: <Settings className='w-12 h-12 text-[#0778db]' strokeWidth={1.4} />
  },
  {
    title: "Sheet Metal Fabrication",
    description:
      "Custom sheet metal parts with superior finishing.",
    linkText: "Learn More",
    link: "#",
    icon: <InspectionPanel className='w-12 h-12 text-[#0778db]' strokeWidth={1.4} />
  },
  {
    title: "CAD / CAM Design",
    description:
      "Designing & simulation for better productivity & accuracy.",
    linkText: "Learn More",
    link: "#",
    icon: <MonitorCloud className='w-12 h-12 text-[#0778db]' strokeWidth={1.4} />
  }
];

function OurServices() {
  return (
    <section className='py-8 md:py-12 lg:py-16'>
      <div className="container px-4 md:px-0">
        <SectionEyebrow label={"Our Services"} className={"text-[#0778db]"}/>
        <SecondHeading children={"What We Offer"} />
        <p className='text-center mt-2 font-inter'>
          Explore our range of CNC machining and
          manufacturing services designed for precision,
          quality, and reliability
        </p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-6'>
          {services.map((service, i) => (
            <ServiceCard key={i} data={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices
