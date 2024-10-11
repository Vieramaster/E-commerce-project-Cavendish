//@ts-check
import React from "react";
import { LeftArrowIco, RightArrowIco } from "../SVGs/icons";


const classArrows =/** @type {string}  */
  "stroke-white size-10 lg:size-16 hover:stroke-yellow duration-200 ease-in-out";

/**
 *
 * @param {{ previous: () => void, next: () => void, isDisabled: boolean }} props
 * @returns {JSX.Element}
 */
export const BannerButtons = ({ previous, next, isDisabled }) => (
  <div className="absolute w-full h-20 flex justify-between items-center bottom-0">
    <button
      onClick={previous}
      disabled={isDisabled}
      aria-label="Previous outfit"
    >
      <LeftArrowIco className={classArrows} />
    </button>
    <button onClick={next} disabled={isDisabled} aria-label="Next outfit">
      <RightArrowIco className={classArrows} />
    </button>
  </div>
);
