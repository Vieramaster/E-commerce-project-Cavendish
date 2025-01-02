import { Link } from "react-router-dom";

const buttonColor = {
  primary: "bg-mainColor   hover:bg-hover p-5 py-3  ",
  secondary: "bg-textColor hover:bg-lightTextColor p-5 py-3 ",
  banner: "border border-background  px-3 py-[0.6rem] 2xl:py-3 hover:border-yellow hover:text-yellow",
};

/**@param {{toPage: string, color: "primary" | "secondary" | "banner",children:React.ReactNode}} props */
export const DefaultButtonLink = ({ toPage, color, children }) => {
  return (
    <Link
      to={toPage}
      className={`${buttonColor[color]} text-2xl text-white rounded-md font-alternative duration-200 ease-in-out`}
    >
      {children}
    </Link>
  );
};
