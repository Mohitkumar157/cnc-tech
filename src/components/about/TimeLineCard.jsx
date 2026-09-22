import React from 'react'

function TimeLineCard({description , title , year}) {
  return (
    <article className='min-h-50 h-full md:h-auto relative z-10 flex flex-col justify-center md:justify-start items-center gap-1 border border-[#087ED5]/25 rounded-md overflow-hidden p-4 lg:p-0 lg:border-0 shadow-[0_8px_25px_rgba(7,120,219,0.15)] lg:shadow-none'>
        <div className='w-5 h-5 rounded-full bg-[#0778db]'></div>
         <h3 className='text-[#0778db] font-semibold font-montserrat text-[20px]'>{year}</h3>
          <h4 className='font-inter font-semibold text-black leading-5 text-center'>{title}</h4>
          <p className='text-center font-inter leading-5 text-slate-600 text-[14px] md:text-[16px]'>
            {description}
          </p>
    </article>
  )
}

export default TimeLineCard
