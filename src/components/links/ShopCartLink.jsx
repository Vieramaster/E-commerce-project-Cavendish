import { Link } from "react-router-dom";

/** @param {import("react-router-dom").LinkProps & { disabled?: boolean }} props */
export const ShopCartLink = ({ disabled, ...props }) => {
  return (
    <Link
      {...props}
      className={`${
        disabled
          ? "bg-textColor cursor-not-allowed"
          : "bg-mainColor hover:bg-hover"
      }  duration-200 ease-in font-alternative text-white w-full h-14 shrink-0 grid place-content-center text-xl`}
      aria-disabled={disabled}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
        } else {
          props.onClick?.(e);
        }
      }}
    >
      {props.children}
    </Link>
  );
};
