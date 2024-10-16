/**
 *  @param {JSX.IntrinsicElements["button"] & {active:boolean}} props
 * @returns {JSX.Element}
 * */
export const SearchButton = ({ active, ...props }) => {
  return (
    <button
      className={active ? "opacity-30 cursor-not-allowed" : ""}
      {...props}
    >
      {props.children}
    </button>
  );
};
/**      */
