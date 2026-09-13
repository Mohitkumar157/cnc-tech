
import SectionEyebrow from "../ui/SectionEyebrow";
import SecondHeading from "../ui/SecondHeading";
const processData = [
  {
    id: 1,
    number: "01",
    title: "Inquiry",
    description: "Understand your requirements",
  },
  {
    id: 2,
    number: "02",
    title: "Engineering",
    description: "Design & planning for optimal solution",
  },
  {
    id: 3,
    number: "03",
    title: "Manufacturing",
    description: "Precision machining with advanced CNC",
  },
  {
    id: 4,
    number: "04",
    title: "Quality Check",
    description: "Rigorous inspection & quality assurance",
  },
  {
    id: 5,
    number: "05",
    title: "Packaging",
    description: "Secure packaging for safe delivery",
  },
  {
    id: 6,
    number: "06",
    title: "Delivery",
    description: "On-time delivery to our valued clients",
  },
];

function OurProcess() {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-white py-8 md:py-12 lg:py-16"
    >
      {/* Subtle background gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(8,120,249,0.08),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(8,120,249,0.06),transparent_32%)]"
      />

      <div className="container px-4 xl:px-0">
        {/* Section heading */}
         
         <div className="overflow-hidden">
           <div className="relative text-center" data-animate = "fade-up">
          <SectionEyebrow
            label={"OUR PROCESS"}
            className={"text-[#0878F9]"}
          />

          <SecondHeading
            id="process-heading"
            children={"From Concept to Completion"}
            className={"mt-2 text-[#071B42]"}
          />
        </div>
         </div>

        {/* Process timeline */}
        <ol className="relative mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-y-12 xl:grid-cols-6 xl:gap-0">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[8.33%] right-[8.33%] top-6 hidden border-t-2 border-dotted border-[#0878F9]/70 xl:block"
          />

          {processData.map((process, index) => (
            <li
              data-animate= "fade-up"
              key={process.id}
              className="group relative flex gap-5 xl:block xl:px-4 xl:text-center"
            >
              {/* Mobile connecting line */}
              {index !== processData.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-12 h-[calc(100%+2rem)] border-l-2 border-dotted border-[#0878F9]/50 xl:hidden"
                />
              )}

              {/* Process number */}
              <div className="relative font-montserrat z-10 flex size-15 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#003DA8] to-[#0878F9] text-[20px] font-bold text-white shadow-[0_8px_25px_rgba(8,120,249,0.28)] transition-transform duration-300 group-hover:-translate-y-1 xl:mx-auto">
                {process.number}
              </div>

              {/* Process content */}
              <div className="pt-1 xl:pt-0">
                <h3 className="text-base font-inter font-semibold text-[#071B42] xl:mt-4">
                  {process.title}
                </h3>

                <p className="mt-2 max-w-48 font-inter text-sm leading-5 text-slate-600 xl:mx-auto">
                  {process.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default OurProcess;