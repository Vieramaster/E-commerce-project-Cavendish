const buttonColor = {
  primary: "bg-mainColor text-white  hover:bg-hover ",
  disabled:
    "bg-textColor text-white active:translate-x-0 active:translate-y-0  cursor-not-allowed",
};

/**
 *  @param {JSX.IntrinsicElements['button'] &
 *  {readonly color: "primary" | "disabled"}
 *  }props
 */
export const DefaultButton = ({ color = "primary", ...props }) => {
  const selectedColor = props.disabled
    ? buttonColor["disabled"]
    : buttonColor[color];

  return (
    <button
      className={` px-6 
        py-2 
        rounded-md 
        tracking-wide 
        font-alternative 
        active:translate-x-[1px]
        active:translate-y-[1px]
        ${selectedColor}
        `}
      {...props}
    >
      {props.children}
    </button>
  );
};
