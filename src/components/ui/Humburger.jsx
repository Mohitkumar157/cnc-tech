"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

function Humburger() {
    const [open, setOpen] = useState(false);

    return (
        <div className="container relative flex items-center justify-between border-b border-white/10 bg-[#021F43] px-4 py-1 shadow-[0_4px_20px_rgba(0,20,50,0.18)] md:hidden">
            {/* Logo */}
            <Link href="/" className="logo text-white">
                <Image
                    src="/logos/logo.svg"
                    alt="Logo"
                    loading="eager"
                    width={828}
                    height={828}
                    className="w-15 h-auto object-cover"
                />
            </Link>

            {/* Hamburger Button */}
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open mobile menu"
                aria-expanded={open}
                className="humburger flex cursor-pointer flex-col gap-1.5 overflow-hidden rounded-md border border-white/15 bg-white/5 p-3 transition-colors hover:border-[#078CFF]/60 hover:bg-white/10"
            >
                <span className="inline-block h-[0.3] w-5 rounded-full bg-[#078CFF]" />

                <span
                    className={`inline-block h-[0.3] rounded-full bg-[#078CFF] transition-all duration-200 ${open ? "w-5" : "w-3"
                        }`}
                />

                <span className="inline-block h-[0.3] w-5 rounded-full bg-[#078CFF]" />
            </button>

            {/* Mobile Navigation */}
            <nav
                aria-label="Mobile navigation"
                className={`fixed right-0 top-0 z-999 flex h-screen w-full justify-end bg-[#00152e]/60 backdrop-blur-sm transition-all duration-500 ${open
                    ? "visible translate-x-0 opacity-100"
                    : "invisible translate-x-full opacity-0"
                    }`}
            >
                <div className="h-screen w-[82%] border-l border-white/10 bg-linear-to-b from-[#021F43] to-[#00376F] px-4 py-2 text-white shadow-[-16px_0_50px_rgba(0,15,40,0.35)] sm:w-[65%]">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="logo"
                            onClick={() => setOpen(false)}
                        >
                            <Image
                                src="/logos/logo.svg"
                                alt="Logo"
                                loading="eager"
                                width={828}
                                height={828}
                                className="w-15 h-auto object-cover"
                            />
                        </Link>

                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Close mobile menu"
                            className="grid size-10 cursor-pointer place-items-center text-white transition-colors "
                        >
                            <X
                                className="size-8"
                                strokeWidth={1.75}
                            />
                        </button>
                    </div>

                    <div className="my-5 h-px w-full bg-white/15" />

                    {/* Navigation Links */}
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link, i) => (
                            <li
                                key={link.href}
                                className="overflow-hidden border-b border-white/8 text-[17px] font-semibold"
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`block rounded-md px-3 py-3.5 tracking-wide text-white/85 transition-all duration-700 ease-out hover:bg-white/8 hover:pl-5 hover:text-[#42A5FF] ${open
                                        ? "translate-y-0 opacity-100"
                                        : "-translate-y-24 opacity-0"
                                        }`}
                                    style={{
                                        transitionDelay: open ? `${i * 80}ms` : "0ms",
                                    }}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>



                    <LanguageSwitcher />
                </div>
            </nav>
        </div>
    );
}

export default Humburger;