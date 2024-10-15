import React from "react";
/**
 * @param {{className:string}} props
 * @returns {JSX.Element}
 */
export const YoutubeIco = ({ className }) => {
  return (
    <svg
      className={`${className} m-auto`}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
      <path d="M10 9l5 3l-5 3z" />
    </svg>
  );
};