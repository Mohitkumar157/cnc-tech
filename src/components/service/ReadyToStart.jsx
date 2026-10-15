import React from 'react'
import SectionEyebrow from '../ui/SectionEyebrow';
import SecondHeading from '../ui/SecondHeading';
import PrimaryButton from '../ui/PrimaryButton';

function ReadyToStart() {
    return (
        <section className="relative w-full py-8 md:py-12 lg:py-16 bg-linear-to-r from-blue-50 to-indigo-50 overflow-hidden flex flex-col items-center justify-center text-center">

            
            <svg className="absolute left-0 bottom-0 pointer-events-none opacity-40 -rotate-75 md:rotate-0 w-35 md:w-64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-50 150 C 20 150, 100 80, 100 -50" stroke="#93C5FD" strokeWidth="1.5" />
            </svg>

           
            <svg className="absolute right-0 bottom-0 pointer-events-none opacity-40 w-45 md:w-96" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 50 250 L 350 -50" stroke="#93C5FD" strokeWidth="1" />
                <path d="M 80 250 L 380 -50" stroke="#93C5FD" strokeWidth="1" />
                <path d="M 110 250 L 410 -50" stroke="#93C5FD" strokeWidth="1" />
            </svg>

            
            <div className="relative z-10 px-4 md:px-0 container mx-auto flex flex-col items-center">

                
                <SectionEyebrow 
                label={"Ready to Start?"}
                className={"text-[#0778db]"}
                />

                
                <SecondHeading children={" Get Custom Manufacturing Solutions Today"}/>

                
                <p className="text-gray-600 font-inter mb-6 mt-1">
                    Contact us now for a quote or to discuss your project requirements.
                </p>

                
                <PrimaryButton 
                btnText={" Contact Us"}
                varient={"primary"}
                />

            </div>
        </section>
    )
}

export default ReadyToStart;
