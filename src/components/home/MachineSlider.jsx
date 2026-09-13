"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";

import machinesData from "@/data/machineData";
import SectionEyebrow from "../ui/SectionEyebrow";
import SecondHeading from "../ui/SecondHeading";

function MachineSlider() {
  const autoScroll = useRef(
    AutoScroll({
      playOnInit: true,
      speed: 1,
      startDelay: 0,

      // Right to left movement
      direction: "forward",

      // Drag ke baad slider continue rahe
      stopOnInteraction: false,

      // Cursor aane par bhi slider chalta rahe
      stopOnMouseEnter: true,

      stopOnFocusIn: false,
    }),
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      containScroll: false,
      watchDrag: true,
    },
    [autoScroll.current],
  );

  /*
   * Embla loop ke liye enough slides zaroori hain.
   * Data duplicate karne se seamless infinite movement milega.
   */
  const loopMachines = [...machinesData, ...machinesData];

  return (
    <section
      aria-label="Our machinery"
      className="overflow-hidden bg-white py-8 md:py-12 lg:py-16"
    >
      <div className="container px-4 xl:px-0">

        <div className="overflow-hidden">
          <div data-animate="fade-up">
            <SectionEyebrow label={"OUR MACHINERY"} className={"text-[#0778db]"} />
            <SecondHeading children={"Advanced Machines Superior Results"} />
          </div>
        </div>
        <div
          ref={emblaRef}
          className="overflow-hidden mt-8"
          aria-roledescription="carousel"
          aria-label="Manufacturing machines"
        >
          <ul className="-ml-4 flex touch-pan-y">
            {loopMachines.map((machine, index) => (
              <li
                data-animate = "fade-up"
                key={`${machine.id}-${index}`}
                className="
                  min-w-0 shrink-0 grow-0 pl-4
                  basis-[95%]
                  sm:basis-1/2
                  md:basis-1/3
                  lg:basis-1/4
                  xl:basis-1/5
                "
              >
                <article className="overflow-hidden h-full rounded-lg border border-slate-200 bg-white shadow-sm">
                  <div className="relative aspect-4/2.5 overflow-hidden bg-slate-100">
                    <Image
                      src={machine.image}
                      alt={machine.alt}
                      fill
                      sizes="
                        (max-width:639px) 82vw,
                        (max-width:767px) 50vw,
                        (max-width:1023px) 33vw,
                        (max-width:1279px) 25vw,
                        20vw
                      "
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="text-[16px] font-inter font-semibold text-[#071B42]">
                      {machine.title}
                    </h3>

                    <div className="mt-2 text-[14px] font-semibold font-inter leading-5 text-slate-600">
                      {machine.details.map((detail, i) => (
                        <p key={i}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MachineSlider;