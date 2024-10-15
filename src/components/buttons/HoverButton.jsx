//@ts-check
import React from "react";

/**
 * @typedef {object} ButtonClass
 * @property {string} primary
 * @property {string} secondary
 */

/** 
 * @type {ButtonClass} 
 */
export const classHoverButton = {
  primary: "bg-yellow hover:bg-esmerald",
  secondary: "bg-yellow hover:bg-carbon lg:bg-carbon lg:hover:bg-semiEsmerald",
};

/**
 * @param {{readonly color?: keyof ButtonClass} & JSX.IntrinsicElements['button']} props 
 * @returns {JSX.Element}
 */
export const HoverButton = ({ color = "primary", ...props }) => {
  return (
    <button
      className={`p-3 rounded-lg duration-200 ease-in-out group ${classHoverButton[color]}`}
      {...props}
    />
  );
};
