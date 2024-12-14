/**@param {{responsive:boolean, relative: boolean} & JSX.IntrinsicElements["button"] } props*/
export const BasicButton = ({ responsive, relative, ...props }) => {
  return (
    <button
      className={`${responsive ? "size-9 lg:size-11" : "size-7 lg:size-9"} ${
        relative ? "relative" : ""
      } text-lightTextColor `}
      {...props}
    >
      {props.children}
    </button>
  );
};
