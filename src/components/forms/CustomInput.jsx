/**
 * @param {{
 * smallInput: boolean,
 * text: boolean
 * }
 * &
 * JSX.IntrinsicElements["input"]} props
 */

export const CustomInput = ({ smallInput, text, ...props }) => {

  const changeType = text ? "text" : "number";
  const spinner = !text && "no-spinner";
  const size = smallInput ? "w-full md:w-1/2" : "w-full";
  
  return (
    <input
      type={changeType}
      required
      autoComplete="off"
      className={`
           h-12 
           border 
           border-border 
           rounded-md  
           focus:outline-none pl-3
           ${spinner} 
           ${size}
           `}
      {...props}
    />
  );
};
