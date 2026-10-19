import Image from 'next/image'
import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import PrimaryButton from '../ui/PrimaryButton'
import HeroReveal from '@/animations/HeroReveal'
import SplitHeading from '@/animations/SplitHeading'

function AboutHero() {
  return (
    <section className="w-full bg-[#011D40]  overflow-hidden">
      <div
        className="relative pt-25 h-[60vh] md:h-[70vh] lg:h-[50vw] flex items-center justify-start w-full">
        {/* Hero Image */}
        <Image
          src="/about/aboutHero.webp"
          fill
          priority
          sizes="(min-width: 1425px) 1425px, 100vw"
          quality={75}
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
          <HeroReveal>
            <div className="">

              {/* Small Label */}
              <div className='overflow-hidden'>
                <div data-hero-reveal>
                  <SectionEyebrow
                    label={"ABOUT RG PRECISION INSTRUMENTS"}
                    align={"left"}
                    className={"text-white"}
                  />
                </div>
              </div>

              {/* Heading */}
              <SplitHeading
                delay={0}
                duration={0.9}
                stagger={0.035}
                className="uppercase text-[32px] md:text-[40px] lg:text-[70px] text-white font-inter leading-9 md:leading-9 lg:leading-15 tracking-[0.1px] font-extrabold"
              >
                Building a  <br />
                <span className="text-[#0778db]">
                  Legacy Precision <br className='hidden md:block' /> & Innovation
                </span>
              </SplitHeading>
              <h1 className='uppercase text-[36px] md:text-[40px] lg:text-[70px] text-white font-inter leading-9 md:leading-9 lg:leading-16 tracking-[0.1px] font-extrabold'>

              </h1>

              {/* Description */}
             <div className='overflow-hidden'>
               <p  data-hero-reveal className="w-[80vw] sm:w-[80vw] md:w-full text-white my-4 font-inter tracking-[1.1px] text-[14px] md:text-[16px]">
                We combine advanced RG precision engineering,<br className='hidden md:block' />
                and industry expertise to deliver reliable manufacturing <br className='hidden md:block' />
                solutions that help businesses build better.
              </p>
             </div>

              {/* Buttons animation */}
              <div className='overflow-hidden'>
                <div
                  data-hero-reveal
                  className="flex items-center gap-5"
                >
                  <PrimaryButton
                    btnText="Get a Free Quote"
                    varient="primary"
                    href={"/contact"}
                  />

                  <PrimaryButton
                    btnText="Explore Products"
                    varient="secondry"
                    href={"/products"}
                  />
                </div>
              </div>

            </div>
          </HeroReveal>
        </div>
      </div>
    </section>
  )
}

export default AboutHero