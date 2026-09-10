import React from 'react'
import { navigationLinks } from '@/data/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'
import LanguageSwitcher from './LanguageSwitcher'
import Humburger from './Humburger'
function Header() {
  return (
    <>
      <header className="hidden lg:block py-2 fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#031A35]/50 backdrop-blur-sm">
        <div className="container flex items-center justify-between px-4 xl:px-0">
          <Link href="/">
            <Image
              src="/logos/logo.svg"
              alt="Logo"
              loading="eager"
              width={508}
              height={160}
              className="w-36 h-auto md:w-40 lg:w-50"
            />
          </Link>
          <nav className=''>
            <ul className='flex items-center gap-4 font-inter'>
              {navigationLinks.map((item) => (
                <li key={item.label} className='text-white font-medium md:text-[12px] lg:text-[14px] xl:text-[16px] tracking-[1.22] capitalize'>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='flex items-center gap-4 text-white'>
            <LanguageSwitcher />
            <PrimaryButton varient={"primary"} btnText={"Get Quotes"} />
          </div>
        </div>
      </header>
      
    </>
  )
}

export default Header
