const showClass =
  "before:absolute before:h-[1px] before:bg-lightTextColor before:-bottom-2 before:-translate-x-1/2 before:duration-200 before:ease-in-out";

/**@param {{  mainProduct:boolean, isActive:boolean} & JSX.IntrinsicElements["button"]} props*/
export const ColorButton = ({ mainProduct = false, isActive, ...props }) => {
  return (
    <button
      type="button"
      className={`${mainProduct ? ` w-16 h-6 ${showClass} ` : "w-10 h-6 "}
      ${
        isActive
          ? `${showClass} before:w-full`
          : " before:w-[0px] hover:before:w-full"
      }
       border border-lightTextColor rounded-sm relative  `}
      {...props}
    />
  );
};
