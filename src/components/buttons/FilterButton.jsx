/**@param {JSX.IntrinsicElements["button"]} props */
export const FilterButton = ({ ...props }) => {
  return (
    <button
      className="px-3 py-2 bg-esmerald hover:bg-yellow text-white hover:text-carbon rounded-md duration-200 ease-in-out"
      {...props}
    >
      {props.children}
    </button>
  );
};
