/**@param {{borderButton:boolean,selected:boolean} &  JSX.IntrinsicElements["button"]} props */
export const ShopSizeButton = ({ borderButton, selected, ...props }) => {
  return (
    <button
      className={`${
        borderButton
          ? "border-solid active:translate-y-[1px] active:translate-x-[1px] hover:border-lineGrey"
          : "border-dashed"
      } ${
        selected ? "border-textColor" : "border-border"
      } w-16 h-10 uppercase border rounded-sm shadow-md  duration-100 ease-in font-medium text-textColor `}
      {...props}
    >
      {props.children}
    </button>
  );
};
