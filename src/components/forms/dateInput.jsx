/**@param {JSX.IntrinsicElements["input"]} props*/
export const DateInput = ({...props }) => {

  return (
    <input
      className=" no-spinner size-6  focus:outline-none border-b-2 border-border "
      type="number"
      required
      {...props}
    />
  );
};
