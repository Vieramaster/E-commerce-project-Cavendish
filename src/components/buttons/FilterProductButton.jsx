/**@param {{isAvariable:boolean, letter:boolean, isActive:boolean} &  JSX.IntrinsicElements["button"]} props */
export const FilterProductButton = ({
  isAvariable = true,
  letter,
  isActive,
  ...props
}) => {
  return (
    <button
      type="button"
      className={` ${isAvariable ? "border-solid" : "border-dashed"} ${
        letter ? " w-14 h-8 uppercase" : "px-4 py-1"
      } 
      ${isActive ? "bg-textColor text-white" : " text-textColor"}
      border  font-alternative rounded-md border-textColor hover:bg-textColor hover:text-white duration-200 ease-in`}
      {...props}
    >
      {props.children}
    </button>
  );
};
