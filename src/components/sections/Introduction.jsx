import { HomeIntroSlider } from "../sliders/HomeIntroSlider";
import { MinimalistArrow } from "../SVGs/icons/MinimalistArrow";
import { ArrowPageButton } from "../buttons/ArrowPageButton";
import { useState, useEffect, useRef } from "react";
import { MainBannerHome } from "../data/MainBannerHome";

export const Introduction = () => {
  const [positionUl, setPositionUl] = useState(0);

  /** @type {React.MutableRefObject<ReturnType<typeof setInterval> | null>}  */
  const intervalRef = useRef(null);

  const ulDivision = 100 / MainBannerHome.length;
  const maxDisplacement = -(ulDivision * MainBannerHome.length - ulDivision);

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
    <section
      className="w-full h-screen overflow-hidden relative"
      aria-label="banner"
    >
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
        className="h-full flex duration-700 ease-in-out"
        style={{
          width: `${MainBannerHome.length * 100}%`,
          transform: `translateX(calc(${positionUl}%))`,
        }}
      >
        {MainBannerHome.map(
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
