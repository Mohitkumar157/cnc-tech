import OurServices from '@/components/service/OurServices'
import ReadyToStart from '@/components/service/ReadyToStart'
import ServiceHero from '@/components/service/ServiceHero'
import WhyChooseUs from '@/components/service/WhyChooseUs'
import React from 'react'

function page() {
  return (
    <section>
      <ServiceHero />
      <OurServices />
      <WhyChooseUs />
      <ReadyToStart />
    </section>
  )
}

export default page
