import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'
import { Phone, Mail, MapPin } from "lucide-react";
import ContactInfoCard from './ContactInfoCard';

const contactDetails = [
  {
    id: 1,
    title: "Phone",
    Icon: Phone,
    details: [
      "+91-99944-66384",
      "+91-98765-43210",
      "Mon - Sat, 9:00 AM - 6:00 PM",
    ],
  },
  {
    id: 2,
    title: "Email",
    Icon: Mail,
    details: [
      "info@cnctech.in",
      "sales@cnctech.in",
      "We'll respond within 24 hours",
    ],
  },
  {
    id: 3,
    title: "Our Location",
    Icon: MapPin,
    details: [
      "Plot No. 32, Industrial Area,",
      "Phase 2, Mohali, Punjab – 160055",
      "India",
    ],
  },
];
function GetInTouch() {
  return (
    <section>
      <div className="heading">
        <div className='flex items-center gap-4'>
          <div className='max-w-10 w-full h-0.5 rounded-full bg-[#0778db]'></div>
          <SectionEyebrow label={"Get in Touch"} className={"text-[#0778db]"} />
        </div>
        <SecondHeading align={"left"}>
          We’re Here to <br className='hidden md:block' />
          <span className='text-[#0778db]'>Help You</span>
        </SecondHeading>
        <p className='my-4 font-inter leading-7 text-black'>
          Have a question, need a quote, or want to
          discuss <br /> your manufacturing requirements?
          Our team is ready
          to assist you. <br /> Reach out to us through
          the form, call us, or visit our facility.
        </p>
        <div className='flex flex-col gap-4 pt-4'>
          {contactDetails.map((contact) => (
            <ContactInfoCard
              Icon={contact.Icon}
              title={contact.title}
              details={contact.details}
              key={contact.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
