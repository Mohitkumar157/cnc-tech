import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'
import MachinaryCard from './MachinaryCard';
const services = [
  {
    title: "CNC Milling & Turning",
    category: "Tech",
    src: "/menufacturing-hub/CodeGeneratedImage2.webp",
    features: [
      "Dynamic multi-drilling",
      "Multi-axis metal drilling",
    ],
    linkText: "View Machines →",
  },
  {
    title: "Custom Mold & Tooling",
    category: "Tech",
    src: "/menufacturing-hub/CodeGeneratedImage1.webp",
    features: [
      "Massive machined",
      "Tool and die production",
    ],
    linkText: "View Machines →",
  },
  {
    title: "Sheet Metal & Assembly",
    category: "Tech",
    src: "/menufacturing-hub/CodeGeneratedImage.webp",
    features: [
      "Sheet Metal & Bending",
      "Sheet metal & bending",
    ],
    linkText: "View Machines →",
  },
];

function MachineryTechnologies() {
    return (
        <section className='py-8 md:py-12 lg:py-16 bg-[#f2f3f7]'>
            <div className="container px-4 lg:px-0">

                {/* section header */}
                <div className="header">
                    <SectionEyebrow
                        label={"ADVANCED TECHNOLOGY"}
                        className={"text-[#0778db]"}
                    />

                    <SecondHeading children={"Machinery & Technologies"} />
                    <p className='font-inter text-center mt-1'>
                        Explore our state-of-the-art manufacturing
                        center and advanced production assets.
                    </p>
                </div>

                {/* menufacturing cards */}

                <div className='mt-6 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 md:gap-8'>
                   {services.map((service , i)=>(
                    <MachinaryCard 
                    card={service}
                    key = {i}
                    />
                   ))}
                </div>
            </div>
        </section>
    )
}

export default MachineryTechnologies
