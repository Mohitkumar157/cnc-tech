import Image from 'next/image'
import React from 'react'

function TeamMemberCard({ card }) {
    return (
        <div data-animate="scale-in" className='group relative rounded-2xl overflow-hidden img-wraper aspect-[1/1.2] flex justify-center items-end'>
            <Image
                src={card?.src}
                alt={card.title}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className='object-cover object-center group-hover:scale-[1.1] transition-all duration-500'
            />
            <div className='absolute w-full flex justify-center p-8'>
                <div className='w-full flex justify-center items-center gap-9 bg-blue-950 py-4 px-8 group-hover:bg-white group-hover:text-black transition-all duration-500 rounded-xl'>
                    <div className='text-white  w-full group-hover:text-(--paragraph-primary) transition-all duration-500'>
                        <h3 className='font-montserrat font-semibold'>{card.title}</h3>
                        <h4 className='whitespace-nowrap'>{card.subtitle}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberCard;