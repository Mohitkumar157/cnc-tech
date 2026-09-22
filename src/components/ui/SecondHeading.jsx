import React from 'react'

function SecondHeading({ children , align , className}) {
  return (
    <h2 className={`leading-7 md:leading-7 lg:leading-10 tracking-normal font-inter capitalize text-black font-semibold text-[24px] md:text-[28px] lg:text-[40px] text-center ${align === "left" ? "text-start" : "text-center"} ${className}`}>
      {children}
    </h2>
  )
}

export default SecondHeading
