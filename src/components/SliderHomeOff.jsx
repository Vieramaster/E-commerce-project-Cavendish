import { useState, useRef } from "react";
import IcoCircleArrowLeft from "./SVGs/icons/IcoCircleArrowLeft";
import IcoCircleArrowRight from "./SVGs/icons/IcoCircleArrowRight";

const classArrows =
  "w-12 h-12 lg:w-16 lg:h-16 hover:stroke-yellow duration-200 ease-in-out";

const products = [
  {
    name: "Green jacket",
    img: "src/assets/images/home/outfit1.webp",
    price: "$299",
    off: "-40%",
    rotation: "rotate-12",
  },
  {
    name: "Green jacket",
    img: "src/assets/images/home/outfit2.webp",
    price: "$249",
    off: "-25%",
    rotation: "-rotate-12",
  },
  {
    name: "Green jacket",
    img: "src/assets/images/home/outfit3.webp",
    price: "$399",
    off: "-10%",
    rotation: "rotate-12",
  },
  {
    name: "Green jacket",
    img: "src/assets/images/home/outfit3.webp",
    price: "$399",
    off: "-10%",
    rotation: "-rotate-12",
  },
];

export default function SliderHomeOff() {
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

  const previus = () => {
    if (indexArray === 0) {
      setIndexArray(products.length - 1);
    } else {
      setIndexArray(indexArray - 1);
    }
    timeButton("fadeInPrevius");
  };

  return (
    <div className="w-full h-[30rem] flex justify-center lg:h-full lg:items-end relative">
      <div
        className={`absolute  min-w-[20rem] h-52 translate-y-2/3 rounded-full bg-darkEsmerald lg:w-[32rem] lg:h-80 lg:-translate-y-1/4 xl:-translate-y-2/4 xl:w-[40rem] xl:h-96 ${products[indexArray].rotation}`}
      ></div>

      <div className="w-96 h-full relative flex items-end lg:h-[40rem] lg:w-[30rem] 2xl:h-[48rem] 2xl:w-[40rem]">
        <img
          ref={frontImage}
          src={products[indexArray].img}
          alt={products[indexArray].name}
          className="mx-auto w-auto h-full"
        />
        <div className="absolute w-24 h-auto top-10 right-12 flex flex-col gap-1 lg:w-32">
          <p className="font-bold text-end text-3xl lg:text-4xl">
            {products[indexArray].price}
          </p>
          <div className="bg-yellow w-20 h-20 rounded-full flex flex-col justify-center items-center text-carbon text-sm lg:w-28 lg:h-28">
            <p className="font-bold text-lg lg:text-2xl">
              {products[indexArray].off}
            </p>
            <p className="font-bold text-lg lg:text-2xl">OFF</p>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-20 flex justify-between items-center px-2 bottom-4">
        <button onClick={previus} disabled={isDisabled}>
          <IcoCircleArrowLeft className={classArrows} />
        </button>
        <button onClick={next} disabled={isDisabled}>
          <IcoCircleArrowRight className={classArrows} />
        </button>
      </div>
    </div>
  );
}
