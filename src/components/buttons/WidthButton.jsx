export const buttonsColor = {
  mainColor: "bg-mainColor hover:bg-hover ",
  lightColor: "bg-lightColor hover:bg-hover ",
};

/**@param {{ color:"mainColor" | "lightColor"} & JSX.IntrinsicElements["button"]} props */

export const WidthButton = ({ color, ...props }) => {
  return (
    <button
      className={`${buttonsColor[color]}  w-full bg-mainColor hover:bg-hover duration-200 ease-in-out h-14 font-alternative font-semibold text-white rounded-md `}
      {...props}
    >
      {props.children}
    </button>
  );
};
