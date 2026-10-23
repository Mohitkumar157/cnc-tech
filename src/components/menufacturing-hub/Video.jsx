
"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

function Video() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        {
          width: "70%",
          borderRadius: "24px",
        },
        {
          width: "100%",
          borderRadius: "0px",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-10 overflow-hidden"
    >
      <div
        ref={containerRef}
        className="container px-4 lg:px-0 mx-auto overflow-hidden rounded-2xl"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="block w-full h-auto rounded-2xl overflow-hidden"
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Video;
