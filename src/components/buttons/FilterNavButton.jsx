/**
 * @param {JSX.IntrinsicElements["button"]} props*/

export const FilterNavButton = ({ ...props }) => {
  return (
    <button
      className="
         h-full 
        border
        border-lineGrey 
        flex 
        gap-5 
        items-center 
        justify-center
        border-b border-r 
        cursor-pointer
        relative
        w-1/2 
        lg:w-2/5
        "
      aria-label="Filter"
      {...props}
    >
      {props.children}
    </button>
  );
};
