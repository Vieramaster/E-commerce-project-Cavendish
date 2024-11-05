/**@param {{hex:string, name:string} & JSX.IntrinsicElements["button"]} props*/
export const ColorButton = ({ hex, name, ...props }) => {
  return (
    <button
      className="w-10 h-6 border border-lightCarbon rounded-sm duration-200 ease-in-out hover:scale-105 active:translate-x-[1px] active:translate-y-[1px] button-hover"
      style={{ backgroundColor: `${hex}` }}
      aria-label={`${name} color button`}
      title={name}
      {...props}
    />
  );
};
