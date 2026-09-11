import React from 'react'
import { logosData } from '@/data/logos'
import Marque from '../ui/Marque'
import SecondHeading from '../ui/SecondHeading'


function TrustedBy() {
  return (
    <section className='py-8 md:py-12 lg:py-16'>
        <SecondHeading children={"Trusted by leading Companies"} className={"mb-4 md:mb-8"}/>
        <Marque logosData={logosData}/>
    </section>
  )
}

export default TrustedBy
