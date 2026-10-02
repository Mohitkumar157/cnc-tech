import React from 'react'
import {
    ShieldCheck,
    Crosshair,
    Lightbulb,
    BadgeCheck,
    UsersRound,
} from 'lucide-react'
import SectionEyebrow from '../ui/SectionEyebrow'
import SecondHeading from '../ui/SecondHeading'

function OurValues() {
    const values = [
        {
            icon: ShieldCheck,
            title: 'Integrity',
            description:
                'We uphold transparency and ethics in every decision and every project.',
        },
        {
            icon: Crosshair,
            title: 'Precision',
            description:
                'Precision is at the heart of everything we design, engineer, and manufacture.',
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description:
                'We continuously explore new technologies and smarter ways of working.',
        },
        {
            icon: BadgeCheck,
            title: 'Reliability',
            description:
                'Reliable solutions, consistent quality, and a commitment to excellence.',
        },
        {
            icon: UsersRound,
            title: 'Customer Partnership',
            description:
                'We work closely with our customers to understand their needs and deliver lasting value.',
        },
    ]

    return (
        <section className="w-full relative py-8 md:py-12 lg:py-16">

            {/* Background Gradient */}
            <div
                className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_15%_20%,rgba(8,120,249,0.08),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(8,120,249,0.06),transparent_32%)]
        " />

            <div className="container px-4 md:px-0">
                {/* Section Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <SectionEyebrow label={"Our Values"} className={"text-[#0778db]"} />
                    <SecondHeading children={"What Drives Us"} />
                </div>

                {/* Values Grid */}
                <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
                    {values.map((value, index) => {
                        const Icon = value.icon

                        return (
                            <div
                                key={index}
                                className="
                  group text-center
                  rounded-2xl
                   py-7
                  transition-all duration-300
                  hover:-translate-y-1
                "
                            >
                                {/* Icon */}
                                <div
                                    className="
                    mx-auto flex h-14 w-14 items-center justify-center
                    rounded-full
                    border border-[#078CFF]/20
                    bg-[#078CFF]/5
                    text-[#078CFF]
                    transition-all duration-300
                    group-hover:bg-[#078CFF]
                    group-hover:text-white
                  "
                                >
                                    <Icon
                                        size={27}
                                        strokeWidth={1.7}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-inter font-semibold text-[#071B42] xl:mt-4">
                                    {value.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-2 font-inter leading-5 text-slate-600 xl:mx-auto">
                                    {value.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default OurValues;