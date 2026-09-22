import MenuFacturing from '@/components/about/MenuFacturing'
import MissionAndVision from '@/components/about/MissionAndVision'
import OurJourney from '@/components/about/OurJourney'
import AboutUs from '@/components/home/AboutUs'
import React from 'react'

function page() {
  return (
    <section className=' mt-16 md:mt-20 lg:mt-25 bg-[#078CFF]/12'>
      <AboutUs />
     <MissionAndVision />
     <OurJourney />
     <MenuFacturing />
    </section>
  )
}

export default page
