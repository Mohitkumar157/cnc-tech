import React from 'react'

function MissionAndVisionCard({icon , title , description , index}) {
  return (
    <article className={`flex flex-col md:flex-row items-center md:items-start gap-4 bg-white p-4 md:py-4 md:px-6 lg:py-6 lg:px-8 rounded-md overflow-hidden ${index === 2 ? "md:col-span-2" : ""}`}>
        <div className="icon">
         {icon}
        </div>
        <div className='text-center md:text-start'>
            <h3 className='text-[16px] md:text-[18px] text-[#0778db] font-semibold'>{title}</h3>
            <p className='font-inter leading-5 text-slate-600 text-[14px] md:text-[16px]'>{description}</p>
        </div>
    </article>
  )
}

export default MissionAndVisionCard
