import Link from 'next/link'
import React from 'react'

function ServiceCard({data}) {
  return (
    <article>
        <div className='shadow-[0_4px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 flex items-start gap-7 border border-[#DCE8F8] rounded-lg overflow-hidden p-7 h-full'>
            <div className="icon bg-[#EAF4FF] p-4 rounded-2xl">{data.icon}</div>
             <div className="realtedContent">
                <h3 className='font-inter font-semibold text-black leading-5 md:text-[18px]'>{data.title}</h3>
                 <p className='my-2 font-inter text-gray-700'>{data.description}</p>
                 <Link className='text-blue-600' href={"#"}>Learn more</Link>
             </div>
        </div>
    </article>
  )
}

export default ServiceCard
