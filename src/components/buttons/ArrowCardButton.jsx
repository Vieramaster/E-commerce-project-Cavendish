/**@param {JSX.IntrinsicElements["button"] & {right:boolean, opacity:boolean}} props */
export const ArrowCardButton = ({ right, opacity, ...props }) => {
  return (
    <button
      className={`${
        right ? "right-0" : "left-0"
      } absolute fill-white z-10 top-1/3 py-10 px-1 bg-carbon opacity-10 rounded-md  duration-300 ease-in-out  ${
        opacity
          ? "hover:opacity-10 hover:cursor-not-allowed"
          : "hover:opacity-75"
      } `}
      {...props}
    >
      {props.children}
    </button>
  );
};
