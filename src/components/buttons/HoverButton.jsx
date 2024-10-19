import { Link } from "react-router-dom";

/**
 * @typedef {object} Styles
 * @property {string} primary
 * @property {string} secondary
 */

/**
 * @type {Styles}
 */
export const classHoverButton = {
  primary: "bg-yellow text-lightCarbon hover:bg-esmerald hover:text-lightGrey",
  secondary: "bg-yellow hover:bg-carbon lg:bg-carbon lg:hover:bg-semiEsmerald",
};

/**
 * @param {{ readonly color?: keyof Styles, toPage: string, children:string | JSX.Element }} props
 * @returns {JSX.Element}
 */
export const HoverButton = ({ color = "primary", toPage, children }) => {
  return (
    <Link
      className={`font-medium p-3 rounded-lg duration-200 ease-in-out group md:text-xl lg:text-2xl 2xl:text-3xl ${classHoverButton[color]}`}
      to={toPage}
    >
      {children}
    </Link>
  );
};
