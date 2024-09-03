import React from "react";

export default function IcoShoppingCart({className}) {
  return (
    <svg
      className={`${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M4 19a2 2 0 104 0 2 2 0 10-4 0M15 19a2 2 0 104 0 2 2 0 10-4 0" />
      <path d="M17 17H6V3H4" />
      <path d="M6 5l14 1-1 7H6" />
    </svg>
  );
}
