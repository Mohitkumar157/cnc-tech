import HeroReveal from '@/animations/HeroReveal'
import Image from 'next/image'
import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SplitHeading from '@/animations/SplitHeading'
import PrimaryButton from '../ui/PrimaryButton'

function ProductsHero() {
  return (
   <section className='relative flex items-center justify-center w-full h-[60vh] md:h-[70vh] lg:h-[50vw] overflow-hidden'>
      <Image
        src="/products/product-hero.webp"
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
                label="OUR PRODUCTS CATALOG"
                align="left"
                className="text-[#0778db]"
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
            High Precision <br />

            <span className="text-[#0778db] leading-9 md:leading-9 lg:leading-16">
              Perfect Finish 
            </span>
          </SplitHeading>

          {/* Paragraph animation */}
          <div className='overflow-hidden'>
            <p
              data-hero-reveal
              className="w-[80vw] sm:w-[80vw] md:w-full text-white my-4 font-inter tracking-[1.1px] text-[14px] md:text-[16px]"
            >
              Explore our extensive range of custom-engineered industrial <br className='hidden md:block'/>
               components, manufactured with advanced CNC technology for <br className='hidden md:block'/>
               unmatched quality and reliability
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

        </HeroReveal>
      </div>
    </section>
  )
}

export default ProductsHero
