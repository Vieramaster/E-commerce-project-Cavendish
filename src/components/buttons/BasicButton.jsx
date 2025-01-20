/** 
 * @param {{ responsive: boolean, relative: boolean } & JSX.IntrinsicElements["button"]} props 
 */
export const BasicButton = ({ responsive, relative, ...props }) => {
  const sizeClass = responsive ? "size-9 lg:size-11" : "size-7 lg:size-9";
  const relativeClass = relative ? "relative" : "";

  return (
    <button className={`${sizeClass} ${relativeClass} text-lightTextColor`} {...props}>
      {props.children}
    </button>
  );
};
