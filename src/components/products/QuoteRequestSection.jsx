import React from 'react'
import PrimaryButton from '../ui/PrimaryButton';
import Link from 'next/link';

function QuoteRequestSection() {
    return (
        <section className="py-8 md:py-12 lg:py-16 relative w-full overflow-hidden bg-linear-to-r from-[#e6f0f9] via-[#d6e6f5] to-[#c2dcf0] shadow-sm border border-blue-100">
            <div className="container px-4 md:px-0">
                <svg className="absolute top-0 left-0 w-64 h-full text-blue-200 opacity-50 pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-20 180 C 40 180, 80 80, 100 -20" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M-10 200 C 60 200, 100 100, 120 -10" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M0 220 C 80 220, 120 120, 140 0" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M10 240 C 100 240, 140 140, 160 10" stroke="currentColor" strokeWidth="0.5" />
                </svg>


                <svg className="absolute top-0 right-0 w-96 h-full text-blue-300 opacity-30 pointer-events-none" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M 200 -50 L 450 200" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M 230 -50 L 480 200" stroke="currentColor" strokeWidth="3" />
                    <path d="M 260 -50 L 510 200" stroke="currentColor" strokeWidth="1" />
                    <path d="M 100 0 L 300 200 M 150 0 L 350 200 M 200 0 L 400 200" stroke="currentColor" strokeWidth="0.5" />
                </svg>


                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">


                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-inter font-extrabold text-[#0B1B3D] tracking-tight leading-10">
                            Need Custom <br className="hidden sm:block" /> Manufacturing Solutions?
                        </h2>
                    </div>


                    <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4">


                        <PrimaryButton
                            btnText={" Request a Custom Quote"}
                            varient={"primary"}
                            className={"px-6! py-2.5!"}
                            href={"/contact"}
                        />


                        <Link href="/catalog.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center justify-center px-6.5 py-2.5 bg-transparent border border-[#0066CC] text-[#0066CC] text-base font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 ">
                            Download Catalog (PDF)
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuoteRequestSection;
