import Image from 'next/image'
import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import PrimaryButton from '../ui/PrimaryButton'

function AboutHero() {
  return (
    <section className="w-full pt-25 bg-[#011D40]">
      <div
        className="relative flex items-center justify-start w-full h-[60vh] md:h-[70vh] lg:h-[50vw] overflow-hidden">
        {/* Hero Image */}
        <Image
          src="/about/aboutHero.webp"
          width={2120}
          height={742}
          priority
          alt="CNC Tech engineering team"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-[65%_center]
            sm:object-[70%_center]
            lg:object-right
          "
        />

        {/* Left Dark Gradient */}
        <div
          className="
            absolute inset-0
            bg-linear-to-r
            from-[#061A2D]
            via-[#061A2D]/90
            via-45%
            to-transparent
          "
        />

        {/* Hero Content */}
        <div
          className="
            container px-4 md:px-0
            relative z-10
            flex h-full items-center
            py-16
          "
        >
          <div className="">

            {/* Small Label */}
            <SectionEyebrow label={"About CNC Tech"} align={"left"} className={"text-white"} />

            {/* Heading */}
            <h1 className='uppercase text-[36px] md:text-[40px] lg:text-[70px] text-white font-inter leading-9 md:leading-9 lg:leading-16 tracking-[0.1px] font-extrabold'>
              Building a  <br className='hidden md:block' />
              <span className="text-[#078CFF]">
               Legacy Precision <br className='hidden md:block'/> & Innovation
              </span>
            </h1>

            {/* Description */}
            <p className="w-[80vw] sm:w-[80vw] md:w-full text-white my-4 font-inter tracking-[1.1px] text-[14px] md:text-[16px]">
              We combine advanced CNC technology, precision engineering,<br />
              and industry expertise to deliver reliable manufacturing <br />
              solutions that help businesses build better.
            </p>

            {/* Buttons animation */}
            <div className='overflow-hidden'>
              <div
                data-hero-reveal
                className="flex items-center gap-5"
              >
                <PrimaryButton
                  btnText="Get a Free Quote"
                  varient="primary"
                />

                <PrimaryButton
                  btnText="Explore Products"
                  varient="secondry"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero