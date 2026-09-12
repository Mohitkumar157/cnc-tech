"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

export default function HeroReveal({
  children,
  className = "",
}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(
        "[data-hero-reveal]"
      );

      gsap.from(elements, {
        y: 100,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        force3D: true,
        clearProps: "transform,opacity,visibility",
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div
      ref={containerRef}
      className={className}
    >
      {children}
    </div>
  );
}