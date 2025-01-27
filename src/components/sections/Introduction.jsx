import { HomeIntroSlider } from "../sliders/HomeIntroSlider";
import { MinimalistArrow } from "../SVGs/icons/MinimalistArrow";
import { ArrowPageButton } from "../buttons/ArrowPageButton";
import { useState, useEffect, useRef } from "react";

/**@param {{arrayBanner:mainBannerHome[]}} props */
export const Introduction = ({ arrayBanner }) => {
  const [positionUl, setPositionUl] = useState(0);

  /** @type {React.MutableRefObject<ReturnType<typeof setInterval> | null>}  */
  const intervalRef = useRef(null);

  const ulDivision = 100 / arrayBanner.length;
  const maxDisplacement = -(ulDivision * arrayBanner.length - ulDivision);

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
      className="w-full h-[calc(100vh-7rem)] overflow-hidden relative"
      aria-label="banner"
    >
      <ArrowPageButton
        aria-label="previous banner button"
        positionButton="left"
        onClick={previousUl}
        disabled={positionUl === 0}
      >
        <MinimalistArrow directionArrow="left" />
      </ArrowPageButton>
      <ArrowPageButton
        aria-label="next banner button"
        positionButton="right"
        onClick={nextUl}
        disabled={positionUl <= maxDisplacement}
      >
        <MinimalistArrow directionArrow="right" />
      </ArrowPageButton>

      <ul
        className="h-full flex duration-700 ease-in-out"
        style={{
          width: `${arrayBanner.length * 100}%`,
          transform: `translateX(calc(${positionUl}%))`,
        }}
      >
        {arrayBanner.map(
          (
            {
              title,
              text,
              positionTitle,
              imageBannerDefault,
              imageBannersmall,
              toPage,
            },
            index
          ) => (
            <HomeIntroSlider
              key={index}
              {...{
                text,
                title,
                positionTitle,
                imageBannerDefault,
                imageBannersmall,
                toPage,
              }}
            />
          )
        )}
      </ul>
    </section>
  );
};
