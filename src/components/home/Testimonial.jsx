import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import TestimonialSlider from './TestimonialSlider'
import ProjectCTA from './ProjectCTA'

function Testimonial() {
  return (
    <section className='bg-[linear-gradient(180deg,#F9FAFB_0%,#F4F7FA_55%,#F3F5F9_100%)] py-8 md:py-12 lg:py-16'>
        <div className="container px-4 xl:px-0">
           <div className='overflow-hidden'>
            <div data-animate = "fade-up">
               <SectionEyebrow 
               label={"What our clients say"} 
               align={"left"} 
               className={"text-[#0778db]"}
               />
            </div>
           </div>
            <div
             className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TestimonialSlider />
                <ProjectCTA />
            </div>
        </div>
    </section>
  )
}

export default Testimonial
