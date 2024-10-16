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
    discountCircle: "top-24 right-20",
  },
  {
    name: "Green jacket",
    image: "src/assets/images/outfit2.webp",
    off: "-25%",
    rotationSplash: "-rotate-first",
    discountCircle: "top-20 right-14",
  },
  {
    name: "Green jacket",
    image: "src/assets/images/outfit3.webp",
    off: "-10%",
    rotationSplash: "rotate-0",
    discountCircle: "top-20 right-12",
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
    useChangeClassName(setIsDisabled, "fadeInPrevious", boxImage, 1000);
  };

  return (
    <div className="relative w-80 h-96 m-auto pt-10 lg:mb-0 lg:mr-0 lg:w-[35rem] lg:h-full 2xl:w-[45rem]">
      <div className="w-full h-full" ref={boxImage}>
        <span
          className={`${products[indexArray].rotationSplash} absolute translate-y-1/2 -translate-x-1/2 rounded-full bg-darkEsmerald w-72 h-48 lg:w-full lg:h-80`}
        />
        <img
          src={products[indexArray]?.image}
          alt={products[indexArray]?.name}
          className="mx-auto w-auto h-full z-10 relative"
        />
        <div
          className={`absolute ${products[indexArray].discountCircle} size-16 rounded-full bg-yellow z-20 grid place-content-center discountCircle`}
        >
          <p className="text-carbon font-semibold">
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
