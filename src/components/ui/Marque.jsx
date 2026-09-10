import Image from 'next/image';
import React from 'react'

function Marque({ logosData }) {
  const marqueeLogos = [...logosData, ...logosData, ...logosData];

  return (
    <section className="overflow-hidden">
      <div className="group relative flex overflow-hidden bg-[#f6f6f6] py-2.5">
        <div className="flex w-max animate-logo-marquee items-center group-hover:[animation-play-state:paused]">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex h-20 w-40 shrink-0 items-center justify-center"
            >
              <Image
                src={logo.image}
                alt={logo.alt}
                width={140}
                height={70}
                className=" h-auto max-h-14 w-auto max-w-40 object-contain brightness-0 opacity-[0.73]"
              />
            </div>
          ))}
        </div>
        {/* left right gradient */}
        {/* Left fade */}
        <div
          className="
    pointer-events-none absolute inset-y-0 left-0 z-10 w-50
    bg-linear-to-r from-white to-transparent"
        />

        {/* Right fade */}
        <div
          className="
    pointer-events-none absolute inset-y-0 right-0 z-10 w-50
    bg-linear-to-l from-white to-transparent"
        />

      </div>
    </section>
  );
}

export default Marque;
