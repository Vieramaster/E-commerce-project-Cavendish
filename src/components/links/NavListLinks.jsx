import { Link } from "react-router-dom";

/**@param {{toPage: string, children: React.ReactNode, title: boolean}} props*/
export const NavListLinks = ({ toPage, title = false, children }) => {
  return (
    <Link
      to={toPage}
      className={`${
        title ? "font-semibold text-3xl lg:text-4xl " : ""
      } relative before:w-0 before:h-[2px] before:bg-lightTextColor before:absolute before:bottom-0 before:left-0 before:hover:w-full before:duration-500 before:ease-in-out font-alternative font-normal text-links`}
    >
      {children}
    </Link>
  );
};
