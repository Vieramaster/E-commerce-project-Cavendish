/**@param {JSX.IntrinsicElements["button"]} props */
export const Shopbutton = ({ ...props }) => {
  
  const disabled = props.disabled
    ? "bg-textColor cursor-not-allowed"
    : "bg-mainColor hover:bg-hover active:opacity-90";

  return (
    <button
      className={` 
        w-full 
        font-alternative 
        h-10  
        text-white 
        mx-auto 
        rounded-md  
        duration-200 
        ease-out 
        g:w-96 
        lg:ml-0
        ${disabled}
        `}
      {...props}
    >
      {props.children}
    </button>
  );
};
