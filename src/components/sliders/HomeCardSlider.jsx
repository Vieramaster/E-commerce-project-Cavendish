//@ts-check
import React from "react";
import { useState, useRef } from "react";
import { useChangeClassName } from "../hooks/useChangeClass";
import { CarrouselArrows } from "../buttons/CarrouselArrows";

/**@type {Array<{name:string, image:string, price:string, off:string, rotation:string}>} */
const products = [
  {
    name: "Green jacket",
    image: "src/assets/images/outfit1.webp",
    price: "$299",
    off: "-40%",
    rotation: "rotate-12",
  },
  {
    name: "Green jacket",
    image: "src/assets/images/outfit2.webp",
    price: "$249",
    off: "-25%",
    rotation: "-rotate-12",
  },
  {
    name: "Green jacket",
    image: "src/assets/images/outfit3.webp",
    price: "$399",
    off: "-10%",
    rotation: "rotate-12",
  },
  {
    name: "Green jacket",
    image: "src/assets/images/outfit4.webp",
    price: "$399",
    off: "-10%",
    rotation: "-rotate-12",
  },
];

/** @returns {JSX.Element} */
export const HomeCardSlider = () => {
  const [indexArray, setIndexArray] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const frontImage = useRef(null);

  const next = () => {
    if (indexArray === products.length - 1) {
      setIndexArray(0);
    } else {
      setIndexArray(indexArray + 1);
    }
    useChangeClassName(setIsDisabled, "fadeInNext", frontImage, 1000);
  };

  const previous = () => {
    if (indexArray === 0) {
      setIndexArray(products.length - 1);
    } else {
      setIndexArray(indexArray - 1);
    }
    useChangeClassName(setIsDisabled, "fadeInPrevious", frontImage, 1000);
  };

  return (
    <div className="  relative h-auto w-80 m-auto pt-10 lg:mb-0 lg:mr-0 lg:w-auto bg-red-300">
      <span
        className={`${products[indexArray].rotation} absolute  w-full h-52 translate-y-1/2 -translate-x-1/2 rounded-full bg-darkEsmerald z-0`}
      />
      <img
        ref={frontImage}
        src={products[indexArray]?.image}
        alt={products[indexArray]?.name}
        className=" mx-auto w-2/3 h-auto z-10 relative"
      />
      <div>
        <CarrouselArrows {...{ next, previous, isDisabled }} />
      </div>
    </div>
  );
};
