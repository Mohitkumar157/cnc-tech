"use client";

import { useState } from "react";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "/flags/uk.png",
  },
  {
    code: "fr",
    name: "Français",
    flag: "/flags/fr.png",
  },
];

function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative mt-6 md:mt-0">
      {/* Selected language */}
      <button
        type="button"
        onClick={() => setOpen((previousState) => !previousState)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex w-fit items-center justify-between gap-2 rounded-full border border-white/30 px-3 py-2 text-white"
      >
        <img
          src="/flags/uk.png"
          alt="ck flag"
          className="size-5 object-cover object-center"
        />

        <span className="lg:text-[13px] md:text-[12px] font-semibold">English</span>

        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          role="listbox"
          aria-label="Available languages"
          className="absolute left-0 top-[calc(100%+8px)] z-50 flex w-40 flex-col gap-1 rounded-xl border border-white/20 bg-[#182536] p-1 shadow-xl"
        >
          {languages.map((language) => (
            <li
              key={language.code}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] text-white/70"
            >
              <img
                src={language.flag}
                alt=""
                className="size-5 object-cover object-center"
              />

              <span>{language.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;