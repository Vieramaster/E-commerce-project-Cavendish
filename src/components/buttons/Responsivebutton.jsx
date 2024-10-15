import React from "react";

/**
 * @param {& JSX.IntrinsicElements["button"]} props
 * @returns {JSX.Element}
 */
export const ResponsiveButton = ({ ...props }) => {
  return (
    <button className="size-10 lg:size-14" {...props}>
      {props.children}
    </button>
  );
};
