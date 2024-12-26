/**@param {{smallInput:boolean} & JSX.IntrinsicElements["input"]} props*/

export const CustomInput = ({ smallInput, ...props }) => {
  return (
    <input
      type="text"
      required
      autoComplete="off"
      className={`${
        smallInput ? "w-full md:w-1/2" : "w-full"
      } h-12 border border-border rounded-md  focus:outline-none pl-3`}
      {...props}
    />
  );
};
