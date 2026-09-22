import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'
import TimeLineCard from './TimeLineCard';
const timelineData = [
  {
    year: "2008",
    title: "Founded",
    description:
      "CNC Tech was established with a vision for precision manufacturing."
  },
  {
    year: "2012",
    title: "Capacity Expansion",
    description:
      "Expanded facilities and production capabilities to serve growing demand."
  },
  {
    year: "2017",
    title: "Advanced CNC Technology",
    description:
      "Invested in next-generation CNC machines for higher accuracy and complex components."
  },
  {
    year: "2021",
    title: "ISO Certification",
    description:
      "Achieved ISO certification, strengthening our commitment to quality."
  },
  {
    year: "2024",
    title: "2500+ Projects",
    description:
      "Successfully delivered over 2500 projects across diverse industries."
  }
];
function OurJourney() {
  return (
    <section className='py-8 md:py-12 lg:py-16 bg-white'>
        <div className="container px-4 xl:px-0">
             <SectionEyebrow label={"Our Journey"} className={"text-[#0778db]"}/>
             <SecondHeading children={"Milestones that define us"}/>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
                {timelineData.map((data)=>(
                    <TimeLineCard {...data} key={data.year}/>
                ))}
               <div className='hidden lg:block absolute z-0 left-[9.33%] right-[9.33%] top-2 border-t-2 border-dotted border-[#0878F9]/70'/> 
            </div>
        </div>
    </section>
  )
}

export default OurJourney
