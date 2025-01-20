/**
 * @param {{
 * isAvariable:boolean,
 * letter:boolean,
 * isActive:boolean}
 * &
 * JSX.IntrinsicElements["button"]
 * } props
 */
export const FilterProductButton = ({
  isAvariable = true,
  letter,
  isActive,
  ...props
}) => {
  const borderStyle = isAvariable ? "border-solid" : "border-dashed";
  const buttonSize = letter ? "w-14 h-8 uppercase" : "px-4 py-1";
  const buttonState = isActive ? "bg-textColor text-white" : "text-textColor";

  return (
    <button
      className={`
       border
       font-alternative
       rounded-md
       border-textColor
       hover:bg-textColor
       hover:text-white
       duration-200
       ease-in
       ${borderStyle} 
       ${buttonSize}  
       ${buttonState} 
     `}
      {...props}
    >
      {props.children}
    </button>
  );
};
