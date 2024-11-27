import { Link } from "react-router-dom";

const buttonColor = {
  primary: "bg-mainColor   hover:bg-hover ",
  secondary: "bg-textColor hover:bg-lightTextColor",
};

/**@param {{toPage: string, color: "primary" | "secondary",children:React.ReactNode}} props */
export const DefaultButtonLink = ({ toPage, color, children }) => {
  return (
    <Link
      to={toPage}
      className={`${buttonColor[color]} text-2xl text-white p-5 py-3 rounded-md font-alternative duration-200 ease-in-out`}
    >
      {children}
    </Link>
  );
};
