
import React from "react";
import { NavLink } from "react-router-dom";

/**@returns {JSX.Element} */
export const LogoButton = () => {
  return (
    <NavLink
      to="/"
      className="text-white text-2xl font-semibold tracking-wider sm:text-3xl lg:text-4xl"
    >
      ALIGATOR
    </NavLink>
  );
};
