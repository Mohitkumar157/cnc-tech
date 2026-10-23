import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Manufacturing Hub", href: "/manufacturing-hub" },
  { label: "Contact Us", href: "/contact-us" },
];

const services = [
  { label: "CNC Turning", href: "/services/cnc-turning" },
  { label: "VMC Machining", href: "/services/vmc-machining" },
  { label: "Mold & Die Manufacturing", href: "/services" },
  { label: "Sheet Metal Fabrication", href: "/services" },
  { label: "Precision Components", href: "/services" },
  { label: "CAD / CAM Design", href: "/services" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    src: "/icons/linkdin.svg",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    src: "/icons/facebook.svg",
  },
  {
    label: "Twitter",
    href: "https://www.youtube.com/",
    src: "/icons/twitter.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    src: "/icons/instgram.svg",
  },
];

function Footer() {
  return (
    <footer className="relative bg-[#011D40] font-inter text-white">
      <div className="container px-4 xl:px-0">
        {/* Whatsapp logo */}
        <WhatsAppButton />
        <div className="grid gap-10 py-8 md:py-12 lg:py-16 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_1fr_1.25fr_1.1fr] lg:gap-8">
          {/* Company information */}
          <section aria-labelledby="footer-company-heading">
            <h2 id="footer-company-heading" className="sr-only">
              CNC Tech
            </h2>

            <Link href="/" aria-label="CNC Tech home" className="inline-block">
              <Image
                src="/logos/logo.svg"
                alt="CNC Tech"
                width={150}
                height={48}
                className="w-20 h-auto md:w-25"
              />
            </Link>

            <p className="mt-4 max-w-60 text-sm leading-6 text-slate-300">
              Precision manufacturing solutions for a better tomorrow.
            </p>

            <ul className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, href, src }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow CNC Tech on ${label}`}
                    className="grid size-9 place-items-center rounded-full border border-blue-400/60 text-blue-400 transition-colors hover:border-[#0778db] hover:bg-[#0778db] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                  >
                    <Image
                      src={src}
                      width={label === "Facebook" ? 9 : 15}
                      height={label === "Facebook" ? 9 : 15}
                      alt={label}
                      className="object-cover" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Quick links */}
          <nav aria-labelledby="quick-links-heading">
            <h2
              id="quick-links-heading"
              className="text-sm font-semibold text-white"
            >
              Quick Links
            </h2>

            <ul className="mt-4 space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-300 transition-colors hover:text-blue-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-labelledby="footer-services-heading">
            <h2
              id="footer-services-heading"
              className="text-sm font-semibold text-white"
            >
              Our Services
            </h2>

            <ul className="mt-4 space-y-2">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-300 transition-colors hover:text-blue-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact details */}
          <section aria-labelledby="footer-contact-heading">
            <h2
              id="footer-contact-heading"
              className="text-sm font-semibold text-white"
            >
              Contact Us
            </h2>

            <address className="mt-4 not-italic">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-[#078CFF]"
                    strokeWidth={1.8}
                  />

                  <span className="text-sm leading-6 text-slate-300">
                    AMBALA HARYANA, INDIA – 133001
                  </span>
                </li>

                <li>
                  <a
                    href="tel:+919994664534"
                    className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-blue-400"
                  >
                    <Phone
                      aria-hidden="true"
                      className="size-5 shrink-0 text-[#078CFF]"
                      strokeWidth={1.8}
                    />
                    +91 9416512774
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:info@cnctech.co.in"
                    className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-blue-400"
                  >
                    <Mail
                      aria-hidden="true"
                      className="size-5 shrink-0 text-[#078CFF]"
                      strokeWidth={1.8}
                    />
                    rgprecisioninstruments@gmail.com
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Clock
                    aria-hidden="true"
                    className="size-5 shrink-0 text-[#078CFF]"
                    strokeWidth={1.8}
                  />

                  <span className="text-sm text-slate-300">
                    Mon – Sat: 9:00 AM – 6:00 PM
                  </span>
                </li>
              </ul>
            </address>
          </section>

          {/* Location */}
          <section aria-labelledby="footer-location-heading">
            <h2
              id="footer-location-heading"
              className="text-sm font-semibold text-white"
            >
              Location
            </h2>

            <div className="mt-4 overflow-hidden rounded-md border border-white/15">

              <iframe
                src="https://www.google.com/maps?q=Ambala%20Haryana%20133001&output=embed"
                title="RG precision instruments location in Ambala, Haryana"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="aspect-4/2.5 w-full border-0"
              />

            </div>
          </section>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-center md:flex-row  gap-4 border-t border-white/15 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} CNC Tech. All Rights Reserved.
          </p>

          <nav aria-label="Legal links">
            <ul className="flex items-center divide-x divide-white/20">
              <li className="pr-4">
                <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-blue-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li className="pl-4">
                <Link
                  href="/terms-and-conditions"
                  className="transition-colors hover:text-blue-400"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;