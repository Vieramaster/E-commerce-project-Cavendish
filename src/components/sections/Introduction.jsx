import { HomeIntroSlider } from "../sliders/HomeIntroSlider";
import { MinimalistArrow } from "../SVGs/icons/MinimalistArrow";
import { ArrowPageButton } from "../buttons/ArrowPageButton";
import { useState, useEffect, useRef } from "react";

/** @type {{title: string, text: string, positionTitle: "left" | "right" | "center", backgroundImage: string, toPage: string}[]} */
const componentList = [
  {
    title: "Sensations ",
    text: "New summer collection 2025",
    positionTitle: "left",
    backgroundImage: "/images/main/background2.webp",
    toPage: "/shop/new_arrivals",
  },
  {
    title: "Luxury",
    text: "Best jackets quality",
    positionTitle: "right",
    backgroundImage: "/images/main/background1.webp",
    toPage: "/shop/jackets_and_coats",
  },
  {
    title: "Premium ",
    text: "Shirts with the best quality",
    positionTitle: "center",
    backgroundImage: "/images/main/background3.webp",
    toPage: "/shop/shirts",
  },
];

export const Introduction = () => {
  const [positionUl, setPositionUl] = useState(0);

  /** @type {React.MutableRefObject<ReturnType<typeof setInterval> | null>}  */
  const intervalRef = useRef(null);

  const ulDivision = 100 / componentList.length;
  const maxDisplacement = -(ulDivision * componentList.length - ulDivision);

  const previousUl = () => {
    if (positionUl < 0) setPositionUl((prev) => prev + ulDivision);
    resetTimer();
  };

  const nextUl = () => {
    if (positionUl > maxDisplacement)
      setPositionUl((prev) => prev - ulDivision);
    resetTimer();
  };

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      positionUl > maxDisplacement
        ? setPositionUl((prev) => prev - ulDivision)
        : setPositionUl(0);
    }, 15000);
  };

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoScroll();
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [positionUl]);

  return (
    <section className="w-full h-screen overflow-hidden relative">
      <ArrowPageButton
        positionButton="left"
        onClick={previousUl}
        disabled={positionUl === 0}
      >
        <MinimalistArrow directionArrow="left" />
      </ArrowPageButton>
      <ArrowPageButton
        positionButton="right"
        onClick={nextUl}
        disabled={positionUl <= maxDisplacement}
      >
        <MinimalistArrow directionArrow="right" />
      </ArrowPageButton>

      <ul
        className="pt-28 h-full flex duration-700 ease-in-out"
        style={{
          width: `${componentList.length * 100}%`,
          transform: `translateX(calc(${positionUl}%))`,
        }}
      >
        {componentList.map(
          ({ title, text, positionTitle, backgroundImage, toPage }, index) => (
            <HomeIntroSlider
              key={index}
              {...{ text, title, positionTitle, backgroundImage, toPage }}
            />
          )
        )}
      </ul>
    </section>
  );
};
