import { useState, useRef } from "react";
import { BannerButtons } from "../buttons";

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

const HomeCardSlider = () => {
  const [indexArray, setIndexArray] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const frontImage = useRef(null);

  const timeButton = (className) => {
    setIsDisabled(true);
    if (frontImage.current) {
      frontImage.current.classList.add(className);
    }

    setTimeout(() => {
      setIsDisabled(false);
      if (frontImage.current) {
        frontImage.current.classList.remove(className);
      }
    }, 1000);
  };

  const next = () => {
    if (indexArray === products.length - 1) {
      setIndexArray(0);
    } else {
      setIndexArray(indexArray + 1);
    }
    timeButton("fadeInNext");
  };

  const previous = () => {
    if (indexArray === 0) {
      setIndexArray(products.length - 1);
    } else {
      setIndexArray(indexArray - 1);
    }
    timeButton("fadeInPrevious");
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
        <BannerButtons {...{ next, previous, isDisabled }} />
      </div>
    </div>
  );
};
export default HomeCardSlider;
/*<div className="bg-darkEsmerald h-40 w-full rounded-full rotate-first" />*/
