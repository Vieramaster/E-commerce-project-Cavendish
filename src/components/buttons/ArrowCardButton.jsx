/** @param {JSX.IntrinsicElements["button"] & {right:boolean, opacity:boolean, maxSize:boolean}} props */
export const ArrowCardButton = ({ right, opacity, maxSize, ...props }) => {
  return (
    <button
      className={`${right ? "right-0" : "left-0"} 
      ${opacity ? "hover:opacity-10 hover:cursor-not-allowed" : "hover:opacity-50"}
      ${maxSize ? "size-20" : "size-14"}
      top-1/2 transform -translate-y-1/2
      absolute fill-textColor z-10 py-2 px-1 opacity-10 rounded-md duration-300 ease-in-out`}
      {...props}
    >
      {props.children}
    </button>
  );
};
