import { Link } from "react-router-dom";

const colorLogo = {
  main: "text-mainColor",
  white: "text-white",
};

/**@param {{color: "main" | "white"}} props */
export const PageLogo = ({ color }) => {
  return (
    <Link
      to="/"
      className={`${colorLogo[color]} text-2xl font-extrabold tracking-wider sm:text-4xl lg:text-5xl`}
    >
      Cavendish
    </Link>
  );
};
