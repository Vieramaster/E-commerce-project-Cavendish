/**@param {{responsive:boolean} & JSX.IntrinsicElements["button"] } props*/
export const BasicButton = ({ responsive, ...props }) => {
  return (
    <button
      className={`${
        responsive ? "size-9 lg:size-11" : "size-7 lg:size-9"
      } text-lightTextColor `}
      {...props}
    >
      {props.children}
    </button>
  );
};
