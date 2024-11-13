const position = {
  left: "rounded-e-lg",
  right: "right-0 rounded-l-lg",
};

/**@param {{positionButton : "left"|"right", } & JSX.IntrinsicElements["button"]} props */
export const ArrowPageButton = ({ positionButton, disabled, ...props }) => {
  return (
    <button
      className={`${position[positionButton]} ${
        disabled ? "cursor-not-allowed" : "hover:opacity-40 "
      } absolute z-10 w-7 h-32 bg-black opacity-20 top-1/2  p-2 lg:w-10 lg:h-40  duration-200 ease-out fill-white`}
      {...props}
    >
      {props.children}
    </button>
  );
};
