/**@param {{hex:string, name:string, mainProduct:boolean} & JSX.IntrinsicElements["button"]} props*/

export const ColorButton = ({ hex, name, mainProduct = false, ...props }) => {
  return (
    <button
      className={`${
        mainProduct
          ? "w-16 h-6 border border-customGrey rounded-md shadow-md"
          : "w-10 h-6 border border-customGrey rounded-sm"
      } duration-200 ease-in-out hover:scale-105 active:translate-x-[1px] active:translate-y-[1px] button-hover`}
      style={{ backgroundColor: `${hex}` }}
      aria-label={`${name} color button`}
      title={name}
      {...props}
    />
  );
};
