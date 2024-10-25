/**@param {{min:boolean} & JSX.IntrinsicElements["button"]} props */
export const FilterResponsiveButton = ({ min, ...props }) => {
  return (
    <button
      className={`${
        min ? "w-1/5" : "w-2/5 "
      }h-full border border-lineGrey flex gap-2 justify-center items-center`}
      {...props}
    >
      {props.children}
    </button>
  );
};
