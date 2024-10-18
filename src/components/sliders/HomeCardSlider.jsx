import { useState, useRef } from "react";
import { useChangeClassName } from "../hooks/useChangeClassName";
import { CarrouselArrows } from "../buttons/CarrouselArrows";
import { SliderPoint } from "../SliderPoint";

/**
 * @type {Array<{name: string, image: string, discountCircle: string, off: string, rotationSplash: string}>}
 */
const products = [
  {
    name: "Green jacket",
    image: "src/assets/images/outfit1.webp",
    off: "-40%",
    rotationSplash: "rotate-first",
    discountCircle: "top-24 right-20 lg:top-36 lg:right-32 2xl:top-40 2xl:right-48",
  },
  {
    name: "Green jacket",
    image: "src/assets/images/outfit2.webp",
    off: "-25%",
    rotationSplash: "-rotate-first",
    discountCircle: "top-20 right-14 lg:top-28 lg:right-28 2xl:top-32 2xl:right-44",
  },
  {
    name: "Green jacket",
    image: "src/assets/images/outfit3.webp",
    off: "-10%",
    rotationSplash: "rotate-0",
    discountCircle: "top-20 right-12 lg:top-32 lg:right-24 2xl:top-40 2xl:right-36",
  },
];

/** @returns {JSX.Element} */
export const HomeCardSlider = () => {
  const [indexArray, setIndexArray] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const boxImage = useRef(null);

  const next = () => {
    if (indexArray === products.length - 1) {
      setIndexArray(0);
    } else {
      setIndexArray(indexArray + 1);
    }
    useChangeClassName(setIsDisabled, "fadeInNext", boxImage, 1000);
  };

  const previous = () => {
    if (indexArray === 0) {
      setIndexArray(products.length - 1);
    } else {
      setIndexArray(indexArray - 1);
    }
    useChangeClassName(setIsDisabled, "fadeInNext", boxImage, 1000);
  };

  return (
    <div className="relative w-80 h-96 m-auto pt-10 lg:mb-0 lg:mr-0 lg:w-[35rem] lg:h-full 2xl:w-[45rem]">
      <div className="w-full h-full" ref={boxImage}>
        <span className={`${products[indexArray].rotationSplash} absolute translate-y-1/2 -translate-x-1/2 rounded-full bg-darkEsmerald w-72 h-48 lg:w-full lg:h-80 2xl:translate-y-2/3 2xl:w-5/6`} />
        <img
          src={products[indexArray]?.image}
          alt={products[indexArray]?.name}
          className="mx-auto w-auto h-full z-10 relative"
        />
        <div
          className={`absolute ${products[indexArray].discountCircle} size-16 rounded-full bg-yellow z-20 grid place-content-center lg:size-24 2xl:size-28 discountCircle no-transition`}
        >
          <p className="text-carbon font-semibold lg:text-2xl 2xl:text-3xl">
            {products[indexArray].off} OFF
          </p>
        </div>
      </div>
      <CarrouselArrows {...{ next, previous, isDisabled }} />
      <div className="absolute top-1/2 right-0 flex flex-col gap-4">
        <SliderPoint {...{ indexArray }} index={0} />
        <SliderPoint {...{ indexArray }} index={1} />
        <SliderPoint {...{ indexArray }} index={2} />
      </div>
    </div>
  );
};
