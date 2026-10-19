import Reveal from '@/animations/Reveal'
import AboutHero from '@/components/about/AboutHero'
import MenuFacturing from '@/components/about/MenuFacturing'
import OurValues from '@/components/about/OurValues'
import AboutUs from '@/components/home/AboutUs'
import Video from '@/components/menufacturing-hub/Video'

import React from 'react'

function page() {
  return (
    <section className=''>
      <AboutHero />
      <Reveal>
        <AboutUs />
      </Reveal>
     <Reveal>
      <OurValues />
     </Reveal>
     <Video />
     <Reveal>
      <MenuFacturing />
     </Reveal>
    </section>
  )
}

export default page
