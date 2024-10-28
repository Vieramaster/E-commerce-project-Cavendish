/**
 * @param {JSX.IntrinsicElements["button"]} props
 * */
export const ShoppingNavButton = ({ ...props }) => {
  return (
    <button
      className="flex gap-2 p-3 rounded-full items-center justify-center bg-yellow "
      aria-label="show cart"
      {...props}
    >
      {props.children}
    </button>
  );
};


