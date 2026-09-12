"use client";

import { useRef } from "react";
import {gsap,ScrollTrigger,useGSAP} from "../lib/gsap"
import animations from "./animation";

export default function Reveal({
    children,
    className = "",
}) {
    const wrapperRef = useRef(null);

    useGSAP(
        () => {
            const wrapper = wrapperRef.current;

            if (!wrapper) return;

            const matchMedia = gsap.matchMedia();

            const createAnimations = (isMobile) => {
                const elements = gsap.utils.toArray(
                    "[data-animate]",
                    wrapper
                );

                elements.forEach((element) => {
                    const animationName = element.dataset.animate;
                    const config = animations[animationName];

                    if (!config) {
                        console.warn(
                            `Animation "${animationName}" not found`
                        );

                        return;
                    }

                    const childElements = gsap.utils.toArray(
                        "[data-animate-child]",
                        element
                    );

                    const timeline = gsap.timeline({
                        paused: true,
                        defaults: {
                            ease: config.ease ?? "power4.out",
                        },
                    });

                    /*
                     * Parent animation
                     */
                    timeline.from(element, {
                        ...config.from,
                        duration: config.duration ?? 1,
                        clearProps: config.clearProps ?? "transform,opacity",
                    });

                    /*
                     * Children animation
                     */
                    childElements.forEach((child, index) => {
                        const childAnimationName =
                            child.dataset.animateChild;

                        const childConfig =
                            animations[childAnimationName];

                        if (!childConfig) return;

                        timeline.from(
                            child,
                            {
                                ...childConfig.from,
                                duration: childConfig.duration ?? 0.8,
                                ease:
                                    childConfig.ease ??
                                    config.ease ??
                                    "power4.out",
                                clearProps:
                                    childConfig.clearProps ??
                                    "transform,opacity",
                            },
                            config.childStart ?? index * 0.1
                        );
                    });

                    ScrollTrigger.create({
                        trigger: element,

                        start: isMobile
                            ? config.mobileStart ?? "top 90%"
                            : config.desktopStart ?? "top 80%",

                        once: config.once ?? true,

                        onEnter: () => {
                            timeline.play();

                            const odometers = element.querySelectorAll(
                                "[data-odometer]"
                            );

                            odometers.forEach((odometer) => {
                                odometer.dispatchEvent(
                                    new CustomEvent("odometer-start")
                                );
                            });
                        },
                    });
                });
            };

            matchMedia.add(
                {
                    mobile: "(max-width: 767px)",
                    desktop: "(min-width: 768px)",
                    reduceMotion:
                        "(prefers-reduced-motion: reduce)",
                },
                (context) => {
                    const { mobile, reduceMotion } =
                        context.conditions;

                    if (reduceMotion) {
                        gsap.set("[data-animate]", {
                            clearProps: "all",
                        });

                        gsap.set("[data-animate-child]", {
                            clearProps: "all",
                        });

                        return;
                    }

                    createAnimations(mobile);
                }
            );

            return () => {
                matchMedia.revert();
            };
        },
        {
            scope: wrapperRef,
            dependencies: [],
            revertOnUpdate: true,
        }
    );

    return (
        <div
            ref={wrapperRef}
            className={`w-full ${className}`}
        >
            {children}
        </div>
    );
}