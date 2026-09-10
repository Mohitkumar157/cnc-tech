import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../ui/PrimaryButton'
import {
  Trophy,
  UsersRound,
  ChartNoAxesCombined,
  ShieldCheck,
} from "lucide-react";

const statsData = [
  {
    id: 1,
    value: "15+",
    label: "Years Experience",
    Icon: Trophy,
  },
  {
    id: 2,
    value: "500+",
    label: "Happy Clients",
    Icon: UsersRound,
  },
  {
    id: 3,
    value: "2500+",
    label: "Projects Delivered",
    Icon: ChartNoAxesCombined,
  },
  {
    id: 4,
    value: "ISO",
    label: "Certified Company",
    Icon: ShieldCheck,
  },
];

function Hero() {
  return (
    <section className='relative flex items-center w-full h-[100vw] md:h-[50vw] lg:h-[45vw] overflow-hidden'>
      <Image
        src="/home/hero-banner.png"
        alt="Precision CNC manufacturing"
        fill
        priority
        sizes="(min-width: 1425px) 1425px, 100vw"
        quality={75}
        className="object-cover object-right md:object-center"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#00162f_0%,rgba(0,22,47,0.95)_28%,rgba(0,22,47,0.65)_48%,rgba(0,22,47,0.18)_68%,transparent_85%)]" />

      {/* content */}
      <div className='absolute w-full'>
        <div className="container px-4 xl:px-0">
          <p className="hero-eyebrow text-white uppercase font-medium font-inter tracking-[1.1] text-[14px] mb-1 ml-1">An ISO Certified Company</p>
          <h1 className='md:text-[40px] lg:text-[70px] text-white font-inter leading-15 tracking-[0.1] font-extrabold'>
            PRECISION CNC <br className='' />
            <span className='text-[#0778db]'> MANUFACTURING</span>
          </h1>
          <p className='text-white my-4 font-inter tracking-[1.1]'>High quality turned components, precision machined parts <br className='hidden md:block' />
            and engineering solutions for demanding industries.
          </p>
          <div className='flex items-center gap-5'>
            <PrimaryButton btnText={"Get a Free Quote"} varient={"primary"} />
            <PrimaryButton btnText={"Explore Products"} varient={"secondry"} />
          </div>
        </div>
      </div>

      {/* bottom info */}
      <div className='absolute left-0 bottom-0 w-full'>
        <div className="container px-4 xl:px-0 border border-b-0 rounded-t-xl  border-[#087ED5]/55 bg-linear-to-b from-[#012351]/30 via-[#011B3D]/35 to-[#061C38]/30 backdrop-blur-xl  shadow-[inset_0_0_18px_rgba(0,112,220,0.12),0_0_12px_rgba(0,102,204,0.16)]">
          <div className="grid grid-cols-4 gap-3 py-4 ">
            {
              statsData.map((data, index) => (
                <div key={data.id} className={`${index !== statsData.length - 1 && "border-r"} border-[#087ED5]/55 flex items-center justify-center text-white gap-4`}>
                  <div>
                    {
                      <data.Icon
                        className='w-12 h-auto text-[#078CFF] drop-shadow-[0_0_5px_rgba(7,140,255,0.55)]'
                        strokeWidth={1.4}
                      />}
                  </div>
                  <div className='leading-5'>
                    <h2 className='text-2xl font-montserrat font-medium'>{data.value}</h2>
                    <p className='font-inter font-normal'>{data.label}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
