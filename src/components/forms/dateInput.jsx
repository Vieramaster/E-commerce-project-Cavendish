/**@param {JSX.IntrinsicElements["input"]} props*/
export const DateInput = ({ ...props }) => {
  return (
    <input
      className="no-spinner 
                 size-7  
                 focus:outline-none 
                 border-b-2 
               border-border 
                  text-center
                 "
      type="number"
      required
      {...props}
    />
  );
};
