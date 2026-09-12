"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

const TOTAL_ROLLS = 12;

function createDigitSequence(targetDigit, digitIndex, direction) {
  const target = Number(targetDigit);

  const rollingDigits = Array.from(
    { length: TOTAL_ROLLS },
    (_, rollIndex) => {
      return (target + digitIndex + rollIndex * 3) % 10;
    }
  );

  // Up direction mein target last mein hoga
  if (direction === "up") {
    return [...rollingDigits, target];
  }

  // Down direction mein target first mein hoga
  return [target, ...rollingDigits];
}

export default function Odometer({
  value,
  suffix = "",
  duration = 1.8,
  delay = 0,
}) {
  const containerRef = useRef(null);
  const trackRefs = useRef([]);

  const valueCharacters = String(value).split("");

  useGSAP(
    () => {
      trackRefs.current.forEach((track, index) => {
        if (!track) return;

        const direction =
          index % 2 === 0 ? "up" : "down";

        const digitHeight =
          track.parentElement.offsetHeight;

        const totalDigits = track.children.length;

        const finalPosition =
          -(totalDigits - 1) * digitHeight;

        if (direction === "up") {
          gsap.fromTo(
            track,
            {
              y: 0,
            },
            {
              y: finalPosition,
              duration: duration + index * 0.12,
              delay: delay + index * 0.08,
              ease: "power4.out",
            }
          );
        } else {
          gsap.fromTo(
            track,
            {
              y: finalPosition,
            },
            {
              y: 0,
              duration: duration + index * 0.12,
              delay: delay + index * 0.08,
              ease: "power4.out",
            }
          );
        }
      });
    },
    {
      scope: containerRef,
      dependencies: [value, duration, delay],
      revertOnUpdate: true,
    }
  );

  return (
    <span
      ref={containerRef}
      className="inline-flex items-baseline"
      aria-label={`${value}${suffix}`}
    >
      {valueCharacters.map((character, index) => {
        /*
         * Comma, decimal ya koi non-numeric character
         * animate nahi hoga.
         */
        if (!/\d/.test(character)) {
          return (
            <span key={`${character}-${index}`}>
              {character}
            </span>
          );
        }

        const direction =
          index % 2 === 0 ? "up" : "down";

        const sequence = createDigitSequence(
          character,
          index,
          direction
        );

        return (
          <span
            key={`${character}-${index}`}
            className="relative inline-block h-[1em] overflow-hidden align-baseline"
            aria-hidden="true"
          >
            <span
              ref={(element) => {
                trackRefs.current[index] = element;
              }}
              className="flex flex-col will-change-transform"
            >
              {sequence.map((digit, digitIndex) => (
                <span
                  key={digitIndex}
                  className="flex h-[1em] shrink-0 items-center justify-center leading-none"
                >
                  {digit}
                </span>
              ))}
            </span>
          </span>
        );
      })}

      {suffix && (
        <span className="inline-block">{suffix}</span>
      )}
    </span>
  );
}