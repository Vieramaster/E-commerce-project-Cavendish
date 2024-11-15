/**@param {{  mainProduct:boolean} & JSX.IntrinsicElements["button"]} props*/

export const ColorButton = ({ mainProduct = false, ...props }) => {
  return (
    <button
      className={`${
        mainProduct ? "w-16 h-6 " : "w-10 h-6 "
      } duration-200 ease-in-out hover:scale-105 active:translate-x-[1px] active:translate-y-[1px] button-hover  border border-lightTextColor rounded-sm`}
      {...props}
    />
  );
};
