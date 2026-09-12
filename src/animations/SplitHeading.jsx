"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, useGSAP);

export default function SplitHeading({
  children,
  className = "",
  delay = 0.2,
  stagger = 0.035,
  duration = 0.9,
}) {
  const headingRef = useRef(null);

  useGSAP(
    () => {
      const split = new SplitText(headingRef.current, {
        type: "chars,words",
        charsClass: "split-char",
        wordsClass: "split-word",
      });

      gsap.from(split.chars, {
        yPercent: 100,
        autoAlpha: 0,
        duration,
        stagger,
        delay,
        ease: "power4.out",
      });

      return () => {
        split.revert();
      };
    },
    {
      scope: headingRef,
    }
  );

  return (
    <h1
      ref={headingRef}
      className={className}
    >
      {children}
    </h1>
  );
}