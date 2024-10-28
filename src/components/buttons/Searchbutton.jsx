/**
 *  @param {JSX.IntrinsicElements["button"] & {active:boolean}} props
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
