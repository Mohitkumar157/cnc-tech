import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    label: "Quick Response",
    icon: MessageCircle,
  },
  {
    id: 2,
    label: "Best Price",
    icon: BadgeDollarSign,
  },
  {
    id: 3,
    label: "On-time Delivery",
    icon: CheckCircle2,
  },
];

function ProjectCTA() {
  return (
    <section
      aria-labelledby="project-cta-heading"
      className="relative isolate overflow-hidden p-4 sm:p-5 md:p-6 lg:p-10 rounded-xl"
    >
      {/* Background image */}
      <Image
        src="/home/hero-banner.png"
        alt=""
        fill
        sizes="40vw"
        className="-z-20 object-cover object-center"
      />

      {/* Blue gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-[#003DA8] via-[#0066DB]/95 to-[#0079F2]/60"
      />

      <div className="container px-4 xl:px-0">
        <div className="max-w-2xl flex flex-col items-start gap-2 md:gap-5">
          
            <h2
              id="project-cta-heading"
              className="font-inter text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
            >
              Ready to Start Your Project?
            </h2>

            <p className=" font-inter text-sm leading-6 text-blue-50 sm:text-base">
              Get the best precision manufacturing solutions tailored to your
              needs.
            </p>
          

          <Link
            href="/contact"
            className="inline-flex items-center gap-4 rounded-md bg-white px-6 py-3 font-inter text-sm font-semibold text-[#0878F9] shadow-lg transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Request a Free Quote

            <ArrowRight
              aria-hidden="true"
              className="size-5"
              strokeWidth={2}
            />
          </Link>

          <ul
            aria-label="Service benefits"
            className=" flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            {benefits.map(({ id, label, icon: Icon }) => (
              <li
                key={id}
                className="flex items-center gap-2 font-inter text-sm font-medium text-white"
              >
                <span className="grid size-6 place-items-center rounded-full border border-white/70">
                  <Icon
                    aria-hidden="true"
                    className="size-3.5"
                    strokeWidth={2}
                  />
                </span>

                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectCTA;