import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'
import { Check, MoveRight } from "lucide-react";
import PrimaryButton from '../ui/PrimaryButton';
import Image from 'next/image';
const features = [
    "ISO Certified Company",
    "Advanced Machinery & Technology",
    "Skilled & Experienced Team",
    "On-time Delivery & Quality Assurance",
]

function AboutUs() {
    return (
        <section className="relative isolate overflow-hidden bg-linear-to-b from-white via-[#F4F9FF] to-white py-8 md:py-12 lg:py-16">
            {/* Responsive background gradients */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
            >
                {/* Top-left gradient */}
                <div className="absolute -left-20 -top-16 size-60 rounded-full bg-[#078CFF]/12 blur-3xl sm:size-80 md:-left-32 md:-top-24 md:size-100 lg:size-125" />

                {/* Bottom-right gradient */}
                <div className="absolute -bottom-20 -right-20 size-64 rounded-full bg-[#003DA8]/10 blur-3xl sm:size-80 md:-bottom-32 md:-right-24 md:size-110 lg:size-140" />

                {/* Centre highlight — desktop only */}
                <div className="absolute left-1/2 top-1/2 hidden size-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#42A5FF]/6 blur-3xl md:block lg:size-150" />
            </div>

            <div className="container relative z-10 px-4 xl:px-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-4">
                    {/* Content */}
                    <div>
                        <div>
                            <SectionEyebrow
                                label="About CNC Tech"
                                align="left"
                                className="ml-0.5 text-black"
                            />

                            <SecondHeading align="left">
                                Delivering Precision. <br />

                                <span className="text-[#0778db]">
                                    Building Trust.
                                </span>
                            </SecondHeading>
                        </div>

                        <p className="my-4 font-inter leading-7 text-slate-600">
                            Established in 2008, CNC Tech is a leading manufacturer
                            of <br className="hidden md:block" />
                            precision turned parts, machined components, molds, dies
                            and <br className="hidden md:block" />
                            industrial solutions. We combine advanced technology,
                            skilled <br className="hidden md:block" />
                            engineers and strict quality standards to deliver products
                            that <br className="hidden md:block" />
                            exceed expectations.
                        </p>

                        <div>
                            <ul className="mb-4 flex flex-col gap-2 font-inter">
                                {features.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-slate-700"
                                    >
                                        <Check
                                            aria-hidden="true"
                                            className="size-5 shrink-0 rounded-full bg-[#0778db] p-1 text-white"
                                            strokeWidth={2.5}
                                        />

                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <PrimaryButton
                                btnText="Know More About Us"
                                varient="primary"
                            />
                        </div>
                    </div>

                    {/* Images */}
                    <div className="relative flex h-fit flex-col justify-center rounded-xl">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="relative col-span-2 aspect-[3/1.2] overflow-hidden rounded-xl">
                                <Image
                                    src="/home/cnc-factory-floor.webp"
                                    alt="CNC manufacturing factory floor"
                                    fill
                                    sizes="(max-width: 767px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative aspect-[3/1.9] overflow-hidden rounded-xl">
                                <Image
                                    src="/home/cnc-machining-process.webp"
                                    alt="CNC machining process"
                                    fill
                                    sizes="(max-width: 767px) 50vw, 25vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative aspect-[3/1.9] overflow-hidden rounded-xl">
                                <Image
                                    src="/home/cnc-precision-components.webp"
                                    alt="CNC precision machined components"
                                    fill
                                    sizes="(max-width: 767px) 50vw, 25vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Experience label */}
                        <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-linear-to-r from-[#003DA8] to-[#0878F9] px-6 py-3 text-white shadow-[0_12px_30px_rgba(0,61,168,0.28)] md:-left-4 md:translate-x-0 md:px-7">
                            <h3 className="font-montserrat text-[24px] font-semibold md:text-[36px]">
                                15+
                            </h3>

                            <p className="font-inter text-[14px] leading-5">
                                Years of
                                <br />
                                Excellence
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
