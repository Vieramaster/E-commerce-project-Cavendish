import { Link } from "react-router-dom";

export const classHoverButton = {
  primary: "bg-yellow text-lightCarbon hover:bg-esmerald hover:text-lightGrey",
  secondary: "bg-yellow hover:bg-carbon lg:bg-carbon lg:hover:bg-semiEsmerald",
};

/**
 * @param {{ readonly color?: "primary" | "secondary", toPage: string, children: React.ReactNode }} props
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
