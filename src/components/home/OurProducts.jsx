"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import productsData from "@/data/ProductsData";
import SecondHeading from "../ui/SecondHeading";
import SectionEyebrow from "../ui/SectionEyebrow";
import FilterTabs from "../ui/FilterTabs";
import PrimaryButton from "../ui/PrimaryButton";

const categories = [
  "All",
  "Automotive",
  "Industrial",
  "Molds & Dies",
  "Sheet Metal",
  "Precision Parts",
];

const OurProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    dragFree: false,
    loop: false,
    skipSnaps: false,
  });

  /*
   * Only recalculates when the selected category changes.
   */
  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return productsData;
    }

    return productsData.filter(
      ({ category }) => category === activeCategory,
    );
  }, [activeCategory]);

  /*
   * Updates previous and next arrow states.
   */
  const updateNavigation = useCallback(() => {
    if (!emblaApi) return;

    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const handlePrevious = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  /*
   * Recalculates slider dimensions after products are filtered
   * and resets the slider to its first product.
   */
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.reInit();
    emblaApi.scrollTo(0, true);
    updateNavigation();
  }, [emblaApi, activeCategory, updateNavigation]);

  /*
   * Subscribe to Embla events once.
   */
  useEffect(() => {
    if (!emblaApi) return;

    updateNavigation();

    emblaApi.on("select", updateNavigation);
    emblaApi.on("reInit", updateNavigation);

    return () => {
      emblaApi.off("select", updateNavigation);
      emblaApi.off("reInit", updateNavigation);
    };
  }, [emblaApi, updateNavigation]);

  const showNavigation = canScrollPrev || canScrollNext;
  const hasProducts = filteredProducts.length > 0;

  return (
    <section aria-labelledby="products-heading" className="overflow-hidden bg-white py-8 md:py-12 lg:py-16">
      <div className="container px-4 xl:px-0 ">
        {/* Section header */}
        <div className="text-center">
          <SectionEyebrow
            label="OUR PRODUCTS"
            className="text-[#0778db]"
          />

          <SecondHeading
            id="products-heading"
            className="my-2"
          >
            High Precision Perfect Finish
          </SecondHeading>
        </div>

        {/* Filter tabs */}
        <FilterTabs
          buttonsData={categories}
          activeButton={activeCategory}
          onButtonChange={handleCategoryChange}
          className="mt-6"
        />

        {/* Product slider */}
        <div className="relative my-6">
          {hasProducts ? (
            <>
              <div
                ref={emblaRef}
                className="overflow-hidden"
                aria-roledescription="carousel"
                aria-label={`${activeCategory} products`}
              >
                <ul className="-ml-4 flex">
                  {filteredProducts.map((product) => (
                    <li
                      key={product.id}
                      className="min-w-0 shrink-0 grow-0 basis-[85%] pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/6"
                    >
                      <article className="group">
                        <div className="relative aspect-[3/2.1] overflow-hidden rounded-lg bg-slate-100">
                          <Image
                            src={product.image}
                            alt={product.alt || product.title}
                            fill
                            sizes=" (max-width: 639px) 85vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 17v "
                            className="object-cover group-hover:scale-[1.10] transition-all duration-500"
                          />
                        </div>

                        <h3 className="mt-3 text-center font-inter text-[16px] font-semibold text-[#444444]">
                          {product.title}
                        </h3>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation arrows */}
              {showNavigation && (
                <>
                  <SliderButton
                    direction="previous"
                    disabled={!canScrollPrev}
                    onClick={handlePrevious}
                  />

                  <SliderButton
                    direction="next"
                    disabled={!canScrollNext}
                    onClick={handleNext}
                  />
                </>
              )}
            </>
          ) : (
            <p
              role="status"
              className="py-16 text-center text-sm text-slate-500"
            >
              No products found in this category.
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <PrimaryButton btnText={"View All Products"} varient={"primary"}/>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;

/*
 * Reusable internal navigation button.
 */
const SliderButton = ({
  direction,
  disabled,
  onClick,
}) => {
  const isPrevious = direction === "previous";
  const Icon = isPrevious ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={
        isPrevious
          ? "View previous products"
          : "View next products"
      }
      className={`
        absolute top-1/3 z-10 inline-flex size-10 -translate-y-1/1.2
        items-center justify-center rounded-full border border-blue-200
        bg-white text-blue-600 shadow-md transition-colors
        hover:border-blue-600 hover:bg-blue-600 hover:text-white
        disabled:pointer-events-none disabled:opacity-30
        ${isPrevious ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"}
      `}
    >
      <Icon
        aria-hidden="true"
        className="size-5"
        strokeWidth={2}
      />
    </button>
  );
};