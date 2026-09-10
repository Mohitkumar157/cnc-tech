"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import reviewsData from "@/data/reviewData";


function TestimonialSlider() {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplay.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const updateSliderState = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const handleDotClick = useCallback(
    (index) => {
      if (!emblaApi) return;

      emblaApi.scrollTo(index);
      autoplay.current.reset();
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    updateSliderState();

    emblaApi.on("select", updateSliderState);
    emblaApi.on("reInit", updateSliderState);

    return () => {
      emblaApi.off("select", updateSliderState);
      emblaApi.off("reInit", updateSliderState);
    };
  }, [emblaApi, updateSliderState]);

  return (
    <div>
      <div
        ref={emblaRef}
        className="overflow-hidden"
        aria-roledescription="carousel"
        aria-label="Client reviews"
      >
        <ul className="flex">
          {reviewsData.map((review) => (
            <li
              key={review.id}
              className="min-w-0 shrink-0 grow-0 basis-full"
            >
              <article>

                <blockquote className="mt-4">


                  <p className="relative pl-20 flex items-center justify-center max-w-xl text-base font-montserrat leading-6 text-slate-600">
                    <Quote
                      aria-hidden="true"
                      className="absolute left-0 top-0 size-15 fill-[#0878F9] text-[#0878F9] rotate-180"
                      strokeWidth={1.5}
                    /> 
                     “{review.review}”
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-full bg-slate-100">
                      <Image
                        src={review.image}
                        alt={review.alt}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <cite className="not-italic">
                        <span className="block font-inter font-semibold text-[#071B42]">
                          {review.name}
                        </span>

                        <span className="font-inter mt-0.5 block text-sm text-slate-600">
                          {review.designation}
                        </span>
                      </cite>

                      <div
                        className="mt-2 flex gap-1"
                        aria-label={`${review.rating} out of 5 stars`}
                      >
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Star
                              key={index}
                              aria-hidden="true"
                              className="size-4 fill-amber-400 text-amber-400"
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </blockquote>
              </article>
            </li>
          ))}
        </ul>
      </div>

      {/* Slider dots */}
      <div
        className="mt-6 flex items-center gap-2"
        aria-label="Select client review"
      >
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleDotClick(index)}
            aria-label={`Go to review ${index + 1}`}
            aria-current={
              selectedIndex === index ? "true" : undefined
            }
            className={`rounded-full transition-all duration-300 ${selectedIndex === index
                ? "h-2.5 w-7 bg-[#0878F9]"
                : "size-2.5 bg-slate-300 hover:bg-blue-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;