import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../ui/PrimaryButton'
import SplitHeading from '@/animations/SplitHeading';
import SectionEyebrow from '../ui/SectionEyebrow';
import HeroReveal from '@/animations/HeroReveal';



function ServiceHero() {
  return (
    <section className='relative flex items-center justify-center w-full h-[60vh] md:h-[70vh] lg:h-[50vw] overflow-hidden'>
      <Image
        src="/home/hero-banner.png"
        alt="Precision CNC manufacturing"
        fill
        loading='eager'
        priority
        sizes="(min-width: 1425px) 1425px, 100vw"
        quality={75}
        className="object-cover object-right md:object-center"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 md:bg-[linear-gradient(90deg,#00162f_0%,rgba(0,22,47,0.95)_28%,rgba(0,22,47,0.65)_48%,rgba(0,22,47,0.18)_68%,transparent_85%)]  bg-[linear-gradient(90deg,#00162f_0%,rgba(0,22,47,0.95)_8%,rgba(0,22,47,0.65)_100%,rgba(0,22,47,0.18)_68%,transparent_85%)]" />


      {/* Hero content */}
      <div className="absolute w-full mt-15 md:mt-0">
        <HeroReveal className="container px-4 xl:px-0">

          {/* Eyebrow animation */}
          <div className='overflow-hidden'>
            <div data-hero-reveal>
              <SectionEyebrow
                label="OUR SERVICES"
                align="left"
                className="text-white"
              />
            </div>
          </div>

          {/* Split heading ki animation alag chalegi */}
          <SplitHeading
            delay={0}
            duration={0.9}
            stagger={0.035}
            className="uppercase text-[32px] md:text-[40px] lg:text-[70px] text-white font-inter leading-9 md:leading-9 lg:leading-15 tracking-[0.1px] font-extrabold"
          >
            End To End <br className='hidden md:block'/>

            <span className="text-[#0778db] leading-9 md:leading-9 lg:leading-16">
              Manufacturing <br className='hidden md:block'/> Solutions
            </span>
          </SplitHeading>

          {/* Paragraph animation */}
          <div className='overflow-hidden'>
            <p
              data-hero-reveal
              className="w-[80vw] sm:w-[80vw] md:w-full text-white my-4 font-inter tracking-[1.1px] text-[14px] md:text-[16px]"
            >
              We offer a wide range of CNC machining and manufacturing services

              <br className="hidden md:block" />

              o meet the diverse needs of industries. From precision milling to custom <br className="hidden md:block" />
              sheet metal fabrication,we deliver high-quality solutions with accuracy  <br className="hidden md:block" />
              and efficiency.
            </p>
          </div>

          {/* Buttons animation */}
          <div className='overflow-hidden'>
            <div
              data-hero-reveal
              className="flex sm:flex-row md:flex-row  md:items-center gap-5"
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

        </HeroReveal>
      </div>

      {/* bottom info */}
      {/* <div className=' absolute left-0 bottom-0 w-full'>
        <div className="container px-4 xl:px-0 border border-b-0 rounded-t-xl  border-[#087ED5]/55 bg-linear-to-b from-[#012351]/30 via-[#011B3D]/35 to-[#061C38]/30 backdrop-blur-xl  shadow-[inset_0_0_18px_rgba(0,112,220,0.12),0_0_12px_rgba(0,102,204,0.16)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:gap-4 md:gap-2 gap-2 lg:py-4 py-3">
            {
              statsData.map((data, index) => (
                <div key={data.id} className={`${index !== statsData.length - 1 && "border-r"} border-[#087ED5]/55 flex items-center justify-start sm:justify-center text-white gap-4`}>
                  <div>
                    {
                      <data.Icon
                        className='md:w-8 lg:w-12 h-auto text-[#078CFF] drop-shadow-[0_0_5px_rgba(7,140,255,0.55)]'
                        strokeWidth={1.4}
                      />}
                  </div>
                  <div className='leading-4 lg:leading-5'>
                    <h2 className="text-[12px] sm:text-[14px] md:text-xl lg:text-2xl font-montserrat font-medium tabular-nums">
                      {typeof data.value === "number" ? (
                        <Odometer
                          value={data.value}
                          suffix="+"
                          duration={2}
                          delay={index * 0.15}
                        />
                      ) : (
                        data.value
                      )}
                    </h2>
                    <p className='text-[12px] md:text-[14px] font-inter font-normal'>{data.label}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default ServiceHero;
