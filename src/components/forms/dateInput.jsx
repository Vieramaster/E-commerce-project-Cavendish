/**@param {{maxDate:React.FormEventHandler<HTMLInputElement>} & JSX.IntrinsicElements["input"]} props*/
export const DateInput = ({ maxDate, ...props }) => {

  return (
    <input
      className=" no-spinner size-6  focus:outline-none border-b-2 border-border "
      type="number"
      maxLength={2}
      onInput={maxDate}
      required
      {...props}
    />
  );
};
