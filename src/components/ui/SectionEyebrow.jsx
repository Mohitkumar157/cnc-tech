import React from 'react'

function SectionEyebrow({label , align , className}) {
  return (
    <p className={`uppercase font-semibold font-inter tracking-[1.1] text-[12px] md:text-[16px] mb-1 ${align === "left" ? "text-start" : "text-center"} ${className}`}>
         {label}
    </p>
  )
}

export default SectionEyebrow
