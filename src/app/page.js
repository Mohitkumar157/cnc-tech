import AboutUs from '@/components/home/AboutUs'
import Hero from '@/components/home/Hero'
import MachineSlider from '@/components/home/MachineSlider'
import OurProcess from '@/components/home/OurProcess'
import OurProducts from '@/components/home/OurProducts'
import OurServices from '@/components/home/OurServices'
import Testimonial from '@/components/home/Testimonial'
import TrustedBy from '@/components/home/TrustedBy'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Reveal from '@/animations/Reveal'
import React from 'react'

function page() {
  return (
    <main>
      <Reveal>
        <Hero />
      </Reveal>
      <TrustedBy />
      <Reveal>
        <AboutUs />
      </Reveal>
      <Reveal>
        <OurServices />
      </Reveal>
      <OurProducts />
      <WhyChooseUs />
      <OurProcess />
      <MachineSlider />
      <Testimonial />
    </main>
  )
}

export default page
