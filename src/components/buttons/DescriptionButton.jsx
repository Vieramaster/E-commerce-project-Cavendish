/**@param {{borderButton:boolean, letter:boolean} &  JSX.IntrinsicElements["button"]} props */
export const DescriptionButton = ({
  borderButton = true,
  letter,
  ...props
}) => {
  return (
    <button
      className={` ${borderButton ? "border-solid" : "border-dashed"} ${
        letter ? " w-14 h-8 uppercase" : "px-4 py-1"
      } relative font-semibold rounded-sm  border border-lightCarbon after:bg-carbon duration-200 active:translate-y-[1px] active:translate-x-[1px] 
          before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-yellow before:transition-all before:duration-500 before:ease-in-out 
          before:z-[-1] before:rounded-md hover:before:left-0 overflow-hidden`}
      {...props}
    >
      {props.children}
    </button>
  );
};
