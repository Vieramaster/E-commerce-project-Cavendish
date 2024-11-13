import { NavLink } from "react-router-dom";

/**@returns {JSX.Element} */
export const LogoButton = () => {
  return (
    <NavLink
      to="/"
      className="text-mainColor text-3xl font-extrabold tracking-wider sm:text-4xl lg:text-5xl"
    >
      Cavendish
    </NavLink>
  );
};
