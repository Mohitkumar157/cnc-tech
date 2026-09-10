import React from 'react'
import { MoveRight } from 'lucide-react';
function PrimaryButton({ btnText, varient, className }) {
  return (
    <button
      className={`
    group cursor-pointer flex items-center justify-center gap-4
    px-4 py-2.5 rounded-lg
    border transition-all duration-500 ease-in-out

    ${varient === "primary"
          ? `
          bg-[linear-gradient(to_right,#034A91_0%,#078CFF_51%,#034A91_100%)]
          bg-size-[200%_auto] bg-left hover:bg-right
          text-white border-[#38A1FF]/40
          shadow-[0_6px_20px_rgba(7,140,255,0.25)]
          hover:shadow-[0_8px_25px_rgba(7,140,255,0.45)]
        `
          : `
          bg-transparent text-[#078CFF] border-[#078CFF]/60
          hover:bg-[#078CFF]/10 hover:border-[#078CFF]
          hover:shadow-[0_5px_18px_rgba(7,140,255,0.18)]
        `
        }

    ${className}
  `}
    >
      {btnText}

      {varient === "primary" && (
        <MoveRight
          strokeWidth={2}
          className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        />
      )}
    </button>
  )
}

export default PrimaryButton
