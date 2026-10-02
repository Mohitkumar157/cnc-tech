import AboutHero from '@/components/about/AboutHero'
import MenuFacturing from '@/components/about/MenuFacturing'
import MissionAndVision from '@/components/about/MissionAndVision'
import OurJourney from '@/components/about/OurJourney'
import OurTeam from '@/components/about/OurTeam'
import OurValues from '@/components/about/OurValues'
import AboutUs from '@/components/home/AboutUs'

import React from 'react'

function page() {
  return (
    <section className=''>
      <AboutHero />
      <AboutUs />
      <OurTeam />
     {/* <MissionAndVision />
     <OurJourney /> */}
     <OurValues />
     <MenuFacturing />
    </section>
  )
}

export default page
