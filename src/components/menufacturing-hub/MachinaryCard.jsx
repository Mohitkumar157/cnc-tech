import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MachinaryCard({card}) {
   
  return (
    <article className='bg-white rounded-xl overflow-hidden'>
            <div className='blog-card overflow-hidden group'>
                <div className={`top relative overflow-hidden aspect-4/3`}>
                    <Image
                        src={card.src}
                        alt= {card.title}
                        fill
                        loading='lazy'
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className='object-cover group-hover:scale-110 transition-all duration-500'
                    />
                    <div className='absolute h-10 w-[200%] bg-[#f1f1f1] top-[50%] opacity-0 -rotate-45 right-[200%] group-hover:right-[-200%] group-hover:opacity-50 transition-all duration-900'></div>
                </div>

                <div className="bottom p-4 pb-8">

                    <span className='font-inter'>{card.category}</span>

                    <h3 className='text-[16px] font-inter md:text-[18px] my-1 font-semibold'>
                        {card?.title}
                    </h3>

                    <div>
                        <ul>
                            {
                                card.features?.map((listItem , i)=>(
                                    <li key={i} className='flex items-center gap-2 font-inter text-gray-700'>
                                        <span className='bg-gray-700 w-2 h-2 rounded-full inline-block'></span>
                                        {listItem}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <Link
                        href={"#"}
                        className='mt-2 hover:border-b hover:border-blue-500 w-fit flex items-center gap-4 text-blue-600 group'
                    >
                        View Details
                        <MoveRight className='group-hover:translate-x-1 transition-all duration-300'/>
                    </Link>

                    
                </div>
            </div>
        </article>
  )
}

export default MachinaryCard
