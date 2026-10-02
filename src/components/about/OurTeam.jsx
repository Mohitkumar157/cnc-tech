import React from 'react'
import TeamMemberCard from '../ui/TeamMemberCard';
import SectionEyebrow from '../ui/SectionEyebrow';
import SecondHeading from '../ui/SecondHeading';


const cardsData = [
    {
        title: "Noah Walker",
        subtitle: "Strategy Consultant",
        src: "/Team-image-1.webp"
    },
    {
        title: "Aarav Sharma",
        subtitle: "Senior Developer",
        src: "/Team-image-2.webp"
    },
    {
        title: "Priya Mehta",
        subtitle: "UI/UX Designer",
        src: "/Team-image-3.webp"
    }
];

function OurTeam() {
    return (
        <section className='py-8 md:py-12 lg:py-16 bg-[#011D40] text-white'>
            <SectionEyebrow label={"Our team"} />
            <SecondHeading children={"Meet our team members"} className={"mb-6 text-white"}/>
            <div className='container px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    cardsData.map((card, i) => (
                        <TeamMemberCard key={i} card={card} />
                    ))
                }
            </div>
        </section>
    )
}




export default OurTeam
