/**@param {JSX.IntrinsicElements["button"]} props */
export const QuantityClothesButton = ({ ...props }) => {
  return (
    <button
      className="
                size-10  
                border 
                border-border 
                rounded-sm 
                shadow-md 
                text-2xl 
                "
      {...props}
    >
      {props.children}
    </button>
  );
};
