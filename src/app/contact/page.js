import ContactForm from '@/components/contact-us/ContactForm';
import GetInTouch from '@/components/contact-us/GetInTouch';
import React from 'react'

function page() {
  return (
    <section className='py-8 md:py-12 lg:py-12 mt-25'>
      <div className='container px-4 xl:px-0'>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
         <GetInTouch />
         <ContactForm />
       </div>
      </div>
    </section>
  )
}

export default page;
