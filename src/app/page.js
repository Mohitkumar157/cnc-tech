import AboutUs from '@/components/home/AboutUs'
import Hero from '@/components/home/Hero'
import MachineSlider from '@/components/home/MachineSlider'
import OurProcess from '@/components/home/OurProcess'
import OurProducts from '@/components/home/OurProducts'
import OurServices from '@/components/home/OurServices'
import Testimonial from '@/components/home/Testimonial'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Reveal from '@/animations/Reveal'
import React from 'react'

function page() {
  return (
    <main>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <AboutUs />
      </Reveal>
      <Reveal>
         <OurServices />
      </Reveal>
      <Reveal>
        <OurProducts />
      </Reveal>
      <Reveal>
        <WhyChooseUs />
      </Reveal>
      <Reveal>
        <OurProcess />
      </Reveal>
      <Reveal>
        <MachineSlider />
      </Reveal>
     <Reveal>
       <Testimonial />
     </Reveal>
    </main>
  )
}

export default page
