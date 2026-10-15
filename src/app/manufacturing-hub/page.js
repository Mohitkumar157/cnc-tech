import MachineryTechnologies from '@/components/menufacturing-hub/MachineryTechnologies'
import MenufacturingHero from '@/components/menufacturing-hub/MenufacturingHero'
import OurFaculty from '@/components/menufacturing-hub/OurFaculty'
import QualityAssourance from '@/components/menufacturing-hub/QualityAssourance'
import Video from '@/components/menufacturing-hub/Video'
import QuoteRequestSection from '@/components/products/QuoteRequestSection'
import React from 'react'

function page() {
  return (
    <section>
       <MenufacturingHero /> 
       <OurFaculty />
       <MachineryTechnologies />
       <QualityAssourance />
       <Video />
       <QuoteRequestSection />
    </section>
  )
}

export default page
