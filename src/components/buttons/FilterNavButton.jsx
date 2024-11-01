import { classFilter } from "../ShopFilter";

/**
 * @param {JSX.IntrinsicElements["button"]} props
 */
export const FilterNavButton = ({ ...props }) => {
  return (
    <button
      className={`${classFilter} w-1/2 lg:w-2/5`}
      aria-label="Filter"
      {...props}
    >
      {props.children}
    </button>
  );
};
