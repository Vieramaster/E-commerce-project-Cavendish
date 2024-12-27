/**@param {{smallInput:boolean, text:boolean} & JSX.IntrinsicElements["input"]} props*/

export const CustomInput = ({ smallInput, text, ...props }) => {
  return (
    <input
      type={text ? "text" : "number"}
      required
      autoComplete="off"
      className={`${!text ? "no-spinner" : ""} ${
        smallInput ? "w-full md:w-1/2" : "w-full"
      } h-12 border border-border rounded-md  focus:outline-none pl-3`}
      {...props}
    />
  );
};
