import { Link } from "react-router-dom";

/**@param {{toPage:string, children:React.ReactNode}} props*/
export const IntroHomeButton = ({ toPage, children }) => {
  return (
    <Link
      to={toPage}
      className="w-72 h-12 grid place-content-center bg-mainColor rounded-sm text-contrast font-alternative hover:bg-hover duration-200 ease-out active:translate-x-[1px] active:translate-y-[1px]   lg:w-[22rem] lg:h-14 2xl:w-[30rem] 2xl:h-16 xl:text-lg"
    >
      {children}
    </Link>
  );
};
