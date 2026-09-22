import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'
import { Target, Eye , Handshake } from 'lucide-react';
import MissionAndVisionCard from './MissionAndVisionCard';


const missionAndVisionData = [
    {
        id: 1,
        icon: <Target strokeWidth='1px' className='h-14 w-14 md:w-16 md:h-26 lg:w-20 lg:h-20 text-[#0778db]' />,
        title: "OUR MISSION",
        description:
            "To deliver high-quality precision manufacturing solutions through innovation, skilled people and a commitment to customer success.",
    },
    {
        id: 2,
        icon: <Eye strokeWidth='1px' className='h-14 w-14 md:w-16 md:h-26 lg:w-20 lg:h-20 text-[#0778db]' />,
        title: "OUR VISION",
        description:
            "To be a globally recognized manufacturing partner known for engineering excellence, reliability and long-term customer relationships.",
    },
    {
        id: 3,
        title: "OUR PROMISE",
        icon: <Handshake strokeWidth='1px' className='h-14 w-14 md:w-16 md:h-26 lg:w-20 lg:h-20 text-[#0778db]' />,
        description:
            "We promise to deliver precision, quality and value in every project, and to always be a reliable partner in your growth journey."
    }
];
function MissionAndVision() {
    return (
        <section className='py-8 md:py-12 lg:py-16'>
            <div className="container px-4 xl:px-0 ">
                <SectionEyebrow label={"Our mission and Vision"} className={"text-[#0778db]"} />
                <SecondHeading children={"Driven by clear purpose"} />

                <div className="my-4 mission-And-vision grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        missionAndVisionData.map((data , i) => (
                            <MissionAndVisionCard {...data} key={data.id} index = {i}/>
                        ))
                    }
                </div> 
            </div>
        </section>
    )
}

export default MissionAndVision
